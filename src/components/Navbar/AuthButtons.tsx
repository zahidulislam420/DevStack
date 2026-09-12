import { Button } from '../UI';

export function AuthButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Button variant="ghost" size="sm">
        Sign In
      </Button>
      <Button variant="primary" size="sm">
        Sign Up
      </Button>
    </div>
  );
}