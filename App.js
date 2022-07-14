import { React, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState("");
  // Whenever we are using API call then we have to use useEffect Hook. And useEffect hook is use with the Functional Componet
  // It is useful to use async and await with Axios because sometime before Api call HTML render so avoid this we should use async and Await
  useEffect(() => {
    async function callApi() {
      const apiResult = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setApiData(apiResult.data);
    }
    callApi();
    // we have pass [apiDaata] as a parameter of useEffect hook beacuse whenever the data of the API will change the useEffect will load agin
  }, [apiData]);

  return (
    <div className="App">
      <h1>Data Fetching using Axios</h1>

      <table
        style={{
          width: "800px",
          margin: "50px auto",
          border: "1px solid #ccc",
        }}
      >
        <thead  style={{ border: "1px solid #ccc",}}>
          <tr  style={{ border: "1px solid #ccc"}}>
            <th  style={{ border: "1px solid #ccc",}}>ID</th>
            <th  style={{ border: "1px solid #ccc",}}>TITLE</th>
            <th  style={{ border: "1px solid #ccc",}}>BODY</th>
          </tr>
        </thead>
        <tbody  style={{ border: "1px solid #ccc",}}>
          {
            // apiData &&  i have use this condition because if there will be data then the map method will work this will prevent from giving error
            apiData &&
              apiData.map((apiDetails, index) => {
                return (
                  <tr key={index}  style={{ border: "1px solid #ccc",}}>
                    <td  style={{ border: "1px solid #ccc",}}>{apiDetails.id}</td>
                    <td  style={{ border: "1px solid #ccc",}}> {apiDetails.title}</td>
                    <td  style={{ border: "1px solid #ccc",}}>{apiDetails.body}</td>
                  </tr>
                );
              })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
