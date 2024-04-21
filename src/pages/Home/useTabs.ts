import { useEffect, useState } from "react";
import { fetchChanelAPI, type ChanelItem } from "@/apis/list";
function useTabs() {
  const [chanels, setChanels] = useState<ChanelItem[]>([]);
  useEffect(() => {
    const getChanels = async () => {
      try {
        const res = await fetchChanelAPI();

        setChanels(res.data.data.chanels);
      } catch (error) {
        throw new Error("fetch chanel error");
      }
    };
    getChanels();
  }, []);
  return { chanels };
}

export default useTabs;
