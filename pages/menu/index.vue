<script lang="ts">
  import Vue from 'vue';
  import { routerPagesNames } from '~/models/__routes';

  export default Vue.extend({
    name: 'Menu',
    middleware({ redirect }) {
      return redirect({ name: routerPagesNames.menu.plans });
    },
  });
</script>
