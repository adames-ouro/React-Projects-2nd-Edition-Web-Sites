import styled from 'styled-components';

const CardWrapper = styled.div`
  text-align: left;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  margin-bottom: 2%;
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid black;
  color: black;
`;

const Count = styled.span`
  color: black;
`;

function Card({ title, views, answers }) {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Count>{
        `Views: ${views} | Answers: ${answers}`}
      </Count>
    </CardWrapper>
  );
}

export default Card;