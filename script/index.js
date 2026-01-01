
let input = document.getElementById('input');
let buttons = document.querySelectorAll('.opt_btn');
let first_num = null;
let operator = null;


// console.log(buttons);
buttons.forEach(btn => {
    btn.addEventListener('click',() => {
        let value = btn.value;
        console.log(value);
        operations(value);
    })
})
const operations = (value) => {
    switch(value){
        case '+' : case '-' : case '*' : case '/':
            setOperators(value);
            break;
        case 'C':
            reset();
            break;
        case '=':
            calculation();
            break;
        case 'a²':
            square();
            break;
        case 'a³':
            cube();
            break;
        default:
            display(value);
            break;

    }

}
function setOperators(opt)
{
    first_num = Number(input.value);
    operator = opt;
    // console.log(first_num + 'setoperats function');
    input.value = '';

}
function display(value)
{
    input.value += value; 
}

function reset()
{
    input.value = '';
    first_num = null;
    operator = null;
}
function square()
{
    let num = Number(input.value);
    result = num * num;
    input.value = result; 
}
 
function cube()
{
    let num = Number(input.value);
    result = num * num * num;
    input.value = result; 
}

const calculation = () => {
    let num = Number(input.value);
    switch(operator)
    {
        case '+':
            total = first_num  + num;
            break;
        case '-':
            total = first_num - num;
            break
        case '*':
            total = first_num * num;
            break;
        case '/':
            total = (num !== 0) ? first_num / num : 'Error';
            break;
        default :
            total = 'Invalid';
            break;
    }
    input.value = total;
    first_num = null;
    operator = null;
   
}

