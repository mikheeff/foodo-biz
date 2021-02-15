<script lang="ts">
  import Vue from 'vue';
  import { routerPagesNames } from '~/models/__routes';

  export default Vue.extend({
    name: 'Kitchen',
    middleware({ redirect }) {
      return redirect({ name: routerPagesNames.kitchen.clients });
    },
  });
</script>
