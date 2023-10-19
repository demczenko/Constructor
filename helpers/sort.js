export function sort(data, order) {
  const result = [];
  for (const key of order) {
    data.forEach((item) => {
      if (item.main_id === key.id) {
        result.push({
          ...item,
        });
      }
    });
  }
  return result;
}
