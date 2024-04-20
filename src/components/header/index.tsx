import styled from "styled-components";
import Button from "../button";

export default function Header() {
  return (
    <Container>
      <Logo>
        <span className="white">News</span>
        <span className="gray">Magazine</span>
      </Logo>

      <Links>
        <Link href="/news">RECENTES</Link>
        <Link href="/sports">MAIS LIDOS DA SEMANA</Link>
        <Link href="/entertainment">TÓPICOS</Link>
      </Links>

      <Buttons>
        <Button>Fazer login</Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  background-color: ${(props) => props.theme.colors.black};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[900]};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.font.sizes.medium};
  font-weight: ${(props) => props.theme.font.weight.bold};

  .white {
    color: ${(props) => props.theme.colors.gray[300]};
  }

  .gray {
    color: ${(props) => props.theme.colors.gray[500]};
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const Link = styled.a`
  font-size: ${(props) => props.theme.font.sizes.small};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  color: ${(props) => props.theme.colors.gray[300]};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.gray[500]};
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
