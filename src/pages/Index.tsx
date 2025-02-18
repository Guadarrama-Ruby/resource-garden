
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { ResourceGrid } from "@/components/ResourceGrid";
import { AddResourceDialog } from "@/components/AddResourceDialog";

const initialResources = [
  // Image Generation
  {
    id: 1,
    title: "DALL-E 3",
    description: "Advanced AI system that creates realistic images and art from natural language descriptions.",
    category: "Images",
    url: "https://openai.com/dall-e-3",
  },
  {
    id: 2,
    title: "Midjourney",
    description: "AI-powered tool that generates high-quality images from text descriptions.",
    category: "Images",
    url: "https://www.midjourney.com",
  },
  {
    id: 3,
    title: "Stable Diffusion",
    description: "Open-source text-to-image model capable of generating detailed images.",
    category: "Images",
    url: "https://stability.ai",
  },

  // Text & Language
  {
    id: 4,
    title: "GPT-4",
    description: "Advanced language model for text generation, analysis, and understanding.",
    category: "Text",
    url: "https://openai.com/gpt-4",
  },
  {
    id: 5,
    title: "Claude 2",
    description: "AI assistant capable of complex analysis and natural conversation.",
    category: "Text",
    url: "https://anthropic.com/claude",
  },
  {
    id: 6,
    title: "Cohere",
    description: "Platform for building applications with advanced language AI capabilities.",
    category: "Text",
    url: "https://cohere.ai",
  },

  // Coding & Development
  {
    id: 7,
    title: "GitHub Copilot",
    description: "AI pair programmer that helps write better code faster.",
    category: "Coding",
    url: "https://github.com/features/copilot",
  },
  {
    id: 8,
    title: "Amazon CodeWhisperer",
    description: "AI-powered coding companion for faster development.",
    category: "Coding",
    url: "https://aws.amazon.com/codewhisperer",
  },
  {
    id: 9,
    title: "Replit Ghost",
    description: "AI coding assistant integrated into the Replit IDE.",
    category: "Coding",
    url: "https://replit.com/ghost",
  },

  // AI Assistants
  {
    id: 10,
    title: "AutoGPT",
    description: "Autonomous AI agent capable of completing complex tasks.",
    category: "Assistant",
    url: "https://autogpt.net",
  },
  {
    id: 11,
    title: "Perplexity AI",
    description: "AI search assistant that provides detailed, accurate answers.",
    category: "Assistant",
    url: "https://www.perplexity.ai",
  },
  {
    id: 12,
    title: "Agent GPT",
    description: "Framework for building autonomous AI agents.",
    category: "Assistant",
    url: "https://agentgpt.reworkd.ai",
  },

  // Research & Learning
  {
    id: 13,
    title: "Papers with Code",
    description: "Free resource of machine learning papers with code implementations.",
    category: "Research",
    url: "https://paperswithcode.com",
  },
  {
    id: 14,
    title: "Coursera AI",
    description: "Online courses and specializations in artificial intelligence.",
    category: "Research",
    url: "https://www.coursera.org/browse/data-science/artificial-intelligence",
  },
  {
    id: 15,
    title: "arXiv AI",
    description: "Repository of AI research papers and preprints.",
    category: "Research",
    url: "https://arxiv.org/list/cs.AI/recent",
  },
];

const Index = () => {
  const [resources, setResources] = useState(initialResources);
  const [filteredResources, setFilteredResources] = useState(resources);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const handleSearch = (query: string) => {
    const filtered = resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(query.toLowerCase()) ||
        resource.description.toLowerCase().includes(query.toLowerCase()) ||
        resource.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResources(filtered);
  };

  const handleToggleFavorite = (id: number) => {
    setFavoriteIds(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const handleAddResource = (newResource: {
    title: string;
    description: string;
    category: string;
    url: string;
  }) => {
    const newId = Math.max(...resources.map(r => r.id)) + 1;
    const resourceWithId = {
      ...newResource,
      id: newId,
    };
    const updatedResources = [...resources, resourceWithId];
    setResources(updatedResources);
    setFilteredResources(updatedResources);
  };

  const handleDeleteResource = (id: number) => {
    const updatedResources = resources.filter(r => r.id !== id);
    setResources(updatedResources);
    setFilteredResources(updatedResources);
    setFavoriteIds(prev => prev.filter(favId => favId !== id));
  };

  const categories = Array.from(new Set(resources.map((r) => r.category)));

  const filteredByCategory = selectedCategory
    ? filteredResources.filter((r) => r.category === selectedCategory)
    : filteredResources;

  const displayedResources = showOnlyFavorites
    ? filteredByCategory.filter((r) => favoriteIds.includes(r.id))
    : filteredByCategory;

  return (
    <div className="min-h-screen pb-20">
      <Hero />
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-6 sm:px-10 lg:px-20">
        <button
          onClick={() => {
            setSelectedCategory(null);
            setShowOnlyFavorites(false);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !selectedCategory && !showOnlyFavorites
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setShowOnlyFavorites(true)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            showOnlyFavorites
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Favorites ({favoriteIds.length})
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setShowOnlyFavorites(false);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category && !showOnlyFavorites
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center px-6 sm:px-10 lg:px-20 mb-8">
        <SearchBar onSearch={handleSearch} />
        <AddResourceDialog onAddResource={handleAddResource} categories={categories} />
      </div>
      <ResourceGrid 
        resources={displayedResources} 
        favoriteIds={favoriteIds}
        onToggleFavorite={handleToggleFavorite}
        onDeleteResource={handleDeleteResource}
      />
    </div>
  );
};

export default Index;
