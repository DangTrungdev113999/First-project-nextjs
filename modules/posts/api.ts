import request from "@/utils/request";
import { BASE_URL } from "@/constants/index";
import { toQuerryString } from "@/utils/index";

export const getListPosts = async (params: Record<string, any>) =>
  await request(`${BASE_URL}/post/post.php${toQuerryString(params)}`);

export const getUserPosts = async (
  params: Record<string, any>,
  token: string
) =>
  await request(
    `${BASE_URL}/post/getListPostUserID.php${toQuerryString(params)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
