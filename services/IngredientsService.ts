import { IIngredient } from '~/models/interfaces/ingredients/IIngredient';

const mockedIngredients: IIngredient[] = [
  {
    title: 'Тыквенные блинчики',
    weight: 110,
    kcal: 105,
    proteins: 3,
    fat: 6,
    carbs: 17,
  },
  {
    title: 'Рисовые блинчики',
    weight: 110,
    kcal: 105,
    proteins: 3,
    fat: 6,
    carbs: 17,
  },
  {
    title: 'Шоколадный соус',
    weight: 110,
    kcal: 105,
    proteins: 3,
    fat: 6,
    carbs: 17,
  },
  {
    title: 'Сливочный мусс из манго',
    weight: 110,
    kcal: 105,
    proteins: 3,
    fat: 6,
    carbs: 17,
  },
  {
    title: 'Вишневый джем',
    weight: 110,
    kcal: 105,
    proteins: 3,
    fat: 6,
    carbs: 17,
  },
  {
    title: 'Овсяные блинчики',
    weight: 110,
    kcal: 105,
    proteins: 3,
    fat: 6,
    carbs: 17,
  },
  {
    title: 'Сливочный крем с клубникой',
    weight: 110,
    kcal: 105,
    proteins: 3,
    fat: 6,
    carbs: 17,
  },
  {
    title: 'Овсяный пай',
    weight: 110,
    kcal: 105,
    proteins: 3,
    fat: 6,
    carbs: 17,
  },
  {
    title: 'Малиновый конфитюр',
    weight: 110,
    kcal: 105,
    proteins: 3,
    fat: 6,
    carbs: 17,
  },
];

export default class IngredientsService {
  static getIngredients(): Promise<IIngredient[]> {
    return new Promise<IIngredient[]>((resolve) => {
      setTimeout(() => resolve(mockedIngredients), 1000);
    });
  }
}
