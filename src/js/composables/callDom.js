export function getElementId(id) {
  return document.getElementById(id);
}

export function getElementIdForFB(id, parentId) {
  if (parentId) {
    const parentElement = document.getElementById(parentId);
    return parentElement.querySelector(`#${id}`);
  } else {
    return document.getElementById(id);
  }
}

export function getElements(selectors, target = document) {
  return target.querySelectorAll(selectors);
}

export function getElement(selector, target = document) {
  return target.querySelector(selector);
}
