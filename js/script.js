'use strict';

function removeElement (array, item) {
    const array = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

    const result = array.filter((word) => word.length !=item);

    console.log(result);}

// Expected output: Array ["exuberant", "destruction", "present"]

