import { useContext } from "react";
import Card from "./card";
import { store } from "../store/store";

function Cards() {
  let list = useContext(store);

  console.log(list);
  return <></>;
}

export default Cards;
