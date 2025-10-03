<?php
/** Fallback Index Template */
if (!defined('ABSPATH')) { exit; }
get_header();
?>
<section class="section-white">
  <div class="container">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <article <?php post_class('card'); ?> style="padding:1.5rem; margin-bottom:1rem;">
        <h2 style="margin-bottom:.5rem;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <div class="entry-summary" style="color:#6b7280;">
          <?php the_excerpt(); ?>
        </div>
      </article>
    <?php endwhile; else: ?>
      <p>No content found.</p>
    <?php endif; ?>

    <div class="pagination" style="margin-top:2rem;">
      <?php the_posts_pagination(); ?>
    </div>
  </div>
</section>
<?php get_footer(); ?>
