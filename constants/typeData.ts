export type PostDataType = {
  PID: string;
  USERID: string;
  fullname: string;
  profilepicture: string;
  url_image: string;
  post_content: string;
  time_added: string;
  status: string;
  count: string | null;
};

export type TypeUser = {
  USERID: string;
  email: string;
  fullname: string;
  gender: string;
  description: string;
  profilepicture: string;
  status: string;
  profileviews?: string;
  youviewed?: string;
  yourviewed?: string;
};

export type TypeCategories = {
  id: string;
  text: string;
};
