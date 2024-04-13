import "./App.css";
import Navbar from "./Components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/sidebar";
import CreatePost from "./Components/createpost";
import Cards from "./Components/cards";

function App() {
  return (
    <>
      <div className="body">
        <Sidebar />
        <div>
          <Navbar />
          <CreatePost />
          <div className="cards">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
