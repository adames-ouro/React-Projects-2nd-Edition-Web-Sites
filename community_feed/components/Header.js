import styled from 'styled-components';
import Head from 'next/head';

const HeaderWrapper = styled.div`
  background-color: orange;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  height: 64px;
  pointer-events: none;
`;

const Header = () => (
  <>
    <Head>
      <title>Community Feed</title>
      <meta name = 'description' content='This is a Community Feed project build with react'/>
    </Head>
    <HeaderWrapper>
      <Title>Community Feed</Title>
    </HeaderWrapper>
</>
);

export default Header;