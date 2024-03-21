const toggleIcons = document.querySelectorAll('.toggle-icon') as NodeListOf<HTMLElement>;
const courseSections = document.querySelectorAll('.course-section') as NodeListOf<HTMLElement>;
toggleIcons.forEach((icon:any) => {
    icon.addEventListener('click', () => {
        const courseSection = icon.parentElement?.parentElement?.parentElement as HTMLElement;
        courseSection.classList.toggle('visible');
    });



});

// 