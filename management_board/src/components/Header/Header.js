import styled from 'styled-components'; // npm install styled-components

// new style component named LaneWrapper, extends a div and take the CSS rule for the Lane-wrapper class in Lane.css, after this We can delete the .css
const HeaderWrapper = styled.div`
  background-color: rgb(15, 66, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }

`;

// new style component named Title, extends a h2 and take the CSS rule for the Title class in Lane.css, after this We can delete the .css
const Title = styled.h1`
  height: 64px;
  pointer-events: none;`

function Header() {
  return (
    <HeaderWrapper>
      <Title>Project Management Board</Title>
    </HeaderWrapper>
  )
}

export default Header;