
import { Button } from "@/components/ui/button";
import { Heart, Github, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">SamiTubeX</h3>
                <p className="text-xs text-muted-foreground">by CodeWithSamiUbaidi</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Free video and audio downloader with AI-powered assistance. 
              Download from YouTube, TikTok, Instagram and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Video Downloader
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                AI Assistant
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Batch Download
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Support & FAQ
              </a>
            </div>
          </div>

          {/* Supported Platforms */}
          <div className="space-y-4">
            <h4 className="font-semibold">Supported Platforms</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• YouTube (Videos & Shorts)</p>
              <p>• TikTok</p>
              <p>• Instagram (Posts & Reels)</p>
              <p>• Facebook</p>
              <p>• Twitter/X</p>
              <p>• Vimeo</p>
            </div>
          </div>

          {/* Developer Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Developer</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>devsamiubaidi@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>0342-0372799</span>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-2 pt-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} SamiTubeX by Samiullah Ubaidi. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              DMCA
            </a>
          </div>
        </div>

        {/* Donation CTA */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg p-6 mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            💙 Love SamiTubeX? Help us keep it free for everyone!
          </p>
          <Button variant="outline" className="border-purple-200 hover:bg-purple-50">
            <Heart className="h-4 w-4 mr-2" />
            Support Our Work
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
