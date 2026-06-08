const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const container = document.getElementById('game-card');

// مصفوفة كلمات لطيفة تتغير عند محاولة الضغط على "لا" (تزيد من طابع اللعبة الكوميدي والتفاعلي)
const responses = ["لا", "مستحيل!", "فكر ثاني؟", "خطأ ❌", "حاول مجدداً"];

// دالة ذكية تجعل زر "لا" يهرب في اتجاهات عشوائية داخل حدود الشاشة لمنع الضغط عليه تماماً
function escapeBtn() {
    // حساب الأبعاد والحدود القصوى المتاحة للهروب داخل مساحة الشاشة الحرة
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // توليد إحداثيات عشوائية بالكامل
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // نقل الزر ليكون خارج حدود الحاوية طالما يهرب لمنع محاصرته
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // تغيير الكلمة بشكل دوري للمرح
    const randomIndex = Math.floor(Math.random() * responses.length);
    noBtn.innerText = responses[randomIndex];
}

// تشغيل الهروب الفوري عند الاقتراب بالماوس أو عند اللمس على الهواتف الذكية
noBtn.addEventListener('mouseenter', escapeBtn);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // منع سلوك النقرة الافتراضي لتفادي ملامسته
    escapeBtn();
});
noBtn.addEventListener('click', escapeBtn);

// عند الضغط على "أي!" المبهجة، الانتقال بسلاسة لواجهة "حتى أنا"
yesBtn.addEventListener('click', () => {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // إخفاء زر "لا" تماماً من الشاشة بعد إتمام المهمة
    noBtn.style.display = 'none';
});
