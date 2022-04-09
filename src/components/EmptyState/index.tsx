import { Button } from "../Button";
import { Text } from "../Text";
import { EmptyStateWrapper } from "./style";
interface Props {
  msg: String;
  buttonText?: String;
  onClick?: () => void;
}

export const EmptyState = ({ msg, buttonText, onClick }: Props) => {
  return (
    <EmptyStateWrapper>
      <Text>{msg}</Text>
      {buttonText !== undefined && (
        <Button onClick={onClick}>{buttonText}</Button>
      )}
    </EmptyStateWrapper>
  );
};
