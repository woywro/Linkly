import { Input } from "../../components/Input";
export const Add = () => {
  const handleAdd = () => {
    console.log("add");
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
