import styled from "styled-components";
import { RiFolder5Fill, RiLinksFill } from "react-icons/ri";
import { Text } from "../../../../components/Text";
import { useTheme } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
`;

export const CategoryInfo = ({ category }) => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Name>
        <RiFolder5Fill size={"80px"} color={theme.colors.primary} />
        <Text size={"big"} color={theme.colors.secondary}>
          {category.name}
        </Text>
      </Name>
    </Wrapper>
  );
};
