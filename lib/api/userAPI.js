import axios, { setAccessToken } from './axios';

const fetchNonce = async (publicAddress) => {
  const { data } = await axios.get(`/auth/${publicAddress}/nonce`);
  return data;
};

const fetchUser = () => axios.get('/user').then(({ data }) => data);

const register = async ({ signature, publicAddress, username }) => {
  const {
    data: { token },
  } = await axios.post('/auth/register', {
    signature,
    publicAddress,
    username,
  });

  setAccessToken(token);

  const user = await fetchUser();

  return { token, user };
};

const login = async ({ signature, publicAddress }) => {
  const {
    data: { token },
  } = await axios.post('/auth/login', {
    signature,
    publicAddress,
  });

  setAccessToken(token);

  const user = await fetchUser();

  return { token, user };
};

const userAPI = { fetchNonce, fetchUser, login, register };

export default userAPI;
