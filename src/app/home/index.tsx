import styled from "styled-components";
import Header from "../../components/header";
import Translator from "../../components/i18n/translator";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>
          <Translator path="home.message" />
        </h1>
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

  h1 {
    font-size: ${(props) => props.theme.font.sizes.large};
    color: ${(props) => props.theme.colors.gray[300]};
  }
`;
