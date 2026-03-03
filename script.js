document.querySelectorAll('#indice a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Rimuove eventuali evidenziazioni attive
            document.querySelectorAll('section').forEach(s => s.classList.remove('highlight-active'));

            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });

            // Aggiunge l'evidenziazione temporanea
            targetElement.classList.add('highlight-active');
            setTimeout(() => {
                targetElement.classList.remove('highlight-active');
            }, 3000);
        }
    });
});