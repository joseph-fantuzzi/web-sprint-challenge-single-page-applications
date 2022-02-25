import React from "react";

const Form = (props) => {
  const { formValues, setFormValues } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form id="pizza-form" className="form-container" onSubmit={onSubmit}>
      <h1 className="order-title">Order a Pizza</h1>
      <label htmlFor="name-input">Name:</label>
      <input type="text" id="name-input" name="name" value={formValues.name} onChange={onChange} />
      <label htmlFor="size-dropdown">Size Pizza:</label>
      <select id="size-dropdown" name="size" value={formValues.size} onChange={onChange}>
        <option value="">---Select a Size---</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="xl">XL</option>
      </select>
      <h2>Toppings:</h2>
      <label htmlFor="pepperoni">Pepperoni</label>
      <input type="checkbox" id="pepperoni" name="pepperoni" checked={formValues.pepperoni} onChange={onChange} />
      <label htmlFor="sausage">Sausage</label>
      <input type="checkbox" id="sausage" name="sausage" checked={formValues.sausage} onChange={onChange} />
      <label htmlFor="bacon">Bacon</label>
      <input type="checkbox" id="bacon" name="bacon" checked={formValues.bacon} onChange={onChange} />
      <label htmlFor="grilledChicken">Grilled Chicken</label>
      <input type="checkbox" id="grilledChicken" name="grilledChicken" checked={formValues.grilledChicken} onChange={onChange} />
      <label htmlFor="onions">Onions</label>
      <input type="checkbox" id="onions" name="onions" checked={formValues.onions} onChange={onChange} />
      <label htmlFor="greenPepper">Green Peppers</label>
      <input type="checkbox" id="greenPepper" name="greenPepper" checked={formValues.greenPepper} onChange={onChange} />
      <label htmlFor="dicedTomatoes">Diced Tomatoes</label>
      <input type="checkbox" id="dicedTomatoes" name="dicedTomatoes" checked={formValues.dicedTomatoes} onChange={onChange} />
      <label htmlFor="blackOlives">Black Olives</label>
      <input type="checkbox" id="blackOlives" name="blackOlives" checked={formValues.blackOlives} onChange={onChange} />
      <label htmlFor="roastedGarlic">Roasted Garlic</label>
      <input type="checkbox" id="roastedGarlic" name="roastedGarlic" checked={formValues.roastedGarlic} onChange={onChange} />
      <label htmlFor="artichokes">Artichokes</label>
      <input type="checkbox" id="artichokes" name="artichokes" checked={formValues.artichokes} onChange={onChange} />
      <label htmlFor="pineapple">Pineapple</label>
      <input type="checkbox" id="pineapple" name="pineapple" checked={formValues.pineapple} onChange={onChange} />
      <label htmlFor="sardines">Sardines</label>
      <input type="checkbox" id="sardines" name="sardines" checked={formValues.sardines} onChange={onChange} />
      <label htmlFor="extraCheese">Extra Cheese</label>
      <input type="checkbox" id="extraCheese" name="extraCheese" checked={formValues.extraCheese} onChange={onChange} />
      <label htmlFor="jalapenos">Jalapenos</label>
      <input type="checkbox" id="jalapenos" name="jalapenos" checked={formValues.jalapenos} onChange={onChange} />
      <label htmlFor="special-text">Special Instructions:</label>
      <input type="text" id="special-text" name="instructions" value={formValues.instructions} onChange={onChange} />
      <button id="order-button">Place Order</button>
    </form>
  );
};
export default Form;
