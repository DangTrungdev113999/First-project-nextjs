import { useRouter } from "next/router";
import { parseJwt } from "@/utils/index";
import { useEffect } from "react";
import jsCookie from "js-cookie";

const useAuthenticated = (target?: string) => {
  const token = jsCookie.get("token");
  const router = useRouter();
  useEffect(() => {
    const userInfo = parseJwt(token);
    if (!(token && userInfo.id && userInfo.email)) {
      router.push(`/${target}`);
    } else {
      router.push("/");
    }
  }, [token]);
};

export default useAuthenticated;
