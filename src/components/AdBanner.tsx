
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface AdBannerProps {
  type: 'header' | 'sidebar' | 'footer' | 'popunder';
}

const AdBanner = ({ type }: AdBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showPopunder, setShowPopunder] = useState(false);

  useEffect(() => {
    // Simulate popunder for mobile (once per session)
    if (type === 'popunder') {
      const hasShownPopunder = sessionStorage.getItem('popunder_shown');
      if (!hasShownPopunder && window.innerWidth < 768) {
        setTimeout(() => {
          setShowPopunder(true);
          sessionStorage.setItem('popunder_shown', 'true');
        }, 5000);
      }
    }
  }, [type]);

  const closePopunder = () => {
    setShowPopunder(false);
  };

  if (type === 'popunder' && !showPopunder) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  const adContent = {
    header: {
      content: "🎉 Special Offer: Get 50% off Premium Tools - Limited Time!",
      className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 text-center text-sm"
    },
    sidebar: {
      content: (
        <div className="space-y-4">
          <Card className="p-4 bg-gradient-to-br from-green-50 to-blue-50">
            <h3 className="font-bold text-lg mb-2">🚀 Boost Your Content</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Professional video editing tools at your fingertips
            </p>
            <div className="bg-white p-2 rounded text-center">
              <span className="text-xs text-muted-foreground">Advertisement</span>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
            <h3 className="font-bold text-lg mb-2">💡 Creator Tools</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Everything you need for professional content creation
            </p>
            <div className="bg-white p-2 rounded text-center">
              <span className="text-xs text-muted-foreground">Advertisement</span>
            </div>
          </Card>
        </div>
      ),
      className: "sticky top-24"
    },
    footer: {
      content: "💎 Upgrade to Premium - Unlimited Downloads, No Ads, Priority Support",
      className: "bg-gray-900 text-white py-3 px-4 text-center text-sm"
    },
    popunder: {
      content: (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 relative">
            <button
              onClick={closePopunder}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold">🎉 Special Mobile Offer!</h3>
              <p className="text-muted-foreground">
                Download our mobile app for faster downloads and exclusive features
              </p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded">
                  Download App
                </button>
                <button 
                  onClick={closePopunder}
                  className="flex-1 border py-2 rounded"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </Card>
        </div>
      ),
      className: ""
    }
  };

  const currentAd = adContent[type];

  return (
    <div className={currentAd.className}>
      {typeof currentAd.content === 'string' ? (
        <div className="flex items-center justify-between">
          <span className="flex-1">{currentAd.content}</span>
          {type !== 'popunder' && (
            <button
              onClick={() => setIsVisible(false)}
              className="ml-4 opacity-70 hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      ) : (
        currentAd.content
      )}
    </div>
  );
};

export default AdBanner;
