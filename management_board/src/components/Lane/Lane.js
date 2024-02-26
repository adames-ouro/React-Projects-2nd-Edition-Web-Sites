import styled from 'styled-components'; // npm install styled-components
import Task from '../Task/Task';


// new style component named LaneWrapper, extends a div and take the CSS rule for the Lane-wrapper class in Lane.css, after this We can delete the .css
const LaneWrapper = styled.div`
  text-align: left;
  padding: 0;
  background: lightGray;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }

`;

// new style component named Title, extends a h2 and take the CSS rule for the Title class in Lane.css, after this We can delete the .css
const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray`;


// adding onDragStart to start drag functionality
// adding onDragOver to drop element into another
// adding onDrop and laneId  passed as prop to Task component for droping element into another 

function Lane({ laneId, title, loading, error, tasks, onDragStart, onDragOver, onDrop }) {
  return (
    <LaneWrapper onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
      <Title>{title}</Title>
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
          onDrop={(e) => onDrop(e, laneId)}
          />
        ))
      )}
    </LaneWrapper>
  );
}

export default Lane;