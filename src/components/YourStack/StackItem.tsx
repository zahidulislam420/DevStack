import type { StackItem as StackItemType } from '../../types';
import { Chip } from '../UI';

interface StackItemProps {
  item: StackItemType;
  onRemove: () => void;
}

export function StackItem({ item, onRemove }: StackItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white">
        <img
          src={item.icon}
          alt={`${item.name} logo`}
          className="h-full w-full object-contain p-1"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-bold text-gray-950">{item.name}</h4>
        <Chip variant="category" className="rounded border border-gray-200 bg-white px-1 py-0 text-[10px] font-medium text-gray-500">{item.category}</Chip>
      </div>
      <button
        onClick={onRemove}
        className="p-1 text-xl leading-none text-gray-400 hover:text-gray-700"
        aria-label={`Remove ${item.name} from stack`}
      >
        ×
      </button>
    </div>
  );
}
