import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuLayout from "./layouts/MenuLayout";
import OrderLayout from "./layouts/OrderLayout";
import StandardLayout from "./layouts/StandardLayout";

import BurgerMenus from "./pages/BurgerMenus";
import ChickenMenus from "./pages/ChickenMenus";
import Card from "./pages/Card";
import AppCard from "./pages/AppCard";
import Receipt from "./pages/Receipt";

function App() {

  const [selectedItems, setSelectedItems] = useState([]);
  const [change, setChange] = useState(false);
  const [waitingNum, setWaitingNum] = useState(1);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route/>
          </Route>
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
          <Route path="order" element={<OrderLayout
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            change={change}
            setChange={setChange}
          />}>
            <Route index element={<OrderLayout
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
          </Route>
          <Route path="card" element={<StandardLayout/>}>
            <Route index element={<Card/>}/>
          </Route>
          <Route path="appcard" element={<StandardLayout/>}>
            <Route index element={<AppCard/>}/>
          </Route>
          <Route path="receipt" element={<StandardLayout/>}>
            <Route index element={<Receipt
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              waitingNum={waitingNum}
              setWaitingNum={setWaitingNum}
            />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
