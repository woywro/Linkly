import { Input } from "../../components/Input";
import { addLink } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const Add = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addLink({ name: "aa", url: "ddd", tags: ["acc", "dsd"] }));
  };

  return (
    <div>
      <Input placeholder="name" />
      <Input placeholder="url" />
      <Input placeholder="tags" />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};
