<?php
/** 404 template */
get_header();
?>
<main>
  <section class="section-white">
    <div class="container">
      <div class="text-center" style="padding: 4rem 0;">
        <h1 class="mb-4">404</h1>
        <p class="mb-4">Oops! Page not found</p>
        <a class="btn btn-cta" href="<?php echo esc_url(home_url('/')); ?>">Return to Home</a>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
