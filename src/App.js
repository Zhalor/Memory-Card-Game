import "./styles.css";
import Header from "./components/header";
import Card from "./components/card";

function App() {


  
  return (
    <div className="container">
      <Header />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
}

export default App;
