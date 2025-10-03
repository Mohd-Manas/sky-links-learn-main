// Sky Links Academy - Main JavaScript

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeLucideIcons();
    loadFeaturedVideos();
    loadFeaturedEbooks();
});

// Initialize Lucide icons
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Featured videos data (subset)
const featuredVideos = [
    {
        id: '1',
        title: 'What is CPI?',
        description: 'Understanding Consumer Price Index and its impact on trading decisions and market movements.',
        duration: '8:45',
        level: 'Beginner',
        category: 'Fundamental Analysis'
    },
    {
        id: '4',
        title: 'The investor\'s guide to geopolitical events and market volatility',
        description: 'Learn how geopolitical events impact market volatility and trading opportunities.',
        duration: '18:25',
        level: 'Intermediate',
        category: 'Fundamental Analysis'
    },
    {
        id: '5',
        title: 'How to open a real account on MT5',
        description: 'Step-by-step guide to opening and setting up your real trading account on MetaTrader 5.',
        duration: '12:35',
        level: 'Beginner',
        category: 'MT5 Tutorials'
    },
    {
        id: 'mt5-1',
        title: 'How to download and open MetaTrader 5',
        description: 'Complete guide to downloading, installing, and opening MetaTrader 5 on your device.',
        duration: '10:15',
        level: 'Beginner',
        category: 'MT5 Tutorials'
    },
    {
        id: 'tech-1',
        title: 'Support and resistance',
        description: 'Learn to identify key support and resistance levels for better trade entries and exits.',
        duration: '8:15',
        level: 'Beginner',
        category: 'Technical Indicators'
    },
    {
        id: 'tech-2',
        title: 'Trend lines (and channels)',
        description: 'Master the art of drawing trend lines and channels to identify market direction.',
        duration: '10:30',
        level: 'Beginner',
        category: 'Technical Indicators'
    }
];

// Featured ebooks data
const featuredEbooks = [
    {
        id: '1',
        title: 'Complete Guide to Trading',
        description: 'A comprehensive introduction to trading fundamentals, markets, and strategies.',
        category: 'Beginner',
        icon: '📚'
    },
    {
        id: '2',
        title: 'Technical Analysis Mastery',
        description: 'Deep dive into chart patterns, indicators, and technical analysis techniques.',
        category: 'Intermediate',
        icon: '📊'
    },
    {
        id: '3',
        title: 'Risk Management Essentials',
        description: 'Learn to protect your capital with proven risk management strategies.',
        category: 'Beginner',
        icon: '🛡️'
    }
];

// Load featured videos into carousel
function loadFeaturedVideos() {
    const track = document.getElementById('videoCarouselTrack');
    if (!track) return;
    
    const assetsUrl = (typeof SkyLinksTheme !== 'undefined' && SkyLinksTheme.assetsUrl) ? SkyLinksTheme.assetsUrl : '';
    track.innerHTML = featuredVideos.map(video => `
        <div class="carousel-item">
            <div class="card video-card">
                <div class="video-thumbnail">
                    <img src="${assetsUrl}/images/hero-trader.png" alt="${video.title}">
                    <div class="video-overlay">
                        <button class="play-button">
                            <i data-lucide="play" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="video-duration">
                        <i data-lucide="clock"></i>
                        ${video.duration}
                    </div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${video.title}</h3>
                    <p class="card-description">${video.description}</p>
                    <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                        <span class="badge badge-${video.level === 'Beginner' ? 'success' : 'cta'}">
                            ${video.level}
                        </span>
                        <span class="badge badge-outline">${video.category}</span>
                    </div>
                    <button class="btn btn-cta" style="width: 100%;">WATCH NOW</button>
                </div>
            </div>
        </div>
    `).join('');
    
    initializeLucideIcons();
}

// Load featured ebooks
function loadFeaturedEbooks() {
    const grid = document.getElementById('ebooksGrid');
    if (!grid) return;
    
    grid.innerHTML = featuredEbooks.map(ebook => `
        <div class="card">
            <div class="card-content">
                <div class="ebook-card">
                    <div class="ebook-icon">${ebook.icon}</div>
                    <div class="ebook-content">
                        <div class="ebook-header">
                            <span class="badge badge-${ebook.category === 'Beginner' ? 'success' : 'cta'}">
                                ${ebook.category}
                            </span>
                        </div>
                        <h3 class="card-title">${ebook.title}</h3>
                        <p class="card-description">${ebook.description}</p>
                        <button class="btn btn-cta" style="width: 100%;">ACCESS NOW</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    initializeLucideIcons();
}

// Utility: Check if user is enrolled
function isUserEnrolled() {
    return localStorage.getItem('user_enrolled') === 'true';
}

// Utility: Store enrollment
function setUserEnrolled() {
    localStorage.setItem('user_enrolled', 'true');
}
