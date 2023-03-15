export const COURSES_URL = "http://api.wisey.app/api/v1/core/preview-courses";

export const GET_TOKEN_URL =
  "http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions";
  
export const headers = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
