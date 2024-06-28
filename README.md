# React18 + typescript + antd + vite

## Preparation

### Install project

```
npm create vite@latest
cd xxxx
npm install
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

1. Reuse components
2. Input passed to a components
3. Similar to function arguments
4. Immutable
5. Each time it changes, cause a re-render (updates the DOM accordingly)

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
Bootstrap
Material UI
Tailwind CSS
Daisy UI
Chakra UI
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
1. Aviod redundant state variables
2. Group related variables inside an object
3. Aviod deep nested structure, better to use flat structure
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

### Share state between components

```
function App() {
  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
    "Product4",
  ]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;

```

### Building an expandableText component

Use state hook only for the value change over time, and their change require to redering components

```
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
```

### Building forms

## Create a form

```
const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

```

## Handing form submission

1. PreventDefault

```

import { FormEvent } from "react";

const Form = () => {
  const hanleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted");
  };

return (
    // event preventDefault will block form post in server
    <form onSubmit={hanleSubmit}>
      <div>
      </div>
    </form>
  );
};

```

2. Store data into server

## Accessing input fields

1. Get the value of the input field in the form, use useRef hook

```
const Form = () => {
  // useRef will reference any type of element in DOM
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };

  const hanleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    ...
    <input ref={nameRef} id="name" type="text" className="form-control" />
    <input ref={ageRef} id="age" type="number" className="form-control" />
    )
}

```

2. Get the value of the input field in the form, use useState hook

```
  const [person, setPerson] = useState({
      name: "",
      age: 0,
    });

  return (
    <input
      onChange={(e) => setPerson({ ...person, name: e.target.value })}
      value={person.name} // this input field always reply under value in the state varible
      id="name"
      type="text"
      className="form-control"
    />

    <input
      onChange={(e) =>
        setPerson({ ...person, age: parseInt(e.target.value) })}
        value={person.age} // this input field always reply under value in the state varible
        id="age"
        type="number"
        className="form-control"
      />
  )

```

3. Get the value of the input field in the form, use React Hook Form

```
npm install react-hook-form@latest
import { useForm } from "react-hook-form";

```

Call useForm

```
import { useForm, FieldValues } from "react-hook-form";
const Form = () => {
  // use useForm
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name")}
        id="name"
        type="text"
        className="form-control"
      />
      <input
        {...register("age")}
        id="age"
        type="number"
        className="form-control"
      />
    </form>
    )
}

```

## Applying Validation

1. use useForm to Validation

```
interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: true, minLength: 3 })}
        id="name"
        type="text"
        className="form-control"
      />
      {errors.name?.type === "required" && (
        <p className="text-danger">The name field is required</p>
      )}
      {errors.name?.type === "minLength" && (
        <p className="text-danger">The name must be at least 3 characters!</p>
      )}
    </form>
  )
}

```

# Validation libraries:

Joi
Yup
Zod
....

2. use Zod to Validation

Install Zod

```
npm i zod@latest
```

Use Zod to define a schema type form

```
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(18)
})

type FormData = z.infer<typeof schema>;
```

install hookform-resolvers-zod

```
npm i @hookform/resolvers@latest

```

Intergrate with react hook form with Zod

```
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be at least 18" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  // use useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name")}
        id="name"
        type="text"
        className="form-control"
      />
      {errors.name && <p className="text-danger">{errors.name.message}</p>}
      <input
        {...register("age", { valueAsNumber: true })}
        id="age"
        type="number"
        className="form-control"
      />
      {errors.age && <p className="text-danger">{errors.age.message}</p>}
    </form>
  )
}
```

## Disabling the submit button if the form is invalid

```
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <button disabled={!isValid} className="btn btn-primary" type="submit">
      Submit
    </button>
  )
}
```
