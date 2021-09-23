export const sortList = (list, property, order) => {
  list.sort((a, b) => {
    if (a[property] < b[property]) {
      return order === "ascending" ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return order === "ascending" ? 1 : -1;
    }
    return 0;
  });

  return list;
};
