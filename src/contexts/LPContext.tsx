import lpData from '../../lp.json';
import type { LPData } from '@/types/lp';

export function useLPData(): LPData {
  return lpData as LPData;
}
