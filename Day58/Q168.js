"use strict";
//Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
if (-1 || 0) {
    alert('first');
} //executes
if (-1 && 0) {
    alert('second');
} //no execution
if (null || -1 && 1) {
    alert('third');
} //executes
