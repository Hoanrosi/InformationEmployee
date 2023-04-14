import React, { useState } from "react";
import JobForm from "../JobForm/JobForm";
function InputForm({ handleSave, setDataList, dataList }) {
  const [inputForm, setInputForm] = useState({
    stt: " ",
    id: " ",
    name: " ",
    age: " ",
  });

  const handleChange = (e) => {
    console.log("e :>> ", e);
    const name = e.target.name;
    setInputForm({
      ...inputForm,
      [name]: e.target.value,
    });
    console.log(e.target.value, name);
  };

  const handleEvenSubmit = () => {
    setDataList((pre) => [inputForm, ...pre]);

    handleSave();
  };
  const handleBack = () => {
    handleSave();
  };
  return (
    <JobForm
      heading=" Vui lòng nhập thông tin"
      value={inputForm}
      handleSave={handleSave}
      handleChange={handleChange}
      handleEvenSubmit={handleEvenSubmit}
      handleBack={handleBack}
      saveBtn="Save"
      backBtn="Back"
      createForm
    />
  );
}

export default InputForm;
