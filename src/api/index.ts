import auth from "./auth";

export const setHeader = () => {
  const token = localStorage.getItem("token");

  return {
    Accept: "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
};

export default {
  auth,
};
