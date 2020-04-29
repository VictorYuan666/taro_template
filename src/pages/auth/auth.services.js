import { post } from "@utils/request";

export const login = (obj) => {
  const url = "/api/login";

  return post(url, obj);
};
