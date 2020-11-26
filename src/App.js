import Input from "./component/Input";
import List from "./component/List";
import Footer from "./component/Futer";
function App() {
  return (
    <div className="App container">
      <h1 className="center red-text">toDo</h1>
      <Input />
      <List />
      <Footer />
    </div>
  );
}

export default App;
