<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php if (function_exists('wp_body_open')) { wp_body_open(); } ?>

<nav class="sticky-nav" id="mainNav">
  <div class="container">
    <div class="nav-wrapper">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
        <?php if (function_exists('the_custom_logo') && has_custom_logo()) { the_custom_logo(); } else { ?>
          <span class="site-title"><?php echo esc_html(get_bloginfo('name')); ?></span>
        <?php } ?>
      </a>

      <div class="nav-links desktop-nav">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-link">Home</a>
        <a href="<?php echo esc_url(home_url('/courses/')); ?>" class="nav-link">Courses</a>
        <a href="<?php echo esc_url(home_url('/videos/')); ?>" class="nav-link">Videos</a>
        <a href="<?php echo esc_url(home_url('/ebooks/')); ?>" class="nav-link">Ebooks</a>
        <a href="<?php echo esc_url(home_url('/quiz/')); ?>" class="nav-link">Quiz</a>
        <a href="<?php echo esc_url(home_url('/webinars/')); ?>" class="nav-link">Webinars</a>
        <button class="btn btn-cta btn-sm">Enrol Now</button>
      </div>

      <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Menu">
        <i data-lucide="menu"></i>
      </button>
    </div>

    <div class="mobile-nav" id="mobileNav">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-link">Home</a>
      <a href="<?php echo esc_url(home_url('/courses/')); ?>" class="nav-link">Courses</a>
      <a href="<?php echo esc_url(home_url('/videos/')); ?>" class="nav-link">Videos</a>
      <a href="<?php echo esc_url(home_url('/ebooks/')); ?>" class="nav-link">Ebooks</a>
      <a href="<?php echo esc_url(home_url('/quiz/')); ?>" class="nav-link">Quiz</a>
      <a href="<?php echo esc_url(home_url('/webinars/')); ?>" class="nav-link">Webinars</a>
      <button class="btn btn-cta">Enrol Now</button>
    </div>
  </div>
</nav>
