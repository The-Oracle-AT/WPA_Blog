<script>
    import { onDestroy, onMount } from "svelte";
    
    export let prevousPageURL;
    export let nextPageURL;
    

    $:showPrevURL = prevousPageURL ? 'show' : 'hide'
    $:showNextURL = nextPageURL ? 'show' : 'hide'

    let theme = 'light'
    $: dark = theme
    onMount(() => {
        theme = window.localStorage.getItem('theme')
        document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
    }) 
    function handleToggleClick(e) {
        if(theme === 'light') { 
            theme = 'dark'
            
        } else { 
            theme = 'light'
        } 
        console.log('clicked theme button')
    }
    
    
    onDestroy(() => {
    })
    

</script>

<div class={`pagination_wrapper ${dark}`}>
    
    <a href={prevousPageURL} class={`prev ${showPrevURL} `} ><slot name="prev_link_content"><span>Prevous</span></slot> </a>
    <a href={nextPageURL} class={`next ${showNextURL} `}><slot name="next_link_content"><span>Next</span></slot> </a>
</div>

<style lang="scss">
    div {
        position: relative;
       
        width: 100%;
        color: inherit;
        
        &.pagination_wrapper {
            &.light {
                color: black;
            }
            &.dark {
                color: white;
            }
        }
    }
    a {
        color: inherit;
        text-decoration: none;
        width: 40%;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 6px 3px rgba(0, 0, 0, 0.5);
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: var(--light-nav);
        border: 0.5px var(--accent) solid;
        &:first-child{
            border-top-right-radius: .5rem;
            border-bottom-right-radius: .5rem;

        }
        &:last-child{
            border-top-left-radius: .5rem;
            border-bottom-left-radius: .5rem;
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
    
</style>