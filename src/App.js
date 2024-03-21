import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getBurgerMenus } from "./api/MenuAPI";

import MenuLayout from "./layouts/MenuLayout";

import BurgerMenus from "./pages/BurgerMenus";
import ChickenMenus from "./pages/ChickenMenus";

function App() {

  const [burgerMenuList, setBurgerMenuList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(
    () => {
      setBurgerMenuList(getBurgerMenus());
    },
    []
  )

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuLayout
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            change={change}
            setChange={setChange}
          />}>
            <Route index element={<BurgerMenus
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
            <Route path="burgermenu" element={<BurgerMenus
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
            <Route path="chickenmenu" element={<ChickenMenus
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
