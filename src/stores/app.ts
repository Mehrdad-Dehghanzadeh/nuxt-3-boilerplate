import User from '@type/user'

type userState = User | null
type State = {
  user: userState
  isLogin: boolean
}

export const useAppStore = defineStore('app', {
  state: (): State => ({
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
