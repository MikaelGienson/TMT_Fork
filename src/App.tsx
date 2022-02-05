// import "./styles.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginForm";
import Register from "./Register";
import { DataTable } from "./DataTable";
import { SortingTable } from "./SortingTable";
import { Private } from "./auth/Private";
import { Profile } from "./auth/Profile";
import { TestList } from "./components/TestList";
import { TestContextProvider } from "./context/TestContext";

export default function App() {
  return (
    <>
      {/* <LoginForm /> */}
      {/* <DataTable /> */}
      {/* <SortingTable /> */}

      {/* <Private isLoggedIn={false} component={Profile} /> */}
      <div className="conatiner-x1">
        <div className="table-responsive">
          <div className="table-wrapper">
            <TestContextProvider>
              <TestList />
            </TestContextProvider>
          </div>
        </div>
      </div>
    </>
  );
}
