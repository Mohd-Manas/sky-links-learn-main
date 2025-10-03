<?php
/** Page template */
get_header();
?>
<main>
  <section class="section-white">
    <div class="container">
      <?php while (have_posts()) : the_post(); ?>
        <article <?php post_class('content'); ?>>
          <?php the_title('<h1 class="mb-4">','</h1>'); ?>
          <?php the_content(); ?>
        </article>
      <?php endwhile; ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>
