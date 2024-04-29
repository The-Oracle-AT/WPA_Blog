<script>
	import Carousel from './Carousel.svelte';
	
	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
    export let timing = 2000;
</script>

<Carousel autoplay={timing}>
	{#each colors as color, index (index)}
        <div style="background-color: {color}" />
    {/each}
    
	<span slot="left-control">Left</span>
	<span slot="right-control">Right</span>
</Carousel>

<style>
	div {
		height: 8rem;
		width: 8rem;
	}
	
	span {
		display: inline-block;
		margin-top: 6rem;
	}
</style>