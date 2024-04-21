import { useEffect, useState } from "react";
import "./style.css";
import { Tabs } from "antd-mobile";
import { fetchChanelAPI, type ChanelItem } from "@/apis/list";

const Home = () => {
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
  return (
    <div className="tabContainer">
      {" "}
      <Tabs>
        {chanels.map((item) => (
          <Tabs.Tab title={item.name} key={item.id}>
            {item.name}
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};
export default Home;
