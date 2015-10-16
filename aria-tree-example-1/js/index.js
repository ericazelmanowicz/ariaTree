/* The toggle function */
function toggleTree(toggleElement) {
  //Handle the hide case first
  if (toggleElement.className == 'expandedList') {
    toggleElement.className = 'collapsedList';
    toggleElement.setAttribute("aria-expanded", "false");
  } else {
    toggleElement.className = 'expandedList';
    toggleElement.setAttribute("aria-expanded", "true");
  }
}

/* Do the iteration over all the treeitem nodes and set aria-selected to be false */
var currentNode;
var nodeIterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT, function(node) {
  return node.getAttribute('role') === 'treeitem' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
});

while (currentNode = nodeIterator.nextNode()) {
  currentNode.setAttribute("aria-selected", "false");
  currentNode.setAttribute("tabindex", "-1");
}

/* Set the first element to get keyboard focus to have tabindex = 0 */
var initialFocusable = document.getElementById("aotw_initial_focus");
initialFocusable.setAttribute("tabindex", "0");