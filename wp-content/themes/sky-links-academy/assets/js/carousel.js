// Carousel functionality
class Carousel {
    constructor(trackId, prevBtnId, nextBtnId) {
        this.track = document.getElementById(trackId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.currentIndex = 0;
        this.itemWidth = 0;
        
        this.init();
    }
    
    init() {
        if (!this.track) return;
        
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());
        
        // Auto-play
        this.autoPlay = setInterval(() => this.next(), 3000);
        
        // Pause on hover
        this.track.addEventListener('mouseenter', () => this.pause());
        this.track.addEventListener('mouseleave', () => this.play());
        
        // Calculate item width
        this.calculateItemWidth();
        window.addEventListener('resize', () => this.calculateItemWidth());
    }
    
    calculateItemWidth() {
        const item = this.track.querySelector('.carousel-item');
        if (item) {
            this.itemWidth = item.offsetWidth + 16; // 16px gap
        }
    }
    
    next() {
        const maxIndex = this.track.children.length - 3;
        if (window.innerWidth < 768) {
            // Mobile: show 1 item
            if (this.currentIndex < this.track.children.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        } else {
            // Desktop: show 3 items
            if (this.currentIndex < maxIndex) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        }
        this.updatePosition();
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updatePosition();
        }
    }
    
    updatePosition() {
        const offset = -this.currentIndex * this.itemWidth;
        this.track.style.transform = `translateX(${offset}px)`;
    }
    
    pause() {
        clearInterval(this.autoPlay);
    }
    
    play() {
        this.autoPlay = setInterval(() => this.next(), 3000);
    }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    // Wait for content to load first
    setTimeout(() => {
        new Carousel('videoCarouselTrack', 'carouselPrev', 'carouselNext');
    }, 500);
});
