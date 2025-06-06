
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Video, Music, Heart, Bot, Moon, Sun } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import VideoDownloader from "@/components/VideoDownloader";
import AIAssistant from "@/components/AIAssistant";
import AdBanner from "@/components/AdBanner";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('downloader');
  const { toast } = useToast();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const features = [
    {
      icon: <Video className="h-8 w-8 text-blue-500" />,
      title: "Video Downloads",
      description: "MP4 format in 360p, 720p, 1080p, 4K quality"
    },
    {
      icon: <Music className="h-8 w-8 text-green-500" />,
      title: "Audio Downloads", 
      description: "MP3 format in all bitrates"
    },
    {
      icon: <Bot className="h-8 w-8 text-purple-500" />,
      title: "AI Assistant",
      description: "ChatGPT-powered helper for titles & descriptions"
    },
    {
      icon: <Download className="h-8 w-8 text-orange-500" />,
      title: "Batch Downloads",
      description: "Download multiple videos at once"
    }
  ];

  const supportedPlatforms = [
    "YouTube", "TikTok", "Instagram", "Facebook", "Twitter", "Vimeo"
  ];

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? 'dark' : ''}`}>
      {/* Header Ad Banner */}
      <AdBanner type="header" />
      
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Download className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SamiTubeX</h1>
              <p className="text-xs text-muted-foreground">by CodeWithSamiUbaidi</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <nav className="hidden md:flex space-x-4">
              <Button 
                variant={activeTab === 'downloader' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('downloader')}
              >
                Downloader
              </Button>
              <Button 
                variant={activeTab === 'ai' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('ai')}
              >
                AI Assistant
              </Button>
              <Button 
                variant={activeTab === 'donate' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('donate')}
              >
                <Heart className="h-4 w-4 mr-2" />
                Donate
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Free Video & Audio
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Downloader
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download videos and audio from YouTube, TikTok, Instagram and more. 
            Completely free with AI-powered assistance.
          </p>
          
          {/* Supported Platforms */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {supportedPlatforms.map((platform) => (
              <Badge key={platform} variant="secondary" className="px-3 py-1">
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Ad */}
          <div className="lg:col-span-1 order-last lg:order-first">
            <AdBanner type="sidebar" />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'downloader' && <VideoDownloader />}
            {activeTab === 'ai' && <AIAssistant />}
            {activeTab === 'donate' && <DonationSection />}
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose SamiTubeX?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Banner */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Enjoy Unlimited Downloads, Support SamiTubeX</h3>
          <p className="text-blue-100 mb-6">Your donations keep us going — Thank you!</p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setActiveTab('donate')}
          >
            <Heart className="h-5 w-5 mr-2" />
            Support Us
          </Button>
        </section>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t p-4">
        <div className="flex justify-around">
          <Button 
            variant={activeTab === 'downloader' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('downloader')}
            className="flex-1 mx-1"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button 
            variant={activeTab === 'ai' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('ai')}
            className="flex-1 mx-1"
          >
            <Bot className="h-4 w-4" />
          </Button>
          <Button 
            variant={activeTab === 'donate' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('donate')}
            className="flex-1 mx-1"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Footer />
      
      {/* Popunder Ad for Mobile */}
      <AdBanner type="popunder" />
    </div>
  );
};

export default Index;
