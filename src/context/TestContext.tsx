import { createContext, useState } from "react";
import tests from "../tests";
import { ITableData } from "../Interfaces";

type TestContextProviderProps = {
  children: React.ReactNode;
};

export const TestContext = createContext({} as ITableData);

export const TestContextProvider = ({ children }: TestContextProviderProps) => {
  const [testData, setTestData] = useState<ITableData>(tests);
  return (
    <TestContext.Provider value={testData}>{children}</TestContext.Provider>
  );
};
