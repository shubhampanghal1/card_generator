import "./App.css";
import Navbar from "./Components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/sidebar";

function App() {
  return (
    <>
      <div className="body">
        <Sidebar />
        <div>
          <Navbar className="inner" />
        </div>
      </div>
    </>
  );
}

export default App;
