let image = document.querySelector('img')
let h1 = document.querySelector('.head')
let h2 = document.querySelector('.result')

function toss(recieve) {
     
    let num = Math.ceil(Math.random()*2);
    // console.log(num);
    if (recieve === 'You choose Head' && num === 1 || recieve === 'You choose Tail' && num === 2) {
        h1.innerHTML = recieve
        h2.innerHTML = 'Congratulations! You won the Toss'
        

    }else{
        h1.innerHTML = recieve
        h2.innerHTML = 'you loss the toss'
        
    }
    if (num === 1) {
        image.src = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg";
        
    }else{
        image.src = "https://en.numista.com/catalogue/photos/pakistan/423-original.jpg";
    }
}