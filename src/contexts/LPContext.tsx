'use client';

import { createContext, useContext, ReactNode } from 'react';
import { LPData } from '@/types/lp';

interface LPContextType {
  data: LPData;
}

const LPContext = createContext<LPContextType | undefined>(undefined);

export function LPProvider({
  children,
  data,
}: {
  children: ReactNode;
  data: LPData;
}) {
  return <LPContext.Provider value={{ data }}>{children}</LPContext.Provider>;
}

export function useLPData() {
  const context = useContext(LPContext);
  if (!context) {
    throw new Error('useLPData must be used within a LPProvider');
  }
  return context.data;
}
