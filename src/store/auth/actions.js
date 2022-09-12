export default {
  async signUp(context, payload) {
    const baseUrl = process.env.VUE_APP_API_AUTH_SIGNUP;
    const response = await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || `Failed to authenticate. Check your login data.`
      );
      throw error;
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async login(context, payload) {
    const baseUrl = process.env.VUE_APP_API_AUTH_SIGNIN;
    console.log(baseUrl);
    const response = await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || `Failed to authenticate. Check your login data.`
      );
      throw error;
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
