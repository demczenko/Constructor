const adjustTableRangeToCountry = (query, tableColumn) => {
  if (!query.tableColumns) {
    return query
  }
  if (query.tableRange.includes(":")) {
    const splitRange = query.tableRange.split(":");
    const tableRange = tableColumn + splitRange[0] + ":" + tableColumn + splitRange[1];
    query = {
      ...query,
      tableRange,
    };
    return query;
  } else {
    const tableRange = tableColumn + query.tableRange
    query = {
      ...query,
      tableRange,
    };
    return query;
  }

};

export default adjustTableRangeToCountry;
