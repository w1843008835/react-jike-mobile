import { http } from "@/utils";
import type { ResType } from "./share";

export type ChanelItem = {
  id: string;
  name: string;
};

type ChanelRes = {
  chanels: ChanelItem[];
};

export function fetchChanelAPI() {
  return http.request<ResType<ChanelRes>>({
    url: "/data",
  });
}

type ListItem = {
  art_id: string;
  title: string;
  aut_id: string;
  comm_count: number;
  pubdate: string;
  aut_name: string;
  is_top: number;
  cover: {
    type: number;
    images: string[];
  };
};

export type ListRes = {
  article: ListItem[];
  pre_timestamp: string;
};

type ReqParams = {
  art_id: string;
  timestamp: string;
};
export function fetchListAPI(params: ReqParams) {
  return http.request<ResType<ListRes>>({
    url: "/data",
    params,
  });
}
