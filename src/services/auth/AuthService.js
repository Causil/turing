import Cookies from 'js-cookie';
import axiosClient from '../../config/axios';

export const login = async ({ identifier, password, remember }) => {
  try {
    const res = await axiosClient.post('/auth/local', { identifier, password });
    console.log( 'Authservices',identifier, password )
    if (remember) {
      Cookies.set(
        'session',
        JSON.stringify({
          user: {
            username: res.data.user.username,
            email: res.data.user.email
          },
          jwt: res.data.jwt,
          userRole: res.data.user.role.name
        }),
        { secure: true, expires: 7 }
      );
    } else {
      Cookies.set(
        'session',
        JSON.stringify({
          user: {
            username: res.data.user.username,
            email: res.data.user.email
          },
          jwt: res.data.jwt,
          userRole: res.data.user.role.name
        }),
        { secure: true }
      );
    }

    return {
      user: {
        username: res.data.user.username,
        email: res.data.user.email
      },
      jwt: res.data.jwt,
      userRole: res.data.user.role.name
    };
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.data[0]?.messages[0].message);
  }
};

export const register = async ({ username, email, password }) => {
  try {
    const res = await axiosClient.post('/auth/local/register', {
      username,
      email,
      password
    });

    Cookies.set(
      'session',
      JSON.stringify({
        user: {
          username: res.data.user.username,
          email: res.data.user.email
        },
        jwt: res.data.jwt,
        userRole: res.data.user.role.name
      }),
      { secure: true }
    );

    return {
      user: {
        username: res.data.user.username,
        email: res.data.user.email
      },
      jwt: res.data.jwt,
      userRole: res.data.user.role.name
    };
  } catch (error) {}
};

export const logout = async () => {
  Cookies.remove('session');
};
