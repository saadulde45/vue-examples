const increment = (context) => {
  context.commit("incrementCounter");
};
const decrement = context => {
  context.commit("decrementCounter");
};
const asyncIncrement = (context, payload) => {
  setTimeout(() => {
    context.commit("incrementCounter");
  }, payload);
};

export default {
  increment,
  decrement,
  asyncIncrement
}