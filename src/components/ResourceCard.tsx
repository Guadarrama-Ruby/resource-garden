
import { ExternalLink } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  url: string;
}

export const ResourceCard = ({ title, description, category, url }: ResourceCardProps) => {
  return (
    <div className="resource-card p-6 animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <span className="category-pill">{category}</span>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
