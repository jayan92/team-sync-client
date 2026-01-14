/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreApi, UseBoundStore } from "zustand";

// Extend the store with a `.use` object containing typed selectors
type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

// Create selectors for each key in the store's state
export const createSelectors = <S extends UseBoundStore<StoreApi<any>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};

  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export default createSelectors;
