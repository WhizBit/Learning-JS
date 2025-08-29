// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

const Month = 3

switch(Month){
    case 1:
        console.log('Feb')
        break;
    case 2:
        console.log('March')
        break;
    case 3:
        console.log('April')// After case is matched it run all statement below it without checking for the case, eXCEPT dEFAULT 
        // break;
    case 4:
        console.log('May')
        break;
    default:
        console.log('Not in Range')
        break;
}

