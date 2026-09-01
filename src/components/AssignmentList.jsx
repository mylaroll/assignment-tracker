import Assignment from "./Assignment.jsx";

function AssignmentList({assignmentsArray}){
    return (
        <div className="assignmentContainer">
            {assignmentsArray.map((item) => (
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