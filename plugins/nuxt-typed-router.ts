import { Plugin } from '@nuxt/types';
import { routerPagesNames } from '~/models/__routes';

const nuxtTypedRouter: Plugin = (_context, inject) => {
  inject('routesNames', routerPagesNames);
};

export default nuxtTypedRouter;
