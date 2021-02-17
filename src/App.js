import './App.css';
import styled from "styled-components";
import Button from "./components/Button";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

function App() {
  return (
    <StyledApp className="App">
      <Button/>
    </StyledApp>
  );
}

export default App;
