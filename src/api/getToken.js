const GET_TOKEN_URL =
  "http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions";

export const getToken = () => {
  return fetch(GET_TOKEN_URL).then((response) => response.json());
};
