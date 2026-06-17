import os
from dotenv import load_dotenv

load_dotenv()

# Supabase Configuration
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# JWT Configuration
JWT_SECRET = os.getenv("JWT_SECRET", "your-secret-key-change-in-production")
JWT_ALGORITHM = "HS256"
JWT_EXPIRE_MINUTES = 30

# Database Configuration
DATABASE_URL = os.getenv("DATABASE_URL")

# Server Configuration
DEBUG = os.getenv("DEBUG", "True").lower() == "true"
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", 8000))

# File Upload Configuration
UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "../uploads")
MAX_UPLOAD_SIZE = 10 * 1024 * 1024  # 10MB

# Create uploads directory if it doesn't exist
os.makedirs(UPLOAD_DIR, exist_ok=True)
