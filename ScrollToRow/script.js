const btn = document.querySelector('#btn');
const container = document.querySelector('.container');
const numInput=document.getElementById('num')

for (let i = 0; i <500 ; i++) {
    container.innerHTML+=`<div class="row ro_${i}">${i}  Salamlar</div>`;

}

btn.addEventListener('click', () => {
    const element = document.querySelector(`.ro_${numInput.value}`);

    container.scrollTo(0, (element.offsetTop-100));
    console.log(element.offsetTop);
});

