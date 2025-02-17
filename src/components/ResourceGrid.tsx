
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
}

export const ResourceGrid = ({ resources }: ResourceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-20">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          title={resource.title}
          description={resource.description}
          category={resource.category}
          url={resource.url}
        />
      ))}
    </div>
  );
};
