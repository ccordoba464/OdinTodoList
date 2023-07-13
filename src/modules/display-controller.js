const displayController = (() => {
  const checkAvailability = () => {
    return !document.getElementById("project-form") &&
      !document.getElementById("task-form") &&
      !document.getElementById("expanded-task")
      ? true
      : false;
  };
  return { checkAvailability };
})();

export default displayController;
