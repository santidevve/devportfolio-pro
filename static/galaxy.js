/**
 * Galaxy Background Animation
 * Crea un fondo animado con estrellas, nebulosas y partículas tipo galaxia.
 * Usa Canvas 2D para rendimiento óptimo.
 */
(function () {
    const canvas = document.getElementById('galaxy-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    const stars = [];
    const shootingStars = [];
    const STAR_COUNT = 200;

    /** Ajusta el canvas al tamaño de la ventana */
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    /** Crea una estrella con propiedades aleatorias */
    function createStar() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.3 + 0.05,
            opacity: Math.random(),
            flickerSpeed: Math.random() * 0.02 + 0.005,
            // Color: blanco, azul tenue, o naranja tenue (acorde al tema)
            color: ['255,255,255', '180,200,255', '255,180,120'][Math.floor(Math.random() * 3)]
        };
    }

    /** Crea una estrella fugaz */
    function createShootingStar() {
        return {
            x: Math.random() * width,
            y: Math.random() * height * 0.5,
            length: Math.random() * 80 + 40,
            speed: Math.random() * 8 + 4,
            opacity: 1,
            angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3
        };
    }

    /** Inicializa las estrellas */
    function init() {
        stars.length = 0;
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push(createStar());
        }
    }

    /** Dibuja la nebulosa de fondo */
    function drawNebula(time) {
        // Nebulosa sutil con gradientes radiales animados
        const cx1 = width * 0.3 + Math.sin(time * 0.0002) * 50;
        const cy1 = height * 0.4 + Math.cos(time * 0.0003) * 30;
        const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, 350);
        g1.addColorStop(0, 'rgba(45, 212, 191, 0.03)');
        g1.addColorStop(1, 'transparent');
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, width, height);

        const cx2 = width * 0.7 + Math.cos(time * 0.00025) * 40;
        const cy2 = height * 0.2 + Math.sin(time * 0.00035) * 25;
        const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, 300);
        g2.addColorStop(0, 'rgba(255, 140, 66, 0.025)');
        g2.addColorStop(1, 'transparent');
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, width, height);
    }

    /** Bucle principal de animación */
    function animate(time) {
        ctx.clearRect(0, 0, width, height);

        // Nebulosa
        drawNebula(time);

        // Estrellas
        for (const star of stars) {
            star.opacity += star.flickerSpeed;
            if (star.opacity >= 1 || star.opacity <= 0.2) {
                star.flickerSpeed *= -1;
            }
            star.y += star.speed;
            if (star.y > height) {
                star.y = 0;
                star.x = Math.random() * width;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${star.color}, ${star.opacity.toFixed(2)})`;
            ctx.fill();
        }

        // Estrellas fugaces (aparecen aleatoriamente)
        if (Math.random() < 0.003 && shootingStars.length < 2) {
            shootingStars.push(createShootingStar());
        }

        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const s = shootingStars[i];
            const tailX = s.x - Math.cos(s.angle) * s.length;
            const tailY = s.y - Math.sin(s.angle) * s.length;

            const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(s.x, s.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            s.x += Math.cos(s.angle) * s.speed;
            s.y += Math.sin(s.angle) * s.speed;
            s.opacity -= 0.01;

            if (s.opacity <= 0 || s.x > width || s.y > height) {
                shootingStars.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    // Arranque
    resize();
    init();
    window.addEventListener('resize', () => { resize(); init(); });
    requestAnimationFrame(animate);
})();
