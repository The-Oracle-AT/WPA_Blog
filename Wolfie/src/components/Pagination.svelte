<script>
    export let prevousPageURL;
    export let nextPageURL;

    $:showPrevURL = prevousPageURL ? 'show' : 'hide'
    $:showNextURL = nextPageURL ? 'show' : 'hide'
    

</script>

<div class="pagination_wrapper">
    
    <a href={prevousPageURL} class={`prev ${showPrevURL}`} >Prevous</a>
    <a href={nextPageURL} class={`next ${showNextURL}`}>Next</a>
</div>

<style lang="scss">
    div {
        position: relative;
       
        width: 100%;
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
            color: inherit;
            display: block;
        }
        &.hide {
            display: none;
        }
    }
    
</style>