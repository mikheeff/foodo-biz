import { routerPagesNames } from '~/models/__routes';

declare module 'vue/types/vue' {
  interface Vue {
    $routesNames: typeof routerPagesNames;
  }
}
