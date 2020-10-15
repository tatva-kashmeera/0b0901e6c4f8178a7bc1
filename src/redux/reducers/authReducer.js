// Initial State
const initialState = {
  user: null,
  token: null,
  lastSync: null,
  fcmToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {
        ...state,
        user: action.user,
      };
    }
    case 'UPDATE_TOKEN': {
      return {
        ...state,
        token: action.token,
      };
    }
    case 'LOGOUT': {
      return {
        user: null,
        token: null,
      };
    }
    case 'UPDATE_FCM_TOKEN': {
      return {
        ...state,
        fcmToken: action.fcmToken,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
