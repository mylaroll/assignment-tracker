import {useState} from "react";

function AddAssignment({onHandleAdd}) {
    const [formData, setFormData] = useState({
        title:"",
        course: "",
        mnemonic: "",
        dueDate: "",
        dueTime: "",
        status: "not started"
    });
    function handleChange (e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        const newAssignment = {
            id: Date.now(),
            ...formData
        };
        onHandleAdd(newAssignment);
        setFormData({
            title: "",
            course: "",
            mnemonic: "",
            dueDate: "",
            dueTime: "",
            status: "not started"
        });
    }


    return (
        <form className="addAssignment" onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Assignment title" value={formData.title}
                   onChange={handleChange} required/>
            <input type="text" name="course" placeholder="Assignment course" value={formData.course}
                   onChange={handleChange} required/>
            <input type="text" name="mnemonic" placeholder="Assignment mnemonic" value={formData.mnemonic}
                   onChange={handleChange} required/>
            <input type="date" name="dueDate" placeholder="Assignment due date" value={formData.dueDate}
                   onChange={handleChange} required/>
            <input type="time" name="dueTime" placeholder="Assignment time due" value={formData.dueTime}
                   onChange={handleChange} required/>
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="not started">Not Started</option>
                <option value="working">Working</option>
                <option value="done">Done</option>
            </select>
            <button type="submit"> Add Assignment</button>
        </form>
    );
}

export default AddAssignment;