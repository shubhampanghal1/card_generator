import { useRef } from "react";

function CreatePost() {
  let postName = useRef();
  let postContent = useRef();
  function handleName(event) {
    postName = event.target.value;
  }
  function handleContent(event) {
    postContent = event.target.value;
  }
  return (
    <>
      <form className="createpost">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={(event) => handleName(event)}
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
            onChange={(event) => handleContent(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreatePost;
