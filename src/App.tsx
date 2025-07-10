import logo from "./assets/logo.svg";
import "./App.css";
import data from "./mock/data.json";

function App() {
  // const users = data.users;

  return (
    <>
      <div className="container">
        <div className="header">
          <img src={logo} className="logo" alt="Logo" width={150} />
          <div className="header-title">
            <span>Web Developer - FE Technical Challenge</span>
          </div>
        </div>
        <div className="content">
          {/* TODO: Add the UserDirectory component here */}
        </div>
      </div>
    </>
  );
}

export default App;
