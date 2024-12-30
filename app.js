// For Desktops - Mouse Events

let section = document.querySelector('.section_01');

section.addEventListener('mousemove', (event) => {

    section.style.setProperty('--opacity', 1);

    let x = (event.offsetX / section.offsetWidth) * 100;

    let y = (event.offsetY / section.offsetHeight) * 100;

    section.style.setProperty('--left_position', `${x}%`);

    section.style.setProperty('--top_position', `${y}%`);

    section.style.setProperty('--left', `${x}%`);

    section.style.setProperty('--top', `${y}%`);
});

section.addEventListener('mouseout', () => {

    section.style.setProperty('--opacity', 0);

    section.style.setProperty('--left', '0%');

    section.style.setProperty('--top', '0%');
});


// For Mobile Devices - Touch Events

function setting_position(x, y) 
{
    section.style.setProperty('--left_position', x + "%");

    section.style.setProperty('--top_position', y + "%");

    section.style.setProperty('--left', x + "%");

    section.style.setProperty('--top', y + "%");
}

section.addEventListener('touchstart', (event) => {

    event.preventDefault();

    section.style.setProperty('--opacity', 1);

    let touch = event.touches[0];

    let touch_x = touch.clientX;

    let touch_y = touch.clientY;

    let rect = section.getBoundingClientRect();

    let x = ((touch_x - rect.left) / section.offsetWidth) * 100;

    let y = ((touch_y - rect.top) / section.offsetHeight) * 100;

    setting_position(x, y);
});

section.addEventListener('touchmove', (event) => {

    event.preventDefault();

    let touch = event.touches[0];

    let touch_x = touch.clientX;

    let touch_y = touch.clientY;

    let rect = section.getBoundingClientRect();

    let x = ((touch_x - rect.left) / section.offsetWidth) * 100;

    let y = ((touch_y - rect.top) / section.offsetHeight) * 100;

    setting_position(x, y);
});

section.addEventListener('touchend', (event) => {

    section.style.setProperty('--opacity', 0);

});