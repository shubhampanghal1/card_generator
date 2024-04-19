import { createContext, useReducer } from "react";

let store = createContext();

function StoreProvider({ children }) {
  function postListReducer(currPostList, action) {
    let newPostList = currPostList;
    if (action.type == "Delete_Post") {
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.itemID
      );
    } else if (action.type == "Add_Post") {
      newPostList = [
        ...currPostList,
        { title: action.payload.postName, body: action.payload.postContent },
      ];
    }
    return newPostList;
  }

  function DeletePost(itemID) {
    dispatchPostList({
      type: "Delete_Post",
      payload: {
        itemID,
      },
    });
  }

  function AddPost(postName, postContent) {
    dispatchPostList({
      type: "Add_Post",
      payload: {
        postName: postName,
        postContent: postContent,
      },
    });
  }

  let [postList, dispatchPostList] = useReducer(postListReducer, [
    { id: 1, title: "Asus 5z", body: "My First Phone" },
    { id: 2, title: "Google Pixel 6a", body: "Current Phone" },
  ]);

  return (
    <>
      <store.Provider value={[postList, DeletePost, AddPost]}>
        {children}
      </store.Provider>
    </>
  );
}

export default StoreProvider;
export { store };
