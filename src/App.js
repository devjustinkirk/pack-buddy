import { useState } from "react";
import Head from "./Head";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const messages = [
//   "Earn skills ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 7, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Head />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
  // const [step, setStep] = useState(1);
  // const [isOpen, setIsOpen] = useState(true);
  // function handlePrevious() {
  //   if (step > 1) setStep((s) => s - 1);
  // }
  // function handleNext() {
  //   if (step < 3) setStep((s) => s + 1);
  // }
  // let [counter, setCounter] = useState(1);
  // function add() {
  //   setCounter((c) => c + 1);
  // }
  // function minus() {
  //   if (counter > 1) setCounter((c) => c - 1);
  // }
  // return (
  //   <>
  //     <button className="close" onClick={() => setIsOpen((is) => !is)}>
  //       &times;
  //     </button>
  //     {isOpen && (
  //       <div className="steps">
  //         <div className="numbers">
  //           <div className={step >= 1 ? "active" : ""}>1</div>
  //           <div className={step >= 2 ? "active" : ""}>2</div>
  //           <div className={step >= 3 ? "active" : ""}>3</div>
  //         </div>
  //         <p className="message">
  //           Step {step} : {messages[step - 1]}
  //         </p>
  //         <div className="buttons">
  //           <button
  //             style={{ backgroundColor: "#7950f2", color: "#fff" }}
  //             onClick={handlePrevious}
  //           >
  //             Previous
  //           </button>
  //           <button
  //             style={{ backgroundColor: "#7950f2", color: "#fff" }}
  //             onClick={handleNext}
  //           >
  //             Next
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //     <p>{counter}</p>
  //     <button onClick={minus}>-</button>
  //     <button onClick={add}>+</button>
  //   </>
  // );
}
