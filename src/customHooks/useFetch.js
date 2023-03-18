import { useState, useEffect } from "react";
import { getToken } from "../api/getToken";
import { getCourse } from "../api/getCourse";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const useFetch = (idCourse = "") => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getToken().then((res) => setToken(res.token));
  }, []);

  useEffect(() => {
    if (token) {
      getCourse(token, idCourse)
        .then((res) => {
          setData(idCourse ? res : res.courses);
        })
        .catch((error) => setIsError(error))
        .finally(() => setIsLoading(false));
    }
  }, [token]);

  if (isError) {
    return <NotFoundPage/>
  }

  return [data, isLoading];
};

export default useFetch;
