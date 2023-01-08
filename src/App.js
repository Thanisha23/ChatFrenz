import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      {/* route for our home page */}
      <Route path="/" component={HomePage} exact />

      {/* route for our chat page  */}
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
