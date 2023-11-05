import { NavBar } from "./components/NavBar";
import { ItemListConteiner } from "./components/ItemListConteiner";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";

function App() {
  

  return (
    <>
    <NavBar/>
    <ItemListConteiner greeting = "Venta de celulares"/>
    </>
  );
}

export default App
