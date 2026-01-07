document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".product-card");
    
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            
            // Active state
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filter = btn.dataset.filter;
            
            cards.forEach(card => {
                const categories = card.dataset.category;
                
                if (filter === "all" || categories.includes(filter)) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
            
        });
    });
});