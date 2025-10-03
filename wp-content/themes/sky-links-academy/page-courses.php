<?php
/**
 * Template Name: Courses
 */
get_header();
?>
<main class="section-white">
  <div class="container">
    <div class="section-header">
      <h2>Trading courses</h2>
      <p>Master trading with our comprehensive video courses and expert guidance.</p>
    </div>
    <div>
      <?php echo do_shortcode('[courses_grid]'); ?>
    </div>
  </div>
</main>
<?php get_footer(); ?>
