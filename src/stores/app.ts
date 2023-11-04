import type User from '@type/User'

type UserState = User | null
type State = {
  user: UserState
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
    setUser(data: UserState) {
      this.user = <UserState>(data ? deepClone(data) : null)
    },

    setIslogin(value: boolean) {
      this.isLogin = value
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
