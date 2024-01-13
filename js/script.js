let poems =
    [
        {
            poemText:
                <p>
                    С Новым годом поздравляю!
                    Доброты всем пожелаю,
                    Только мира, и побед,
                    И, конечно же, конфет.

                    Пусть всё сбудется сегодня,
                    Окрыляют пусть мечты,
                    Дед Мороз пускай подарит
                    Всё, что загадаешь ты.
                </p>,
            bg: `url(img/1612867432_90-p-krasivii-novogodnii-fon-krasnii-123.jpg)`,
            poemText:
                <p>
                    Новый год! Новый год!
                    Праздник снова у ворот.
                    Закружат опять снежинки,
                    И запахнут мандаринки.

                    С Новым годом поздравляю,
                    Всем добра и сил желаю.
                    Пусть же этот Новый год,
                    Всем удачи принесёт.
                </p>,
            bg: `url(img/802b350330c5ea7ead32e15797bbdcd6.jpg)`
        }

    ]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let poem = document.querySelector('.content__poem');

btn.addEventListener('click', function () {
    let randomIndex;

    randomIndex = Math.floor(Math.random() * poems.length);
    console.log(randomIndex);
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;

})