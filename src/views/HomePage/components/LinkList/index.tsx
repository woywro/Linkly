import { useSelector } from "react-redux";
import { LinkItem } from "../../../../components/LinkItem";
import { Links } from "../../../../components/Links";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import breakpoints from "../../../../theme/breakpoints";
import { Title } from "../../../style";
import { SortBar } from "../SortBar";
import Scrollbars from "react-custom-scrollbars-2";

export const LinkList = () => {
  const userLinks = useSelector((state) => state.links);
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);

  return (
    <Links>
      <Title>Links</Title>
      <SortBar />
      {userLinks.map((e) => {
        return <LinkItem item={e} />;
      })}
    </Links>
  );
};
