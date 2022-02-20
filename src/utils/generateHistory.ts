import { LinkInterface } from "../types/LinkInterface";

interface LinkHistoryInterface extends LinkInterface {
  time: number;
}

interface historyInterface {
  time: number;
  id: number;
}

export const generateHistory = (
  Links: LinkInterface[],
  History: historyInterface[]
) => {
  const recentLinks: LinkHistoryInterface[] = [];
  Links.map((e) => {
    History.map((x) => {
      if (e.id == x.id) {
        const obj = JSON.parse(JSON.stringify(e));
        obj.time = x.time;
        recentLinks.push(obj);
      }
    });
  });
  const recentLinksSorted = recentLinks.sort((a, b) => {
    return b.time - a.time;
  });
  return recentLinksSorted;
};
