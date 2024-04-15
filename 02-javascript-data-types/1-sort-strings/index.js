/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */


export function sortStrings(arr, param = 'asc') {
    const newArray = [].concat(arr);
    if (param === "asc") {
        return newArray.sort((firstString, secondString) => firstString.localeCompare(secondString, ["ru", "en"], { caseFirst: 'upper' }));
    }
        return newArray.sort((firstString, secondString) => secondString.localeCompare(firstString, ["ru", "en"], { caseFirst: 'upper' }));
}