import { useContext } from "react";
import Card from "./card";
import { store } from "../store/store";

function Cards() {
  let list = useContext(store);
  return (
    <>
      {list[0].map((x) => (
        <Card x={x} />
      ))}
    </>
  );
}

export default Cards;
