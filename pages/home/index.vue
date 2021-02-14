<script lang="ts">
  import Vue from 'vue';
  import { routerPagesNames } from '~/models/__routes';

  export default Vue.extend({
    name: 'Home',
    middleware({ redirect }) {
      return redirect({ name: routerPagesNames.home.statistics });
    },
  });
</script>
