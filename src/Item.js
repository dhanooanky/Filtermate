import React from 'react';

/**
 * Represents a single item in the list.
 * React.memo prevents re-rendering unless the item prop changes.
 */
const Item = React.memo(({ name }) => {
  return <li>{name}</li>; // Render item inside a list element
});

export default Item;
