import './Lane.css';
import Task from '../Task/Task';


// adding onDragStart to the Lane component for drag and drop functionality

function Lane({ title, loading, error, tasks, onDragStart }) {
  return (
    <div className='Lane-wrapper'>
      <h2>{title}</h2>
      {loading || error ? (
        <span>{ error || 'Loading...'}</span>
      ) : (
        tasks.map((task) => (
          <Task 
          key={task.id} 
          id={task.id}
          title={task.title}
          body={task.body}
          onDragStart={onDragStart}
          />
        ))
      )}
    </div>
  );
}

export default Lane;