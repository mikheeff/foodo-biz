import Vue from 'vue';

export default class Util {
  /**
   * Create two way mapper Getter <-> Mutation for computed property
   * @param {string} getter
   * @param {string} mutation
   * @returns {any} Mapper for computed property
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static mapTwoWay<T>(getter: string, mutation: string) {
    return {
      get(this: Vue): T {
        return this.$store.getters[getter];
      },
      set(this: Vue, value: T) {
        this.$store.commit(mutation, value);
      },
    };
  }

  /**
   * Get REST API URL
   * @param {string} url part to get full URL
   * @returns {string} full REST API URL
   */
  static getRestApiUrl(url: string): string {
    // TODO: should come from ENV VARIABLES
    return `http://api.linboard.online/api/${url}`;
  }
}
