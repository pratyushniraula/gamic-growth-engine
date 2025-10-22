import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { z } from "zod";

const MAX_DAILY_PROMPTS = 10;
const MAX_WORD_COUNT = 500;

const promptSchema = z.object({
  prompt: z.string()
    .trim()
    .min(1, "Prompt cannot be empty")
    .max(MAX_WORD_COUNT * 10, `Prompt is too long`), // Rough character limit
});

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [promptCount, setPromptCount] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);
      await fetchPromptCount(session.user.id);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchPromptCount = async (userId: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { data, error } = await supabase
      .from("user_prompts")
      .select("*", { count: "exact" })
      .eq("user_id", userId)
      .gte("created_at", today.toISOString());

    if (!error && data) {
      setPromptCount(data.length);
    }
  };

  const countWords = (text: string): number => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleSendMessage = async () => {
    if (!input.trim() || loading || !user) return;

    try {
      // Validate input
      promptSchema.parse({ prompt: input });

      // Check word count
      const wordCount = countWords(input);
      if (wordCount > MAX_WORD_COUNT) {
        toast({
          title: "Word Limit Exceeded",
          description: `Your message has ${wordCount} words. Maximum is ${MAX_WORD_COUNT} words.`,
          variant: "destructive",
        });
        return;
      }

      // Check daily limit
      if (promptCount >= MAX_DAILY_PROMPTS) {
        toast({
          title: "Daily Limit Reached",
          description: `You've used all ${MAX_DAILY_PROMPTS} prompts for today. Come back tomorrow!`,
          variant: "destructive",
        });
        return;
      }

      setLoading(true);

      // Add user message to UI
      const userMessage: Message = { role: "user", content: input };
      setMessages(prev => [...prev, userMessage]);
      setInput("");

      // Store prompt in database
      const { error: insertError } = await supabase
        .from("user_prompts")
        .insert({
          user_id: user.id,
          prompt_text: input,
          word_count: wordCount,
        });

      if (insertError) throw insertError;

      // Update prompt count
      setPromptCount(prev => prev + 1);

      // ============================================
      // TODO: IMPLEMENT RAG STUFF HERE
      // ============================================
      // Call your RAG edge function here
      // Example:
      // const { data, error } = await supabase.functions.invoke('rag-chat', {
      //   body: { message: input }
      // });
      
      // For now, mock response
      const mockResponse = "This is where the RAG response will appear. Implement your RAG logic in the edge function.";
      
      // ============================================
      // END OF RAG IMPLEMENTATION AREA
      // ============================================

      // Add assistant message to UI
      const assistantMessage: Message = { role: "assistant", content: mockResponse };
      setMessages(prev => [...prev, assistantMessage]);

      // Update the stored prompt with the response
      await supabase
        .from("user_prompts")
        .update({ response_text: mockResponse })
        .eq("user_id", user.id)
        .eq("prompt_text", input);

    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message || "Failed to send message",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const remainingPrompts = MAX_DAILY_PROMPTS - promptCount;
  const currentWordCount = countWords(input);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Chat Assistant</h1>
            <p className="text-sm text-muted-foreground">
              {remainingPrompts} prompts remaining today
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col space-y-4 overflow-hidden">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-secondary/5 rounded-lg">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Start a conversation by sending a message below.</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Word count: {currentWordCount} / {MAX_WORD_COUNT}</span>
                <span className={currentWordCount > MAX_WORD_COUNT ? "text-destructive font-semibold" : ""}>
                  {currentWordCount > MAX_WORD_COUNT && "Exceeds limit!"}
                </span>
              </div>
              <div className="flex gap-2">
                <Textarea
                  placeholder="Type your message here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  disabled={loading || remainingPrompts === 0}
                  className="resize-none"
                  rows={3}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={loading || remainingPrompts === 0 || !input.trim()}
                  className="self-end"
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Chat;
