import {useRouter} from 'next/router';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import Card from '../../components/Card';


const QuestionDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
    justify-content: space-between;
    `;

function QuestionDetail() {
    const router = useRouter();
    const {id} = router.query;

    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState({});


    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`);
            const result = await data.json();

            if (result) {
                setQuestion(result.items[0]);
                setLoading(false);
            }
        }
        id && fetchData();
    }, [id]);


    return (
        <QuestionDetailContainer>
            {loading ? (
                <span>Loading...</span>
                ):(
                <Card 
                key={question.question_id}
                title={question.title} 
                views={question.view_count} 
                answers={question.answers_count}/>
                )
            }
        </QuestionDetailContainer>
    );
}

export default QuestionDetail;