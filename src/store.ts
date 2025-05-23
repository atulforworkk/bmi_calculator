import { create } from "zustand";

type CounterStore = {
  count: number;
};

type OrganizationInfo = {
  id: number;
  OrganizationName: string;
  adminEmail: string;
  label: string;
};

type OrganizationStore = {
  Organization: OrganizationInfo[];
  addingInfo: (newInfo: OrganizationInfo) => void;
};
export const useOrganizationStore = create<OrganizationStore>((set) => ({
  Organization: [],
  addingInfo: (newInfo) =>
    set((state) => ({
      Organization: [...state.Organization, newInfo], // Add new info to the array
    })),
}));

export const useCounterStore = create<CounterStore>(() => ({
  count: 1,
}));

// const add user functionality

type AddUser = {
  firstName: string;
  lastName: string;
  email: string;
  tempPassword: string;
};

type AddUserStore = {
  addUser: AddUser[];
  addingUser: (user: AddUser) => void;
};

export const useAddUserStore = create<AddUserStore>((set) => ({
  addUser: [],
  addingUser: (user: AddUser) =>
    set((state) => ({
      addUser: [...state.addUser, user],
    })),
}));

type AuthState = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;
