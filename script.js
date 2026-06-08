const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const dynamicGif = document.getElementById('dynamic-gif');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

// رابط الستيكر الثاني (القطة التي تبكي في وسط بركة دموع) عند محاولة ضغط لا
const cryingGifUrl = "https://media.tenor.com/v1gVeeYbU4AAAAi/tonton-friends-sad.gif";

function escapeBtn() {
    // 1. تغيير الستيكر فوراً لستيكر البكاء الحزين عند الاقتراب من زر لا
    if (dynamicGif.src !== cryingGifUrl) {
        dynamicGif.src = cryingGifUrl;
    }

    // 2. حساب أبعاد الشاشة لمنع خروج الزر عن الحدود المرئية للهاتف
    const padding = 30;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // 3. جعل الزر يهرب بشكل فوري وحر مع الحفاظ التام على أبعاده الطبيعية وعرضه الأصلي
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// تشغيل تأثير الهروب وتغيير الصورة عند اللمس أو مرور المؤشر
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
