import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import Task from './components/Task'

import './App.css'
import {TagsButton, Heading} from './style'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    myTaskList: [],
    inputTask: '',
    selectTag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onInputBox = event => {
    this.setState({inputTask: event.target.value})
  }

  onSelectInput = event => {
    this.setState({selectTag: event.target.value})
  }

  onAddTaskButton = () => {
    const {inputTask, selectTag} = this.state
    const taskName = inputTask
    const taskCategory = selectTag
    const id = uuid()
    const bgColor = false
    if (taskName !== 0) {
      this.setState(prevState => ({
        myTaskList: [
          ...prevState.myTaskList,
          {id, taskName, taskCategory, bgColor},
        ],
        inputTask: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  onTaskSelectButton = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  render() {
    const {myTaskList, inputTask, selectTag, activeTag} = this.state
    const filteredTag =
      activeTag === 'INITIAL'
        ? myTaskList
        : myTaskList.filter(each => each.taskCategory === activeTag)
    return (
      <div className="app-container">
        <form onSubmit={this.onSubmitForm} className="form-container">
          <Heading>Create a task!</Heading>
          <div className="input-container">
            <label htmlFor="task" className="label-names">
              Task
            </label>
            <input
              type="text"
              id="task"
              placeholder="Enter the task here"
              value={inputTask}
              onChange={this.onInputBox}
              className="input-box"
            />
            <label htmlFor="tags" className="label-names">
              Tags
            </label>
            <select
              id="tags"
              value={selectTag}
              onChange={this.onSelectInput}
              className="select-box"
            >
              {tagsList.map(eachTag => (
                <option value={eachTag.optionId}>{eachTag.displayText}</option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={this.onAddTaskButton}
            className="add-button"
          >
            Add Task
          </button>
        </form>
        <div className="task-container">
          <h1 className="heading-tag">Tags</h1>
          <ul className="un-order-list-tags">
            {tagsList.map(eachTag => {
              const isActive = activeTag === eachTag.optionId
              return (
                <li className="tag-list" key={eachTag.optionId}>
                  <TagsButton
                    type="button"
                    value={eachTag.optionId}
                    onClick={this.onTaskSelectButton}
                    isActive={isActive}
                    className="tag-button"
                  >
                    {eachTag.displayText}
                  </TagsButton>
                </li>
              )
            })}
          </ul>
          <h1 className="tasks-heading">Tasks</h1>
          <ul className="tasks-container">
            {filteredTag.length === 0 ? (
              <p className="no-task-para">No Tasks Added Yet</p>
            ) : (
              filteredTag.map(eachTask => (
                <Task key={eachTask.id} taskDetails={eachTask} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
