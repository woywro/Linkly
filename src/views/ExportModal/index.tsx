import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { CollectionInterface } from '../../types/CollectionInterface';
import { useEffect, useState } from 'react';
import { ExportElement } from './components/ExportElement';
import styled from 'styled-components';
import Scrollbars from 'react-custom-scrollbars-2';
import { Text } from '../../components/Text';

interface Props {
  collectionFetched: CollectionInterface;
}

export const ExportModal = ({ collectionFetched }: Props) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [copyButtonText, setCopyButtonText] =
    useState<string>('Copy to clipboard');

  useEffect(() => {
    const urls: string[] = collectionFetched.links?.map((e) => e.url);
    setChecked(urls);
  }, [collectionFetched]);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(checked.join(' '));
    setCopyButtonText('Copied!');
    setTimeout(() => {
      setCopyButtonText('Copy to clipboard');
    }, 1000);
  };

  return (
    <Wrapper>
      <Scrollbars autoHeight>
        {collectionFetched?.links?.map((e) => {
          return (
            <ExportElement
              setChecked={setChecked}
              key={e.modificationTimestamp}
              checked={checked}
              link={e}
            />
          );
        })}
      </Scrollbars>
      <BottomSection>
        <Text>{checked.length} selected</Text>
        <Button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleCopyToClipboard()}
        >
          {copyButtonText}
        </Button>
      </BottomSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-height: 300px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
`;

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
  margin-top: 10px;
`;
