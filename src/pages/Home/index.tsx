import "./style.css";
import { Tabs } from "antd-mobile";

import useTabs from "./useTabs";

const Home = () => {
  const { chanels } = useTabs();
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
