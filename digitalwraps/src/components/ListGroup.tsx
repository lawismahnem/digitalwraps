import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup(props: Props) {
  const items = ["Polomolok", "Cebu", "Gensan", "Manila"];
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //event handler
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <h2>footer</h2>
    </>
  );
}

export default ListGroup;
