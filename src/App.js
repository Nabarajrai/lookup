import { useState } from "react";
import "./App.css";
import { Data } from "./tire.js";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fetched data");
    value.length > 0 && setData(Data);
    setValue("");
  };
  const handleClear = () => {
    setData([]);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Please,enter your car number"
        />

        <button>Quick Lookup</button>

        <span onClick={handleClear}>Clear data</span>
      </form>

      <div className="details">
        <ul>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <div className="modal">
                  <h1>Modal NO:</h1>
                  <span>{item.Vehicle.ModelName}</span>
                </div>
                <li className="tire">
                  <h1>Tire Details</h1>
                  <div>
                    <h2>Front</h2>
                    <ul>
                      <li>
                        <span>Size:</span> <span>{item.Front.Tyre.Size}</span>
                      </li>
                      <li>
                        <span>SectionWidth:</span>
                        <span>{item.Front.Tyre.SectionWidth}</span>
                      </li>
                      <li>
                        <span>AspectRatio:</span>
                        <span>{item.Front.Tyre.AspectRatio}</span>
                      </li>
                      <li>
                        {" "}
                        <span>RimDiameter:</span>
                        <span>{item.Front.Tyre.RimDiameter}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2>Rear</h2>
                    <ul>
                      <li>
                        <span>Size:</span> <span>{item.Front.Tyre.Size}</span>
                      </li>
                      <li>
                        <span>SectionWidth:</span>
                        <span>{item.Front.Tyre.SectionWidth}</span>
                      </li>
                      <li>
                        <span>AspectRatio:</span>
                        <span>{item.Front.Tyre.AspectRatio}</span>
                      </li>
                      <li>
                        {" "}
                        <span>RimDiameter:</span>
                        <span>{item.Front.Tyre.RimDiameter}</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
