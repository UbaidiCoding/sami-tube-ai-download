
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, Link, Play, Music, Video, Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VideoDownloader = () => {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("720p");
  const [format, setFormat] = useState("mp4");
  const [isLoading, setIsLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call for demo
    setTimeout(() => {
      setVideoInfo({
        title: "Sample Video Title - Amazing Content You'll Love",
        description: "This is a sample description that would be automatically fetched from the video platform.",
        thumbnail: "/placeholder.svg",
        duration: "10:24",
        views: "1.2M views"
      });
      setIsLoading(false);
      
      toast({
        title: "Download Started",
        description: `Downloading in ${quality} ${format.toUpperCase()} format`,
      });
    }, 2000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  const detectPlatform = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube';
    if (url.includes('tiktok.com')) return 'TikTok';
    if (url.includes('instagram.com')) return 'Instagram';
    if (url.includes('facebook.com')) return 'Facebook';
    if (url.includes('twitter.com')) return 'Twitter';
    return 'Unknown';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Video/Audio Downloader</span>
          </CardTitle>
          <CardDescription>
            Paste any video URL from supported platforms and download in your preferred format
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* URL Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Video URL</label>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Link className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="https://youtube.com/watch?v=..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10"
                />
              </div>
              {url && (
                <Badge variant="outline" className="flex items-center space-x-1">
                  <span>{detectPlatform(url)}</span>
                </Badge>
              )}
            </div>
          </div>

          {/* Format Selection */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Format</label>
              <Select value={format} onValueChange={setFormat}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mp4">
                    <div className="flex items-center space-x-2">
                      <Video className="h-4 w-4" />
                      <span>Video (MP4)</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="mp3">
                    <div className="flex items-center space-x-2">
                      <Music className="h-4 w-4" />
                      <span>Audio (MP3)</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Quality</label>
              <Select value={quality} onValueChange={setQuality}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {format === 'mp4' ? (
                    <>
                      <SelectItem value="360p">360p (Low)</SelectItem>
                      <SelectItem value="720p">720p (HD)</SelectItem>
                      <SelectItem value="1080p">1080p (Full HD)</SelectItem>
                      <SelectItem value="4k">4K (Ultra HD)</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="128kbps">128 kbps</SelectItem>
                      <SelectItem value="192kbps">192 kbps</SelectItem>
                      <SelectItem value="256kbps">256 kbps</SelectItem>
                      <SelectItem value="320kbps">320 kbps (High)</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Download Button */}
          <Button 
            onClick={handleDownload} 
            disabled={isLoading || !url}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                <span>Processing...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download {format.toUpperCase()}</span>
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Video Info Display */}
      {videoInfo && (
        <Card>
          <CardHeader>
            <CardTitle>Video Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-4">
              <img 
                src={videoInfo.thumbnail} 
                alt="Video thumbnail"
                className="w-32 h-24 object-cover rounded-lg"
              />
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-lg leading-tight">{videoInfo.title}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(videoInfo.title)}
                  >
                    {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <span>{videoInfo.duration}</span>
                  <span>{videoInfo.views}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Description</label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(videoInfo.description)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                {videoInfo.description}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Batch Download Section */}
      <Card>
        <CardHeader>
          <CardTitle>Batch Download</CardTitle>
          <CardDescription>Download multiple videos at once</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <textarea
              placeholder="Paste multiple URLs (one per line)&#10;https://youtube.com/watch?v=...&#10;https://tiktok.com/@user/video/...&#10;https://instagram.com/p/..."
              className="w-full h-32 p-3 border rounded-lg resize-none text-sm"
            />
            <Button className="w-full" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download All ({format.toUpperCase()})
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoDownloader;
