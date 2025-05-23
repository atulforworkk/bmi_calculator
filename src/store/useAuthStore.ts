import tokenManager from "@/utils/tokemManager";
import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  id_token: string;
  tenant_id: string;
  setAuthenticated: (status: boolean, token: string, tenantId: string) => void;
  setAuthenticatedLocal: () => void;
  logOut: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  id_token: "",
  tenant_id: "",

  setAuthenticated: (status: boolean, token: string, tenantId: string) => {
    try {
      set({ isAuthenticated: status, id_token: token, tenant_id: tenantId });
      tokenManager.saveToken("id_token", token);
      tokenManager.saveToken("tenant_id", tenantId);
      console.log("🚀 ~ useAuthStore ~ tenantId:", tenantId);
    } catch (error) {
      console.log(
        "🚀 ~ file: useAuthStore.ts:23 ~ useAuthStore ~ error:",
        error
      );
      set({ isAuthenticated: false, id_token: "", tenant_id: "" });
    }

    console.log("🚀 ~ useAuthStore ~ token:", token);
  },

  setAuthenticatedLocal: async () => {
    try {
      const token = await tokenManager.getToken("id_token");
      const tenantId = await tokenManager.getToken("tenant_id");

      if (token && tenantId) {
        set({ isAuthenticated: true, id_token: token, tenant_id: tenantId });
      } else {
        set({ isAuthenticated: false, id_token: "", tenant_id: "" });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: useAuthStore.ts:32 ~ setAuthenticatedLocal: ~ error:",
        error
      );
      set({ isAuthenticated: false, id_token: "", tenant_id: "" });
    }
  },

  logOut: () => {
    tokenManager.clearToken();
    set({ isAuthenticated: false, id_token: "", tenant_id: "" });
  },
}));
