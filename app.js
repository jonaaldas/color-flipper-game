const arr = ['#8ecae6','#219ebc', '#023047', '#ffb703', '#fb8500'];

const btn = document.querySelector('button').addEventListener('click', function(){
    let random = Math.floor(Math.random() * arr.length);
    document.querySelector('span').innerText = arr[random]
    document.querySelector('.outter').style.backgroundColor = arr[random]
})



