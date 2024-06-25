<script>
    import { onMount } from 'svelte';
  
    let content;
    let nextButton;
    let prevButton;
    let x = 0;
    let mx = 0;
    let maxScrollWidth = 0;
  
    onMount(() => {
      maxScrollWidth = content.scrollWidth - content.clientWidth;
  
      if (maxScrollWidth !== 0) {
        content.parentElement.classList.add('has-controls');
      }
  
      if (nextButton) {
        nextButton.addEventListener('click', (e) => {
          e.preventDefault();
          x = content.clientWidth + content.scrollLeft -15;
          content.scroll({
            left: x,
            behavior: 'smooth',
          });
        });
      }
  
      if (prevButton) {
        prevButton.addEventListener('click', (e) => {
          e.preventDefault();
          x = content.clientWidth - content.scrollLeft - 15 ;
          content.scroll({
            left: -x,
            behavior: 'smooth',
          });
        });
      }
  
      const mouseMoveHandler = (e) => {
        const mx2 = e.pageX - content.offsetLeft;
        if (mx) {
          content.scrollLeft = content.sx + mx - mx2;
        }
      };
  
      const mouseDownHandler = (e) => {
        content.sx = content.scrollLeft;
        mx = e.pageX - content.offsetLeft;
        content.classList.add('dragging');
      };
  
      const scrollHandler = () => {
        toggleControls();
      };
  
      const toggleControls = () => {
        if (content.scrollLeft > maxScrollWidth - 20) {
          nextButton.classList.add('disabled');
        } else if (content.scrollLeft < 10) {
          prevButton.classList.add('disabled');
        } else {
          nextButton.classList.remove('disabled');
          prevButton.classList.remove('disabled');
        }
      };
  
      const mouseUpHandler = () => {
        mx = 0;
        content.classList.remove('dragging');
      };
  
      content.addEventListener('mousemove', mouseMoveHandler);
      content.addEventListener('mousedown', mouseDownHandler);
      content.addEventListener('scroll', scrollHandler);
      content.addEventListener('mouseup', mouseUpHandler);
      content.addEventListener('mouseleave', mouseUpHandler);
    });
  </script>
  
  <div class="carousel_wrapper">
    <div class="carousel_content" bind:this={content}>
      <slot />
    </div>
    <div class="carousel_controls">
      <button class="prev" bind:this={prevButton}>
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
								<svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="previous">
								<g id="previous_2">
								<path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M28.9682 15.5438L39.257 8.52571C41.2485 7.16707 43.9486 8.59383 43.9486 11.0038V36.9158C43.9486 39.3272 41.249 40.7548 39.257 39.3958L20.2635 26.4382C18.5169 25.2492 18.5171 22.6726 20.2631 21.4817L26.9682 16.908V11.0064C26.9682 10.2023 26.0683 9.7271 25.4042 10.1802L6.43638 23.134C5.85532 23.5311 5.85532 24.3887 6.43618 24.7866L25.4038 37.7403C26.0683 38.1936 26.9682 37.7185 26.9682 36.9144V35.9744C26.9682 35.4221 27.4159 34.9744 27.9682 34.9744C28.5205 34.9744 28.9682 35.4221 28.9682 35.9744V36.9144C28.9682 39.3259 26.2685 40.7513 24.2762 39.3922L5.30706 26.4374C3.56509 25.2441 3.56509 22.6737 5.30824 21.4826L24.2766 8.52831C26.2685 7.16942 28.9682 8.59489 28.9682 11.0064V15.5438ZM26.9682 19.329V23.0024C26.9682 23.5547 27.4159 24.0024 27.9682 24.0024C28.5205 24.0024 28.9682 23.5547 28.9682 23.0024V17.9648L40.3841 10.1779C41.048 9.72496 41.9486 10.2009 41.9486 11.0038V36.9158C41.9486 37.7205 41.0482 38.1967 40.3842 37.7437L21.3892 24.785C20.8083 24.3898 20.8083 23.5308 21.3901 23.1339L26.9682 19.329Z" fill="#000000"/>
								</g>
								</g>
								</svg>
      </button>
      <button class="next" bind:this={nextButton}>
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
								<svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g id="next">
									<g id="next_2">
									<path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M18.9792 32.3759L8.69035 39.3951C6.69889 40.7537 3.99878 39.3269 3.99878 36.917V11.005C3.99878 8.59361 6.69843 7.166 8.69028 8.52489L27.6843 21.4809C29.4304 22.672 29.4304 25.249 27.6843 26.4371L20.9792 31.0114V36.9144C20.9792 37.7185 21.8791 38.1937 22.5432 37.7406L41.5107 24.787C42.0938 24.3882 42.0938 23.5316 41.5112 23.1342L22.5436 10.1805C21.8791 9.72714 20.9792 10.2023 20.9792 11.0064V11.9464C20.9792 12.4987 20.5315 12.9464 19.9792 12.9464C19.4269 12.9464 18.9792 12.4987 18.9792 11.9464V11.0064C18.9792 8.59492 21.6789 7.16945 23.6711 8.52861L42.6387 21.4823C44.3845 22.6732 44.3845 25.2446 42.6391 26.4382L23.6707 39.3925C21.6789 40.7514 18.9792 39.3259 18.9792 36.9144V32.3759ZM18.9792 29.9548L7.56322 37.7429C6.89939 38.1958 5.99878 37.7199 5.99878 36.917V11.005C5.99878 10.2003 6.89924 9.72409 7.56321 10.1771L26.5573 23.1331C27.1391 23.53 27.1391 24.389 26.5582 24.7842L20.9792 28.5904V24.9184C20.9792 24.3661 20.5315 23.9184 19.9792 23.9184C19.4269 23.9184 18.9792 24.3661 18.9792 24.9184V29.9548Z" fill="#000000"/>
									</g>
									</g>
								</svg>
      </button>
    </div>
  </div>
  
  <style lang="scss">
    .carousel_wrapper {
      position: relative;
      width: 100%;
      overflow-y: visible;
      display: flex;
      justify-content: center;
      justify-self: center;
     
      
    }
    .carousel_content {
      display: flex;
      overflow: hidden;
      max-width: 60rem;
      padding: 2rem .5rem 0 .5rem;
      transform: translateY(-1rem);
      cursor: grab;
      
    }
    .carousel_content.dragging {
      cursor: grabbing;
    }
    .carousel_controls {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      pointer-events: none;
    }
    .carousel_controls button {
      pointer-events: all;
      background-color: red;
      width: 5rem;
      min-height: 16rem;
      border: none;
      color: white;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-content: center;
      cursor: pointer;
      &:hover {
        svg {
          opacity: 1;
        }
      }
      &:first-child {
        background: rgba(0, 0, 0, 0);
        svg {
          transform: translate(-1rem, -.5rem);
        } 
      }
      &:nth-child(2) {
        background: rgba(0, 0, 0, 0);
        svg {
          transform: translate(1rem, -.5rem);
        }
      }
    }
    .carousel_controls button.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    svg {
      width: 70%;
      opacity: .3;
      height: auto;
      display: flex;
      align-self: center;
      transform: translate(-1rem, -.5rem);
    }
    .dark {
      .carousel_controls button {
        
      &:first-child {
        background: rgba(0, 0, 0, 0);
        svg {
          transform: translate(-1rem, -.5rem);
        }
        
      }
      &:nth-child(2) {
        background: lrgba(0, 0, 0, 0);
        svg {
          transform: translate(1rem, -.5rem);
        }
      }

      }
		svg {
      
			path, polygon, g {
				fill: white;
			}
		}
		}


  </style>
  