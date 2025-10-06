<?php
<?php
if (!defined('ABSPATH')) exit;

// Theme setup
function sky_links_academy_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');
    add_theme_support('custom-logo', [
        'height'      => 60,
        'width'       => 240,
        'flex-height' => true,
        'flex-width'  => true,
    ]);
    register_nav_menus([
        'primary' => __('Primary Navigation', 'sky-links-academy'),
    ]);
}
add_action('after_setup_theme', 'sky_links_academy_setup');

// Enqueue theme assets
function sky_links_academy_assets() {
    $theme_uri = get_template_directory_uri();

    // Styles
    wp_enqueue_style('sky-links-styles', $theme_uri . '/assets/css/styles.css', [], '1.0.0');
    wp_enqueue_style('sky-links-components', $theme_uri . '/assets/css/components.css', ['sky-links-styles'], '1.0.0');
    wp_enqueue_style('sky-links-responsive', $theme_uri . '/assets/css/responsive.css', ['sky-links-styles'], '1.0.0');

    // Scripts
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', [], null, true);
    wp_enqueue_script('sky-links-navigation', $theme_uri . '/assets/js/navigation.js', ['lucide-icons'], '1.0.0', true);
    wp_enqueue_script('sky-links-carousel', $theme_uri . '/assets/js/carousel.js', [], '1.0.0', true);
    wp_enqueue_script('sky-links-main', $theme_uri . '/assets/js/main.js', ['lucide-icons'], '1.0.0', true);

    // Pass asset base URL to JS
    wp_localize_script('sky-links-main', 'SkyLinksTheme', [
        'assetsUrl' => $theme_uri . '/assets',
    ]);
}
add_action('wp_enqueue_scripts', 'sky_links_academy_assets');

// Enqueue React app build assets
function enqueue_react_app_assets() {
    $js_file = get_template_directory() . '/app/dist/assets/index-pYNhRUR_.js';
    $css_file = get_template_directory() . '/app/dist/assets/index-DqkmdTjI.css';

    if (file_exists($js_file)) {
        wp_enqueue_script(
            'react-app-main',
            get_template_directory_uri() . '/app/dist/assets/index-pYNhRUR_.js',
            array(),
            null,
            true
        );
    } else {
        error_log('React JS file missing: ' . $js_file);
    }

    if (file_exists($css_file)) {
        wp_enqueue_style(
            'react-app-style',
            get_template_directory_uri() . '/app/dist/assets/index-DqkmdTjI.css',
            array(),
            null
        );
    } else {
        error_log('React CSS file missing: ' . $css_file);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_react_app_assets');

// Load shortcodes
$shortcodes_file = get_template_directory() . '/template-parts/shortcodes.php';
if (file_exists($shortcodes_file)) {
    require_once $shortcodes_file;
} else {
    error_log('Shortcodes file missing: ' . $shortcodes_file);
}

// Ensure WP menu links get the class used by our JS/CSS for active highlighting
add_filter('nav_menu_link_attributes', function ($atts, $item, $args) {
    if (isset($args->theme_location) && $args->theme_location === 'primary') {
        $existing = isset($atts['class']) ? $atts['class'] . ' ' : '';
        $atts['class'] = $existing . 'nav-link';
    }
    return $atts;
}, 10, 3);

// Create core pages on activation and assign templates
function sky_links_academy_create_core_pages() {
    $ensure_page = function ($slug, $title, $template = null) {
        $page = get_page_by_path($slug);
        if ($page instanceof WP_Post) {
            $page_id = $page->ID;
        } else {
            $page_id = wp_insert_post([
                'post_title'   => $title,
                'post_name'    => $slug,
                'post_type'    => 'page',
                'post_status'  => 'publish',
                'post_content' => ''
            ]);
        }
        if ($template) {
            update_post_meta($page_id, '_wp_page_template', $template);
        }
        return (int) $page_id;
    };

    $ensure_page('courses',  'Courses',  'template-courses.php');
    $ensure_page('videos',   'Videos',   'template-videos.php');
    $ensure_page('ebooks',   'Ebooks',   'template-ebooks.php');
    $ensure_page('webinars', 'Webinars', 'template-webinars.php');
    $ensure_page('quiz',     'Quiz',     'template-quiz.php');

    // Home page and front page setup
    $home_id = $ensure_page('home', 'Home', null);
    update_option('show_on_front', 'page');
    update_option('page_on_front', $home_id);

    // Flush rewrites once
    if (function_exists('flush_rewrite_rules')) {
        flush_rewrite_rules();
    }
}
add_action('after_switch_theme', 'sky_links_academy_create_core_pages');