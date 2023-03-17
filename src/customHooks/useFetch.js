import { useState, useEffect } from "react";
import { getToken } from "../api/getToken";
import { getCourse } from "../api/getCourse";

const useFetch = (idCourse = "") => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getToken().then((res) => setToken(res.token));
  }, []);

  useEffect(() => {
    if (token) {
      getCourse(token, idCourse).then((res) => {
        setData(idCourse ? res : res.courses);
        setIsLoading(false);
      });
    }
  }, [token]);

  return [data, isLoading];
};

export default useFetch;
