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
