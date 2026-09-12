import type { StackItem as StackItemType } from '../../types';
import { Button } from '../UI';
import { StackItem } from './StackItem';
import { EmptyStack } from './EmptyStack';

interface YourStackProps {
  stack: StackItemType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <aside id="your-stack" className="lg:sticky lg:top-24 lg:self-start" aria-label="Your technology stack">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="mb-5">
          <h2 className="text-xl font-extrabold text-gray-950">Your Stack</h2>
          <p className="mt-1 text-sm text-gray-400">
            {stack.length} Technology{stack.length !== 1 ? 's' : ''} Selected
          </p>
        </div>

        {stack.length === 0 ? (
          <EmptyStack />
        ) : (
          <>
            <div className="mb-5 space-y-3" role="list" aria-label="Selected technologies">
              {stack.map((item) => (
                <StackItem key={item.id} item={item} onRemove={() => onRemove(item.id)} />
              ))}
            </div>
            <Button
              variant="secondary"
              className="h-10 w-full rounded-md border border-pink-300 bg-white text-sm font-bold text-pink-600 shadow-none hover:bg-pink-50"
              onClick={onRemoveAll}
            >
              Remove All
            </Button>
          </>
        )}
      </div>
    </aside>
  );
}
