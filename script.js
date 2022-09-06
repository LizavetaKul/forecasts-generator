let predictions = ["Ваша цель достижима", "Цель определяет успех",
    "Ориентируйся на маленькие победы - они повлекут за собой большие",
    "Будь смелее в своем выборе. Мало знать себе цену — надо еще пользоваться спросом.",
    "Берегите людей, после встречи с которыми, что-то светлое и радостное поселяется в вашей душе",
    "Вам не стать идеальным и это - здорово...есть куда стремиться",
    "Вы получите то, чего никогда не имели...если станете делать то,чего никогда не делали",
];
let firstClick = false;
const button = document.querySelector(".forecast-btn");
const cardTemplate = document.querySelector('#forecast-item');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    const prediction = document.querySelector("h1");
    const probability = document.querySelector("p");

    const card = makeCardByTemplate(prediction, probability);
    if (firstClick == true) {
        container.append(card);
    }

    prediction.textContent = predictions[generateRandomValue(0, 4)];
    probability.textContent = generateRandomValue(0, 100) + "%";
    firstClick = true;
})

function makeCardByTemplate(prediction, probability) {
    const myCard = cardTemplate.content.cloneNode(true);

    myCard.querySelector('h3').textContent = prediction.textContent;
    myCard.querySelector('p').textContent = probability.textContent;

    return myCard;
}

function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */