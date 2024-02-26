import './Task.css';

// adding onDragStart to start drag functionality
// onDrop and laneId to drop element into another 

function Task({ id, title, body, onDragStart}) {
  return (
    <div className='Task-wrapper' draggable onDragStart={ (e) => onDragStart(e,id) }>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Task;