import React, {useState} from "react"
import Layout from "./component/Layout/Layout";
import ListInfor from "./component/ListInfor/ListInfor";
import data from "./data.json"
function App() {
  return (
    <div className="App">
    <Layout>
      <ListInfor data ={data} />
    </Layout>
     </div>
     )
}

export default App;
