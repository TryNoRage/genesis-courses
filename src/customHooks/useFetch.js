import { useState, useEffect } from "react";
import { getToken } from "../api/getToken";
import { getCourse } from "../api/getCourse";

export const useFetch = (idCourse = "") => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getToken().then((res) => setToken(res.token));
  }, []);

  useEffect(() => {
    if (token) {
      getCourse(token, idCourse).then((res) => {
        setData(idCourse ? res : res.courses);
      });
    }
    setLoading(false);
  }, [token]);

  return [data, loading];
};
