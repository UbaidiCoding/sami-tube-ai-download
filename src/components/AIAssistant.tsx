
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Sparkles, FileText, Hash, Lightbulb } from "lucide-react";

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant for SamiTubeX. I can help you generate video titles, descriptions, hashtags, and provide creative ideas for your content. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickPrompts = [
    {
      icon: <FileText className="h-4 w-4" />,
      title: "Generate Title",
      prompt: "Generate a catchy title for my video about"
    },
    {
      icon: <Hash className="h-4 w-4" />,
      title: "Create Hashtags", 
      prompt: "Create relevant hashtags for a video about"
    },
    {
      icon: <Lightbulb className="h-4 w-4" />,
      title: "Content Ideas",
      prompt: "Give me creative content ideas for"
    },
    {
      icon: <Sparkles className="h-4 w-4" />,
      title: "Improve Description",
      prompt: "Help me improve this video description:"
    }
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in real app, this would call ChatGPT API)
    setTimeout(() => {
      const responses = [
        "Here are some creative suggestions for your video content...",
        "Based on your request, I recommend these approaches...",
        "Great idea! Here's how you can enhance your content...",
        "I've generated some engaging options for you..."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const assistantMessage = { 
        role: "assistant", 
        content: `${randomResponse}\n\n📝 **Title Suggestions:**\n• "${input}" - The Ultimate Guide\n• Amazing ${input} Tips You Need to Know\n• ${input}: What Nobody Tells You\n\n🔗 **Hashtags:**\n#${input.replace(/\s+/g, '')} #viral #trending #tutorial #tips\n\n📋 **Description Ideas:**\nIn this video, we explore ${input} and share valuable insights that will help you understand this topic better. Don't forget to like and subscribe for more content!`
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickPrompt = (prompt) => {
    setInput(prompt + " ");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-purple-500" />
            <span>AI Content Assistant</span>
          </CardTitle>
          <CardDescription>
            Get help with video titles, descriptions, hashtags, and creative content ideas
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Quick Prompts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickPrompts.map((prompt, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2 text-center"
                onClick={() => handleQuickPrompt(prompt.prompt)}
              >
                {prompt.icon}
                <span className="text-xs">{prompt.title}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="h-[500px] flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg">Chat with AI</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto mb-4 pr-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                    <span className="text-sm">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <Input
              placeholder="Ask for video titles, descriptions, hashtags..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Features Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">AI Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium">Content Creation Help:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Generate catchy video titles</li>
                <li>• Create engaging descriptions</li>
                <li>• Suggest relevant hashtags</li>
                <li>• Brainstorm content ideas</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Optimization Tips:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• SEO-friendly suggestions</li>
                <li>• Platform-specific advice</li>
                <li>• Engagement strategies</li>
                <li>• Trending topic insights</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAssistant;
