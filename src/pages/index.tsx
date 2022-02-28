import { HomePage } from "../views/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHistory, getLinks } from "../redux/actions";
import { useSelector } from "react-redux";
export default function Home() {
  const Links = useSelector((state) => state.links);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLinks());
  }, []);
  useEffect(() => {
    dispatch(getHistory());
  }, [Links]);
  return <HomePage />;
}
