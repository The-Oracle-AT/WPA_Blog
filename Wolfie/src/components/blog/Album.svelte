<script>
    
    export let linkToPlaylist;
    export let albumName;
    export let numPosts;

</script>

<div class="album-container">
    <div class="album-wrappper">

        <a href={linkToPlaylist} class="category-name" style="height: fit-content;" title={`${albumName} category`}>
            <slot/>
        </a>
        <div  class="carousel_content" style="margin-top: 0rem;  position: relative; left: .5rem; font-size:medium">
            <div class="album-name" style="display: flex; flex-direction:row;">
                <h5 style="font-size: medium;">{albumName}</h5> <span style="transform: translate(.3rem, -.2rem); opacity: .9;">&#x2022; {numPosts} posts</span>
            </div>
            <p style="transform: translateY(-.9rem);">Last updated: </p>
            <p style="transform: translateY(-1.8rem);">By: @E.L Maela</p> 
        </div>
    </div>
</div>
<style lang="scss">
    .album-container {
        
        transition: all .3s ease;
        &:hover {
            transform: scale(1.03);
            
            box-shadow: var(--box-shadow);
            border-radius: .5rem;
            transform: translateY(-.5rem);
            
            
        
        }

    }
    .carousel_content {
        background: inherit;
    }
    
 
    
    
  
</style>