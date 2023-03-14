import { COURSES_URL } from "./consts";
import { headers } from "./consts";

export const getCourse = (token, idCourse) => {
  return fetch(`${COURSES_URL}+/${idCourse}`, headers(token)).then((response) =>
    response.json()
  );
};
