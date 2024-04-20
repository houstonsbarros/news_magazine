import { useTranslation } from "react-i18next";
import styled from "styled-components";
import BrasilFlag from "../../assets/flags/brazil.png";
import UsaFlag from "../../assets/flags/united-states.png";

const I18n = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language;

  return (
    <FlagsContainer>
      <Button
        className={selectedLanguage === "pt-BR" ? "selected bra" : ""}
        onClick={() => handleChangeLanguage("pt-BR")}
      >
        <span>PT-BR</span>
      </Button>

      <Button
        className={selectedLanguage === "en-US" ? "selected eua" : ""}
        onClick={() => handleChangeLanguage("en-US")}
      >
        <span>EN-US</span>
      </Button>
    </FlagsContainer>
  );
};

export default I18n;

const FlagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: ${(props) => props.theme.colors.gray[900]};
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray[700]};
`;

const Button = styled.button`
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.border.radius};
  border: none;
  color: ${(props) => props.theme.colors.gray[300]};
  font-size: ${(props) => props.theme.font.sizes.small};
  cursor: pointer;
  transition: all 0.2s;

  &.selected {
    background-color: ${(props) => props.theme.colors.gray[700]};

    &.eua {
      background-image: url(${UsaFlag});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-blend-mode: multiply;
    }

    &.bra {
      background-image: url(${BrasilFlag});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-blend-mode: multiply;
    }

    span {
      color: ${(props) => props.theme.colors.gray[100]};
    }
  }
`;
