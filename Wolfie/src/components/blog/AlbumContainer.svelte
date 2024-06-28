
<section>
    <slot />
</section>
<style lang="scss">
    section{
        display: grid;
		width: 100%;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
    }
    @media screen and (max-width: 992px) {
		section {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
    @media screen and (max-width: 700px) {
		section {
			display: grid;
			grid-template-columns: 1fr;
		}
	}

</style>