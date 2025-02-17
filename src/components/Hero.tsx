
import { UserRound } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 px-6 sm:px-10 lg:px-20 animate-fade-in">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center mb-8">
          <UserRound className="h-16 w-16 text-gray-700" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Resource Garden
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          A curated collection of amazing resources, tools, and learning materials to help you discover and grow in various fields - from AI and technology to art and beyond.
        </p>
      </div>
    </div>
  );
};
