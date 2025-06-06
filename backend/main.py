from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import yt_dlp

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class VideoRequest(BaseModel):
    url: str

@app.post("/api/download")
def download_video(data: VideoRequest):
    try:
        with yt_dlp.YoutubeDL({
            'quiet': True,
            'skip_download': True,
            'noplaylist': True,
            'dump_single_json': True
        }) as ydl:
            info = ydl.extract_info(data.url, download=False)
            return {
                "title": info.get("title"),
                "thumbnail": info.get("thumbnail"),
                "formats": [
                    {
                        "format_id": f.get("format_id"),
                        "ext": f.get("ext"),
                        "format_note": f.get("format_note"),
                        "url": f.get("url")
                    } for f in info.get("formats", []) if f.get("url")
                ]
            }
    except Exception as e:
        return {"error": str(e)}
