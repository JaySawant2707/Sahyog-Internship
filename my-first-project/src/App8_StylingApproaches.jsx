import styled from "styled-components"
import "/src/App8_StylingApproaches.css";

const StyledButton = styled.button`
  background-color: aquamarine;
  color: brown;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: antiquewhite;
  }
`;

const App8_StylingApproaches = () => {
  return (
    <div>
      Styling Approaches in React

      <h2>1.Using Regular CSS</h2>
      <button className="css-button">Click me(css)</button>

      <h2>2.Using Styled Component</h2>
      <StyledButton className="css-button">Click me(StyledButton)</StyledButton>
    </div>
  );
};

export default App8_StylingApproaches;
