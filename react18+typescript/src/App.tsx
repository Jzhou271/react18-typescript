import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import { produce } from "immer";
import { useState } from "react";

// import { useState } from "react";
// import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // mark the first bug is fixed
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleButtonClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
    console.log("Button clicked");
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "New"}
        </p>
      ))}
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
