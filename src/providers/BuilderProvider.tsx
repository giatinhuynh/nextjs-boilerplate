import { ReactNode, useEffect } from 'react';
import { registerComponents } from '@/configs/builder';

interface BuilderProviderProps {
  children: ReactNode;
}

export function BuilderProvider({ children }: BuilderProviderProps) {
  useEffect(() => {
    registerComponents();
  }, []);

  return <>{children}</>;
} 