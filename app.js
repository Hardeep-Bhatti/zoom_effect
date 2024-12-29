let section = document.querySelector('.section_01');

section.addEventListener('mousemove', (event) =>
{
    section.style.setProperty('--display', 'block');

    let x = (event.offsetX / section.offsetWidth) * 100;

    let y = (event.offsetY / section.offsetHeight) * 100;

    section.style.setProperty('--left_position', x + "%");

    section.style.setProperty('--top_position', y + "%");

    section.style.setProperty('--left', x + "%");

    section.style.setProperty('--top', y + "%");
});

section.addEventListener('mouseout', () =>
{
    section.style.setProperty('--display', 'none');

    section.style.setProperty('--left', '0%');

    section.style.setProperty('--top', '0%');
});

/* Touch events */

section.addEventListener('touchstart', (event) => {
    event.preventDefault();
});

section.addEventListener('touchmove',(event)=>{
    section.style.setProperty('--display', 'block');
    let touch = event.touches[0]; 
    let x = touch.clientX
    let y = touch.clientY

    section.style.setProperty('--left_position', x + "px");
    section.style.setProperty('--top_position', y + "px");
    section.style.setProperty('--left', x + "px");
    section.style.setProperty('--top', y + "px");
})

section.addEventListener('touchend', () => {
    section.style.setProperty('--display', 'none');
    section.style.setProperty('--left', '0px');
    section.style.setProperty('--top', '0px');
});