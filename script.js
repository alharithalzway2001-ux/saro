const forgiveBtn = document.getElementById('forgive-btn');
const noBtn = document.getElementById('no-btn');
const apologyScreen = document.getElementById('apology-screen');
const successScreen = document.getElementById('success-screen');
const card = document.getElementById('apology-card');
const apologyImg = document.getElementById('apology-img');

const phrases = [
    "أكيد؟ 🥺",
    "فكري فيها تاني!",
    "عشان خاطري ✨",
    "الزعل مش حلو ليك",
    "آخر كلام؟ 💔"
];

let index = 0;

function escapeNoBtn() {
    // تغيير الستيكر إلى sad.gif فور محاولة الضغط أو الاقتراب من زر الرفض
    if (!apologyImg.src.includes('sad.gif')) {
        apologyImg.src = 'sad.gif';
    }

    noBtn.innerText = phrases[index];
    index = (index + 1) % phrases.length;

    card.classList.remove('shake');
    void card.offsetWidth;
    card.classList.add('shake');

    const padding = 30;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseenter', escapeNoBtn);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    escapeNoBtn();
});

forgiveBtn.addEventListener('click', () => {
    apologyScreen.classList.add('hidden');
    successScreen.classList.remove('hidden');
    noBtn.style.display = 'none';

    // إطلاق الألعاب النارية والقصاصات الملونة
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
});
