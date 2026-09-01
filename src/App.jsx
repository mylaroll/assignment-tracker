import './App.css'
import {useState} from "react";
import AssignmentList from "./components/AssignmentList.jsx";
import AddAssignment from "./components/AddAssignment.jsx";
import testAssignments from "./data/assignments.js";




function App() {
    const [assignments, setAssignments] = useState(testAssignments);
    function handleAdd (newAssignment){
        setAssignments([
            ...assignments,
            newAssignment
        ]);
    }

  return (
    <>
      <main>
        <h1>Assignment Tracker</h1>
          <AssignmentList assignmentsArray={assignments}/>
          <AddAssignment onHandleAdd={handleAdd}/>
      </main>
    </>
  );
}

export default App;
