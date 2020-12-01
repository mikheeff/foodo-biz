<template>
  <div class="login">
    <h1>{{ $t('registration') }}</h1>
    <form action="#" method="post">
      <label>
        <input type="text" name="email" />
      </label>
      <label>
        <input type="password" name="password" />
      </label>
      <button type="submit">{{ $t('register') }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  layout: 'auth/auth_layout',
  auth: false,
}
</script>
