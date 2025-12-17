import React from "react";
import RevealAnimation from "@/components/reveal-animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Blog | Portfolio",
  description: "Thoughts, tutorials, and updates from the space.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans flex items-center justify-center">
      <RevealAnimation>
        <Card className="bg-black/40 border-zinc-800 backdrop-blur-sm max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Blog
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-zinc-400 text-lg font-medium">
              Temporarily Disabled
            </p>
            <p className="text-zinc-500 text-sm">
              Coming Soon
            </p>
          </CardContent>
        </Card>
      </RevealAnimation>
    </div>
  );
}
