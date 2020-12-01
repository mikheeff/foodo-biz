<template>
  <div class="wrapper">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'Cabinet',
  auth: 'guest',
  middleware: 'auth',
}
</script>
