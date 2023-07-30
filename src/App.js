// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from './component/Sidebar';
import Tenantfirst from './page/Tenantfirst';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route index element={<Tenantfirst />} />
        {/* <Route path='/Tenantsecond' element={<Tenantsecond />} /> */}
        {/* <Route path='/Tenantthird' element={<Tenantthird />} /> */}
      </Routes>
    </>
  );
}

export default App;
