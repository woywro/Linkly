import { HomePage } from "../views/HomePage";
import { PageTemplate } from "../components/PageTemplate";
export default function Home() {
  return (
    <PageTemplate title={"Strona główna"}>
      <HomePage />
    </PageTemplate>
  );
}
