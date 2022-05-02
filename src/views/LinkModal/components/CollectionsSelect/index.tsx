import { useFormik } from 'formik';
import { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Input } from '../../../../components/Input';
import { Text } from '../../../../components/Text';
import { RootState } from '../../../../redux/store';
import { CollectionInterface } from '../../../../types/CollectionInterface';
import { Divider } from '../../../style';
import {
  AddCollectionButton,
  ChoosenSuggestion,
  ChoosenSuggestionList,
  Error,
  SelectWrapper,
  StyledForm,
  SuggesionsWrapper,
  Suggestion,
} from './style';

interface Props {
  setCollectionValues: (arg0: string[]) => void;
  collectionValues: string[];
}

export const CollectionsSelect = ({
  setCollectionValues,
  collectionValues,
}: Props) => {
  const savedCollections = useSelector((state: RootState) => state.collections);

  const [filteredSuggestions, setFilteredSuggestions] = useState<
    CollectionInterface[] | []
  >([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const onChange = (e: { target: HTMLInputElement }) => {
    const userInput = e.target.value;
    const unLinked = savedCollections.filter(
      (suggestion) =>
        suggestion.value.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setShowSuggestions(true);
  };

  const handleDeleteCollection = (collectionValue: string) => {
    setCollectionValues(
      JSON.parse(JSON.stringify(collectionValues)).filter(
        (x: string) => x !== collectionValue
      )
    );
  };

  const handleAddSuggestion = (e: CollectionInterface) => {
    if (!collectionValues.includes(e.value)) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setCollectionValues([...collectionValues, e.value]);
      formik.handleReset();
    }
  };

  const handleAddCollection = async (collectionValue: string) => {
    if (!collectionValues.includes(collectionValue)) {
      setShowSuggestions(false);
      setCollectionValues([...collectionValues, collectionValue]);
    }
  };

  const validationSchema = Yup.object({
    collection: Yup.string()
      .min(3, 'collection name is too short!')
      .max(20, 'collection name is too long!')
      .required('collection is required'),
  });

  const formik = useFormik({
    initialValues: {
      collection: '',
    },
    onSubmit: (values, actions) => {
      handleAddCollection(values.collection);
      actions.resetForm();
    },
    validationSchema,
  });

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length !== 0 ? (
      <SuggesionsWrapper>
        {filteredSuggestions.map((suggestion) => {
          return (
            <Suggestion
              key={suggestion.value}
              onClick={() => handleAddSuggestion(suggestion)}
            >
              <Text size={'small'} bold>
                {suggestion.value}
              </Text>
            </Suggestion>
          );
        })}
      </SuggesionsWrapper>
    ) : null;
  };

  return (
    <SelectWrapper>
      <StyledForm onSubmit={formik.handleSubmit} autoComplete="off">
        <Input
          type="text"
          onKeyUp={onChange}
          onChange={formik.handleChange}
          value={formik.values.collection}
          name="collection"
          placeholder="enter collections"
        />
        {filteredSuggestions.length == 0 && (
          <AddCollectionButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            Add +
          </AddCollectionButton>
        )}
        {filteredSuggestions.length == 0 && (
          <Error>
            {formik.errors.collection ? formik.errors.collection : null}
          </Error>
        )}
        {showSuggestions && input && <SuggestionsListComponent />}
      </StyledForm>
      <Divider />
      <ChoosenSuggestionList>
        {collectionValues !== undefined &&
          collectionValues.map((e) => {
            return (
              <ChoosenSuggestion
                onClick={() => handleDeleteCollection(e)}
                key={e}
              >
                {e}
                <BsFillTrashFill style={{ fill: 'white', marginLeft: '2px' }} />
              </ChoosenSuggestion>
            );
          })}
      </ChoosenSuggestionList>
    </SelectWrapper>
  );
};
