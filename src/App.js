import logo from "./logo.svg";
import "./App.css";
import UpdateComponent from "./components/lifeCycle/UpdateComponent";
import LoginForm from "./components/form/LoginForm";

function App() {
  return (
    <div>
      <h1 className="text-center">Update Phase Component Life Cycle</h1>
      <UpdateComponent />
      <hr />
      <LoginForm />
    </div>
  );
}

export default App;
