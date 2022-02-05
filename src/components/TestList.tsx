import { Test } from "./Test";
import "../index.css";
import { useState, useContext } from "react";
import { TestContext } from "../context/TestContext";
import tests from "../tests";
import { ITableData } from "../Interfaces";

const COLUMNS = [
  { accessor: "TR", Header: "TR" },
  { accessor: "testSuiteName", Header: "Test Suite Name" },
  { accessor: "version", Header: "Version" },
  { accessor: "assignee", Header: "Assignee" },
  { accessor: "failed", Header: "Failed" },
  { accessor: "passed", Header: "Passed" },
  { accessor: "total", Header: "Total" },
  { accessor: "PFR", Header: "PFR" },
  { accessor: "status", Header: "Status" },
  { accessor: "startDate", Header: "Start Date" },
  { accessor: "endDate", Header: "End Date" }
];

export const columnsHeaders = Array.from(
  COLUMNS.map((column) => {
    return column.Header;
  })
);

export const columnsAccessors = Array.from(
  COLUMNS.map((column) => {
    return column.accessor;
  })
);

export const TestList = () => {
  const testData = useContext<ITableData>(TestContext);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Tests</b>
            </h2>
          </div>
          <div className="col-sm-6">
            {/* <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Test</span>
            </Button> */}
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {columnsHeaders.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {testData.map((test) => (
            <tr>
              <Test test={test} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
