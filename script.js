const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const dynamicGif = document.getElementById('dynamic-gif');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

// التسلسل الزمني للكلمات المطلوبة بدقة لزر لا
const phrases = [
    "ممكن",
    "مرات اي و مرات لا",
    "عندك خيار واحد عارفة وله",
    "مزال بتكملي ؟",
    "تصكير راس؟"
];

let currentIndex = 0;

// الرابط المرجعي المحلي للستيكر الثاني الحزين داخل مجلد المشروع
const cryingGifUrl = "sad.gif";

function escapeBtn() {
    // التغيير الفوري للستيكر ليكون الملف المحلي sad.gif
    if (!dynamicGif.src.includes('sad.gif')) {
        dynamicGif.src = cryingGifUrl;
    }

    noBtn.innerText = phrases[currentIndex];
    currentIndex = (currentIndex + 1) % phrases.length;

    const padding = 40;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseenter', escapeBtn);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    escapeBtn();
});
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    escapeBtn();
});

yesBtn.addEventListener('click', () => {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    noBtn.style.display = 'none';
});
