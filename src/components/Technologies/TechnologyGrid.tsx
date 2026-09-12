import type { Technology } from '../../types';
import { TechnologyCard } from './TechnologyCard';

interface TechnologyGridProps {
  technologies: Technology[];
  onAddToStack: (technology: Technology) => void;
  isInStack: (id: string) => boolean;
}

export function TechnologyGrid({ technologies, onAddToStack, isInStack }: TechnologyGridProps) {
  return (
    <section id="technologies" className="bg-white py-6">
      <div className="mb-8">
        <h2 className="text-[28px] font-extrabold text-gray-950">
          Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Technology cards">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isInStack={isInStack(technology.id)}
            onAdd={() => onAddToStack(technology)}
          />
        ))}
      </div>
    </section>
  );
}
