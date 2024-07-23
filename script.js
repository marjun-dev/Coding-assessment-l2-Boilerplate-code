document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const products = document.querySelectorAll('.products');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            products.forEach(p => {
                if (p.id === category) {
                    p.classList.add('active');
                } else {
                    p.classList.remove('active');
                }
            });
        });
    });
});
