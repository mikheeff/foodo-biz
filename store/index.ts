import { GetterTree, MutationTree, ActionTree } from 'vuex';
import {
  IS_AUTHORIZED,
  LOGIN_ERROR, REGISTRATION_COMPANY_NAME,
  REGISTRATION_CONFIRM_PASSWORD,
  REGISTRATION_EMAIL,
  REGISTRATION_PASSWORD,
  TOKEN,
} from '~/store/getter-types';
import {
  UPDATE_LOGIN_ERROR,
  UPDATE_LOGIN_IS_LOADING, UPDATE_REGISTRATION_COMPANY_NAME,
  UPDATE_REGISTRATION_CONFIRM_PASSWORD,
  UPDATE_REGISTRATION_EMAIL,
  UPDATE_REGISTRATION_HAS_ERROR,
  UPDATE_REGISTRATION_IS_IN_PROGRESS,
  UPDATE_REGISTRATION_PASSWORD,
  UPDATE_TOKEN,
} from '~/store/mutation-types';
import { LOGIN, LOGOUT, REGISTER_USER } from '~/store/action-types';
import { IError } from '~/models/interfaces/IError';
import AuthService from '~/services/AuthService';
import { IRegisterPayload } from '~/models/interfaces/user/IRegisterPayload';

interface ILoginState {
  email: string;
  password: string;
  loginError: IError | null;
  isLoginLoading: boolean;
}

interface IRegistrationState {
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  isRegistrationInProgress: boolean;
  hasRegistrationError: boolean;
}

export interface IRootState {
  isMobile: boolean;
  token: string | null;
  loginState: ILoginState;
  registerState: IRegistrationState;
}

const INITIAL_LOGIN_STATE: ILoginState = {
  email: '',
  password: '',
  loginError: null,
  isLoginLoading: false,
};

const INITIAL_REGISTRATION_STATE: IRegistrationState = {
  email: '',
  password: '',
  confirmPassword: '',
  companyName: '',
  isRegistrationInProgress: false,
  hasRegistrationError: false,
};

function getRegisterPayloadFromState(state: IRootState): IRegisterPayload {
  const { companyName, email, password, confirmPassword } = state.registerState;
  return {
    name: companyName,
    email,
    password,
    passwordConfirmation: confirmPassword,
  };
}

export const state = (): IRootState => ({
  isMobile: false,
  token: null,
  loginState: { ...INITIAL_LOGIN_STATE },
  registerState: { ...INITIAL_REGISTRATION_STATE },
});

export const getters: GetterTree<IRootState, IRootState> = {
  [TOKEN]: state => state.token,
  [IS_AUTHORIZED]: state => state.token !== null,
  [LOGIN_ERROR]: state => state.loginState.loginError,
  [REGISTRATION_EMAIL]: state => state.registerState.email,
  [REGISTRATION_PASSWORD]: state => state.registerState.password,
  [REGISTRATION_CONFIRM_PASSWORD]: state => state.registerState.confirmPassword,
  [REGISTRATION_COMPANY_NAME]: state => state.registerState.companyName,
};

export const mutations: MutationTree<IRootState> = {
  [UPDATE_TOKEN](state, value: string | null) {
    state.token = value;
  },
  [UPDATE_LOGIN_ERROR](state, value: IError | null) {
    state.loginState.loginError = value;
  },
  [UPDATE_LOGIN_IS_LOADING](state, value: boolean) {
    state.loginState.isLoginLoading = value;
  },
  [UPDATE_REGISTRATION_IS_IN_PROGRESS](state, value: boolean) {
    state.registerState.isRegistrationInProgress = value;
  },
  [UPDATE_REGISTRATION_HAS_ERROR](state, value: boolean) {
    state.registerState.hasRegistrationError = value;
  },
  [UPDATE_REGISTRATION_EMAIL](state, value: string) {
    state.registerState.email = value;
  },
  [UPDATE_REGISTRATION_PASSWORD](state, value: string) {
    state.registerState.password = value;
  },
  [UPDATE_REGISTRATION_CONFIRM_PASSWORD](state, value: string) {
    state.registerState.confirmPassword = value;
  },
  [UPDATE_REGISTRATION_COMPANY_NAME](state, value: string) {
    state.registerState.companyName = value;
  },
};

export const actions: ActionTree<IRootState, IRootState> = {
  [LOGIN]({ commit }, { email, password }) {
    return this.$auth.loginWith('local', { data: { email, password } })
      .then((res) => {
        commit(UPDATE_TOKEN, res);
      });
  },
  [REGISTER_USER]({ commit, state }) {
    const payload = getRegisterPayloadFromState(state);
    commit(UPDATE_REGISTRATION_IS_IN_PROGRESS, true);
    commit(UPDATE_REGISTRATION_HAS_ERROR, false);

    return AuthService.registerUser(payload)
      .finally(() => {
        commit(UPDATE_REGISTRATION_IS_IN_PROGRESS, false);
      });
  },
  [LOGOUT]() {
    return this.$auth.logout();
  },
};
