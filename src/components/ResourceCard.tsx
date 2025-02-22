
import { ExternalLink, Heart, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  url: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onDelete: () => void;
}

export const ResourceCard = ({ 
  title, 
  description, 
  category, 
  url, 
  isFavorite,
  onToggleFavorite,
  onDelete
}: ResourceCardProps) => {
  return (
    <div className="resource-card p-6 animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <span className="category-pill">{category}</span>
        <div className="flex gap-2">
          <button
            onClick={onToggleFavorite}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              className="h-5 w-5" 
              fill={isFavorite ? "#ef4444" : "none"}
              stroke={isFavorite ? "#ef4444" : "currentColor"}
            />
          </button>
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Delete resource"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Resource</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete "{title}"? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={onDelete}>
                  Yes, delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
