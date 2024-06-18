import { create } from "zustand"

type ToggleStoreState = {
    isToggled: boolean;
    toggle: () => void;
};

const useToggle = create<ToggleStoreState>((set) => ({
    isToggled: false,
    toggle: () => set((state) => ({ isToggled: !state.isToggled }))
}))

export default useToggle