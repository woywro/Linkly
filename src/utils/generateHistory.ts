export const generateHistory = (Links, History) => {
  const recentLinks = [];
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
  console.log(recentLinksSorted);
  return recentLinksSorted;
};
