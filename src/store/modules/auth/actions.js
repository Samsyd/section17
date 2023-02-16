export default {
  // login(context, payload){},
  async signup(context, payload) {
    // fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]`)
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDCMdvXVfdSVgbsjLl8RbdxnqXpH5CwfvY`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      })
    })
    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || 'Failed to authenticate.')
      throw error;
    }

    console.log(responseData);
    // responseData payload
    // Property Name	Type	Description
    // idToken: string, A Firebase Auth ID token generated from the provided custom token.
    // refreshToken: string, A Firebase Auth refresh token generated from the provided custom token.
    // expiresIn: string, The number of seconds in which the ID token expires.

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    })
  },
}