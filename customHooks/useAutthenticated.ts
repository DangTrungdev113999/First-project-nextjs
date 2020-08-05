import { useRouter } from "next/router";
import { parseJwt } from "@/utils/index";
import { useEffect } from "react";
import jsCookie from "js-cookie";

const useAuthenticated = () => {
  const token = jsCookie.get("token");
  const router = useRouter();
  useEffect(() => {
    const userInfo = parseJwt(token);
    if (!(token && userInfo.id && userInfo.email)) {
      router.push("/login");
    }
  }, [token]);
};

export default useAuthenticated;