
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heart, Copy, CheckCircle, CreditCard, Banknote, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DonationSection = () => {
  const [copied, setCopied] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const { toast } = useToast();

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const donationAmounts = ["$5", "$10", "$25", "$50", "$100"];
  
  const binanceWallet = "bnb1234567890abcdef1234567890abcdef12345678";
  const bankDetails = {
    accountName: "Samiullah Ubaidi",
    accountNumber: "1234567890123456",
    bankName: "Example Bank",
    routingNumber: "123456789"
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl">Support SamiTubeX</CardTitle>
          <CardDescription className="text-lg">
            Help us keep this service free for everyone
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Your donations help us maintain servers, add new features, and keep SamiTubeX completely free.
            Every contribution, no matter how small, makes a huge difference!
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">🚀 Server Costs</Badge>
            <Badge variant="secondary">✨ New Features</Badge>
            <Badge variant="secondary">🔧 Maintenance</Badge>
            <Badge variant="secondary">📱 Mobile App</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Donation Methods */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Binance Donation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="bg-yellow-500 p-2 rounded-lg">
                <Gift className="h-5 w-5 text-white" />
              </div>
              <span>Binance BNB20 Donation</span>
            </CardTitle>
            <CardDescription>
              Send BNB directly to our Binance Smart Chain wallet
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">BNB20 Wallet Address</label>
              <div className="flex space-x-2">
                <Input 
                  value={binanceWallet} 
                  readOnly 
                  className="font-mono text-xs"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(binanceWallet, "Binance wallet address")}
                >
                  {copied === "Binance wallet address" ? 
                    <CheckCircle className="h-4 w-4" /> : 
                    <Copy className="h-4 w-4" />
                  }
                </Button>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>⚠️ Important:</strong> Only send BNB (BEP-20) tokens to this address. 
                Sending other cryptocurrencies may result in permanent loss.
              </p>
            </div>

            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
              <Gift className="h-4 w-4 mr-2" />
              Open Binance Wallet
            </Button>
          </CardContent>
        </Card>

        {/* Bank Transfer */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="bg-blue-500 p-2 rounded-lg">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <span>Bank Transfer</span>
            </CardTitle>
            <CardDescription>
              Traditional bank transfer donation method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm font-medium">Account Name:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{bankDetails.accountName}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(bankDetails.accountName, "Account name")}
                  >
                    {copied === "Account name" ? 
                      <CheckCircle className="h-3 w-3" /> : 
                      <Copy className="h-3 w-3" />
                    }
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm font-medium">Account Number:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono">{bankDetails.accountNumber}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(bankDetails.accountNumber, "Account number")}
                  >
                    {copied === "Account number" ? 
                      <CheckCircle className="h-3 w-3" /> : 
                      <Copy className="h-3 w-3" />
                    }
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm font-medium">Bank Name:</span>
                <span className="text-sm">{bankDetails.bankName}</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium">Routing Number:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono">{bankDetails.routingNumber}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(bankDetails.routingNumber, "Routing number")}
                  >
                    {copied === "Routing number" ? 
                      <CheckCircle className="h-3 w-3" /> : 
                      <Copy className="h-3 w-3" />
                    }
                  </Button>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              <Banknote className="h-4 w-4 mr-2" />
              Download Bank Details
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Suggested Amounts */}
      <Card>
        <CardHeader>
          <CardTitle>Suggested Donation Amounts</CardTitle>
          <CardDescription>Choose an amount that works for you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
            {donationAmounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                onClick={() => setSelectedAmount(amount)}
                className="h-16"
              >
                {amount}
              </Button>
            ))}
          </div>
          
          <div className="flex space-x-2">
            <Input
              placeholder="Custom amount"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
            />
            <Button disabled={!selectedAmount}>
              Donate {selectedAmount}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Thank You Section */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">Thank You for Your Support! 🙏</h3>
            <p className="text-muted-foreground">
              Thanks to generous donors like you, we can keep SamiTubeX free and continuously improve it.
              Your contribution helps us:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">🚀 Keep Servers Running</h4>
                <p className="text-muted-foreground">Maintain fast, reliable downloads</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">✨ Add New Features</h4>
                <p className="text-muted-foreground">Support more platforms and formats</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">📱 Mobile App Development</h4>
                <p className="text-muted-foreground">Native iOS and Android apps</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Developer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">👨‍💻 Samiullah Ubaidi</h4>
              <p className="text-muted-foreground">Full Stack Developer</p>
              <p className="text-muted-foreground">📧 devsamiubaidi@gmail.com</p>
              <p className="text-muted-foreground">📞 0342-0372799</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🌐 Follow Us</h4>
              <div className="space-y-1 text-muted-foreground">
                <p>🔗 GitHub: @UbaidiCoding</p>
                <p>📸 Instagram: @Sami_Ubaidi</p>
                <p>▶️ YouTube: CodeWithSamiUbaidi</p>
                <p>📝 Blog: writersamiubaidi.blogspot.com</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationSection;
