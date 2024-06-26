import "./App.css";
import Navbar from "./Components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/sidebar";
import CreatePost from "./Components/createpost";
import Cards from "./Components/cards";
import { useState } from "react";
import StoreProvider from "./store/store";

function App() {
  let [value, setValue] = useState("");
  function Select(val) {
    setValue(val);
  }
  return (
    <>
      <StoreProvider>
        <div className="body">
          <Sidebar Select={Select} value={value} />
          <div>
            <Navbar />
            {value === "createpost" ? <CreatePost /> : null}
            {value === "allposts" ? (
              <div className="cards">
                <Cards />
              </div>
            ) : null}
          </div>
        </div>
      </StoreProvider>
    </>
  );
}

export default App;
