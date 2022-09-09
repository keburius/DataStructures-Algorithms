"use strict";
const nemo = ["nemo"];
const findNemo = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "nemo") {
            console.log("Found Nemo");
        }
    }
};
findNemo(nemo);
