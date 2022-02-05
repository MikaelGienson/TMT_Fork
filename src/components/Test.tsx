import "../index.css";
import { ITableData } from "../Interfaces";
import { columnsAccessors } from "./TestList";

type TestProps = {
  test: ITableData;
};

export const Test = ({ test }: TestProps) => {
  return (
    <>
      {columnsAccessors.map((accessor: string | number) => (
        <td>{test[accessor]}</td>
      ))}
    </>
  );
};
