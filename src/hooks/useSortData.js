const useSortData = (data) => {
  data?.sort((a, b) => {
    let da = new Date(a.createdAt),
      db = new Date(b.createdAt);
    return db - da;
  });
  return data;
};

export default useSortData;