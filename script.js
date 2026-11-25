
const questions = {
    easy: [
        {q:"Meteorologiya nimani o‘rganadi?",a:["Okeanlarni","Atmosfera va ob-havo hodisalarini","Tog‘ jinslarini","Hayvonlarni"],c:1,e:"Meteorologiya atmosfera, uning xususiyatlari va ob-havo jarayonlarini o‘rganadi."},
        {q:"Ob-havoning asosiy elementlaridan biri qaysi?",a:["Harorat","Tog‘ balandligi","Tuproq rangi","Daryo uzunligi"],c:0,e:"Havo harorati ob-havoning asosiy elementlaridan biridir."},
        {q:"Yomg‘ir qaysi jarayon natijasida hosil bo‘ladi?",a:["Bug‘lanish va kondensatsiya","Faqat shamol","Zilzila","Magma harakati"],c:0,e:"Suv bug‘i kondensatsiyalanib tomchilarga aylanadi va yog‘ingarchilik yuzaga keladi."},
        {q:"Atmosferaning eng quyi qatlami qaysi?",a:["Stratosfera","Troposfera","Mezosfera","Ekzosfera"],c:1,e:"Troposfera atmosferaning Yer yuzasiga eng yaqin qatlamidir."},
        {q:"Shamol nima?",a:["Suv harakati","Havoning gorizontal harakati","Yerning aylanishi","Bulutlarning rangi"],c:1,e:"Shamol — havoning asosan gorizontal yo‘nalishdagi harakatidir."},
        {q:"Haroratni o‘lchash uchun qaysi asbob ishlatiladi?",a:["Barometr","Termometr","Gigrometr","Anemometr"],c:1,e:"Termometr havo haroratini o‘lchaydi."},
        {q:"Atmosferadagi eng ko‘p gaz qaysi?",a:["Kislorod","Azot","Karbonat angidrid","Vodorod"],c:1,e:"Atmosferaning taxminan 78 foizi azotdan iborat."},
        {q:"Bulutlar asosan nimadan tashkil topgan?",a:["Chang va qumdan","Suv tomchilari va muz kristallaridan","Faqat kisloroddan","Tutundan"],c:1,e:"Bulutlar mayda suv tomchilari va muz kristallaridan tashkil topadi."},
        {q:"Havo bosimini qaysi asbob o‘lchaydi?",a:["Termometr","Barometr","Kompas","Anemometr"],c:1,e:"Barometr atmosfera bosimini o‘lchaydi."},
        {q:"Momaqaldiroq bilan birga kuzatiladigan yorqin elektr hodisasi nima?",a:["Kamalak","Chaqmoq","Shudring","Tuman"],c:1,e:"Chaqmoq bulutlar orasida yoki bulut bilan yer orasida yuz beradigan elektr razryadidir."},
        {q:"Havodagi suv bug‘i miqdoriga bog‘liq ko‘rsatkich nima?",a:["Namlik","Bosim","Harorat","Tezlik"],c:0,e:"Havo namligi undagi suv bug‘i miqdorini ifodalaydi."},
        {q:"Qor qanday hosil bo‘ladi?",a:["Suvning qaynashidan","Atmosferadagi muz kristallaridan","Qumning muzlashidan","Shamolning sovishidan"],c:1,e:"Qor bulutlarda hosil bo‘lgan muz kristallari birikishi natijasida yog‘adi."}
    ],

    medium: [
        {q:"Siklon markazida odatda qanday bosim kuzatiladi?",a:["Yuqori bosim","Past bosim","Bosim bo‘lmaydi","Doimiy bosim"],c:1,e:"Siklon past bosimli atmosfera tizimidir."},
        {q:"Antitsiklon qanday atmosfera tizimi?",a:["Past bosimli","Yuqori bosimli","Faqat yomg‘irli","Faqat shamolli"],c:1,e:"Antitsiklon yuqori atmosfera bosimi bilan tavsiflanadi."},
        {q:"Izobaralar nimani birlashtiradi?",a:["Bir xil haroratni","Bir xil bosimni","Bir xil namlikni","Bir xil balandlikni"],c:1,e:"Izobaralar xaritada bir xil atmosfera bosimiga ega nuqtalarni birlashtiradi."},
        {q:"Havoning nisbiy namligi qanday ifodalanadi?",a:["Foizda","Kilometrda","Metrda","Kilogrammda"],c:0,e:"Nisbiy namlik foizlarda ifodalanadi."},
        {q:"Anemometr qanday kattalikni o‘lchaydi?",a:["Havo bosimini","Shamol tezligini","Haroratni","Namlikni"],c:1,e:"Anemometr shamol tezligini o‘lchash uchun ishlatiladi."},
        {q:"Atmosferaning ozon qatlamining asosiy qismi qaysi qatlamda joylashgan?",a:["Troposfera","Stratosfera","Mezosfera","Ekzosfera"],c:1,e:"Ozon qatlamining asosiy qismi stratosferada joylashgan."},
        {q:"Sovuq front o‘tganda odatda nima sodir bo‘ladi?",a:["Havo harorati pasayishi mumkin","Harorat doimiy ko‘tariladi","Shamol butunlay to‘xtaydi","Bosim yo‘qoladi"],c:0,e:"Sovuq front o‘tishi ko‘pincha haroratning pasayishi va ob-havoning o‘zgarishi bilan kechadi."},
        {q:"Kondensatsiya nima?",a:["Suyuqlikning gazga aylanishi","Suv bug‘ining suyuqlikka aylanishi","Muzning erishi","Suvning qaynashi"],c:1,e:"Kondensatsiya — gaz holatidagi moddaning suyuqlikka aylanish jarayoni."},
        {q:"Passat shamollari asosan qaysi yo‘nalishda esadi?",a:["Subtropiklardan ekvator tomon","Qutblardan ekvatorga","Faqat sharqdan g‘arbga","Faqat janubdan shimolga"],c:0,e:"Passatlar subtropik yuqori bosim mintaqalaridan ekvatorial past bosim tomon esadi."},
        {q:"Dengiz va quruqlik brizlari nimaning farqli isishi natijasida yuzaga keladi?",a:["Okean tubining","Quruqlik va suv yuzasining","Atmosferaning yuqori qatlamining","Muzliklarning"],c:1,e:"Quruqlik va suvning turlicha isishi mahalliy briz shamollarini yuzaga keltiradi."},
        {q:"Shudring qachon hosil bo‘ladi?",a:["Havo sovib, suv bug‘i sirtlarda kondensatsiyalanganda","Faqat qor yog‘ganda","Suv qaynaganda","Kuchli shamolda"],c:0,e:"Shudring sirt harorati shudring nuqtasiga tushganda hosil bo‘ladi."},
        {q:"Meteorologik radar asosan nima uchun ishlatiladi?",a:["Yer qatlamlarini o‘rganish","Yog‘ingarchilik va bo‘ronlarni kuzatish","Tog‘ balandligini o‘lchash","Okean sho‘rligini aniqlash"],c:1,e:"Meteorologik radar yog‘inlar va ayrim xavfli ob-havo hodisalarini kuzatishga yordam beradi."}
    ],

    hard: [
        {q:"Koriolis kuchi nima bilan bog‘liq?",a:["Yerning aylanishi bilan","Quyoshning so‘nishi bilan","Okean chuqurligi bilan","Oy fazalari bilan"],c:0,e:"Koriolis ta'siri Yerning aylanishi sababli harakatlanuvchi jismlar yo‘nalishining og‘ishidir."},
        {q:"Adiabatik sovish nima?",a:["Havo tashqi muhit bilan issiqlik almashmasdan kengayib sovishi","Havoning yomg‘ir bilan sovishi","Quyosh nurlarining qaytishi","Suvning muzlashi"],c:0,e:"Adiabatik jarayonda havo tashqi muhit bilan issiqlik almashmasdan haroratini o‘zgartiradi."},
        {q:"Saturatsiya holati nimani bildiradi?",a:["Havoning suv bug‘i bilan to‘yinganligini","Havoning kislorodsizligini","Bosimning yo‘qolishini","Haroratning doimiyligini"],c:0,e:"To‘yingan havo muayyan haroratda maksimal muvozanatli suv bug‘i miqdoriga ega bo‘ladi."},
        {q:"Harorat inversiyasi nima?",a:["Balandlik ortishi bilan haroratning ko‘tarilishi","Balandlik ortishi bilan haroratning doim pasayishi","Bosimning oshishi","Namlikning yo‘qolishi"],c:0,e:"Harorat inversiyasida odatdagi holatdan farqli ravishda harorat balandlik bilan ortadi."},
        {q:"Tropopauza qaysi qatlamlar orasida joylashgan?",a:["Stratosfera va mezosfera","Troposfera va stratosfera","Mezosfera va termosfera","Termosfera va ekzosfera"],c:1,e:"Tropopauza troposferaning yuqori chegarasi va stratosferaning quyi chegarasidir."},
        {q:"Kumulyonimbus bulutlari qaysi hodisalar bilan bog‘liq?",a:["Kuchli jala va momaqaldiroq","Faqat tuman","Faqat shudring","Faqat mayin qor"],c:0,e:"Kumulyonimbus bulutlari kuchli konveksiya, jala va momaqaldiroq bilan bog‘liq."},
        {q:"Shudring nuqtasi nima?",a:["Havo to‘yinganlikka yetadigan harorat","Eng yuqori kunlik harorat","Eng past bosim","Shamol tezligi"],c:0,e:"Shudring nuqtasi havo sovitilganda nisbiy namlik 100 foizga yetadigan haroratdir."},
        {q:"Atmosfera fronti nima?",a:["Ikki xil xususiyatli havo massalari chegarasi","Okean tubidagi yoriq","Tog‘ tizmasi","Bulutning markazi"],c:0,e:"Atmosfera fronti turli harorat va namlik xususiyatlariga ega havo massalarini ajratadi."},
        {q:"Vertikal havo harakati natijasida bulutlar hosil bo‘lishiga olib keluvchi jarayon nima?",a:["Konveksiya","Radiatsiya","Sublimatsiya","Filtratsiya"],c:0,e:"Konveksiya iliq havoning yuqoriga ko‘tarilishi bilan bog‘liq."},
        {q:"Barometrik bosqich nima bilan bog‘liq?",a:["Balandlik o‘zgarganda bosimning o‘zgarishi bilan","Suvning muzlashi bilan","Bulutlarning rangi bilan","Shamolning yo‘nalishi bilan"],c:0,e:"Atmosfera bosimi balandlik oshishi bilan odatda kamayadi."},
        {q:"Tropik siklonlar energiyani asosan qayerdan oladi?",a:["Iliq okean yuzasidan ajraladigan energiyadan","Tog‘ jinslaridan","Yer yadrosidan","Quruqlikdagi qor qatlamidan"],c:0,e:"Iliq okean yuzasidan bug‘lanish va kondensatsiya orqali ajraladigan energiya tropik siklonlarni oziqlantiradi."},
        {q:"Radiatsion sovish qachon kuchliroq bo‘lishi mumkin?",a:["Bulutsiz va sokin tunda","Bulutli va kuchli shamolli kunda","Faqat yomg‘ir paytida","Faqat kunduz kuni"],c:0,e:"Bulutsiz va sokin tunda Yer yuzasi issiqlikni samaraliroq yo‘qotishi mumkin."}
    ],

    expert: [
        {q:"Rossbi to‘lqinlari atmosferada nimaga bog‘liq?",a:["Yer aylanishi va geografik kenglik bo‘yicha Koriolis parametrining o‘zgarishiga","Faqat yog‘ingarchilikka","Okean sho‘rligiga","Quyosh dog‘lariga"],c:0,e:"Rossbi to‘lqinlari aylanuvchi atmosferadagi yirik masshtabli to‘lqinli harakatlar bo‘lib, Koriolis parametrining kenglik bo‘yicha o‘zgarishi muhim rol o‘ynaydi."},
        {q:"Potensial harorat qaysi sharoitga keltirilgan haroratdir?",a:["1000 hPa bosimga adiabatik keltirilgan","0°C ga keltirilgan","Dengiz sathidagi namlikka","Maksimal bosimga"],c:0,e:"Potensial harorat havo zarrachasining 1000 hPa bosimga quruq adiabatik keltirilgandagi haroratidir."},
        {q:"CAPE meteorologiyada nimani ifodalaydi?",a:["Konveksiya uchun mavjud potensial energiyani","Havo namligini","Ozon miqdorini","Yer yuzasi bosimini"],c:0,e:"CAPE ko‘tarilayotgan havo zarrachasining musbat suzuvchanligi bilan bog‘liq energiya miqdorini ifodalaydi."},
        {q:"Helmholtz beqarorligi qaysi holatda yuzaga kelishi mumkin?",a:["Turli tezlikda harakatlanuvchi qatlamlar chegarasida","Faqat mutlaq tinch havoda","Faqat qattiq muzliklarda","Faqat yuqori bosimda"],c:0,e:"Helmholtz beqarorligi tezlik farqi mavjud qatlamlar chegarasida yuzaga kelishi mumkin."},
        {q:"Hadley aylanishi qaysi kengliklar oralig‘ida muhim rol o‘ynaydi?",a:["Ekvatorial va subtropik mintaqalar","Faqat qutblar","Faqat o‘rta kengliklar","Faqat Antarktida"],c:0,e:"Hadley aylanishi tropik mintaqada havoning ko‘tarilishi va subtropiklarda pasayishi bilan tavsiflanadi."},
        {q:"Quruq adiabatik harorat gradienti taxminan qancha?",a:["1°C/km","9,8°C/km","15°C/km","20°C/km"],c:1,e:"Quruq adiabatik gradient taxminan 9,8°C/km ga teng."},
        {q:"Nam adiabatik gradient nima sababli quruq gradientdan odatda kichik?",a:["Kondensatsiya paytida yashirin issiqlik ajralishi sababli","Havo bosimi yo‘qligi sababli","Quyosh nuri qaytgani sababli","Shamol to‘xtagani sababli"],c:0,e:"Suv bug‘i kondensatsiyalanganda ajraladigan yashirin issiqlik sovishni sekinlashtiradi."},
        {q:"Atmosferaning baroklinik beqarorligi ko‘pincha qanday jarayon bilan bog‘liq?",a:["O‘rta kenglik siklonlarining rivojlanishi bilan","Faqat tropik tuman bilan","Ozon qatlamining yo‘qolishi bilan","Yer po‘stining siljishi bilan"],c:0,e:"Baroklinik beqarorlik o‘rta kengliklardagi ekstratropik siklonlarning rivojlanishida muhim rol o‘ynaydi."},
        {q:"Potential vorticity meteorologiyada nima uchun muhim?",a:["Atmosfera dinamikasi va havo massalarini tahlil qilish uchun","Faqat bulut rangini aniqlash uchun","Yog‘in miqdorini o‘lchash uchun","Quyosh radiatsiyasini to‘xtatish uchun"],c:0,e:"Potensial vorticity atmosfera oqimlari va dinamik jarayonlarni tahlil qilishda muhim kattalikdir."},
        {q:"Madden–Julian tebranishi qaysi hodisa?",a:["Tropik mintaqadagi harakatlanuvchi atmosfera konvektiv tebranishi","Qutb yog‘dusi","Tog‘ shamoli","Okean tubidagi zilzila"],c:0,e:"Madden–Julian tebranishi tropik atmosferada sharqqa siljib boradigan yirik masshtabli konvektiv hodisadir."},
        {q:"El-Ninyo hodisasi asosan qaysi okean bilan bog‘liq?",a:["Atlantika","Hind","Tinch","Shimoliy Muz"],c:2,e:"El-Ninyo ekvatorial Tinch okeanining markaziy va sharqiy qismidagi suvlarning anomal isishi bilan bog‘liq."},
        {q:"Qaysi meteorologik kattalik havo oqimining aylanishini tavsiflaydi?",a:["Vorticity","Albedo","Salinity","Bathymetry"],c:0,e:"Vorticity havo oqimining mahalliy aylanish xususiyatini ifodalaydi."}
    ]
};

