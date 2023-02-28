(function () {
  const customRedux = (function () {
    function createStore(reducer) {
      const getState = () => {};
      const dispatch = (action) => {};

      const subscribe = () => {};

      return {
        getState,
        dispatch,
        subscribe,
      };
    }

    return {
      createStore,
    };
  })();

  if (!window.customRedux) {
    window.$redux = window.customRedux = customRedux;
  }
})();
