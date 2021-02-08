<template>
  <div class="page auth-page reset-password-page">
    <div class="auth-page-container">
      <section class="auth-page-header">
        <NuxtLink
          class="is-breadcrumb is-icon"
          :to="$routesNames.login"
        >
          <BaseIcon>
            <ArrowLeftIcon />
          </BaseIcon>
          {{ $t('back') }}
        </NuxtLink>
        <h2 class="title is-size-1">
          {{ $t('resetPasswordTitle') }}
        </h2>
        <p class="subtitle auth-subtitle">
          {{ $t('resetPasswordSubtitle1') }}
        </p>
        <p class="subtitle auth-subtitle">
          {{ $t('resetPasswordSubtitle2') }}
        </p>
      </section>
      <section class="auth-page-form reset-password-page-form">
        <FField
          class="email-field"
          :is-danger="$v.email.$error"
          :label="$t('emailAddress')"
        >
          <FInput
            v-model="email"
            type="email"
            :is-danger="$v.email.$error"
            :placeholder="$t('emailAddressPlaceholder')"
            @blur="$v.email.$touch()"
          />
          <template
            v-if="$v.email.$error"
            slot="message"
          >
            <p v-if="!$v.email.required">
              {{ $t('required') }}
            </p>
            <p v-if="!$v.email.email">
              {{ $t('invalidEmail') }}
            </p>
          </template>
        </FField>
      </section>
      <section class="auth-page-footer reset-password-page-footer">
        <button class="button is-primary is-auth-button is-reset-password-button">
          {{ $t('resetPassword') }}
        </button>
        <div class="reset-password-footer-info">
          <p>{{ $t('notRememberEmail') }}</p>
          <NuxtLink :to="$routesNames.index">
            {{ $t('contactSupport') }}
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { email, required } from 'vuelidate/lib/validators';

  export default Vue.extend({
    name: 'ResetPassword',
    data() {
      return {
        email: '',
      };
    },
    validations: {
      email: {
        required,
        email,
      },
    },
  });
</script>

<style lang="scss" scoped>
@import '~assets/styles/utils/variables';

  .reset-password-page {
    &-form {
      margin-bottom: $building-unit-x3;
    }

    &-footer {
      display: flex;
      flex-direction: column;
    }

    .is-reset-password-button {
      margin-bottom: $building-unit-x1-5;
    }
  }
</style>