const levelNames = {
    easy: "BOSHLANG‘ICH",
    medium: "O‘RTA",
    hard: "YUQORI",
    expert: "EKSPERT"
};

let currentLevel = "easy";
let testQuestions = [];
let currentIndex = 0;
let score = 0;
let correct = 0;
let answered = false;

const $ = id => document.getElementById(id);

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    $(id).classList.add("active");
}

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function updateRecord() {
    const record = Number(localStorage.getItem("meteorologistRecord")) || 0;
    $("record").textContent = record + " / 10";
}

function startQuiz(level) {
    currentLevel = level;
    testQuestions = shuffle(questions[level]).slice(0, 10);

    currentIndex = 0;
    score = 0;
    correct = 0;
    answered = false;

    $("levelName").textContent = levelNames[level];
    $("score").textContent = "0";

    showScreen("quizScreen");
    showQuestion();
}

function showQuestion() {
    answered = false;

    const item = testQuestions[currentIndex];

    $("questionNumber").textContent =
        String(currentIndex + 1).padStart(2, "0") + " / 10";

    $("question").textContent = item.q;
    $("feedback").textContent = "";
    $("feedback").className = "";

    $("nextButton").disabled = true;
    $("nextButton").textContent =
        currentIndex === 9 ? "Natijani ko‘rish →" : "Keyingi savol →";

    $("progressBar").style.width =
        (currentIndex / 10 * 100) + "%";

    const answers = $("answers");
    answers.innerHTML = "";

    item.a.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.textContent =
            String.fromCharCode(65 + index) + ". " + answer;

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answers.appendChild(button);
    });
}

