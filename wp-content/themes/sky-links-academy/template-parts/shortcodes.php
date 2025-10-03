<?php
if (!defined('ABSPATH')) exit;

function sky_links_register_shortcodes() {
  add_shortcode('courses_grid', 'sky_links_courses_grid');
  add_shortcode('videos_grid', 'sky_links_videos_grid');
  add_shortcode('ebooks_grid', 'sky_links_ebooks_grid');
  add_shortcode('webinars_list', 'sky_links_webinars_list');
  add_shortcode('quiz', 'sky_links_quiz');
}
add_action('init', 'sky_links_register_shortcodes');

function sky_links_courses_grid() {
  ob_start();
  ?>
  <div id="courses-root"></div>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Placeholder: render static cards or integrate with a CPT later
      const el = document.getElementById('courses-root');
      if (el) {
        el.innerHTML = '<p>Courses grid coming soon.</p>';
      }
    });
  </script>
  <?php
  return ob_get_clean();
}

function sky_links_videos_grid() {
  ob_start();
  ?>
  <div id="videos-root"></div>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const el = document.getElementById('videos-root');
      if (el) {
        el.innerHTML = '<p>Videos grid coming soon.</p>';
      }
    });
  </script>
  <?php
  return ob_get_clean();
}

function sky_links_ebooks_grid() {
  ob_start();
  ?>
  <div id="ebooks-root"></div>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const el = document.getElementById('ebooks-root');
      if (el) {
        el.innerHTML = '<p>Ebooks grid coming soon.</p>';
      }
    });
  </script>
  <?php
  return ob_get_clean();
}

function sky_links_webinars_list() {
  ob_start();
  ?>
  <div id="webinars-root"></div>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const el = document.getElementById('webinars-root');
      if (el) {
        el.innerHTML = '<p>Webinars list coming soon.</p>';
      }
    });
  </script>
  <?php
  return ob_get_clean();
}

function sky_links_quiz() {
  ob_start();
  ?>
  <div id="quiz-root"></div>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const el = document.getElementById('quiz-root');
      if (el) {
        el.innerHTML = '<p>Quiz coming soon.</p>';
      }
    });
  </script>
  <?php
  return ob_get_clean();
}
