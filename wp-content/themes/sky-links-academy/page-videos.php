<?php
/**
 * Template Name: Videos
 */
get_header();
?>
<main class="section-white">
  <div class="container">
    <div class="section-header">
      <h2>Video library</h2>
      <p>Hand-picked video content to accelerate your trading education</p>
    </div>
    <div>
      <?php echo do_shortcode('[videos_grid]'); ?>
    </div>
  </div>
</main>
<?php get_footer(); ?>
