import { useEffect } from "react";

export const useCheckLogin = () => {
  // token 비교
  useEffect(() => {
    if (window.location.href !== "http://localhost:8080/login")
      window.location.href = "/login";
  }, [window.location]);
};
