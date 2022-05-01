const moduleA = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    test1(state){
      state.count=1
    }
  },
  actions: {
     test1({commit}){
       commit("test1")
     }
  }
}

export default moduleA
