import authApi from './auth';
import categoryApi from './category';
import magazineApi from './magazine';
import scrapApi from './scrap';

export const api = {
  auth: authApi,
  scrap: scrapApi,
  category: categoryApi,
  magazine: magazineApi,
};

export * from './token';
