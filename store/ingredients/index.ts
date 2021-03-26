import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { IIngredient } from '~/models/interfaces/ingredients/IIngredient';
import { IRootState } from '~/store';
import { GET_INGREDIENTS } from '~/services/constants/action-types';
import IngredientsService from '~/services/IngredientsService';
import { UPDATE_INGREDIENTS, UPDATE_SELECTED_INGREDIENTS } from '~/services/constants/mutation-types';
import { INGREDIENTS, SELECTED_INGREDIENTS } from '~/services/constants/getter-types';

export const namespaced = false;

export interface IIngredientsState {
  ingredients: IIngredient[];
  selectedIngredients: IIngredient[];
}

export const state = (): IIngredientsState => ({
  ingredients: [],
  selectedIngredients: [
    {
      title: 'Рисовые блинчики',
      weight: 110,
      kcal: 105,
      proteins: 3,
      fat: 6,
      carbs: 17,
    },
  ],
});

export const getters: GetterTree<IIngredientsState, IRootState> = {
  [INGREDIENTS]: state => state.ingredients,
  [SELECTED_INGREDIENTS]: state => state.selectedIngredients,
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
  [UPDATE_SELECTED_INGREDIENTS](state, value: IIngredient[]) {
    state.selectedIngredients = value;
  },
};
