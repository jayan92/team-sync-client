import { create, StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import createSelectors from "./selectors";

// Define the shape of your authentication state
type AuthState = {
  accessToken: string | null;
  user: null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
};

// Create the slice for authentication logic
const createAuthSlice: StateCreator<AuthState> = (set) => ({
  accessToken: null,
  user: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
});

// Combine slices if needed (currently only AuthState)
type StoreType = AuthState;

// Create the Zustand store with middleware
export const useStoreBase = create<StoreType>()(
  devtools(
    persist(
      immer((...a) => ({
        ...createAuthSlice(...a),
      })),
      {
        name: "session-storage", // Key name in sessionStorage
        getStorage: () => sessionStorage,
      }
    )
  )
);

export const useStore = createSelectors(useStoreBase);
