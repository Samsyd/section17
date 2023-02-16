export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    // if(state.token){
    //   return true
    // }else{
    //   return false
    // }

    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
}