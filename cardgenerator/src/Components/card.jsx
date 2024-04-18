function Card({ x }) {
  return (
    <>
      <div class="card text-bg-warning " style={{ width: "200px" }}>
        <div class="card-body">
          <h5 class="card-title">{x.title}</h5>
          <p class="card-text">{x.body}</p>
          <a href="#" class="btn btn-light">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
