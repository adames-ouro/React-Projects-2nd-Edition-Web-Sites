// This part remains the same
import {useRouter} from 'next/router';
import styled from 'styled-components';
import Card from '../../components/Card';

const QuestionDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
    justify-content: space-between;
`;

function QuestionDetail({ question }) {
    // No need to fetch the data in a useEffect hook anymore
    // The data is now passed as a prop to the component

    return (
        <QuestionDetailContainer>
            {question ? (
                <Card 
                title={question.title} 
                views={question.view_count} 
                answers={question.answer_count}/>
            ) : (
                <span>Loading...</span>
            )}
        </QuestionDetailContainer>
    );
}

// Fetch the data on the server side before the page is rendered
export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`);
    const data = await res.json();
    const question = data.items[0];

    return {
        props: {
            question,
        },
    };
}

export default QuestionDetail;