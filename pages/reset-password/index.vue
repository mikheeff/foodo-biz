<template>
  <div class="page auth-page reset-password-page">
    <div class="breadcrumb-container">
      <NuxtLink
        class="is-breadcrumb is-icon"
        :to="$routesNames.login"
      >
        <BaseIcon>
          <ArrowLeftIcon />
        </BaseIcon>
        {{ $t('back') }}
      </NuxtLink>
    </div>
    <div
      v-if="!isSucceed"
      class="auth-page-container"
    >
      <section class="auth-page-header">
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
            @keydown.native.enter="handleResetPassword"
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
        <button
          :disabled="$v.email.$error"
          class="button is-primary is-auth-button is-reset-password-button"
          @click="handleResetPassword"
        >
          {{ $t('resetPassword') }}
        </button>
        <div class="reset-password-footer-info">
          <p>{{ $t('notRememberEmail') }}</p>
          <NuxtLink :to="$routesNames.home">
            {{ $t('contactSupport') }}
          </NuxtLink>
        </div>
      </section>
    </div>
    <div
      v-else
      class="auth-page-container is-success"
    >
      <section class="auth-page-header">
        <h2 class="title is-size-1">
          {{ $t('resetPasswordSuccessTitle') }}
        </h2>
        <p class="subtitle auth-subtitle">
          {{ $t('resetPasswordSuccessSubtitle') }}
        </p>
      </section>
      <div class="email-success-icon" />
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
        isSucceed: false,
      };
    },
    methods: {
      handleResetPassword() {
        this.$v.$touch();

        if (this.$v.$invalid) {
          return;
        }

        this.isSucceed = true;
      },
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
  $email-success-icon-width: 254px;
  $email-success-icon-height: 188px;

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

    .is-success {
      .auth-page-header {
        margin-bottom: $building-unit-x7;
      }

      .email-success-icon {
        background: url('~assets/icons/illustrations-email.svg');
        height: $email-success-icon-height;
        width: $email-success-icon-width;
      }
    }
  }
</style>