function checkAnswer(selected, selectedButton) {
    if (answered) return;

    answered = true;

    const item = testQuestions[currentIndex];
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selected === item.c) {
        score++;
        correct++;

        selectedButton.classList.add("correct");

        $("feedback").textContent = "✓ TO‘G‘RI JAVOB! " + item.e;
        $("feedback").className = "success";

    } else {
        selectedButton.classList.add("wrong");
        buttons[item.c].classList.add("correct");

        $("feedback").textContent = "✕ NOTO‘G‘RI JAVOB. " + item.e;
        $("feedback").className = "error";
    }

    $("score").textContent = score;

    $("progressBar").style.width =
        ((currentIndex + 1) / 10 * 100) + "%";

    $("nextButton").disabled = false;
}

function nextQuestion() {
    if (!answered) return;

    currentIndex++;

    if (currentIndex < 10) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    showScreen("resultScreen");

    const oldRecord =
        Number(localStorage.getItem("meteorologistRecord")) || 0;

    const isNewRecord = score > oldRecord;

    if (isNewRecord) {
        localStorage.setItem("meteorologistRecord", score);
    }

    const percentage = score * 10;

    let title, message, icon;

    if (score === 10) {
        title = "MUKAMMAL NATIJA!";
        message = "Siz haqiqiy meteorologiya bilimdonisiz!";
        icon = "🏆";
    } else if (score >= 8) {
        title = "AJOYIB NATIJA!";
        message = "Atmosfera haqidagi bilimlaringiz juda yaxshi!";
        icon = "🌤️";
    } else if (score >= 6) {
        title = "YAXSHI NATIJA!";
        message = "Bilimingizni rivojlantirishda davom eting!";
        icon = "🌈";
    } else if (score >= 4) {
        title = "YOMON EMAS!";
        message = "Yana mashq qiling va yangi bilimlarni o‘rganing!";
        icon = "☁️";
    } else {
        title = "OLDINGA INTILING!";
        message = "Har bir sinov yangi bilim sari qadamdir!";
        icon = "🌦️";
    }

    $("resultIcon").textContent = icon;
    $("resultTitle").textContent = title;
    $("resultMessage").textContent = message;

    $("finalScore").textContent = score;
    $("correct").textContent = correct;
    $("wrong").textContent = 10 - correct;
    $("percent").textContent = percentage + "%";

    $("resultBar").style.width = percentage + "%";

    $("newRecord").classList.toggle("hidden", !isNewRecord);

    updateRecord();
}

// DARAJANI TANLASH
document.querySelectorAll(".level").forEach(button => {
    button.addEventListener("click", () => {
        startQuiz(button.dataset.level);
    });
});

// KEYINGI SAVOL
$("nextButton").addEventListener("click", nextQuestion);

// BOSH SAHIFAGA QAYTISH
$("backButton").addEventListener("click", () => {
    if (confirm("Testni tugatmasdan chiqmoqchimisiz?")) {
        showScreen("homeScreen");
        updateRecord();
    }
});

// QAYTA TEST
$("retryButton").addEventListener("click", () => {
    startQuiz(currentLevel);
});

// BOSH SAHIFA
$("homeButton").addEventListener("click", () => {
    showScreen("homeScreen");
    updateRecord();
});

// DASTLABKI HOLAT
updateRecord();
