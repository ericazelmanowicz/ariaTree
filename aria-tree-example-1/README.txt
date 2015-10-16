A Pen created at CodePen.io. You can find this one at http://codepen.io/universitysandbox/pen/gagXLm.

 This is an example of a ARIA tree control I am developing to play around with some code.  A few choices made in creating the tree:

Set a label for the entire tree.
Set role="tree" for the overall tree container.
Set role="treeitem" for each tree item.
Set aria-expanded for expanded / collapsed state of nodes

Set role="group" for groups of child nodes [TODO]
Set the tree as a single tab stop [TODO]
Set each node of the tree as focusable but not in tab order (tabindex=-1) [TODO]
Allow each item to receive keyboard focus [TODO]
Set aria-selected for each node [TODO]