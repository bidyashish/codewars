/* Once upon a time, on a way through the old wild west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed the desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]. */


/* Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []) */



function dirReduc(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH' ||
            arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH' ||
            arr[i] === 'EAST' && arr[i + 1] === 'WEST' ||
            arr[i] === 'WEST' && arr[i + 1] === 'EAST') {
            arr.splice(i, 2);
            i = i - 2;
        }
    }
    return arr;
}



console.log(dirReduc(['EAST', 'WEST', 'SOUTH', 'NORTH', 'EAST', 'SOUTH', 'WEST', 'EAST', 'NORTH', 'SOUTH']))