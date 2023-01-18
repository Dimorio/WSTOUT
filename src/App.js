import { Employee } from "./Components/Employee";
function App() {
  return (
    <div className="App">
      <>
        <Employee name="Josh" role="engineer" />
        <Employee name="mary" role="software developer" />
        <Employee name="Miller" />
        <Employee name="Adam" />
      </>
    </div>
  );
}

export default App;
