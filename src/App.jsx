import "./App.css";
import Card from "./components/Card/Card";
import { data } from "./data/data";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">React Price Card Task</h1>
        <p className="description">
          This task involves replication of a given UI using ReactJS framework.
          Proper folder structure is followed for better readability. The UI is
          deisgned using raw CSS only.
        </p>
        <div className="card-container">
          {data.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
