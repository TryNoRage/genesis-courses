import { COURSES_URL } from "./consts";
import { headers } from "./consts";

export const getCourses = (token) => {
  return fetch(COURSES_URL, headers(token)).then((response) => response.json());
};
