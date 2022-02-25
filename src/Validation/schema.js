import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required.").min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["small", "medium", "large", "xl"], "Size is required."),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  grilledChicken: yup.boolean(),
  onions: yup.boolean(),
  greenPepper: yup.boolean(),
  dicedTomatoes: yup.boolean(),
  blackOlives: yup.boolean(),
  roastedGarlic: yup.boolean(),
  artichokes: yup.boolean(),
  pineapple: yup.boolean(),
  sardines: yup.boolean(),
  extraCheese: yup.boolean(),
  jalapenos: yup.boolean(),
  instructions: yup.string(),
});

export default schema;
