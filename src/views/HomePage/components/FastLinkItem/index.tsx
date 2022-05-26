import styled from 'styled-components';
interface FastLinkInterface {
  url: string;
  shortcut: string;
}

interface Props {
  link: FastLinkInterface;
}

export const FastLinkItem = ({ link }: Props) => {
  return (
    <Wrapper>
      <p>{link.shortcut}</p>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 50px;
  box-shadow: ${(props) => props.theme.shadow};
  color: white;
  height: 50px;
  display: flex;
  flex-flow: column;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
`;
