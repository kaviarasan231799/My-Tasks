import './index.css'

const Task = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails

  return (
    <li className="list-task">
      <p className="para-task">{taskName}</p>
      <p className="para-category">{taskCategory}</p>
    </li>
  )
}

export default Task
