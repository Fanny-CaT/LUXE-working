import { create } from 'zustand';

interface UIState {
  // UI States
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  isFilterOpen: boolean;
  
  // Theme
  theme: 'light' | 'dark';
  
  // Search
  searchQuery: string;
  
  // Actions
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  
  toggleMobileMenu: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  
  toggleSearch: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  
  toggleFilter: () => void;
  openFilter: () => void;
  closeFilter: () => void;
  
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  
  setSearchQuery: (query: string) => void;
  clearSearchQuery: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  // Initial states
  isCartOpen: false,
  isMobileMenuOpen: false,
  isSearchOpen: false,
  isFilterOpen: false,
  theme: 'light',
  searchQuery: '',

  // Cart actions
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  // Mobile menu actions
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  // Search actions
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  // Filter actions
  toggleFilter: () => set((state) => ({ isFilterOpen: !state.isFilterOpen })),
  openFilter: () => set({ isFilterOpen: true }),
  closeFilter: () => set({ isFilterOpen: false }),

  // Theme actions
  setTheme: (theme: 'light' | 'dark') => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

  // Search query actions
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  clearSearchQuery: () => set({ searchQuery: '' }),
}));