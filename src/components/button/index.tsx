import styled from "styled-components";

export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.button`
  padding: 1rem 2rem;
  font-size: ${(props) => props.theme.font.sizes.small};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.gray[900]};
  border: 1px solid ${(props) => props.theme.colors.gray[700]};
  border-radius: ${(props) => props.theme.border.radius};
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[700]};
  }
`;
