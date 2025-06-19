import { LPData } from '@/types/lp';
import lpData from '../../lp.json';

export async function loadLPData(): Promise<LPData> {
  // Em produção, você pode buscar de uma API ou CMS
  // Por agora, importamos diretamente
  return lpData as LPData;
}
