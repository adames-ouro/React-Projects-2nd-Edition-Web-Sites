import {useRouter} from 'next/router'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Head from 'next/head';


const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
    justify-content: space-between;
    `;


function QuestionDetail() {
    const router = useRouter();
    const {id} = router.query;
    const [question, setQuestion] = useState({});
    const [loading, setLoading] = useState(false);

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
        <QuestionContainer>
            {loading ? (
                <span>Loading...</span>
            ):(
                <>
                    <Head>
                        <title>{question.title}</title>
                    </Head>
                    <Card
                    title={question.title}
                    views={question.view_count}
                    answers={question.answer_count}/>
                </>
            )}
        </QuestionContainer>
    );
}


export default QuestionDetail;