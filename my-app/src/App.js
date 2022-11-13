import "./App.css";
import Modal from "./components/ Modal";
import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
