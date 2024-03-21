document.addEventListener("astro-load", function() {
    const sections = document.querySelectorAll("#courses section") as NodeListOf<HTMLElement>;
    console.log(sections);
    
    sections.forEach(section => {
      const title = section.querySelector("h2") as HTMLElement;
      const list = section.querySelector("ul")  as HTMLElement;
      const toggleIcon = title.querySelector(".toggle-icon") as HTMLElement;

      title.addEventListener("click", function() {
        const isVisible = list.classList.toggle("visible");
        if (isVisible) {
          sections.forEach(otherSection => {
            if (otherSection !== section) {
              const otherList = otherSection.querySelector("ul");
              if (otherList) {
                otherList.classList.remove("visible");
              }
            }
          });
          toggleIcon.textContent = "-";
        } else {
          toggleIcon.textContent = "+";
        }
      });
    });
  });
  