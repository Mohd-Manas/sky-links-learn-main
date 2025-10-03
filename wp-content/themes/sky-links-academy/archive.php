<?php
/** Archive Template */
if (!defined('ABSPATH')) { exit; }
get_header();
?>
<section class="section-white">
  <div class="container">
    <header class="section-header">
      <h2><?php the_archive_title(); ?></h2>
      <?php the_archive_description('<p class="description">', '</p>'); ?>
    </header>

    <?php if (have_posts()) : ?>
      <div class="grid-3">
        <?php while (have_posts()) : the_post(); ?>
          <article class="card" style="padding: 1.5rem; border: 1px solid #e5e9f0; border-radius: 12px;">
            <h3 style="margin-bottom: .5rem;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
            <div class="entry-summary" style="color:#6b7280;">
              <?php the_excerpt(); ?>
            </div>
          </article>
        <?php endwhile; ?>
      </div>

      <div class="pagination" style="margin-top:2rem;">
        <?php the_posts_pagination(); ?>
      </div>
    <?php else : ?>
      <p>No posts found.</p>
    <?php endif; ?>
  </div>
</section>
<?php get_footer(); ?>
