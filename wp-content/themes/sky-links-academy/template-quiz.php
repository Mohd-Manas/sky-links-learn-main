<?php
/**
 * Template Name: Quiz
 */
get_header();
?>
<main class="section-white">
  <div class="container">
    <div class="section-header">
      <h2>Financial Literacy Quiz</h2>
      <p>Test your trading knowledge and get personalized course recommendations.</p>
    </div>
    <div>
      <?php echo do_shortcode('[quiz]'); ?>
    </div>
  </div>
</main>
<?php get_footer(); ?>
