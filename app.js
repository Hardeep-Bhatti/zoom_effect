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
