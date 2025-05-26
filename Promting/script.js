// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Плавный скролл для кнопки "Связаться"
    document.querySelector('.contact-btn').addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Заглушка для кнопки скачивания
    document.querySelector('.download-btn').addEventListener('click', function() {
        alert('Резюме будет скачано (заглушка)');
    });

    // Раскрывающийся список опыта работы
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });

    // Валидация формы
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Сообщение отправлено!');
            contactForm.reset();
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    });

    // Анимация появления секций при скролле
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});