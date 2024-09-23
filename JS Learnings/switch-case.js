// we use switch case statements when we have multiple conditions
// syntax/
// switch(consition){
//     case1:
//     if true
//     console.log(case1 correct)
//     break;
//     case2:
//     if true
//     console.log(case1 correct)
//     break;
//     default:
//     if true
//     console.log(case1 correct)
// }


let x = 0
let bulb;

switch(x)
{
    case 0:
        bulb = "off";
        console.log(bulb);
        break;

    case 1:
         bulb = "on";
        console.log(bulb);
        break;

    default:
    bulb="value not found"
    console.log(bulb);
}