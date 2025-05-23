import { create } from "zustand";

type TenantState = {
  id: number;
  tenantId: string;
  tenantEmail: string;
  activated: boolean;
};

type TenantListState = {
  TenantList: TenantState[];
  setTenantList: (newTenant: TenantState) => void;
};
export const useTenantListStore = create<TenantListState>((set) => ({
  TenantList: [],

  setTenantList: (newTenant: TenantState) => {
    set((state) => ({
      TenantList: [...state.TenantList, newTenant],
    }));
  },
}));
