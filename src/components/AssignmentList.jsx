import Assignment from "./Assignment.jsx";
import assignments from "../data/assignments.js";

function AssignmentList(){
    return (
        <div className="assignmentContainer">
            {assignments.map((item) => (
                <Assignment
                    key={item.id}
                    title={item.title}
                    course={item.course}
                    mnemonic={item.mnemonic}
                    dueDate={item.dueDate}
                    dueTime={item.dueTime}
                    status={item.status}
                />
            ))}
        </div>
    );
}

export default AssignmentList;