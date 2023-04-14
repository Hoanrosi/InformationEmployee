import React, { useState } from "react";
import "./job-form.scss";

function JobForm(props) {
  const {
    heading,
    handleEvenSubmit,
    handleChange,
    saveBtn,
    backBtn,
    handleBack,
    value,
    isEdit,
    isDetail,
    createForm,
  } = props;
  return (
    <div className="wrapper-form">
      <div className="input-form">
        <div className="heading"> {heading}</div>
        <div className="form-information">
          {createForm ? null : (
            <div className="form-information-item">
              <label className="label"> Stt</label>
              <input
                className="input"
                name="stt"
                onChange={handleChange}
                value={value.stt}
                disabled={isDetail}
              />
            </div>
          )}

          <div className="form-information-item">
            <label className="label"> Id</label>
            <input
              className="input"
              name="id"
              onChange={handleChange}
              value={value.id}
              disabled={isDetail || isEdit}
              type="number"
            />
          </div>

          <div className="form-information-item">
            <label className="label"> Name</label>
            <input
              className="input"
              name="name"
              onChange={handleChange}
              value={value.name}
              disabled={isDetail}
            />
          </div>

          <div className="form-information-item">
            <label className="label"> Age</label>
            <input
              className="input"
              name="age"
              type="number"
              onChange={handleChange}
              value={value.age}
              disabled={isDetail}
            />
          </div>

          <div className="btn-form">
            {backBtn && (
              <button className="btn-back" onClick={handleBack}>
                {backBtn}
              </button>
            )}
            {saveBtn && (
              <button className="btn-save" onClick={handleEvenSubmit}>
                {saveBtn}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobForm;
