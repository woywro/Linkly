import { LinkInterface } from "../types/LinkInterface";
import { HistoryInterface } from "../types/HistoryInterface";

interface LinkHistoryInterface extends LinkInterface {
  timestamp: number;
}

export const generateHistory = (
  Links: LinkInterface[],
  History: HistoryInterface[]
) => {
  const recentLinks: LinkHistoryInterface[] = [];
  Links.map((e) => {
    History.map((x) => {
      if (e.id == x.id) {
        const obj = JSON.parse(JSON.stringify(e));
        obj.timestamp = x.timestamp;
        recentLinks.push(obj);
      }
    });
  });
  const recentLinksSorted = recentLinks.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  return recentLinksSorted;
};
