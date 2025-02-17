
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { ResourceGrid } from "@/components/ResourceGrid";

const resources = [
  {
    id: 1,
    title: "OpenAI GPT-4",
    description: "Advanced language model capable of natural conversations and complex problem-solving.",
    category: "Models",
    url: "https://openai.com/gpt-4",
  },
  {
    id: 2,
    title: "Fast.ai",
    description: "Free courses on deep learning, making neural networks accessible to all.",
    category: "Learning",
    url: "https://www.fast.ai",
  },
  {
    id: 3,
    title: "Hugging Face",
    description: "The AI community building the future of machine learning.",
    category: "Tools",
    url: "https://huggingface.co",
  },
  {
    id: 4,
    title: "Google AI Research",
    description: "Latest developments and research papers in artificial intelligence.",
    category: "Research",
    url: "https://ai.google/research",
  },
  {
    id: 5,
    title: "TensorFlow",
    description: "Open-source platform for machine learning and numerical computation.",
    category: "Tools",
    url: "https://www.tensorflow.org",
  },
  {
    id: 6,
    title: "PyTorch",
    description: "Open source machine learning framework for research and production.",
    category: "Tools",
    url: "https://pytorch.org",
  },
];

const Index = () => {
  const [filteredResources, setFilteredResources] = useState(resources);

  const handleSearch = (query: string) => {
    const filtered = resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(query.toLowerCase()) ||
        resource.description.toLowerCase().includes(query.toLowerCase()) ||
        resource.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResources(filtered);
  };

  return (
    <div className="min-h-screen pb-20">
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <ResourceGrid resources={filteredResources} />
    </div>
  );
};

export default Index;
