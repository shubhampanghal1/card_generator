import { createContext } from "react";

let store = createContext();

function StoreProvider({ children }) {
  return (
    <>
      <store.Provider>{children}</store.Provider>
    </>
  );
}

export default StoreProvider;
export { store };
