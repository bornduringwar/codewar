// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
const expandedForm = num => 
{
const numAsString = num.toString();
let length = numAsString.length;
const numSplit = numAsString.split("");
const expandArr = numSplit.map((value, pos) => {
    if (value === "0") {
        length--;
        return null;
    }
    let expandedValue = value;
    for (let i = 1 ; i < length; i++ ){
        expandedValue += "0";
    }
    length--;
    return expandedValue;
}).filter(value => value !== null)

return expandArr.join(" + ");
}
console.log(expandedForm(70304)) // 3021 => "3000 + 20 + 1"