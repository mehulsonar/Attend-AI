from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create FastAPI app
app = FastAPI(
    title="Attend AI API",
    description="Attendance management system with face and voice recognition",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import routes (add these as you implement them)
# from app.api import auth, student, teacher, attendance, face, voice

# Include routers
# app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
# app.include_router(student.router, prefix="/api/student", tags=["student"])
# app.include_router(teacher.router, prefix="/api/teacher", tags=["teacher"])
# app.include_router(attendance.router, prefix="/api/attendance", tags=["attendance"])
# app.include_router(face.router, prefix="/api/face", tags=["face"])
# app.include_router(voice.router, prefix="/api/voice", tags=["voice"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to Attend AI API",
        "version": "1.0.0",
        "docs": "/docs",
        "openapi_schema": "/openapi.json"
    }

@app.get("/health")
async def health_check():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
