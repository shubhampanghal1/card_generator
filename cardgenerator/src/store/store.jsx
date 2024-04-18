import { createContext, useReducer } from "react";

let store = createContext();

function StoreProvider({ children }) {
  function postListReducer() {
    return;
  }

  function DeletePost(id) {
    return;
  }

  let [postList, dispatchPostList] = useReducer(postListReducer, [
    { id: 1, title: "Asus 5z", body: "My First Phone" },
    { id: 2, title: "Google Pixel 6a", body: "Current Phone" },
  ]);

  return (
    <>
      <store.Provider value={[postList, DeletePost]}>{children}</store.Provider>
    </>
  );
}

export default StoreProvider;
export { store };
