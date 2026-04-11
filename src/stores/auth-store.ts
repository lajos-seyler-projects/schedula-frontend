import { create } from 'zustand';

type AuthState = {
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setAccessToken: (token: string | null) => void;
  setLoading: (v: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  isAuthenticated: false,
  isLoading: true,

  setAccessToken: (token) =>
    set({
      accessToken: token,
      isAuthenticated: !!token,
    }),

  setLoading: (v) => set({ isLoading: v }),

  logout: () =>
    set({
      accessToken: null,
      isAuthenticated: false,
    }),
}));
