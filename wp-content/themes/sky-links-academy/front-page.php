<?php
/**
 * Template for the Front Page
 */
get_header();
?>

<!-- Hero Section -->
<section class="hero-section">
  <div class="hero-overlay"></div>
  <div class="container hero-content">
    <h1>Sky Links Capital Academy</h1>
    <p>Boost your financial literacy and master trading with free resources and earn your certificate.</p>
    <div class="hero-buttons">
      <a href="<?php echo esc_url(home_url('/courses/')); ?>" class="btn btn-cta btn-lg">
        ENROL NOW
        <i data-lucide="arrow-right"></i>
      </a>
      <a href="<?php echo esc_url(home_url('/quiz/')); ?>" class="btn btn-transparent btn-lg">
        TAKE THE QUIZ
        <i data-lucide="trending-up"></i>
      </a>
    </div>
  </div>
</section>

<!-- Learning Paths Section -->
<section class="section-white">
  <div class="container">
    <div class="section-header">
      <h2>Choose your learning path</h2>
      <p>Our courses are structured by experience level. Start where you're comfortable and progress at your own pace.</p>
    </div>

    <div class="grid-3">
      <div class="category-card" onclick="window.location.href='<?php echo esc_url(home_url('/courses/?category=Beginner')); ?>'">
        <div class="category-icon bg-success">
          <i data-lucide="book-open"></i>
        </div>
        <h3>Beginner</h3>
        <p>Start your trading journey with fundamental concepts and essential skills.</p>
        <div class="category-stats">
          <span><i data-lucide="book-open"></i> 4 courses</span>
          <span><i data-lucide="clock"></i> 1-2 hours each</span>
        </div>
        <button class="btn btn-ghost">EXPLORE COURSES</button>
      </div>

      <div class="category-card" onclick="window.location.href='<?php echo esc_url(home_url('/courses/?category=Intermediate')); ?>'">
        <div class="category-icon bg-cta">
          <i data-lucide="bar-chart-3"></i>
        </div>
        <h3>Intermediate</h3>
        <p>Develop advanced strategies and deepen your market understanding.</p>
        <div class="category-stats">
          <span><i data-lucide="book-open"></i> 4 courses</span>
          <span><i data-lucide="clock"></i> 1-2 hours each</span>
        </div>
        <button class="btn btn-ghost">EXPLORE COURSES</button>
      </div>

      <div class="category-card" onclick="window.location.href='<?php echo esc_url(home_url('/courses/?category=Advanced')); ?>'">
        <div class="category-icon bg-primary">
          <i data-lucide="brain"></i>
        </div>
        <h3>Advanced</h3>
        <p>Master professional-level techniques and complex trading strategies.</p>
        <div class="category-stats">
          <span><i data-lucide="book-open"></i> 2 courses</span>
          <span><i data-lucide="clock"></i> 1 hour each</span>
        </div>
        <button class="btn btn-ghost">EXPLORE COURSES</button>
      </div>
    </div>

    <div class="text-center mt-8">
      <a href="<?php echo esc_url(home_url('/courses/')); ?>" class="btn btn-outline btn-lg">
        VIEW ALL COURSES
        <i data-lucide="arrow-right"></i>
      </a>
    </div>
  </div>
</section>

<!-- Featured Videos Section -->
<section class="section-white">
  <div class="container">
    <div class="section-header">
      <h2>Featured video lessons</h2>
      <p>Get started with our most popular video tutorials covering essential trading concepts.</p>
    </div>

    <div class="carousel" id="videoCarousel">
      <div class="carousel-track" id="videoCarouselTrack"></div>
      <button class="carousel-btn carousel-prev" id="carouselPrev">
        <i data-lucide="chevron-left"></i>
      </button>
      <button class="carousel-btn carousel-next" id="carouselNext">
        <i data-lucide="chevron-right"></i>
      </button>
    </div>

    <div class="text-center mt-8">
      <a href="<?php echo esc_url(home_url('/videos/')); ?>" class="btn btn-outline btn-lg">
        VIEW ALL VIDEOS
        <i data-lucide="arrow-right"></i>
      </a>
    </div>
  </div>
</section>

<!-- Popular Ebooks Section -->
<section class="section-white">
  <div class="container">
    <div class="section-header">
      <h2>Popular trading ebooks</h2>
      <p>Access our comprehensive guides and enhance your trading knowledge with detailed insights.</p>
    </div>

    <div class="grid-3" id="ebooksGrid"></div>

    <div class="text-center mt-8">
      <a href="<?php echo esc_url(home_url('/ebooks/')); ?>" class="btn btn-outline btn-lg">
        EXPLORE ALL EBOOKS
        <i data-lucide="arrow-right"></i>
      </a>
    </div>
  </div>
</section>

<?php get_footer(); ?>
