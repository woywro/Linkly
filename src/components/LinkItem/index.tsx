import axios from 'axios';
import moment from 'moment';
import { useCallback } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import { ThemeInterface } from '../../types/ThemeInterface';
import { HomeLinkDropdown } from '../../views/HomePage/components/HomeLinkDropdown';
import { LinkInterface } from '../../types/LinkInterface';
import useMediaQuery from '../../hooks/useMediaQuery';
import { updateHistory } from '../../redux/actions/HistoryActions';
import breakpoints from '../../theme/breakpoints';
import { FieldText, LinkLabel, LinkWrapper, Name } from './style';
import { CollectionLinkDropdown } from '../../views/CollectionView/components/CollcetionLinkDropdown';
import { Router, useRouter } from 'next/router';

interface Props {
  item: LinkInterface;
  setLinks?: (arg0: LinkInterface[] | undefined) => void;
  links?: LinkInterface[];
}

export const LinkItem = ({ item, setLinks, links }: Props) => {
  const router = useRouter();
  const theme = useTheme() as ThemeInterface;
  const dispatch = useDispatch();
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);
  const mediaQueryLg = useMediaQuery(breakpoints.device.lg);

  const handleOnClick = useCallback(
    async (item: LinkInterface) => {
      dispatch(updateHistory(item));
      await axios.post('/api/addHistory', {
        linkId: item.id,
      });
      window.open(item?.url, '_blank');
    },
    [item]
  );

  return (
    <LinkWrapper onClick={() => handleOnClick(item)}>
      <LinkLabel title={item.title}>
        <AiOutlineLink size={15} />
        <Name>{item.title}</Name>
      </LinkLabel>
      {!mediaQuerySm && (
        <>
          {!mediaQueryLg && (
            <FieldText color={theme.colors.secondaryText}>
              {item.owner?.email}
            </FieldText>
          )}
          <FieldText color={theme.colors.secondaryText}>
            {moment(parseInt(item.modificationTimestamp)).calendar()}
          </FieldText>
        </>
      )}
      {router.pathname === '/' ? (
        <HomeLinkDropdown item={item} />
      ) : (
        <CollectionLinkDropdown item={item} setLinks={setLinks} links={links} />
      )}
    </LinkWrapper>
  );
};
