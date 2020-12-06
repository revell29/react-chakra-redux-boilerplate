import HTTP from "./HTTP";

const authRequest = {
  login: async (params) => {
    return new Promise((resolve, reject) => {
      HTTP.post(`/auth/login`, params, { withCredentials: true })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  verify: async () => {
    return new Promise((resolve, reject) => {
      HTTP.post(
        `/auth/verify`,
        {},
        { withCredentials: true, headers: { Authorization: localStorage.getItem("token") } }
      )
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => reject(error.response));
    });
  },
};

export default authRequest;
