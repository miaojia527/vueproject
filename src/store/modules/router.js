
const router = {
  state: {
    roles: []
  },
  mutations: {
    SET_ROUTERS: (state, roles)=> {
        state.roles = roles
    },
  },
}

export default router
