import "../styles/Form.css";

function Form({ onChange, onSubmit, title, children, defaultObj = {} }) {
  return (
    <form className="form" name="form" onSubmit={onSubmit}>
      <h3 className="call-to-action">{title}</h3>

      <div className="form--grid--container">
        <div className="form--title">Task: </div>
        <input
          name="task"
          placeholder="Task"
          type="text"
          onChange={onChange}
          value={defaultObj.task}
          required
        />
        <div className="form--title">Project: </div>
        <input
          name="project"
          placeholder="Project"
          type="text"
          onChange={onChange}
          value={defaultObj.project}
          required
        />
        <div className="form--title">Date Due: </div>
        <input
          name="date"
          type="date"
          onChange={onChange}
          value={defaultObj.date}
          required
        />
        <div className="form--title">Time Due: </div>
        <input
          name="time"
          type="time"
          onChange={onChange}
          value={defaultObj.time}
          required
        />
        <div className="form--title">Priority: </div>
        <select
          name="priority"
          onChange={onChange}
          value={defaultObj.priority}
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      {children}
    </form>
  );
}

export default Form;
