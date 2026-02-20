from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
# Use os.getenv to avoid crashing if local .env is missing
mongo_url = os.getenv('MONGO_URL')
db_name = os.getenv('DB_NAME', 'portfolio_db')

# Initialize DB client only if URL exists (prevents build crashes)
if mongo_url:
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
else:
    client = None
    db = None

# Create the main app
app = FastAPI()

# --- CORS CONFIGURATION (MUST BE HERE AT THE TOP) ---
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://bijo-portfolio.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# --- Models ---
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    title: str
    description: str
    tags: List[str]
    image: str
    color: str = "portfolio-mid-purple"
    year: str
    link: str
    featured: bool = True

class Experience(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    company: str
    role: str
    period: str
    description: List[str]

class Skill(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    category: str
    items: List[str]

class Education(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    institution: str
    degree: str
    year: str

class Profile(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    name: str
    title: str
    bio: str
    location: str = "India"
    email: str = "bijo@example.com"
    socials: dict

class Message(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    name: str
    email: EmailStr
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

# Projects
@api_router.get("/projects", response_model=List[Project])
async def get_projects():
    if db is None: return []
    projects = await db.projects.find().to_list(1000)
    return projects

# Experience
@api_router.get("/experience", response_model=List[Experience])
async def get_experience():
    if db is None: return []
    experience = await db.experience.find().to_list(1000)
    return experience

# Skills
@api_router.get("/skills", response_model=List[Skill])
async def get_skills():
    if db is None: return []
    skills = await db.skills.find().to_list(1000)
    return skills

# Education
@api_router.get("/education", response_model=List[Education])
async def get_education():
    if db is None: return []
    education = await db.education.find().to_list(1000)
    return education

# Profile
@api_router.get("/profile", response_model=Profile)
async def get_profile():
    if db is None: return Profile(name="Error", title="No DB", bio="", socials={})
    profile = await db.profile.find_one()
    if profile:
        return Profile(**profile)
    return Profile(name="Default", title="User", bio="", socials={})

# Contact
@api_router.post("/contact", response_model=Message)
async def create_message(msg: Message):
    if db is None: raise HTTPException(status_code=500, detail="Database not connected")
    new_msg = msg.dict(by_alias=True)
    await db.messages.insert_one(new_msg)
    return msg

# Status
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    if db is None: raise HTTPException(status_code=500, detail="Database not connected")
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    if db is None: return []
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# --- App Config ---
app.include_router(api_router)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# --- Startup: Seed Data ---
@app.on_event("startup")
async def seed_data():
    if db is None:
        logger.warning("Database not connected, skipping seed")
        return
        
    # 1. Seed Profile
    if await db.profile.count_documents({}) == 0:
        await db.profile.insert_one({
            "_id": str(uuid.uuid4()),
            "name": "Bijo K Binoy",
            "title": "Full Stack Developer",
            "bio": "Innovative Full Stack Developer and BCA student with a focus on building AI-driven web applications. Proficient in the MERN stack and Python, with hands-on experience in computer vision (OpenCV) and microservices deployment.",
            "location": "India",
            "email": "contact@bijokbinoy.dev",
            "socials": {
                "github": "https://github.com/Bijo2005-cell",
                "linkedin": "https://linkedin.com",
                "twitter": "https://twitter.com"
            }
        })
        logger.info("Seeded Profile")

    # 2. Seed Projects (Using Bijo's real projects)
    if await db.projects.count_documents({}) == 0:
        seed_projects = [
            {
                "_id": str(uuid.uuid4()),
                "title": "Sahayatri",
                "description": "AI-Powered Heritage Preservation & Tourist Guide using MERN and Python AI service. Features automated monument crack detection and real-time voice-enabled tourist guide.",
                "tags": ["React", "Node.js", "Python", "OpenCV", "Gemini AI"],
                "image": "https://images.unsplash.com/photo-1599582324717-58d348006b97?auto=format&fit=crop&q=80&w=2070",
                "color": "portfolio-mid-purple",
                "year": "2024",
                "link": "https://sahayatri-beryl.vercel.app",
                "featured": True
            },
            {
                "_id": str(uuid.uuid4()),
                "title": "Food Delivery Platform",
                "description": "End-to-end delivery platform with real-time cart management and secure authentication.",
                "tags": ["MongoDB", "Express", "React", "Node.js"],
                "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2070",
                "color": "portfolio-mid-orange",
                "year": "2023",
                "link": "https://github.com/Bijo2005-cell/FOOD_DELIVERY.git",
                "featured": True
            },
            {
                "_id": str(uuid.uuid4()),
                "title": "Movie Booking Platform",
                "description": "Robust booking engine with multi-user roles, real-time show scheduling, and secure seat management.",
                "tags": ["Python", "Django", "PostgreSQL"],
                "image": "https://images.unsplash.com/photo-1489599849909-5941c752139d?auto=format&fit=crop&q=80&w=2070",
                "color": "portfolio-dark-blue",
                "year": "2023",
                "link": "https://github.com/Bijo2005-cell/Movie-Booking-Platform.git",
                "featured": True
            },
            {
                "_id": str(uuid.uuid4()),
                "title": "Royal Star Resort",
                "description": "Dynamic resort website with AI chatbot for 24/7 support and real-time booking.",
                "tags": ["PHP", "MySQL", "AI Chatbot", "Bootstrap"],
                "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070",
                "color": "portfolio-mid-green",
                "year": "2023",
                "link": "https://github.com/Bijo2005-cell/Royal-Star-Resort.git",
                "featured": True
            }
        ]
        await db.projects.insert_many(seed_projects)
        logger.info("Seeded Projects")

    # 3. Seed Experience
    if await db.experience.count_documents({}) == 0:
        seed_experience = [
            {
                "_id": str(uuid.uuid4()),
                "company": "Freelancer",
                "role": "Full Stack Developer",
                "period": "2025 - Present",
                "description": [
                    "Developed and deployed scalable applications using MERN, Django, and FastAPI.",
                    "Integrated custom AI & Computer Vision models for clients.",
                    "Delivered end-to-end services including UI/UX design and cloud deployment."
                ]
            }
        ]
        await db.experience.insert_many(seed_experience)
        logger.info("Seeded Experience")

    # 4. Seed Skills
    if await db.skills.count_documents({}) == 0:
        seed_skills = [
            {
                "_id": str(uuid.uuid4()),
                "category": "Frontend",
                "items": ["React", "HTML/CSS", "Tailwind", "Bootstrap", "AJAX"]
            },
            {
                "_id": str(uuid.uuid4()),
                "category": "Backend",
                "items": ["Node.js", "Express", "FastAPI", "Django", "PHP"]
            },
            {
                "_id": str(uuid.uuid4()),
                "category": "Database",
                "items": ["MongoDB", "PostgreSQL", "MySQL", "SQLite"]
            },
            {
                "_id": str(uuid.uuid4()),
                "category": "AI & Tools",
                "items": ["OpenCV", "TensorFlow", "Git/GitHub", "Vercel", "Docker"]
            }
        ]
        await db.skills.insert_many(seed_skills)
        logger.info("Seeded Skills")

    # 5. Seed Education (Journey)
    if await db.education.count_documents({}) == 0:
        seed_education = [
            {
                "_id": str(uuid.uuid4()),
                "institution": "N S S College Rajakumari",
                "degree": "Bachelor of Computer Application (BCA)",
                "year": "Present"
            },
            {
                "_id": str(uuid.uuid4()),
                "institution": "St. Mary's School",
                "degree": "Higher Secondary Certificate",
                "year": "2021 - 2022"
            },
            {
                "_id": str(uuid.uuid4()),
                "institution": "St. George HSS Parathode",
                "degree": "SSLC",
                "year": "2020"
            }
        ]
        await db.education.insert_many(seed_education)
        logger.info("Seeded Education")

@app.on_event("shutdown")
async def shutdown_db_client():
    if client:
        client.close()
