const getters = {
  sidebar:  state => state.app.sidebar,
  device:   state => state.app.device,
  routers:  state => state.router.roles,
  sheet:    state => state.app.bottomsheet,
  coming:    state => state.app.coming,
}
export default getters
