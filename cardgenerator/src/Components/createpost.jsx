import { useContext, useRef } from "react";
import { store } from "../store/store";

function CreatePost() {
  let postNameInput = useRef();
  let postContentInput = useRef();
  let AddP = useContext(store);
  let addPost = AddP[2];

  function HandleSubmit() {
    let postName = postNameInput.current.value;
    let postContent = postContentInput.current.value;

    addPost(postName, postContent);

    postNameInput.current.value = "";
    postContentInput.current.value = "";
  }

  return (
    <>
      <form className="createpost" onSubmit={HandleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            ref={postNameInput}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Content
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            ref={postContentInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
