<script>
    import FormattedDate from '../svelte/FormattedDate.svelte';
    export let post;
  </script>

    <div class="post-block">
        <div class="post-block-wrapper">
        <a href={`/page/category/${post.slug}/`} class="post-block-link" title={`${post.data.title}`}>
          <img  src={post.data.heroImage} alt="Lesson card" class="post-block-img"/>
          <h4 class="post-block-title">{post.data.title}</h4>
        </a>
          <div>
            <p class="post-block-date">
              <FormattedDate date={post.data.pubDate} />
            </p>
          </div>
        
    </div>
      </div>


 
<style lang="scss">
    .post-block {
        padding: 1rem;
        min-width:18rem;
        height: 20rem;
    }
    .post-block-link {
      color: var(--text-color);
        text-decoration: none;
        
        &:hover {
             > img {
                transition: all .3s ease;
                box-shadow: var(--box-shadow);
                transform: scale(1.05);
            }
        }
    }
    .post-block-title {
        font-size: large;
    }
    @media screen and (max-width: 991px) {
      .post-block {
        padding: 0 1rem 0 .5rem;
        min-width: calc(50% - 1rem);
      }
      a {
        max-height: 80%;
      }
      .post-block-title {
        font-size: medium;
      }
    }


</style>
  