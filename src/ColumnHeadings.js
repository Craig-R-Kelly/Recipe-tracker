// ColumnHeadings.js

/* This child of `RecipeList.js` returns a JSX structure of capitalized column headings,
   the first five of which are drawn from the keys of the first object in `RecipeData`. */

import React from "react";

/* Defined here b/c this is only column heading not drawn from array itself */
const sixthColumnHeading = "Actions";

function ColumnHeadings({ keys }) {
    return (
        <tr>
            {keys.map((key) => (
                <th key={key}>{capitalize(key)}</th>
            ))}
            <th>{sixthColumnHeading}</th>
        </tr>
    );
};

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default ColumnHeadings;