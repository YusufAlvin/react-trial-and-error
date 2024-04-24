const dispatchHelper = (context, state) => (action) => {
  if (typeof action === 'function') {
    // If action is a function, call it with dispatch
    action(context, state);
  } else {
    // Otherwise, dispatch the plain action object
    context(action);
  }
};

export default dispatchHelper;
