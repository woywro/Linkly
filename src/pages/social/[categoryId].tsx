import axios from "axios";
import { useRouter } from "next/router";
import { Modal } from "../../components/Modal";

export default function SocialShare() {
  const router = useRouter();
  console.log(router.query);
  return (
    <Modal
      title={"Shared with you"}
      open={true}
      onClose={() => {
        router.push("/");
      }}
    >
      <div>
        <p>s</p>
      </div>
    </Modal>
  );
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       categoryId: context.query.categoryId,
//     },
//   };
// }
