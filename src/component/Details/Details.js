import React, {useState} from "react";
import JobForm from "../JobForm/JobForm";

function Details({ handleDetail, handleSave, dataDetail }) {
  const handleBack = () => {
    handleSave();
  };


  const [detail,setDetail] = useState(dataDetail)
  const handleChange = (e) => {
        const {name, value} = e.target;
        setDetail({[name]: value})
  };

  return (
    <JobForm
      heading=" Hiển thị thông tin nhân viên"
      value={detail}
      handleSave={handleSave}
      backBtn="Back"
      handleBack={handleBack}
      dataDetail={dataDetail}
      handleChange={handleChange}
      isDetail
    />
  );
}

export default Details;
