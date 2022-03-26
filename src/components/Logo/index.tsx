import styled, { useTheme } from "styled-components";
import logo1 from "../../static/img/logo1.png";
import logo2 from "../../static/img/logo2.png";
import Image from "next/image";

interface Props {
  mobile: boolean;
}

export const Logo = ({ mobile }: Props) => {
  const theme = useTheme();
  return (
    <LogoWrapper>
      {mobile == false ? (
        theme.colors.primaryBg == "#181818" ? (
          <StyledLogo src={logo2} />
        ) : (
          <StyledLogo src={logo1} />
        )
      ) : (
        <StyledLogo src={logo2} />
      )}
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  width: 110px;
  height: auto;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const StyledLogo = styled(Image)`
  object-fit: contain;
`;
