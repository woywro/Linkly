import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Text } from "../../../../components/Text";
import { MobileSortButtonIcon, MobileSortButtonWrapper } from "./style";

export const MobileSortButton = ({ showMobileSort, onClick }) => {
  return (
    <MobileSortButtonWrapper onClick={onClick}>
      <Text color="white">sort</Text>
      <MobileSortButtonIcon>
        {showMobileSort == true ? (
          <BsChevronDown style={{ fill: "white" }} />
        ) : (
          <BsChevronUp style={{ fill: "white" }} />
        )}
      </MobileSortButtonIcon>
    </MobileSortButtonWrapper>
  );
};
