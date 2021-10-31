import styled from "styled-components";
import Map from "./components/Map";

const AppBox = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppBox>
      <Map />
    </AppBox>
  );
};

export default App;
