<template>
  <div class="page auth-page register-page">
    <div class="auth-page-container">
      <section class="auth-page-header">
        <i18n
          path="welcomeTitle"
          tag="h2"
          class="title is-size-1"
        >
          <br>
          <span class="app-name">{{ $t('foodo') }}</span>
        </i18n>
        <p class="subtitle">
          {{ $t('signUpSubtitle') }}
        </p>
        <p class="subtitle">
          {{ $t('signUpSubtitle2') }}
        </p>
      </section>
      <section class="auth-page-form">
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
            @keydown.native.enter="signUp"
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
        <FField
          class="password-field"
          :is-danger="$v.password.$error"
          :label="$t('password')"
        >
          <FInput
            v-model="password"
            type="password"
            class="has-icon-right"
            :is-danger="$v.password.$error"
            :icon-right="IconType.EYE_ICON"
            :is-icon-right-clickable="Boolean(password)"
            :placeholder="$t('signUpPasswordPlaceholder')"
            @keydown.native.enter="signUp"
            @blur="$v.password.$touch()"
          >
            <template slot="notification">
              <FNotification
                class="confirm-password-help is-large"
                :icon="IconType.LOCK_ICON"
              >
                {{ $t('signUpConfirmPasswordHelp') }}
              </FNotification>
            </template>
          </FInput>
          <template
            v-if="$v.password.$error"
            slot="message"
          >
            <p v-if="!$v.password.required">
              {{ $t('required') }}
            </p>
          </template>
        </FField>
        <FField
          class="confirm-password-field"
          :is-danger="$v.confirmPassword.$error"
          :label="$t('signUpConfirmPasswordLabel')"
        >
          <FInput
            v-model="confirmPassword"
            type="password"
            class="has-icon-right"
            :is-danger="$v.confirmPassword.$error"
            :icon-right="IconType.EYE_ICON"
            :is-icon-right-clickable="Boolean(confirmPassword)"
            :placeholder="$t('signUpConfirmPasswordLabel')"
            @keydown.native.enter="signUp"
            @blur="$v.confirmPassword.$touch()"
          />
          <template
            v-if="$v.confirmPassword.$error"
            slot="message"
          >
            <p v-if="!$v.confirmPassword.required">
              {{ $t('required') }}
            </p>
            <p v-else-if="!$v.confirmPassword.sameAsPassword">
              {{ $t('passwordsNotMatched') }}
            </p>
          </template>
        </FField>
        <FField
          class="company-name-field"
          :is-danger="$v.companyName.$error"
          :label="$t('signUpCompanyNameLabel')"
        >
          <div class="company-name-input-container">
            <FInput
              v-model="companyName"
              :is-danger="$v.companyName.$error"
              :placeholder="$t('signUpCompanyNamePlaceholder')"
              @keydown.native.enter="signUp"
              @blur="$v.companyName.$touch()"
            />
            <FInfoLabel
              class="site-info-label"
              :tooltip-text="$t('signUpSiteLabelTooltip')"
            >
              {{ $t('foodoUrl') }}
            </FInfoLabel>
          </div>
          <template
            v-if="$v.companyName.$error"
            slot="message"
          >
            <p v-if="!$v.companyName.required">
              {{ $t('required') }}
            </p>
          </template>
        </FField>
      </section>
      <section class="auth-page-form-addition">
        <FField class="remember-me-field">
          <BSwitch v-model="isAcceptPolitics">
            <i18n
              path="signUpPolitics"
              tag="p"
            >
              <NuxtLink :to="$routesNames.home">
                {{ $t('signUpPoliticsLink') }}
              </NuxtLink>
            </i18n>
          </BSwitch>
        </FField>
      </section>
      <section class="register-page-footer">
        <div class="columns">
          <div class="column">
            <button
              class="button is-primary is-auth-button is-register-button"
              :disabled="$v.$anyError || !isAcceptPolitics"
              @click="signUp"
            >
              {{ $t('signUpButtonText') }}
            </button>
          </div>
          <div class="column">
            <p>{{ $t('signUpQuestion') }}</p>
            <NuxtLink :to="$routesNames.login">
              {{ $t('signUpEnterLink') }}
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { email, required, sameAs } from 'vuelidate/lib/validators';
  import { IconType } from '~/models/enums/IconType';

  export default Vue.extend({
    name: 'Register',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        isAcceptPolitics: false,
        IconType,
      };
    },
    methods: {
      signUp() {
        this.$v.$touch();
      },
    },
    validations: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
      companyName: {
        required,
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import '~assets/styles/utils/variables';
  @import '~assets/styles/utils/mixins';

  .register-page {
    padding-top: $building-unit-x3;

    .app-name {
      color: $aqua-dark;
    }

    .auth-page-form-addition {
      margin-bottom: $building-unit-x3;
    }

    .company-name-input-container {
      position: relative;
    }

    .site-info-label {
      @include absolute-y-center;
      left: 100%;
      margin-left: $building-unit-x1_5;
      font-weight: $font-weight-extra-bold;
      color: $gray-dark;
    }
  }
</style>
