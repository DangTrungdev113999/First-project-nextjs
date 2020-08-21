import request from "@/utils/request";
import { BASE_URL } from "@/constants/index";
import { toQuerryString } from "@/utils/index";

export const fetchListPosts = async (params: Record<string, any>) =>
  await request(
    `${BASE_URL}/post/getListPagination.php${toQuerryString(params)}`
  );

export const fetchPostsByUserId = async (
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

type TypeSearchPosts = {
  pagesize: string;
  currPage: string;
  query: string;
};

export const searchPostLists = async (params: TypeSearchPosts) =>
  await request(`${BASE_URL}/post/search.php${toQuerryString(params)}`);

export const fetchCategories = async () =>
  await request(`${BASE_URL}/categories/index.php`);

type TypeSearchPostsByCategoryId = {
  pagesize: number;
  currPage: number;
  tagIndex: string;
};

export const searchPostListsByCategoryId = async (
  params: TypeSearchPostsByCategoryId
) =>
  await request(
    `${BASE_URL}/post/getListByCategory.php${toQuerryString(params)}`
  );

type TypeCreatePost = {
  obj_image: File;
  url_image: string;
  post_content: string;
  category: number[];
};

export const createPost = async (data: FormData, token: string) =>
  await request(`${BASE_URL}/post/addNew.php`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });
