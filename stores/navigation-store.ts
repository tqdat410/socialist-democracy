import { create } from "zustand";

interface NavigationState {
  currentSection: number | null;
  setSection: (id: number | null) => void;
}

export const useNavigationStore = create<NavigationState>()((set) => ({
  currentSection: null,
  setSection: (id) => set({ currentSection: id }),
}));
