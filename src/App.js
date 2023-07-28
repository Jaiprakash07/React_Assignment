// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Tenantfirst />} />
        {/* <Route path='/Tenantsecond' element={<Tenantsecond />} /> */}
        {/* <Route path='/Tenantthird' element={<Tenantthird />} /> */}
      </Routes>
    </>
  );
}

export default App;
