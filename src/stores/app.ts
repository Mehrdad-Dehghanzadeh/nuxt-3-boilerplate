import user from '@type/user'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null
  }),

  getters: {
    getUser: ({ user }) => user
  },

  actions: {
    setUser(data: user | null) {
      debugger
      this.user = <any>(data && deepClone(data))
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
