import { useState, useEffect, useMemo } from "react";
import tests from "./tests";
import { v4 as uuid } from "uuid";
import { useTable } from "react-table";
import Notifications from "./Notifications";
import toast from "react-hot-toast";
import { ITableData } from "./Interfaces";

interface IColumns {
  accessor: string;
  Header: string;
}

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

export const DataTable = () => {
  const [tableData, setTableData] = useState<ITableData[]>([]);

  const testsId: ITableData[] = tests.map((obj: ITableData) => {
    return { ...obj, id: uuid() };
  });

  const columns: IColumns[] = useMemo(() => COLUMNS, []);
  const data: ITableData[] = useMemo(() => testsId, []);

  const tableInstance = useTable({
    columns,
    data
  });

  useEffect(() => {
    setTableData(testsId);
  }, [tableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <div>
      <Notifications />
      <button onClick={() => toast("Hello World!")}>Add Toast</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => toast("Hello World!")}>Add Toast</button>
    </div>
  );
};
