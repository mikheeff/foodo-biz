<template>
  <div class="f-pagination">
    <transition name="fade-horizontal">
      <BPagination
        v-if="!isSearchExpanded"
        :current="value"
        :total="total"
        per-page="10"
        tabindex="-1"
        order="is-centered"
        @update:current="emitValue"
      />
    </transition>
    <FInput
      v-if="hasSearch"
      ref="searchInput"
      class="search-input"
      :class="{
        'is-collapsed': !isSearchExpanded,
        'has-icon-left is-large': isSearchExpanded,
      }"
      :value="searchValue"
      :is-icon-left-large="true"
      :icon-left="IconType.SEARCH_ICON"
      @click.native="handleSearchInputClick"
      @input="emitSearch"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { IconType } from '~/models/enums/IconType';

  export default Vue.extend({
    props: {
      value: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      hasSearch: {
        type: Boolean,
        default: true,
      },
      searchValue: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        isFocused: false,
        IconType,
      };
    },
    computed: {
      isSearchExpanded(): boolean {
        return this.isFocused || Boolean(this.searchValue);
      },
    },
    methods: {
      emitValue(value: string | number) {
        this.$emit('input', value);
      },
      emitSearch(value: string) {
        this.$emit('search', value);
      },
      handleSearchInputClick() {
        const searchInput = this.$refs.searchInput as Vue;

        if (searchInput && searchInput.$refs.input) {
          (searchInput.$refs.input as HTMLElement).focus();
        }
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  $expanded-input-width: 343px;
  $pagination-width: 280px;

  .f-pagination {
    display: flex;

    .pagination {
      width: $pagination-width;
    }

    ::v-deep .search-input {
      .input {
        transition: width $transition-default;
        width: $expanded-input-width;
      }

      .f-input-icon {
        color: $gray;
        cursor: pointer;
      }

      &.is-collapsed {
        .input {
          border-color: transparent;
          box-shadow: none;
          width: $building-unit-x4;
        }

        .f-input-icon {
          color: $gray-193;

          &:hover {
            color: $gray;
          }
        }
      }
    }
  }
</style>
