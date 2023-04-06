import React, { useState } from "react";
import "./listInfor.scss";


function ListInfor({data}) {
  return (
    <div className="listInfor">
      {/* Search */}
      <div className="listInfor-search">
        <input className="listInfor-search-input" placeholder="Search" />
      </div>
      {/* Table */}

      <div className="listInfor-table">
     
        <table className="table">
          <tr className="table-nav-all">
            <th className="table-nav">Stt</th>
            <th className="table-nav">Id</th>
            <th className="table-nav">Name</th>
            <th className="table-nav">Age</th>
            <th className="table-nav">Operations</th>
          </tr>
          {data.map((dataItem)=>(
            <tr className="table-content-all">
                <td className="table-content-item">{dataItem.stt}</td>
                <td className="table-content-item">{dataItem.id}</td>
                <td className="table-content-item">{dataItem.name}</td>
                <td className="table-content-item">{dataItem.age}</td>
                <td className="btn">
                    <button className="btn-detail">Details</button>
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                </td>
            </tr>

          ))}
        </table>
       
        <button className="btn-add"> Add </button>
      </div>
    </div>
  );
}
export default ListInfor;
