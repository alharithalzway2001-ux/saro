const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const dynamicGif = document.getElementById('dynamic-gif');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

// رابط TENOR الـ .gif المباشر والموثوق للستيكر الثاني (القطة الباكية في بركة دموع)
const cryingGifUrl = "https://media.tenor.com/v1gVeeYbU4AAAAj/tonton-friends-sad.gif";

function escapeBtn() {
    // 1. تغيير الستيكر فوراً لستيكر البكاء المباشر والموثوق
    if (!dynamicGif.src.includes('sad.gif')) {
        dynamicGif.src = cryingGifUrl;
    }

    // 2. حساب أبعاد الشاشة لهروب آمن داخل حدود الهاتف
    const padding = 30;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // 3. هروب فوري وحر بنفس الحجم الطبيعي للزر
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// تشغيل تأثير الهروب وتغيير الصورة
noBtn.addEventListener('mouseenter', escapeBtn);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    escapeBtn();
});
noBtn.addEventListener('click', escapeBtn);

// عند الضغط على أي! الانتقال لواجهة الكلب السعيد وعبارة حتى أنا
yesBtn.addEventListener('click', () => {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    noBtn.style.display = 'none';
});
