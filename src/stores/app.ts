import user from '@type/user'

type userState = user | null

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null,
    isLogin: false
  }),

  getters: {
    getUser: ({ user }) => user
  },

  actions: {
    setUser(data: userState) {
      this.user = <userState>(data ? deepClone(data) : null)
    },

    setIslogin(value: boolean) {
      this.isLogin = value
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
