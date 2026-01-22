import { useState, useEffect, useMemo, use } from "react";

export default function App6_ReactHooks() {
  const [itemCount, setItemCount] = useState(1); //step 1a
  const [price, setPrice] = useState(100); //step 1b

  const totalCost = useMemo(
    () => {
      console.log("Step 2 : useMemo executed - totalCost calcul");
      return itemCount * price;
    },
    [ itemCount, price ]
  );

  useEffect(
    () => {
      console.log("Step 3 : useEffect executed - run after ren");
      document.title = `items ${itemCount}`;
    },
    [ itemCount ]
  );

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>React Hooks Execution Order Example</h2>
      <p>
        <strong>Item Count : </strong>
        {itemCount}
      </p>
      <p>
        <strong>Price per Item : </strong>
        {price}
      </p>
      <p>
        <strong>Total Cost : </strong>
        {totalCost}
      </p>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => {
            setItemCount(itemCount + 1);
          }}
        >
            + Add Item
        </button>{" "}

        <button
          onClick={() => {
            setItemCount(itemCount > 1 ? itemCount - 1 : 1);
          }}
        >
            - Remove Item
        </button>

        <button onClick={() => {
            setPrice(price + 50)
        }}>
            Increase Price
        </button>
      </div>
    </div>
  );
}
