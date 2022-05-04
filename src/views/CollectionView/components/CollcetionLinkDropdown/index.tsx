import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { deleteLink } from '../../../../redux/actions/LinkActions';
import breakpoints from '../../../../theme/breakpoints';
import { LinkInterface } from '../../../../types/LinkInterface';
import { DropDownButton } from './style';

interface Props {
  item: LinkInterface;
  setLinks?: (arg0: LinkInterface[] | undefined) => void;
  links?: LinkInterface[];
}

export const CollectionLinkDropdown = ({ item, setLinks, links }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);

  const handleDeleteLink = useCallback(
    async (e: React.MouseEvent, item: LinkInterface) => {
      e.stopPropagation();
      dispatch(deleteLink(item));
      await axios.post('/api/deleteLink', {
        id: item.id,
      });
      const linksFiltered: LinkInterface[] | undefined = links?.filter(
        (x) => x.id !== item.id
      );
      setLinks?.(linksFiltered);
    },
    [links]
  );

  const handleDeleteLinkFromCollection = useCallback(
    async (e: React.MouseEvent, item: LinkInterface) => {
      e.stopPropagation();
      await axios.post('/api/deleteLinkFromCollection', {
        id: item.id,
        collectionId: router.query.collectionId,
      });
      const linksFiltered: LinkInterface[] | undefined = links?.filter(
        (x) => x.id !== item.id
      );
      setLinks?.(linksFiltered);
    },
    [links, item]
  );

  const handleEditLink = useCallback(() => {
    router.push({
      pathname: `/editLink/${item.id}`,
      query: { data: JSON.stringify(item) },
    });
  }, [item]);

  return (
    <DropdownMenu icon={true} fullWidth={mediaQuerySm ? true : false}>
      <DropDownButton onClick={(e) => handleDeleteLink(e, item)}>
        Delete
      </DropDownButton>
      <DropDownButton onClick={(e) => handleDeleteLinkFromCollection(e, item)}>
        Delete from collection
      </DropDownButton>
      <DropDownButton
        onClick={(e) => {
          handleEditLink();
          e.stopPropagation();
        }}
      >
        Edit
      </DropDownButton>
    </DropdownMenu>
  );
};
