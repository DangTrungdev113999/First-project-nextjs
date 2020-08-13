import request from "@/utils/request";
import { BASE_URL } from "@/constants/index";
import { toQuerryString } from "@/utils/index";

export const fetchListPosts = async (params: Record<string, any>) =>
  await request(
    `${BASE_URL}/post/getListPagination.php${toQuerryString(params)}`
  );

export const fetchserPosts = async (
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

export const searchPostLists = async (params: Record<string, any>) =>
  await request(`${BASE_URL}/post/search.php${toQuerryString(params)}`);

export const fetchCategories = async () =>
  await request(`${BASE_URL}/categories/index.php`);
