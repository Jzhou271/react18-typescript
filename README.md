# React18 + typescript + antd + vite

## Preparation

### Install project

```
npx create-next-app@latest
```

### Start project

```
npm run dev
```

### Package project

```
npm run build
```

## React

### The role of React

1. Create dynamic and interactive UI
2. Routing
3. HTTP
4. Managing app state
5. Internationalization
6. Form validation
7. animations

### Building components

In the components file, import Fragment to enable multiple input modes in the function.
Wrap <></> in function
Wrap with <Fragment><Fragment /> in function

```
import { Fragment } from "react";

function MyComponent() {
  return (
    <Fragment>
      <div>First</div>
      <div>Second</div>
    </Fragment>
  );
}

```

### Rendering markup with JSX

```
import { MouseEvent } from "react";

  // event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

onClick={handleClick}
```

### Managing state

1. useState hook: data state changes over time
2. Each component (file) has its own state
3. Data managed ba a component
4. Similar to local variables
5. Mutable(mutable)
6. Each time it changes, cause a re-render (update the DOM accordingly)

```
const [selectedIndex, setSelectedIndex] = useState(-1);
<ul className="list-group">
  {items.map((item, index) => (
    <li
      key={item}
      className={ selectedIndex === index ? "list-group-item active" : "list-group-item" }
      onClick={() => {
        setSelectedIndex(index);
        }}>
      {item}
    </li>
  ))}
</ul>

```

### Passing data and function via props

• Reuse components
• Input passed to a components
• Similar to function arguments
• Immutable
• Each time it changes, cause a re-render (updates the DOM accordingly)

```
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  ..
}

```

## Styling Components

### Vanilla CSS (Plain CSS) - In the css file, write the css style yourself

### CSS modules - If there is a css class with the same name in another file, and these two css files are imported at the same time, a conflict will occur.

```
Ways to resolve conflicts:
Name the css file as `xxx.module.css `
Then `import styles from "./ListGroup.module.css"; `
Invoke `<ul className={[styles.listGroup, styles.container].join(" ")}>`
```

### CSS-in-JS

1. Scoped styles
2. All CSS & JS/TS code in one place
3. Easier to delete a component
4. Easier to style based on props/state

### Using CSS libraries

```
Styled components
Install 	npm i styled-components
Install  	npm i @types/styled-components
import styled from ‘styled-components’
```

### Inline styles

```
<ul className=”list-group” style={{ backgroudColor: ‘red’ }}>
  <li>
    code..
  </li>
</ul>

```

### Popular UI Libraries

```
•	Bootstrap
•	Material UI
•	Tailwind CSS
•	Daisy UI
•	Chakra UI
```

### Adding icons

```
React icons (library)
Install 	npm i react-icons@latest
https://react-icons.github.io/react-icons/

```

```
import { BsFillCalendarFill } from ‘react-icons/bs’;

function App() {
  return (
<div>
  <BsFillCalendarFill color=”red” size=”40” />
</div>
  );
}

```

### State Hook

```
React updates state asynchronously
State is stored outside of components
Use hooks at the top level of your component

State structure
•	Aviod redundant state variables
•	Group related variables inside an object
•	Aviod deep nested structure, better to use flat structure
```

### Keep components pure

```
Given the same input, always returns the same result
```

### Strict mode

```
When strict mode is enabled, React renders each component twice (react 18 is enabled by default)
```

### Updating objects

```
When dealing with objects and arrays, treat them as immutable or read-only
Need to give react a brand new object

const [drink, setDrink] = useState ({
  title: “American”,
  price: 5,
})

const handleClick = () => {
  const newDrink = {
    setDrink({ …drink, price: 6 })
  }
}

```

### Updating nested objects

```
const [customer, setCustomer] = useState ({
  name: “John”,
  address: {
city: ‘San Jose’,
zipCode: ‘94111’
  }
});

const handleClick = () => {
  setCustomer = ({
…customer,
address: { …customer.address, zipCode: 94112},
  });
};

```

### Updating arrays

```
const [tags, setTags] = useState([‘happy’, ‘cheerful’]);
const hanleClick = () => {
  // Add
  setTags([ …tags, ‘exciting’]);

  // Remove
  setTags(tags.filter(tag => tag !== ‘happy’));

  // Update
  setTags(tags.map(tag => tag === ‘happy’ ? ‘happiness’ : tag))
}

```

### Updating arrays of Objects

```
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

const hanleClick = () => {
  setBugs(bugs.map(bug => bug.id === 1 ? { …bug, fixed: true } : bug))
}

```

### Update logic with immer library

```
Immer tracks changes, then it will apply the changes creating a copy of the bugs array
Install npm i immer@latest


import { produce } from ‘immer’;
import { useState } from ‘react’;

const [bugs, setBugs] = useState([
  { id: 1, title: 'Bug 1', fixed: false },
  { id: 2, title: 'Bug 2', fixed: false },
]);

const handleButtonClick = () => {
  setBugs(
    produce((draft) => {
      const bug = draft.find((bug) => bug.id === 1);
      if (bug) bug.fixed = true;
    })
  );
};

return (
  <div>
    {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? ‘fixed’ : ‘New’}</p>)}
    <button onClick={handleClick}>Click me</button>
  </div>
)

```
