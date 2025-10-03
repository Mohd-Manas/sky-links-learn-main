<?php
/**
 * Template Name: Webinars
 */
get_header();
?>
<main class="section-white">
  <div class="container">
    <div class="section-header">
      <h2>Live Webinars</h2>
      <p>Join our expert traders for live sessions, market analysis, and interactive Q&A sessions.</p>
    </div>
    <div>
      <?php echo do_shortcode('[webinars_list]'); ?>
    </div>
  </div>
</main>
<?php get_footer(); ?>
