import type { Technology } from '../../types';

interface TechnologyCardProps {
  technology: Technology;
  isInStack: boolean;
  onAdd: () => void;
}

function getBadgeStyle(badge: string) {
  switch (badge.toLowerCase()) {
    case 'popular':
    case 'essential':
    case 'robust':
    case 'containers':
    case 'top sql':
      return 'border-sky-200 bg-sky-50 text-sky-600';
    case 'versatile':
    case 'standard':
      return 'border-emerald-200 bg-emerald-50 text-emerald-600';
    case 'fast':
      return 'border-orange-200 bg-orange-50 text-orange-600';
    case 'cache':
      return 'border-red-200 bg-red-50 text-red-600';
    case 'ubiquitous':
      return 'border-amber-200 bg-amber-50 text-amber-600';
    case 'modern':
      return 'border-cyan-200 bg-cyan-50 text-cyan-600';
    default:
      return 'border-gray-200 bg-gray-50 text-gray-600';
  }
}

export function TechnologyCard({ technology, isInStack, onAdd }: TechnologyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        {technology.badge ? (
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getBadgeStyle(
              technology.badge
            )}`}
          >
            {technology.badge}
          </span>
        ) : null}
      </div>

      <h3 className="mb-2 text-lg font-bold text-gray-950">
        {technology.name}
      </h3>

      <p className="mb-6 flex-1 text-[13px] leading-relaxed text-gray-500">
        {technology.description}
      </p>

      <div className="mt-auto mb-4 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-700">
            {technology.category}
          </span>
          <span className="rounded border border-gray-200 bg-white px-2 py-0.5 text-[10px] font-medium text-gray-600">
            {technology.difficulty}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-gray-900">
          <span aria-hidden="true" className="text-yellow-400">★</span>
          <span>{technology.rating.toFixed(1)}</span>
        </div>
      </div>

      <button
        type="button"
        className={`flex h-10 w-full items-center justify-center rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
          isInStack
            ? 'cursor-not-allowed bg-gray-800 text-gray-300 opacity-60'
            : 'bg-[#0B0F19] text-white hover:bg-gray-800'
        }`}
        onClick={onAdd}
        disabled={isInStack}
      >
        {isInStack ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}
