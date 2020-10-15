// Login Success
export const loginSuccess = (user, family = null) => ({
  type: 'LOGIN_SUCCESS',
  user: user,
  family: family,
});

// Login Fail
export const loginFail = (error) => ({
  type: 'LOGIN_FAIL',
  message: error,
});

// Login Fail
export const updateLastSync = () => ({
  type: 'LAST_SYNC',
});

//Update user
export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',
    user: user,
  };
};

//Update token
export const updateToken = (token) => ({
  type: 'UPDATE_TOKEN',
  token: token,
});

//Update family
export const updateFamily = (family) => ({
  type: 'UPDATE_FAMILY',
  family: family,
});

//Update fcm token
export const updateFcmToken = (fcmToken) => ({
  type: 'UPDATE_FCM_TOKEN',
  fcmToken: fcmToken,
});

export const logout = () => ({
  type: 'LOGOUT',
});
