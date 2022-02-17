import { Folders } from "../views/Folders";
import { PageTemplate } from "../components/PageTemplate";
export default function BoardPage() {
  return (
    <PageTemplate title={"Folders"}>
      <Folders />
    </PageTemplate>
  );
}
