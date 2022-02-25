import React from "react";
import "./Form.css";

const Form = (props) => {
  const { formValues, setFormValues, submit, validate, formErrors, disabled } = props;

  const onChange = (event) => {
    const { type, name, value, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, valueToUse);
    setFormValues({ ...formValues, [name]: valueToUse });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form id="pizza-form" className="form-container" onSubmit={onSubmit}>
      <h1 className="order-title">Order a Pizza</h1>
      <label className="label" htmlFor="name-input">
        Name:
      </label>
      <input type="text" id="name-input" name="name" value={formValues.name} onChange={onChange} />
      <div className="error-msg">{formErrors.name}</div>
      <label className="label" htmlFor="size-dropdown">
        Size Pizza:
      </label>
      <select id="size-dropdown" name="size" value={formValues.size} onChange={onChange}>
        <option value="">---Select a Size---</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="xl">XL</option>
      </select>
      <div className="error-msg">{formErrors.size}</div>
      <p className="toppings-title">Toppings:</p>
      <div className="toppings">
        <div>
          <label htmlFor="pepperoni">Pepperoni</label>
          <input type="checkbox" id="pepperoni" name="pepperoni" checked={formValues.pepperoni} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="sausage">Sausage</label>
          <input type="checkbox" id="sausage" name="sausage" checked={formValues.sausage} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="bacon">Bacon</label>
          <input type="checkbox" id="bacon" name="bacon" checked={formValues.bacon} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="grilledChicken">Grilled Chicken</label>
          <input type="checkbox" id="grilledChicken" name="grilledChicken" checked={formValues.grilledChicken} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="onions">Onions</label>
          <input type="checkbox" id="onions" name="onions" checked={formValues.onions} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="greenPepper">Green Peppers</label>
          <input type="checkbox" id="greenPepper" name="greenPepper" checked={formValues.greenPepper} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="dicedTomatoes">Diced Tomatoes</label>
          <input type="checkbox" id="dicedTomatoes" name="dicedTomatoes" checked={formValues.dicedTomatoes} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="blackOlives">Black Olives</label>
          <input type="checkbox" id="blackOlives" name="blackOlives" checked={formValues.blackOlives} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="roastedGarlic">Roasted Garlic</label>
          <input type="checkbox" id="roastedGarlic" name="roastedGarlic" checked={formValues.roastedGarlic} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="artichokes">Artichokes</label>
          <input type="checkbox" id="artichokes" name="artichokes" checked={formValues.artichokes} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="pineapple">Pineapple</label>
          <input type="checkbox" id="pineapple" name="pineapple" checked={formValues.pineapple} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="sardines">Sardines</label>
          <input type="checkbox" id="sardines" name="sardines" checked={formValues.sardines} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="extraCheese">Extra Cheese</label>
          <input type="checkbox" id="extraCheese" name="extraCheese" checked={formValues.extraCheese} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="jalapenos">Jalapenos</label>
          <input type="checkbox" id="jalapenos" name="jalapenos" checked={formValues.jalapenos} onChange={onChange} />
        </div>
      </div>
      <label className="label" htmlFor="special-text">
        Special Instructions:
      </label>
      <input type="text" id="special-text" name="instructions" value={formValues.instructions} onChange={onChange} />
      <button id="order-button" disabled={disabled}>
        Place Order
      </button>
    </form>
  );
};
export default Form;
