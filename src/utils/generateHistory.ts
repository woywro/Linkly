export const generateHistory = (Links, History) => {
  const recentLinks = [];
  Links.map((e) => {
    History.map((x) => {
      if (e.id == x.id) {
        recentLinks.push(e);
      }
    });
  });
  const recentLinksSorted = recentLinks.sort((a, b) => {
    return b.time - a.time;
  });
  console.log(recentLinksSorted);
  return recentLinksSorted;
};
