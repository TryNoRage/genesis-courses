import { GET_TOKEN_URL } from "./consts";

export const getToken = () => {
  return fetch(GET_TOKEN_URL).then((response) => response.json());
};
