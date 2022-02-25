import { HomePage } from "../views/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLinks } from "../redux/actions";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLinks());
  });
  return <HomePage />;
}
