import React from 'react';
import { v4 } from 'uuid';
import { Input, Button } from 'antd';

type Props = {
  onAddTask: any;
};

const AddTask: React.FC<Props> = ({ onAddTask }) => {
  const [task, setTask] = React.useState('');

  const onChange = (e: any) => setTask(e.target.value);

  const onAdd = (e: any) => {
    if (!task) {
      alert('Please type some task');
    } else {
      const newTask = { id: v4(), task };
      onAddTask(newTask);
    }
  };

  return (
    <div className='task__creator'>
      <Input placeholder='type a task' onChange={(e) => onChange(e)} />
      <Button type='primary' onClick={(e) => onAdd(e)}>
        ADD TASK
      </Button>
    </div>
  );
};

export default AddTask;
