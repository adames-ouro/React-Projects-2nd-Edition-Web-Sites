import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';
import './Board.css';
import { useState, useEffect } from 'react'; // for mutate the state fater finish drag operations

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' },
];

// adding onDragStart to start drag functionality

function onDragStart(e,id){
  e.dataTransfer.setData('id',id);
}

// adding onDragOver to drop element into another
function onDragOver(e){
  e.preventDefault();
}


function Board() {
  const [loading, error, data] = useDataFetching('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks');
  const [tasks, setTasks] = useState([]);

  // add useEffect to mutate the state after finish drag operations
  useEffect(() => {
    setTasks(data);
  }, [data]);

  // event handler to drop element into another
  function onDrop(e, laneId) {
    const id = e.dataTransfer.getData('id');

    const updatedTasks = tasks.filter((task) => {
      if (task.is.toString() === id) {
        task.lane = laneId;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // onDrop and laneId  passed as prop to Task component for droping element into another 

  return (
    <div className='Board-wrapper'>
      {lanes.map((lane) => (
        <Lane 
        key={lane.id}
        laneId={lane.id}
        title={lane.title}
        loading={loading}
        error={error}
        tasks={tasks.filter((task) => task.lane === lane.id)}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        />
      ))}
    </div>
  );
}

export default Board;