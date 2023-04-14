import React, { useState } from "react";
import JobForm from "../JobForm/JobForm";

function Edit(props) {
  const { dataDetail, handleSave, dataList, setDataList } = props;

  const [detail, setDetail] = useState(dataDetail);

  // ============= handleChange==========
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((pre) => ({ ...pre, [name]: value }));
  };

  const handleBack = () => {
    handleSave();
  };

  const handleEvenSubmit = () => {
    // find item by id
    const itemIndex = dataList.findIndex((item) => item.id === dataDetail.id);
    // update an item in array
    let cloneData = [...dataList];
    cloneData[itemIndex] = detail;
    // set new data to list
    setDataList(cloneData);
    handleSave();
  };

  return (
    <JobForm
      heading="Hiển thị thông tin nhân viên"
      value={detail}
      handleChange={handleChange}
      backBtn="Back"
      saveBtn="save"
      handleBack={handleBack}
      handleEvenSubmit={handleEvenSubmit}
      isEdit
    />
  );
}

export default Edit;
