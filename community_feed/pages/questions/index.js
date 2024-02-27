import styled from 'styled-components';
import Card from '../../components/Card';
import Link from 'next/link';
import Pagination from '../../components/Pagination';
import Head from 'next/head';

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  justify-content: space-between;
`;

const CardLink = styled.a`
  text-decoration: none;
`;

function Questions({ questions, hasMore, page }) {

  return (
    <>
      <Head>
        <title>Questions</title>
      </Head>

      <QuestionsContainer>

        <h2>Questions</h2>

            <div>
            {questions && questions.map((question) => (
                <Link
                key={question.question_id}
                href={`/questions/${question.question_id}`}
                passHref>

                    <CardLink>
                      
                      <Card
                        key={question.question_id}
                        title={question.title}
                        views={question.views}
                        answers={question.answer_count}/>
                    </CardLink>

                </Link>
              ))}
            </div>

            <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore}/>

      </QuestionsContainer>
    </>
  );
}

export async function getServerSideProps(context) {
  const {page} = context.query;
  const data = await fetch(`https://api.stackexchange.com/2.2/questions?${page ? `page=${page}&` : ''}order=desc&sort=hot&tagged=reactjs&site=stackoverflow`);
  const result = await data.json();

  return {
    props: {
      questions: result.items,
      hasMore: result.has_more,
      page: page ||  1,
    }
  };
}

export default Questions;