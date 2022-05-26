import styled from 'styled-components';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import { Title } from '../../../style';
import { FastLinkItem } from '../FastLinkItem';
export const FastLinks = () => {
  // const ls = useLocalStorage()

  const FastLinks = [
    { shortcut: '', url: '' },
    { shortcut: '', url: '' },
    { shortcut: '', url: '' },
    { shortcut: '', url: '' },
  ];

  return (
    <Wrapper>
      <Slots>
        {FastLinks.map((link) => {
          return <FastLinkItem link={link} />;
        })}
      </Slots>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  border-radius: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  width: 90%;
  background: ${(props) => props.theme.colors.primaryBg};
`;

const Slots = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
  list-style: none;
`;
