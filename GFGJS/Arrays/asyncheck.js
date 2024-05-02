function fivesecond()
{
    setTimeout(() => {
        console.log(`first five second executed !`)
    }, 5000);
}
function twosecond()
{
    setTimeout(() => {
        console.log(`first two second executed !`)
    }, 2000);
}



console.log(fivesecond());
console.log(twosecond());
