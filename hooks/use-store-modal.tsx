import { create } from "zustand";

import { useStoreModalStore } from "@/lib/interface";

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
