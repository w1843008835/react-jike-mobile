import "./style.css";
import { Tabs } from "antd-mobile";

import useTabs from "./useTabs";
import HomeList from "./HomeList";

const Home = () => {
  const { chanels } = useTabs();
  return (
    <div className="tabContainer">
      {" "}
      <Tabs>
        {chanels.map((item) => (
          <Tabs.Tab title={item.name} key={item.id}>
            <div className="listContainer">
              <HomeList art_id={item.id} />
            </div>
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};
export default Home;
