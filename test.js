// test.js
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    
    // Очищаем основной контент
    main.innerHTML = `
        <h2>Тест "Какая ты окрошка"</h2>
        <p>Чем абсурднее твои ответы, тем точнее будет результат!</p>
        <div id="quiz-container"></div>
        <div id="result" style="display: none;"></div>
    `;

    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result');

    const questions = [
        {
            question: "Если бы ты проснулся(ась) в теле животного, это было бы:",
            answers: [
                { text: "Бобёр - строю планы и плотины", score: "classic" },
                { text: "Кот - царь, мне все должны", score: "traditional" },
                { text: "Осьминог - восемь рук для восьми дел сразу", score: "modern" },
                { text: "Ленивец - движение это стресс", score: "vegetable" },
                { text: "Тасманийский дьявол - энергия бьёт ключом", score: "spicy" },
                { text: "Утконос - загадка природы", score: "weird" }
            ]
        },
        {
            question: "Твой идеальный завтрак в понедельник:",
            answers: [
                { text: "Яичница с беконом - классика жанра", score: "classic" },
                { text: "Бабушкины блины - традиции прежде всего", score: "traditional" },
                { text: "Смузи из авокадо и спирулины - модно и полезно", score: "modern" },
                { text: "Что найду в холодильнике - лишь бы не готовить", score: "vegetable" },
                { text: "Острое карри - чтобы проснуться наверняка", score: "spicy" },
                { text: "Пицца с ананасами - зачем выбирать одно?", score: "weird" }
            ]
        },
        {
            question: "Как бы ты реагировал(а), если бы увидел(а) привидение?",
            answers: [
                { text: "Попробовал(а) бы сфотографировать для доказательств", score: "classic" },
                { text: "Предложил(а) бы чаю - вдруг замерзло", score: "traditional" },
                { text: "Спросил(а) бы, как там в загробном мире", score: "modern" },
                { text: "Сделал(а) бы вид, что не заметил(а) - авось само уйдёт", score: "vegetable" },
                { text: "Попытался(ась) бы подраться - я же смелый(ая)!", score: "spicy" },
                { text: "Предложил(а) бы вместе открыть бизнес", score: "weird" }
            ]
        },
        {
            question: "Какое сверхспособность ты бы выбрал(а)?",
            answers: [
                { text: "Умение находить потерянные вещи - практично", score: "classic" },
                { text: "Разговаривать с предками - мудрость веков", score: "traditional" },
                { text: "Фотосинтез - никакого геморроя с едой", score: "modern" },
                { text: "Умение спать в любых условиях - мечта", score: "vegetable" },
                { text: "Извергать пламя - чтобы все боялись", score: "spicy" },
                { text: "Превращать воду в мармелад - почему бы и нет?", score: "weird" }
            ]
        },
        {
            question: "Ты просыпаешься и видишь, что на улице зомби-апокалипсис. Твои действия:",
            answers: [
                { text: "Организую оборону - у меня же есть план на этот случай", score: "classic" },
                { text: "Спрячусь в подвале с консервами - деды так делали", score: "traditional" },
                { text: "Попробую подружиться с зомби - вдруг они не плохие", score: "modern" },
                { text: "Продолжу спать - может, само рассосётся", score: "vegetable" },
                { text: "Возглавлю банду выживших - я же крутой(ая)!", score: "spicy" },
                { text: "Начну продавать зомби как домашних животных", score: "weird" }
            ]
        },
        {
            question: "Какое необычное хобби тебе ближе?",
            answers: [
                { text: "Коллекционирование утюгов - классика коллекционирования", score: "classic" },
                { text: "Выращивание древних сортов пшеницы - как прадеды", score: "traditional" },
                { text: "Создание скульптур из переработанного пластика", score: "modern" },
                { text: "Наблюдение за тем, как растёт трава", score: "vegetable" },
                { text: "Экстремальное глажение белья на скале", score: "spicy" },
                { text: "Дрессировка тараканов для цирковых номеров", score: "weird" }
            ]
        },
        {
            question: "Если бы ты был(а) погодой, то какой?",
            answers: [
                { text: "Идеальный летний день - предсказуемо и приятно", score: "classic" },
                { text: "Туманное утро - таинственность традиций", score: "traditional" },
                { text: "Северное сияние - необычно и красиво", score: "modern" },
                { text: "Лёгкий ветерок - ненавязчиво и комфортно", score: "vegetable" },
                { text: "Ураган - мощно и разрушительно", score: "spicy" },
                { text: "Дождь из лягушек - почему бы и нет?", score: "weird" }
            ]
        },
        {
            question: "Твой дом захватили белки. Твоя реакция:",
            answers: [
                { text: "Систематически выгоню по инструкции из интернета", score: "classic" },
                { text: "Предложу им орехи в обмен на мир", score: "traditional" },
                { text: "Организую кооператив по совместному проживанию", score: "modern" },
                { text: "Не буду мешать - вдруг они тут поселятся надолго", score: "vegetable" },
                { text: "Объявлю войну и начну строить катапульту", score: "spicy" },
                { text: "Научу их играть в покер и создам белковый казино", score: "weird" }
            ]
        }
    ];

    const results = {
        classic: {
            title: "Классическая окрошка с колбасой",
            description: "Ты предсказуем(а) как день сурка, но в этом твоя сила. Как классическая окрошка, ты никогда не подведешь - тебя можно есть хоть каждый день и не устанешь. Ты не любишь сюрпризы, зато тебя ценят за надежность."
        },
        traditional: {
            title: "Бабушкина окрошка на квасе",
            description: "Ты - ходячая энциклопедия семейных традиций. Как окрошка по старинному рецепту, ты соединяешь в себе мудрость поколений и теплоту домашнего очага. Ты веришь, что 'раньше было лучше', и у тебя всегда найдется история 'а вот в наше время...'"
        },
        modern: {
            title: "Окрошка-фьюжн с киноа и авокадо",
            description: "Ты постоянно экспериментируешь и ломаешь стереотипы. Как окрошка с авокадо, ты удивляешь сочетанием несочетаемого. Ты первый(ая) пробуешь новые технологии и смеёшься над теми, кто говорит 'так не принято'."
        },
        vegetable: {
            title: "Окрошка-ленивец (просто нарезанные овощи в тарелке)",
            description: "Ты - воплощение философии 'и так сойдёт'. Как окрошка без кваса, ты не утруждаешь себя лишними движениями. Твой девиз: 'Если можно не делать, значит нужно не делать'. Зато ты мастер находить простые решения сложных проблем."
        },
        spicy: {
            title: "Окрошка с перцем чили и имбирём",
            description: "Ты - ураган эмоций и энергии. Как острая окрошка, ты взрываешь вкусовые рецепторы и оставляешь незабываемые впечатления. С тобой никогда не скучно, хотя иногда хочется передышки. Ты живешь по принципу 'всё или ничего'."
        },
        weird: {
            title: "Окрошка с мороженым и солёными огурцами",
            description: "Ты - ходячий абсурд и генератор безумных идей. Как окрошка с мороженым, ты шокируешь окружающих, но почему-то это работает. Твой мозг выдаёт 100 идей в минуту, 99 из которых - бред, но одна может изменить мир."
        }
    };

    let currentQuestion = 0;
    let score = { 
        classic: 0, 
        traditional: 0, 
        modern: 0, 
        vegetable: 0, 
        spicy: 0,
        weird: 0 
    };

    function showQuestion() {
        if (currentQuestion >= questions.length) {
            showResult();
            return;
        }

        const question = questions[currentQuestion];
        let answersHTML = question.answers.map((answer, index) => `
            <label class="answer-option">
                <input type="radio" name="answer" value="${index}">
                ${answer.text}
            </label>
        `).join('');

        quizContainer.innerHTML = `
            <div class="question">
                <h3>Вопрос ${currentQuestion + 1} из ${questions.length}</h3>
                <p>${question.question}</p>
                <form id="answer-form">
                    ${answersHTML}
                    <button type="submit">${currentQuestion < questions.length - 1 ? 'Далее' : 'Узнать результат'}</button>
                </form>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${(currentQuestion / questions.length) * 100}%"></div>
                </div>
                <div class="fun-fact">Факт: ${getRandomFunFact()}</div>
            </div>
        `;

        document.getElementById('answer-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const selected = document.querySelector('input[name="answer"]:checked');
            if (selected) {
                const answerIndex = selected.value;
                const answerScore = question.answers[answerIndex].score;
                score[answerScore]++;
                currentQuestion++;
                showQuestion();
            } else {
                alert("Эй, ты даже не выбрал(а) ответ! Как я тогда узнаю, какая ты окрошка?");
            }
        });
    }

    function getRandomFunFact() {
        const facts = [
            "Первая окрошка была придумана древними славянами как способ не выносить мусор - всё шло в кастрюлю!",
            "В некоторых деревнях окрошку используют как универсальное лекарство от всех болезней",
            "Космонавты берут окрошку в тюбиках в космос - она не течёт в невесомости",
            "Самую большую окрошку приготовили в 2018 году - её хватило бы на 5000 порций",
            "Существует окрошка-мороженое, но её рецепт держится в строжайшем секрете",
            "Окрошка внесена в список нематериального культурного наследия ЮНЕСКО"
        ];
        return facts[Math.floor(Math.random() * facts.length)];
    }

    function showResult() {
        quizContainer.style.display = 'none';
        
        // Находим тип с максимальным количеством очков
        let maxScore = -1;
        let resultType = '';
        
        for (const type in score) {
            if (score[type] > maxScore) {
                maxScore = score[type];
                resultType = type;
            }
        }

        const result = results[resultType];
        
        resultContainer.innerHTML = `
            <div class="result-card">
                <h3>Поздравляем! Ты - ${result.title}</h3>
                <p>${result.description}</p>
                <div class="share-buttons">
                    <button class="share-btn" onclick="shareResult('${result.title}')">
                        Поделиться результатом
                    </button>
                    <button id="restart-btn">Пройти тест ещё раз</button>
                </div>
            </div>
        `;
        resultContainer.style.display = 'block';

        document.getElementById('restart-btn').addEventListener('click', function() {
            currentQuestion = 0;
            score = { classic: 0, traditional: 0, modern: 0, vegetable: 0, spicy: 0, weird: 0 };
            quizContainer.style.display = 'block';
            resultContainer.style.display = 'none';
            showQuestion();
        });
    }

    // Начинаем тест
    showQuestion();
});

// Функция для кнопки "Поделиться"
function shareResult(result) {
    if (navigator.share) {
        navigator.share({
            title: 'Мой результат теста "Какая ты окрошка"',
            text: `Я - ${result}! А какая окрошка ты? Пройди тест и узнай!`,
            url: window.location.href
        }).catch(() => {
            alert('Спасибо за желание поделиться!');
        });
    } else {
        // Fallback для браузеров без поддержки Web Share API
        prompt('Скопируйте эту ссылку и поделитесь с друзьями:', window.location.href);
    }
}