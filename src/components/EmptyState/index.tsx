import { Text } from "../Text";
import { EmptyStateWrapper } from "./style";
interface Props {
  msg: String;
}

export const EmptyState = ({ msg }: Props) => {
  return (
    <EmptyStateWrapper>
      <Text>{msg}</Text>
    </EmptyStateWrapper>
  );
};
