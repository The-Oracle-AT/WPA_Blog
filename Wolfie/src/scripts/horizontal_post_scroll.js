// credit: https://codepen.io/samwong/pen/xxJMaMP?editors=1010
window.addEventListener('load', () => {
    const component_sel = '.carousel_wrapper';
    const content_sel = '.carousel_content';
    const controls_sel = '.carousel_controls';

    const components = document.querySelectorAll(component_sel);
    console.log(components.length);
    for(let i = 0; i < components.length; i++){
        const component = components[i];
        const content = component.querySelector(content_sel);
        const maxScrollWidth = content.scrollWidth -  content.clientWidth;
        const nextButton = component.querySelector('.next');
        const prevButton = component.querySelector('.prev');
        let x = 0;
		let mx = 0;

        //Check if the scroll area needs buttons
        if(maxScrollWidth !== 0) {
            component.classList.add('has-controls')
        }
        if(nextButton) {
            nextButton.addEventListener('click', (e)=> {
                e.preventDefault();
                x = content.clientWidth*0.95  + content.scrollLeft + 0;//????
                content.scroll({
                    left: x,
                    behavior: 'smooth',
                })
            })
        }
        if(prevButton){
            prevButton.addEventListener('click', (e)=> {
                e.preventDefault();
                x = content.clientWidth*0.95 - content.scrollLeft; // + 0?
                content.scroll({
                    left: -x,
                    behavior: 'smooth',
                })
            })
        }
        // handle mouse movement
        const mouseMoveHandler = ( e ) => {
			const mx2 = e.pageX - content.offsetLeft;
			if ( mx ) {
				content.scrollLeft = content.sx + mx - mx2;
			}
		};
        //mouse down handler
		const mouseDownHandler = ( e ) => {
			content.sx = content.scrollLeft;
			mx = e.pageX - content.offsetLeft;
			content.classList.add( 'dragging' );
		};

        // execute control toggle
		const scrollHandler = () => {
			toggleControls();
		};

		// toggle controls to disable scrolling when at max-scroll width
		const toggleControls = () => {
			if (content.scrollLeft > maxScrollWidth - 20) {
				nextButton.classList.add( 'disabled');
			} else if ( content.scrollLeft < 10 ) {
				prevButton.classList.add( 'disabled' );
			} else {
				nextButton.classList.remove('disabled');
				prevButton.classList.remove('disabled');
			}
		};

		// Mouse up movement handler
		const mouseUpHandler = () => {
			mx = 0;
			content.classList.remove('dragging');
		};

		content.addEventListener('mousemove', mouseMoveHandler);
		content.addEventListener('mousedown', mouseDownHandler);
		if ( component.querySelector( controls_sel ) !== undefined ) {
			content.addEventListener( 'scroll', scrollHandler);
		}
		content.addEventListener('mouseup', mouseUpHandler);
		content.addEventListener('mouseleave', mouseUpHandler);
    }

});