<template>
  <div class="login">
    <h1>{{ $t('authorization') }}</h1>
    <UserAuthForm />
  </div>
</template>

<script>
import UserAuthForm from '@/components/Auth/Login/UserAuthForm'
export default {
  name: 'Login',
  components: { UserAuthForm },
}
</script>
