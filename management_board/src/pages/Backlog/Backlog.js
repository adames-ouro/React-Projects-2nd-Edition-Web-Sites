import Task from '../../components/Task/Task';
import useDataFetching from '../../hooks/useDataFetching';
import styled from 'styled-components'; // npm install styled-components

// new style component named TaskWrapper, extends a div and take the CSS rule for the Task-wrapper class in Task.css, after this We can delete the .css
const BacklogWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;

    @media (max-width: 768px) {
        flex-direction: column;
      }

    h2 {
        width: 100%;
        padding-bottom: 10px;
        text-align: center;
        border-bottom: 1px solid darkGray;
    }`;

// new style component named TaskWrapper, extends a div and take the CSS rule for the Task-wrapper class in Task.css, after this We can delete the .css
const TaskWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%`;

function Backlog() {
    const [loading, error, tasks] = useDataFetching('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks');
    
    return (
    <BacklogWrapper>
        <h2>Backlog</h2>

        <TaskWrapper>
            {loading || error ? (
                <span>{error || 'Loading...'}</span>
            ):(
             tasks.map((task) => (
                <Task 
                key={task.id} 
                title={task.title} 
                body={task.body} />
                ))
            )}
            </TaskWrapper>
        </BacklogWrapper>
    );
}

export default Backlog;