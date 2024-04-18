import { createContext, useReducer } from "react";

let store = createContext();

function StoreProvider({ children }) {
  function postListReducer() {
    return;
  }

  let [postList, dispatchPostList] = useReducer(postListReducer, [
    { title: "Asus 5z", body: "My First Phone", notifications: "5" },
    { title: "Google Pixel 6a", body: "Current Phone", notifications: "2" },
  ]);

  return (
    <>
      <store.Provider value={[postList]}>{children}</store.Provider>
    </>
  );
}

export default StoreProvider;
export { store };
