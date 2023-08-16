import user from '@type/user'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null
  }),

  getters: {
    user: ({ user }) => user
  },

  actions: {
    setUser(data: user | null) {
      this.user = data ? <user>deepClone(data) : null
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}