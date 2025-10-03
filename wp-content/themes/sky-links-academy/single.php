<?php
/** Single Post Template */
if (!defined('ABSPATH')) { exit; }
get_header();
?>
<section class="section-white">
  <div class="container">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <h1><?php the_title(); ?></h1>
      <div class="meta" style="margin-bottom:1rem; color:#6b7280;">
        <span>By <?php the_author(); ?></span> ·
        <span><?php echo get_the_date(); ?></span>
      </div>
      <div class="content">
        <?php the_content(); ?>
      </div>
    <?php endwhile; endif; ?>
  </div>
</section>
<?php get_footer(); ?>
