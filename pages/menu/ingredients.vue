<template>
  <div class="ingredients-page page">
    <div class="container">
      <div class="ingredients-page-header">
        <h1 class="title is-size-2 is-marginless">
          {{ $t('ingredients') }}
        </h1>
      </div>
      <div class="ingredients-page-content">
        <div class="ingredients-page-control-panel">
          <div class="control-panel-buttons">
            <button class="button is-icon">
              <BaseIcon
                width="28"
                height="28"
              >
                <PlusIcon />
              </BaseIcon>
            </button>
          </div>
          <FPagination
            v-model="current"
            :total="total"
            :search-value="search"
            @search="search = $event"
          />
        </div>
        <div class="ingredients-page-table">
          <FTable
            :data="ingredients"
            :columns="columns"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { IIngredient } from '~/models/interfaces/ingredients/IIngredient';
  import { INGREDIENTS } from '~/services/constants/getter-types';
  import { GET_INGREDIENTS } from '~/services/constants/action-types';

  export default Vue.extend({
    name: 'Ingredients',
    data() {
      return {
        total: 30,
        current: 1,
        search: '',
        columns: [
          {
            field: 'title',
            label: this.$t('name'),
          },
          {
            field: 'weight',
            label: this.$t('gram'),
            numeric: true,
          },
          {
            field: 'kcal',
            label: this.$t('kcal'),
            numeric: true,
          },
          {
            field: 'proteins',
            label: this.$t('proteins'),
            numeric: true,
          },
          {
            field: 'fat',
            label: this.$t('fat'),
            numeric: true,
          },
          {
            field: 'carbs',
            label: this.$t('carbs'),
            numeric: true,
          },
        ],
      };
    },
    computed: {
      ingredients(): IIngredient[] {
        return this.$store.getters[INGREDIENTS];
      },
    },
    created() {
      this.$store.dispatch(GET_INGREDIENTS);
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  $header-padding: 9px 0;

  .ingredients-page {
    &-header {
      margin-bottom: $building-unit-x2_5;
      padding: $header-padding;
    }

    &-control-panel {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
