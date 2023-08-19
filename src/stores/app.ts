import user from '@type/user'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null,
    isLogin: false
  }),

  getters: {
    getUser: ({ user }) => user
  },

  actions: {
    setUser(data: user | null) {
      this.user = <any>(data && deepClone(data))
    },

    setIslogin(value: boolean) {
      this.isLogin = value
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
