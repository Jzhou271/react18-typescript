import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button/Button";
import Heart from "./components/Like";
import Like from "./components/Like";

// import { useState } from "react";
// import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={handleButtonClick}>My Button</Button>
      <br />
      <Like onClick={() => console.log("Heart clicked")} />
    </div>
  );
}

export default App;

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
