import { createStore } from 'vuex';

const defaultState = {
  forms: []
};

const actions = {};

const store = createStore<typeof defaultState>({
  state() {
    return defaultState;
  },
  actions
});

declare module 'vuex' {
  type StoreStateType = typeof store.state;
  export function useStore<S = StoreStateType>(): Store<S>;

  type ActionsType = typeof actions;
  export interface Dispatch {
    (type: keyof ActionsType, payload?: any, options?: DispatchOptions): ReturnType<ActionsType[keyof ActionsType]>;
  }
}

export default store;
