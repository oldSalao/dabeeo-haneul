import styled from "styled-components";
import Map from "./components/Map";

const AppBox = styled.div`
  display: flex;
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
