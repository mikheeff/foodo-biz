<script lang="ts">
  import Vue from 'vue';
  import { routerPagesNames } from '~/models/__routes';

  export default Vue.extend({
    name: 'Setting',
    middleware({ redirect }) {
      return redirect({ name: routerPagesNames.settings.profile });
    },
  });
</script>
