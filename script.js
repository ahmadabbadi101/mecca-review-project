document.addEventListener("DOMContentLoaded", () => {
  const utils = {
    toggleVisibility(element) {
      if (!element) return;
      element.style.display =
        element.style.display === "none" || element.style.display === ""
          ? "block"
          : "none";
    },

    findClosestParent(element, selector) {
      return element.closest(selector);
    },
  };

  function handleDocumentClick(event) {
    const target = event.target;
    if (target) {
      // Section header toggle
      if (target.classList.contains("header--section")) {
        const header = target;
        const content = header.nextElementSibling;
        utils.toggleVisibility(content);
        header.classList.toggle("expanded--after");
        return;
      }

      // Review header modal open
      if (target.classList.contains("header--reviews")) {
        const reviewHeader = target;
        const parentDiv = utils.findClosestParent(reviewHeader, "div");
        const modal = parentDiv.nextElementSibling;
        modal.style.display = "block";
        return;
      }

      // Modal close button
      if (target.classList.contains("close")) {
        const closeButton = target;
        const modal = utils.findClosestParent(closeButton, ".modal");
        modal.style.display = "none";

        const number = closeButton.nextElementSibling.nextElementSibling;
        if (number.classList.contains("reveal")) {
          number.classList.remove("reveal");
        }
        return;
      }

      // Review button to reveal rating
      if (target.classList.contains("button")) {
        const reviewButton = target;
        const number = reviewButton.nextElementSibling;
        number.classList.add("reveal");
      }
    }
  }

  document.addEventListener("click", handleDocumentClick);
});
