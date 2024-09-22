import { create } from "zustand";

interface State {
  hidden: boolean;
  setHidden: (value: boolean) => void;
}

const useShowHeaderStore = create<State>((set) => ({
  hidden: false,
  setHidden: (hidden) => set({ hidden }),
}));

export default useShowHeaderStore;
