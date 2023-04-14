import Layout from "./component/Layout/Layout";
import ListInfor from "./component/ListInfor/ListInfor";
import InputForm from "./component/InputForm/InputForm";
import Details from "./component/Details/Details";
import Edit from "./component/Edit/Edit";
import data from "./data.json";
import React, { useState } from "react";

function App() {
  const [pageType, setPageType] = useState("listInfor");
  const [dataList, setDataList] = useState(data);
  const [dataDetail, setDataDetail] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const handleCreate = () => {
    setPageType("create");
  };

  const handleSave = () => {
    setPageType("listInfor");
  };

  const handleDetail = () => {
    setPageType("details");
  };
  const handleEdit = () => {
    setPageType("edit");
  };
  let content;
  switch (pageType) {
    case "listInfor":
      content = (
        <ListInfor
          dataList={dataList}
          setDataList={setDataList}
          handleCreate={handleCreate}
          handleDetail={handleDetail}
          handleEdit={handleEdit}
          setDataDetail={setDataDetail}
          setPageType={setPageType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      );
      break;
    case "create":
      content = (
        <InputForm
          handleSave={handleSave}
          setDataList={setDataList}
          dataList={dataList}
        />
      );
      break;
    case "details":
      content = (
        <Details
          handleDetail={handleDetail}
          handleSave={handleSave}
          dataDetail={dataDetail}
        />
      );
      break;
    case "edit":
      content = (
        <Edit
          dataDetail={dataDetail}
          handleSave={handleSave}
          handleEdit={handleEdit}
          dataList={dataList}
          setDataList={setDataList}
        />
      );
      break;
  }
  return (
    <div className="App">
      <Layout>{content}</Layout>
    </div>
  );
}

export default App;
