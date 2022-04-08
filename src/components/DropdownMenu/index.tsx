import { useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";
import { useClickInside } from "../../hooks/useClickInside";
import useClickOutside from "../../hooks/useClickOutside";
import { Text } from "../Text";
import { DropdownItemList, DropdownMenuWrapper, Label } from "./style";

interface Props {
  children: JSX.Element[];
  icon?: boolean;
  title?: string;
  fullWidth?: boolean;
}

export const DropdownMenu = ({ children, title, icon, fullWidth }: Props) => {
  const [show, setShow] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();

  useClickInside(
    ref2,
    () => {
      setShow(false);
    },
    show
  );

  useClickOutside(ref1, () => {
    setShow(false);
  });

  const handleShowList = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  return (
    <DropdownMenuWrapper ref={ref1} onClick={handleShowList}>
      {icon == true ? (
        <Label>
          <Title>{title}</Title>
          <ButtonIcon>
            {show == true ? <BsChevronDown /> : <BsChevronUp />}
          </ButtonIcon>
        </Label>
      ) : (
        <Title>{title}</Title>
      )}
      <DropdownItemList show={show} fullWidth={fullWidth} ref={ref2}>
        {children}
      </DropdownItemList>
    </DropdownMenuWrapper>
  );
};

const ButtonIcon = styled.div`
  margin-left: 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.primaryText};
`;
