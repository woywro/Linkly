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
}

export const HomeLinkDropdown = ({ item }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const mediaQuerySm = useMediaQuery(breakpoints.device.sm);

  const handleDeleteLink = async (e: React.MouseEvent, item: LinkInterface) => {
    e.stopPropagation();
    dispatch(deleteLink(item));
    await axios.post('/api/deleteLink', {
      id: item.id,
    });
  };

  const handleEditLink = () => {
    router.push({
      pathname: `/editLink/${item.id}`,
      query: { data: JSON.stringify(item) },
    });
  };

  return (
    <DropdownMenu icon={true} fullWidth={mediaQuerySm ? true : false}>
      <DropDownButton
        onClick={(e) => handleDeleteLink(e, item)}
        whileTap={{ scale: 0.95 }}
      >
        Delete
      </DropDownButton>
      <DropDownButton
        whileTap={{ scale: 0.95 }}
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
