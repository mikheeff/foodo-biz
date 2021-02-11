import { GetterTree, MutationTree } from 'vuex';
import { TOKEN } from '~/store/getter-types';
import { UPDATE_TOKEN } from '~/store/mutation-types';

export interface RootState {
  isMobile: boolean;
  token: string | null;
}

export const state = (): RootState => ({
  isMobile: false,
  token: null,
});

export const getters: GetterTree<RootState, RootState> = {
  [TOKEN]: state => state.token,
};

export const mutations: MutationTree<RootState> = {
  [UPDATE_TOKEN](state, value: string | null) {
    state.token = value;
  },
};
