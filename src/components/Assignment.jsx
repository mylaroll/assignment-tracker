function Assignment({title,course, mnemonic, dueDate, dueTime, status}){
    return (

        <section className= "assignment">
            <h2>{title}</h2>
            <p>{course} - {mnemonic}</p>
            <p>Due: {dueDate} at {dueTime}</p>
            <p className = "status">Status: {status}</p>
        </section>
    );
}
export default Assignment;