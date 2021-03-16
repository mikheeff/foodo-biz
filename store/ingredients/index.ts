import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { IIngredient } from '~/models/interfaces/ingredients/IIngredient';
import { IRootState } from '~/store';
import { GET_INGREDIENTS } from '~/services/constants/action-types';
import IngredientsService from '~/services/IngredientsService';
import { UPDATE_INGREDIENTS } from '~/services/constants/mutation-types';
import { INGREDIENTS } from '~/services/constants/getter-types';

export const namespaced = false;

export interface IIngredientsState {
  ingredients: IIngredient[];
}

export const state = (): IIngredientsState => ({
  ingredients: [],
});

export const getters: GetterTree<IIngredientsState, IRootState> = {
  [INGREDIENTS]: state => state.ingredients,
};

export const actions: ActionTree<IIngredientsState, IRootState> = {
  [GET_INGREDIENTS]({ commit }) {
    return IngredientsService.getIngredients()
      .then((ingredients) => {
        commit(UPDATE_INGREDIENTS, ingredients);
      });
  },
};

export const mutations: MutationTree<IIngredientsState> = {
  [UPDATE_INGREDIENTS](state, value: IIngredient[]) {
    state.ingredients = value;
  },
};
