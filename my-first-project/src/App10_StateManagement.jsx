import React, { createContext, useContext } from "react";

function BurgerCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <div
      style={{ border: "2px solid purple", padding: "10px", margin: "10px" }}
    >
      <h3>Burger Counter</h3>
      <p>Burgers in Plate: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add Burger</button>
    </div>
  );
}

function ParentComponent() {
  const [money, setMoney] = React.useState(100);

  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h2>Props Drilling Component</h2>
      <ChildA money={money} setMoney={setMoney} />
    </div>
  );
}

function ChildA({ money, setMoney }) {
  return <ChildB money={money} setMoney={setMoney} />;
}

function ChildB({ money, setMoney }) {
  return (
    <div
      style={{ border: "1px dashed orange", padding: "5px", margin: "10px" }}
    >
      <p>Money in pocket: ₹{money}</p>
      <button onClick={() => setMoney(money <= 0? 0 : money - 10)}>Buy Chips of ₹10</button>
    </div>
  );
}

const CartContext = createContext();

function CartProvider() {
    const [items, setItems] = React.useState([]);

    const addItem = () => setItems([...items, "Coke 👍"]);

    return (
        <CartContext.Provider value={{items, addItem}}>
            <CartMenu />
            <CartNavbar />
        </CartContext.Provider>
    )
}

function CartMenu() {
    const {addItem} = useContext(CartContext);
    return (
        <div style={{border: "2px solid blue", padding: "10px", margin: "10px"}}>
            <h3>Menu (Context API)</h3>
            <button onClick={addItem}>Add Coke</button>
        </div>
    )
}

function CartNavbar() {
    const {items} = useContext(CartContext);
    return (
        <div style={{background: "#ccccccff", padding: "10px", color: "black"}}>
            <p>Cart Items: {items.length}</p>
        </div>
    )
}

export default function App10_StateManagement() {
    return (
        <div>
            <h1>State Management Techniques in React</h1>
            <BurgerCounter />
            <ParentComponent />
            <CartProvider />
        </div>
    )
}
