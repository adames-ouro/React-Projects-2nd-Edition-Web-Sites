import styled from 'styled-components'; // npm install styled-components


// new style component named TaskWrapper, extends a div and take the CSS rule for the Task-wrapper class in Task.css, after this We can delete the .css
const TaskWrapper = styled.div`
  background: darkGray;
  padding: 20px;
  border-radius: 20px;
  margin: 0% 5% 5% 5%;

  h3 {
    width: 100%;
    margin: 0;
  }`;

// new style component named Title, extends a h3 and take the CSS rule for the Title class in Task.css, after this We can delete the .css
const Title = styled.h3`
  width: 100%;
  margin: 0;
`;


// adding onDragStart to start drag functionality
// onDrop and laneId to drop element into another 
function Task({ id, title, body, onDragStart}) {
  return (
    <TaskWrapper draggable onDragStart={ (e) => typeof onDragStart === 'function' && onDragStart(e,id) }>
      <Title>{title}</Title>
        <p>{body}</p>
    </TaskWrapper>
  );
}

export default Task;