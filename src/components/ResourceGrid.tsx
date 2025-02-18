
import { ResourceCard } from "./ResourceCard";

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  url: string;
}

interface ResourceGridProps {
  resources: Resource[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
  onDeleteResource: (id: number) => void;
}

export const ResourceGrid = ({ resources, favoriteIds, onToggleFavorite, onDeleteResource }: ResourceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-20">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          title={resource.title}
          description={resource.description}
          category={resource.category}
          url={resource.url}
          isFavorite={favoriteIds.includes(resource.id)}
          onToggleFavorite={() => onToggleFavorite(resource.id)}
          onDelete={() => onDeleteResource(resource.id)}
        />
      ))}
    </div>
  );
};
