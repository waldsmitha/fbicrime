import { useState } from "react";
import Item from "./Item";
import Titles from "./Titles";

//Utilities
import { sortBy } from "lodash";

const List = ({ list, onRemoveItem }) => {
  const [sort, setSort] = useState("NONE");
  const SORTS = {
    NONE: (list) => list,
    TITLE: (list) => sortBy(list, "title"),
    AUTHOR: (list) => sortBy(list, "author"),
    COMMENTS: (list) => sortBy(list, "num_comments").reverse(),
    POINTS: (list) => sortBy(list, "points").reverse(),
  };

  const handleSort = (sortKey) => {
    setSort(sortKey);
  };

  const sortFunction = SORTS[sort];
  const sortedList = sortFunction(list);

  return (
    <ul>
      <Titles handleSort={handleSort} />
      {sortedList.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
      {/* {list.map(({ objectID, ...item }) => (
        <Item key={objectID} {...item} onRemoveItem={handleRemoveStory} />
      ))} */}
    </ul>
  );
};

export default List;
