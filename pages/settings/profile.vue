<template>
  <div>
    Profile Setting
    {{ user }}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { IUser } from '~/models/interfaces/user/IUser';

  export default Vue.extend({
    name: 'ProfileSetting',
    computed: {
      user(): IUser {
        return this.$store.state.auth.user;
      },
    },
  });
</script>
