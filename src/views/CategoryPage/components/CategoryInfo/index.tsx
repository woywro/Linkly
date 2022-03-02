import styled from "styled-components";
import { RiFolder5Fill, RiLinksFill } from "react-icons/ri";
import { Text } from "../../../../components/Text";
import { useTheme } from "styled-components";
import { TagInterface } from "../../../../types/TagInterface";

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

interface Props {
  category: TagInterface;
}

export const CategoryInfo = ({ category }: Props) => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Name>
        <RiFolder5Fill size={"80px"} color={theme.colors.primary} />
        <Text size={"big"} color={theme.colors.secondary}>
          {category.value}
        </Text>
      </Name>
    </Wrapper>
  );
};
