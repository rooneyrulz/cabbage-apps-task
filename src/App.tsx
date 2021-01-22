import React from 'react';

// Components & Layouts
import AppHeader from './layouts/AppHeader';
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';

type Task = {
  id: any;
  task: any;
};

const App = () => {
  const [taskList, setTaskList] = React.useState<Task[]>([]);

  const onAddTask = (task: any) => setTaskList((prev) => [...prev, task]);

  const onFilterTask = (id: any) =>
    setTaskList((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className='app'>
      <div className='app__wrapper'>
        <AppHeader />
        <div className='task__wrapper'>
          {taskList.length > 0 &&
            taskList.map((item) => (
              <TaskItem key={item.id} task={item} onFilterTask={onFilterTask} />
            ))}
          <AddTask onAddTask={onAddTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
