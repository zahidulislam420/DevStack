import { useState } from 'react';
import type { Technology, StackItem } from '../types';
import { toast } from 'react-toastify';

export function useStack() {
  const [stack, setStack] = useState<StackItem[]>([]);

  const addToStack = (technology: Technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    toast.success(`${technology.name} added to your stack!`);
    setStack([...stack, technology]);
  };

  const removeFromStack = (id: string) => {
    const item = stack.find((currentItem) => currentItem.id === id);
    if (!item) return;

    toast.error(`${item.name} removed from your stack!`);
    setStack(stack.filter((currentItem) => currentItem.id !== id));
  };

  const removeAll = () => {
    if (stack.length === 0) return;

    toast.error('All technologies removed from your stack!');
    setStack([]);
  };

  const isInStack = (id: string) => {
    return stack.some((item) => item.id === id);
  };

  return {
    stack,
    addToStack,
    removeFromStack,
    removeAll,
    isInStack,
    stackCount: stack.length,
  };
}
