import { create } from "zustand";

interface State {
  user: string;
  setUser: (user: string) => void;
}

const useUserStore = create<State>((set) => ({
  user: "",
  setUser: (user) => set({ user }),
}));

export default useUserStore;
