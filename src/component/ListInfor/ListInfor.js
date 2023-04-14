import React, { useState, useEffect } from "react";
import "./listInfor.scss";

function ListInfor(props) {
  const {
    dataList,
    setDataList,
    handleCreate,
    setDataDetail,
    setPageType,
    searchTerm,
    setSearchTerm,
  } = props;
  const [listDataFilter, setListDataFilter] = useState([]);

  useEffect(() => {
    const listDataNew = dataList.filter(
      (dataItem) =>
        dataItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dataItem.id.toString().includes(searchTerm) ||
        dataItem.age.toString().includes(searchTerm)
    );

    setListDataFilter(listDataNew);
  }, [searchTerm, dataList]);

  //=================  handleDetails============

  const handleDetail = (dataItem) => {
    setDataDetail(dataItem);
    setPageType("details");
  };

  const handleEdit = (dataItem) => {
    setDataDetail(dataItem);
    setPageType("edit");
  };

  const handleDelete = (dataItem) => {
    console.log("dataItem :", dataItem);

    const newDataList = dataList.filter((item) => item.id !== dataItem.id);
    console.log("newDataList:", newDataList);

    setDataList(newDataList);
  };

  //=============== filter===========
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // useEffect(()=>{
  //   const listDataNew = dataList.filter((itemData)=>{
  //     itemData.name.toLowerCase().include(query)
  //   })
  // }, [query])
  return (
    <div className="listInfor">
      {/* Search */}
      <div className="listInfor-search">
        <input
          className="listInfor-search-input"
          placeholder="Search"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      {/* Table */}

      <div className="listInfor-table">
        <table className="table">
          <thead>
            <tr className="table-nav-all">
              <th className="table-nav">Stt</th>
              <th className="table-nav">Id</th>
              <th className="table-nav">Name</th>
              <th className="table-nav">Age</th>
              <th className="table-nav">Operations</th>
            </tr>
          </thead>
          <tbody>
            {listDataFilter.map((dataItem, index) => (
              <tr className="table-content-all">
                <td className="table-content-item">{index + 1}</td>
                <td className="table-content-item">{dataItem.id}</td>
                <td className="table-content-item">{dataItem.name}</td>
                <td className="table-content-item">{dataItem.age}</td>
                <td className="btn">
                  <button
                    className="btn-active btn-detail"
                    onClick={() => handleDetail(dataItem)}
                  >
                    Details
                  </button>
                  <button
                    className=" btn-active btn-edit"
                    onClick={() => handleEdit(dataItem)}
                  >
                    Edit
                  </button>
                  <button
                    className=" btn-active btn-delete"
                    onClick={() => handleDelete(dataItem)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn-add" onClick={handleCreate}>
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  );
}
export default ListInfor;
