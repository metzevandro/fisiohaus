export type Review = {
  author: string;
  rating: number; // 1–5
  text: string;
  /** Ex.: "há 2 meses". */
  when?: string;
  /** URL da foto do perfil no Google. Sem foto, um avatar é sorteado. */
  photo?: string;
};

/**
 * Avaliações de reserva, usadas quando a API do Google não está configurada
 * (ou falha). Cole aqui avaliações reais copiadas do Google Meu Negócio.
 * Se ficar vazio e a API não estiver configurada, a seção não aparece.
 */
export const fallbackReviews: Review[] = [];

export const AVATAR_COUNT = 6;
