import React from 'react';

function sortFunction(columns) {
    console.log("HIHIHI")
    if (typeof(columns[0][0]) === String) {
        let sortedArray = columns.sort(function(a, b) { return (a - b); });
        console.log(sortedArray)
    }
}

export default sortFunction;