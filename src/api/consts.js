export const COURSES_URL = "http://api.wisey.app/api/v1/core/preview-courses";

export const headers = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
