describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get("input[name=name]");
  const selectInput = () => cy.get("select[name=size]");
  const pepperoniCheck = () => cy.get("input[name=pepperoni]");
  const sausageCheck = () => cy.get("input[name=sausage]");
  const baconCheck = () => cy.get("input[name=bacon]");
  const grilledChickenCheck = () => cy.get("input[name=grilledChicken]");
  const onionCheck = () => cy.get("input[name=onions]");
  const greenPepperCheck = () => cy.get("input[name=greenPepper]");
  const dicedTomatoesCheck = () => cy.get("input[name=dicedTomatoes]");
  const blackOlivesCheck = () => cy.get("input[name=blackOlives]");
  const roastedGarlicCheck = () => cy.get("input[name=roastedGarlic]");
  const artichokesCheck = () => cy.get("input[name=artichokes]");
  const pineappleCheck = () => cy.get("input[name=pineapple]");
  const sardinesCheck = () => cy.get("input[name=sardines]");
  const extraCheeseCheck = () => cy.get("input[name=extraCheese]");
  const jalapenosCheck = () => cy.get("input[name=jalapenos]");
  const instructionsInput = () => cy.get("input[name=instructions]");
  const orderBtn = () => cy.get('button[id="order-button"]');

  it("sanity check", () => {
    expect(1 + 1).to.equal(2);
  });

  it("the elements are showing properly", () => {
    nameInput().should("exist");
    selectInput().should("exist");
    pepperoniCheck().should("exist");
    sausageCheck().should("exist");
    baconCheck().should("exist");
    grilledChickenCheck().should("exist");
    onionCheck().should("exist");
    greenPepperCheck().should("exist");
    dicedTomatoesCheck().should("exist");
    blackOlivesCheck().should("exist");
    roastedGarlicCheck().should("exist");
    artichokesCheck().should("exist");
    pineappleCheck().should("exist");
    sardinesCheck().should("exist");
    extraCheeseCheck().should("exist");
    jalapenosCheck().should("exist");
    instructionsInput().should("exist");
    orderBtn().should("exist");
  });

  describe("Filling out the name input", () => {
    it("can fill out an input", () => {
      nameInput().should("have.value", "").type("John Smith").should("have.value", "John Smith");
    });
  });

  describe("Selecting multiple toppings", () => {
    it("can check multiple checkboxes", () => {
      pepperoniCheck().check();
      sausageCheck().check();
      baconCheck().check();
      grilledChickenCheck().check();
      onionCheck().check();
      greenPepperCheck().check();
      dicedTomatoesCheck().check();
      blackOlivesCheck().check();
      roastedGarlicCheck().check();
      artichokesCheck().check();
      pineappleCheck().check();
      sardinesCheck().check();
      extraCheeseCheck().check();
      jalapenosCheck().check();
    });
  });

  describe("Fill out the form and submit", () => {
    it("can fill the form and press the place order button", () => {
      cy.contains("Joe").should("not.exist");
      nameInput().type("Joe");
      selectInput().select("medium");
      pepperoniCheck().check();
      sausageCheck().check();
      grilledChickenCheck().check();
      onionCheck().check();
      greenPepperCheck().check();
      dicedTomatoesCheck().check();
      blackOlivesCheck().check();
      roastedGarlicCheck().check();
      extraCheeseCheck().check();
      jalapenosCheck().check();
      instructionsInput().type("Please do half sausage and half pepperoni, the rest on the whole pie.");
      orderBtn().click();
      cy.contains("Joe").should("exist");
    });
  });
});
