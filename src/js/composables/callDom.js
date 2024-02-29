export function getElementId(id) {
  return document.getElementById(id);
}

export function getElements(selectors, target = document) {
  return target.querySelectorAll(selectors);
}

export function getElement(selector, target = document) {
  return target.querySelector(selector);
}
