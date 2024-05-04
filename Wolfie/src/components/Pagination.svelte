<script>
    import { onDestroy, onMount } from "svelte";
    import { writable } from "svelte/store";
    export let themeStore = writable('light')
    export let prevousPageURL;
    export let nextPageURL;
    export let categoryURL;
    

    $:showPrevURL = prevousPageURL ? 'show' : 'hide'
    $:showNextURL = nextPageURL ? 'show' : 'hide'
    $: showCategoryURL = categoryURL ? 'show' : 'hide'

    let theme = 'light'
    $: dark = theme
    onMount(() => {
        theme = window.localStorage.getItem('theme')
        themeStore.set(theme)
        document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
    }) 
    function handleToggleClick(e) {
        if(theme === 'light') { 
            theme = 'dark'
        } else { 
            theme = 'light'
        } 
        themeStore.set(theme)
        console.log('clicked theme button')
    }
    
    
    onDestroy(() => {
    })
    

</script>

<div class={`pagination_wrapper ${dark}`}>
    <a href={categoryURL} class={`category ${showCategoryURL}`} ><span>See category: <slot name="category_link_content">category</slot></span></a>
    <a href={prevousPageURL} class={`prev ${showPrevURL} `} ><span>Prevous</span><br/><slot name="prev_link_content"><span>Prevous</span></slot> </a>
    <a href={nextPageURL} class={`next ${showNextURL} `}><span>Next</span><br/><slot name="next_link_content"><span>Next</span></slot> </a>
</div>

<style lang="scss">
    div {
        position: relative;
        width: 100%;
        height: 10rem;
        color: inherit;
        display: flex;
        
        &.pagination_wrapper {
            &.light {
                color: black;
                .category {
                    width: fit-content;
                    background-color: transparent;
                    box-shadow: none;
                    display: flex;
                    color:inherit;
                    justify-content : center;
                
                    padding-bottom: 0rem;
                    align-self: center;
                    &.show {
                    
                    display: block;
                    
                }
                &.hide {
                    display: none;
                }
        
    }
            }
            &.dark {
                color: white;
                a {
                    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
                    
                    background-color: var(--dark-nav);
                    transition: all 1s ease;
                    
                    
                    &:nth-child(2){
                        &:hover {
                            box-shadow: 3px 6px 3px rgba(0, 0, 0, 0.5);
                        }
                    }

                    &:last-child{
                        &:hover {
                            
                            box-shadow: 3px 6px 3px rgba(0, 0, 0, 0.5);
                        }
                    }

                    span:nth-child(1) {
                        color: rgb(var(--gray));
                        text-decoration: underline;
                    }
                    
                    span:nth-child(2) {
                        color: black;
                    }
		        }
                
                .category {
                    background-color: transparent;
                    box-shadow: none;
                }
            }
           
        }
    }
    a {
        color: inherit;
        text-decoration: none;
        font-weight:500;
        width: 40%;
        height: 4rem;
        box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: .5rem;
        background-color: var(--light-nav);
        transition: all 1s ease;

        &:nth-child(2){
            border-top-right-radius: .5rem;
            border-bottom-right-radius: .5rem;
            &:hover {
                border: 0.5px var(--accent) solid;
                box-shadow: 3px 6px 3px rgba(0, 0, 0, 0.5);
            }
        }
        &:last-child{
            border-top-left-radius: .5rem;
            border-bottom-left-radius: .5rem;
            justify-content: right;

            &:hover {
                border: 0.5px var(--accent) solid;
                box-shadow: 3px 6px 3px rgba(0, 0, 0, 0.5);
            }
            span {
                position: absolute;
                right: 0;
                top:0;
                padding-right: 1rem;
            }
        }
        span:nth-child(1) {
            color: rgb(var(--gray));
            text-decoration: underline;
        }
  
    }
    .next{
        position: absolute;
        right: 1rem;
       
        &.show {
            color: inherit;
            display: block;
           
        }
        &.hide {
            display: none;
        }
        
    }
    .prev {
        position: absolute;
        left:1rem;
        
        &.show {
           
            display: block;
            
        }
        &.hide {
            display: none;
        }
    }
    .category {
        width: fit-content;
        
        display: flex;
        justify-content : center;
        align-self: center;
        span {
            width: fit-content;
            background-color: inherit;
            padding: .5rem;
            border-radius: .5rem;
           
        }
        &.show {
           
           display: block;
           
       }
       &.hide {
           display: none;
       }
        
    }
   
    @media screen and (max-width: 1080px) {
        div {
            display: flex;
            flex-direction: column;

            a {
                width: 80%;
                overflow-y: hidden;
                &:last-child {
                    transform: translateY( 10rem);
                }
                &:nth-child(2) {
                    transform: translateY( 4rem);
                }
            }
        }
    }
    @media screen and (min-width: 1080px) {
        div {

            a {
                &:last-child {
                    transform: translateY( 3rem);
                }
                &:nth-child(2) {
                    transform: translateY( 3rem);
                }
                &:first-child {
                    transform: translateY( -3rem) translateX(50%);
                    align-self: center;
                    justify-self: center;
                }
            }
        }
    }
    
</style>