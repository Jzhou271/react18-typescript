// import ListGroup from "./components/ListGroup/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
// import Like from "./components/Like";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";

// import { produce } from "immer";
// import { useState } from "react";

import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sit
        laborum aspernatur molestias excepturi, voluptate quaerat molestiae. Eum
        necessitatibus doloremque, eaque, sunt doloribus animi rerum sint, est
        laborum reprehenderit neque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perferendis asperiores sunt quasi debitis facere qui
        quaerat labore itaque modi! Consectetur, necessitatibus blanditiis dicta
        facilis maxime voluptate odit accusamus rerum incidunt! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Minus eum id nisi ad fugiat
        harum quibusdam, esse quam, ipsam officia consequuntur, deleniti aperiam
        eveniet. Consequatur ipsum sunt vero sed provident. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Ducimus, a fugit ipsam
        perferendis quaerat molestiae quam quos vitae pariatur sequi itaque
        asperiores quis, in velit non. Illum omnis eveniet atque.
      </ExpandableText>
    </div>
  );
}

export default App;

// Shopping cart excrise -- share state between components (NavBar.tsx and Cart.tsx)

// function App() {
//   const [cartItems, setCartItems] = useState([
//     "Product1",
//     "Product2",
//     "Product3",
//     "Product4",
//   ]);

//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }

// export default App;

// ListGroup and Button updating excrise (ListGroup.tsx, Button.tsx, Like.tsx)

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   // mark the first bug is fixed
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleButtonClick = () => {
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//     console.log("Button clicked");
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "fixed" : "New"}
//         </p>
//       ))}
//       <Button onClick={handleButtonClick}>My Button</Button>
//       <br />
//       <Like onClick={() => console.log("Heart clicked")} />
//     </div>
//   );
// }

// export default App;

// Alert excrise (Alert.tsx, Button.tsx)

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>
//           Hello <span>World</span>
//           <br />
//         </Alert>
//       )}
//       <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
//     </div>
//   );
// }

// export default App;
