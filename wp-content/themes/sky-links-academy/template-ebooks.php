<?php
/**
 * Template Name: Ebooks
 */
get_header();
?>
<main class="section-white">
  <div class="container">
    <div class="section-header">
      <h2>Trading ebooks</h2>
      <p>Access our comprehensive library of trading guides and enhance your knowledge.</p>
    </div>
    <div>
      <?php echo do_shortcode('[ebooks_grid]'); ?>
    </div>
  </div>
</main>
<?php get_footer(); ?>
