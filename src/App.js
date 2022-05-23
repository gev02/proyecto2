import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/reptiles">Reptiles</Link> |{" "}
        <Link to="/aves">Aves</Link>
        <Link to="/mamiferos">Mamíferos</Link>
      </nav>
      <h1>Estas son las familias de animales</h1>
    </div>
    <br/>
   
        </>

        
        );
        }

        export default App;