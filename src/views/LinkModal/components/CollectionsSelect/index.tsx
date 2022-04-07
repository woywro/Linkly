import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../../../components/Text";
import { RootState } from "../../../../redux/store";
import { CollectionInterface } from "../../../../types/CollectionInterface";
import { Input } from "../../../../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  SuggesionsWrapper,
  SelectWrapper,
  ChoosenSuggestionList,
  Error,
  ChoosenSuggestion,
  StyledInput,
  Suggestion,
  Add,
  AddCollectionButton,
} from "./style";
import { updateCollections } from "../../../../redux/actions/CollectionActions";
import { Divider } from "../../../style";

interface Props {
  setCollections: (arg0: CollectionInterface[]) => void;
  collections: CollectionInterface[];
}

export const CollectionsSelect = ({ setCollections, collections }: Props) => {
  const savedCollections = useSelector((state: RootState) => state.collections);

  const [filteredSuggestions, setFilteredSuggestions] = useState<
    CollectionInterface[] | []
  >([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

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

  const handleDeleteCollection = (e: CollectionInterface) => {
    setCollections(
      JSON.parse(JSON.stringify(collections)).filter(
        (x: CollectionInterface) => x.value !== e.value
      )
    );
  };

  const handleAddSuggestion = (e: CollectionInterface) => {
    if (!collections.map((e) => e.value).includes(e.value)) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setCollections([...collections, { value: e.value }]);
      formik.handleReset();
    }
  };

  const handleAddCollection = async (collection) => {
    if (!collections.map((e) => e.value).includes(collection)) {
      setShowSuggestions(false);
      setCollections([...collections, { value: collection }]);
    }
  };

  const validationSchema = Yup.object({
    collection: Yup.string()
      .min(3, "collection name is too short!")
      .max(20, "collection name is too long!")
      .required("collection is required"),
  });

  const formik = useFormik({
    initialValues: {
      collection: "",
    },
    onSubmit: (values, actions) => {
      handleAddCollection(values.collection);
      actions.resetForm();
    },
    validationSchema,
  });

  const SuggestionsListComponent = () => {
    return (
      filteredSuggestions.length !== 0 && (
        <SuggesionsWrapper>
          {filteredSuggestions.map((suggestion) => {
            return (
              <Suggestion
                key={suggestion.value}
                onClick={() => handleAddSuggestion(suggestion)}
              >
                <Text size={"small"} bold>
                  {suggestion.value}
                </Text>
              </Suggestion>
            );
          })}
        </SuggesionsWrapper>
      )
    );
  };

  return (
    <SelectWrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
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
        {collections !== undefined &&
          collections.map((e) => {
            return (
              <ChoosenSuggestion onClick={() => handleDeleteCollection(e)}>
                {e.value}
              </ChoosenSuggestion>
            );
          })}
      </ChoosenSuggestionList>
    </SelectWrapper>
  );
};
