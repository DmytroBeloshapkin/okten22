// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let box = document.createElement('div');
box.classList.add('box')

for (const user of simpsons) {
    let div = document.createElement('div')
    div.classList.add('member')

    let h2 = document.createElement('h2');
    h2.innerText = `${user.name}, ${user.surname}`;

    let h3 = document.createElement('h3');
    h3.innerText = `age ${user.age}`;

    let p = document.createElement('p');
    p.innerText = `${user.info}`;

    let img = document.createElement('img');
    img.classList.add('img')
    img.src = `${user.photo}`;

    div.append(h2, h3, p, img)
    box.appendChild(div)
}
document.body.append(box)


// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


let courses = document.createElement('div')
courses.classList.add('boxCourses')

for (const coursesArrayElement of coursesArray) {

    let cours = document.createElement('div')
    cours.classList.add('cours')

    let hover = document.createElement(`div`)
    hover.classList.add('hover')
    hover.innerText = coursesArrayElement.title

    let month_hour = document.createElement('div')
    month_hour.classList.add('month_hour')

    let month = document.createElement('div')
    month.classList.add('month')
    month.innerText = coursesArrayElement.monthDuration

    let hour = document.createElement('div')
    hour.classList.add('hour')
    hour.innerText = coursesArrayElement.hourDuration

    let modules = document.createElement('div')
    modules.classList.add('modules')

    for (const module of coursesArrayElement.modules) {
        let div = document.createElement('li')

        div.innerText = module
        modules.append(div)
    }

    month_hour.append(month, hour)
    cours.append(hover, month_hour, modules)
    courses.append(cours)
}
document.body.append(courses)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main', 'Products', 'About us', 'Contacts']

let menu = document.getElementsByClassName('menu')[0]

for (const item of arr) {
    let li = document.createElement('li')
    li.innerText = item
    menu.appendChild(li)
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let couses = document.createElement('div')
for (const item of coursesAndDurationArray) {
    let itemBox = document.createElement('div')
    itemBox.classList.add('item')
    itemBox.innerText = `title: ${item.title}, monthDuration: ${item.monthDuration}`
    couses.appendChild(itemBox)
}
document.body.append(couses)


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const couse of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.classList.add('item')

    let h1 = document.createElement(`h1`)
    h1.classList.add('heading')
    h1.innerText = `${couse.title}`

    let p = document.createElement(`p`)
    p.classList.add('description')
    p.innerText = `${couse.monthDuration}`

    div.appendChild(h1, p)
    document.body.appendChild(div)
}

// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
document.getElementById('hider').onclick = function () {
    document.getElementById('text').hidden = true;

// .addEventListener()
}


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
let age = document.getElementById('age')
let button = document.getElementById('button')
button.onclick = function (e) {
    e.preventDefault()
    console.log(age.value);
}

//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//    та повідомити про це користувача
let age2 = document.getElementById('ageIf')
let button2 = document.getElementById('buttonIf')
button2.onclick = function (e) {
    e.preventDefault()
    if (age2.value < 18) {
        console.log('access denied')
    } else {
        console.log('wellcome')
    }
    console.log(age2.value);
}


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// let f1 = document.forms.f1
// let a = document.getElementById('a')
//
// let b = document.getElementById('b')
//
// let c = document.getElementById('c')
//
// let butSend = document.getElementById('butSend')
// butSend.onclick = function (e){
//     e.preventDefault()
//     let div = document.createElement('div')
//     div.style.background = black
//     div.style.height = 10
//     div.style.width = 100
//
// }


let input1 = document.createElement('input')
input1.setAttribute('placeholder', 'enter1')

let input2 = document.createElement('input')
input2.setAttribute('placeholder', 'enter2')

let input3 = document.createElement('input')
input3.setAttribute('placeholder', 'enter3')

let button4 = document.createElement('button')
button.innerText = 'send'

button4.addEventListener('click', function () {

    let row = input1.value
    let col = input2.value
    let elem = input3.value

    let generator = (tr, td, text) => {

        let table = document.createElement("table")

        for (let i = 0; i < tr; i++) {
            let tr = document.createElement(`tr`)
            generator.appendChild(tr)

            for (let j = 0; j < td; j++) {
                let td = document.createElement('td')
                td.innerText = `${text}`
                tr.appendChild(td)
            }
            }
        }
        generator(row, col, elem)
    }
)

    document.body.append(input1, input2, input3, button4);