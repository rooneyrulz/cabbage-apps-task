import React from 'react';
import { Checkbox } from 'antd';

type Props = {
  key: any;
  task: any;
  onFilterTask: any;
};

const TaskItem: React.FC<Props> = ({ task, onFilterTask }) => {
  const [isDone, setIsDone] = React.useState(false);

  const onChange = (e: any) => setIsDone((prev) => !prev);

  const onRemoveTask = (id: any) => onFilterTask(id);

  return (
    <div className={isDone ? 'task__item is__done' : 'task__item'}>
      <Checkbox checked={isDone} onChange={(e) => onChange(e)}>
        {task.task}
      </Checkbox>
      <span onClick={(e) => onRemoveTask(task.id)}>
        <i className='fas fa-trash'></i>
      </span>
    </div>
  );
};

export default TaskItem;
