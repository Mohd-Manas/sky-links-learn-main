// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Set active nav link
    setActiveNavLink();
});

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
    
    // Toggle icon
    const icon = this.querySelector('[data-lucide]');
    const currentIcon = icon.getAttribute('data-lucide');
    icon.setAttribute('data-lucide', currentIcon === 'menu' ? 'x' : 'menu');
    lucide.createIcons();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
