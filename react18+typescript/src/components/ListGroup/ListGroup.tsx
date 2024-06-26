import { Fragment, useState } from "react";
import styles from "./ListGroup.module.css";
// import { MouseEvent } from "react";

// passing an object with two properties. { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;

  // set a function, and it accept an item with string type. (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // -1 means no item selected
  // let selectIndex = 0;

  // useState hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
    // return items.length === 0 && <p>No items found</p>;   // if you want to return only one element
  };

  // event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <Fragment>
      <h1>{heading}</h1>
      {getMessage()}

      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
