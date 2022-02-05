import { useState, useEffect, useMemo } from "react";
import tests from "./tests";
import { v4 as uuid } from "uuid";
import { useTable, useSortBy } from "react-table";

interface ITableData {
  TR: string;
  testSuiteName: string;
  version: string;
  assignee: string;
  failed: number;
  passed: number;
  total: number;
  PFR: number;
  status: string;
  startDate: string;
  endDate: string;
  id?: number;
}

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

export const SortingTable = () => {
  const [tableData, setTableData] = useState<ITableData[]>([]);

  const testsId: ITableData[] = tests.map((obj: ITableData) => {
    return { ...obj, id: uuid() };
  });

  const columns: IColumns[] = useMemo(() => COLUMNS, []);
  const data: ITableData[] = useMemo(() => testsId, []);

  const tableInstance = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

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
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "D" : "U") : ""}
                </span>
              </th>
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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
