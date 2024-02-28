// This part remains the same
import styled from 'styled-components';
import Link from 'next/link';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

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
  // No need to fetch the data in a useEffect hook anymore
  // The data is now passed as a prop to the component

  return (
    <QuestionsContainer>
      <h2>Questions</h2>
      {questions ? (
        <span>Loading...</span>
      ) : (
        <>
          <div>
            { questions && questions.map((question) => (
              <Link key={question.question_id} href={`/questions/${question.question_id}`} passHref>
                <CardLink>
                  <Card
                    title={question.title}
                    views={question.view_count}
                    answers={question.answer_count}/>
                </CardLink>
              </Link>
            ))}
          </div>
          <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore} />
        </>
      )}
    </QuestionsContainer>
  );
}

// Fetch the data on the server side before the page is rendered
export async function getServerSideProps(context) {
  const { page } = context.query;
  const res = await fetch(`https://api.stackexchange.com/2.2/questions?${page ? `page=${page}&` : ''}order=desc&sort=hot&tagged=reactjs&site=stackoverflow`);
  const data = await res.json();
  const questions = data.items;
  const hasMore = data.has_more;

  return {
    props: {
      questions,
      hasMore,
      page,
    },
  };
}

export default Questions;