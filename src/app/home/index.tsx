import styled from "styled-components";
import Header from "../../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
`;
