<template>
  <div class="f-table">
    <table class="table">
      <thead class="table-head">
        <tr class="table-row">
          <th
            v-if="isCheckable"
            class="table-cell checkbox-cell"
          >
            <BCheckbox
              :value="isAllChecked"
              @change.native="checkAll"
            />
          </th>
          <th
            v-for="(column, index) in columns"
            :key="index + 'header'"
            class="table-cell"
            :class="{'is-sortable': isSortable}"
            @click.stop="sort(column)"
          >
            <div class="header-cell-container">
              <span class="sort-icon">
                <BaseIcon>
                  <ArrowTopIcon />
                </BaseIcon>
                <BaseIcon>
                  <ArrowBottomIcon />
                </BaseIcon>
              </span>
              <span class="header-cell-label">{{ column.label }}</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <template v-for="(row, index) in data">
          <tr
            :key="index"
            class="table-row"
            @click="selectRow(row)"
          >
            <td
              v-if="isCheckable"
              class="table-cell checkbox-cell"
            >
              <BCheckbox
                class="table-cell-checkbox"
                :value="isRowChecked(row)"
                :disabled="!isRowCheckable(row)"
                @click.native.prevent.stop="checkRow(row)"
              />
            </td>
            <template v-for="(column, colIndex) in columns">
              <td
                :key="colIndex"
                class="table-cell"
              >
                {{ row[column.field] }}
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import Vue, { PropType } from 'vue';
  import { ITableColumn, SortingOrder } from '~/components/common/FTable/utils';

  export default Vue.extend({
    props: {
      data: {
        type: Array as PropType<object[]>,
        default: () => [],
      },
      columns: {
        type: Array as PropType<ITableColumn[]>,
        default: () => [],
      },
      trackBy: {
        type: Function as PropType<(row: object) => string | number | object>,
        default: row => row,
      },
      isCheckable: {
        type: Boolean,
        default: true,
      },
      checkedRows: {
        type: Array as PropType<object[]>,
        default: () => [],
      },
      isRowCheckable: {
        type: Function as PropType<(row: object) => boolean>,
        default: row => !!row,
      },
      isSortable: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isAscending: true,
      };
    },
    computed: {
      isAllChecked(): boolean {
        const validData = this.data.filter(row => this.isRowCheckable(row));

        if (validData.length === 0) {
          return false;
        }

        return validData.every(row => this.isRowChecked(row));
      },
    },
    methods: {
      checkAll() {
        const checkedUncheckableRows = this.data
          .filter(row => !this.isRowCheckable(row) && this.isRowChecked(row));

        const checkedRows = this.isAllChecked
          ? [...checkedUncheckableRows]
          : [...this.data.filter(row => this.isRowCheckable(row)), ...checkedUncheckableRows];

        this.$emit('check', checkedRows);
      },
      sort(column: ITableColumn) {
        this.$emit('sort', column.field, this.isAscending ? SortingOrder.ASCENDING : SortingOrder.DESCENDING);
      },
      selectRow(row: object) {
        this.$emit('click', row);
      },
      isRowChecked(row: object) {
        return this.checkedRows
          .map(checkedRow => this.trackBy(checkedRow))
          .includes(this.trackBy(row));
      },
      checkRow(row: object) {
        if (!this.isRowCheckable(row)) {
          return;
        }

        const newCheckedRows = this.isRowChecked(row)
          ? this.checkedRows.filter(checkedRow => this.trackBy(checkedRow) !== this.trackBy(row))
          : [...this.checkedRows, row];

        this.$emit('check', newCheckedRows);
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  .f-table {
    .table {
      width: 100%;
    }

    .header-cell-container {
      display: flex;
      align-items: center;
      color: $gray-light;
      text-transform: uppercase;
      font-size: $head-6;
      line-height: $lh-7;
      letter-spacing: 0;

      .sort-icon {
        display: flex;
        color: $gray-193;
        flex-direction: column;
        margin-right: $building-unit_x0_5;
      }
    }

    .table-row:nth-child(even) {
      background-color: rgba($gray-211-2, 0.14);
    }

    .table-cell {
      height: $building-unit-x5;
      border-color: transparent;
      padding: $building-unit_x0_5 $building-unit_x1_5 $building-unit_x0_5 0;
      vertical-align: middle;

      &:first-child {
        padding-left: $building-unit;
      }

      &:last-child {
        padding-right: $building-unit;
      }

      &.checkbox-cell {
        width: 55px;
      }

      .table-cell-checkbox {
        margin-right: 0;
        width: 20px;
      }
    }
  }
</style>
