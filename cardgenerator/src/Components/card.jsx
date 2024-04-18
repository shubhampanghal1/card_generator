import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { store } from "../store/store";

function Card({ x }) {
  let delPost = useContext(store);
  let deletePost = delPost[1];
  return (
    <>
      <div class="card text-bg-warning " style={{ width: "200px" }}>
        <div class="card-body">
          <h5 class="card-title">{x.title}</h5>
          <p class="card-text">{x.body}</p>
          <a href="#" class="btn btn-light">
            More Information about This Phone
          </a>
          <button
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
            onClick={() => deletePost(x.id)}
          >
            <TiDelete />
            <span class="visually-hidden">unread messages</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
