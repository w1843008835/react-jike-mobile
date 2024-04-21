import { Image, List } from "antd-mobile";
// mock数据
import { users } from "./users";
import { useEffect, useState } from "react";
import { ListRes, fetchListAPI } from "@/apis/list";

type Props = {
  art_id: string;
};
const HomeList = (props: Props) => {
  const { art_id } = props;
  const [listRes, setListRes] = useState<ListRes>({
    article: [],
    pre_timestamp: "" + new Date().getTime(),
  });

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await fetchListAPI({
          art_id: art_id,
          timestamp: "" + new Date().getTime(),
        });
        setListRes({
          article: res.data.data.article,
          pre_timestamp: res.data.data.pre_timestamp,
        });
      } catch (error) {
        throw new Error("fetch list error");
      }
    };
    getList();
  }, []);
  return (
    <>
      <List>
        {listRes.article.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={item.pubdate}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default HomeList;
