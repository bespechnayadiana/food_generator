const data = {
  sideDishes: [
    'Макароны',
    'Пюрешка',
    'Запеченая картошка',
    'Гречушка',
    'Вареники',
  ],

  additives: [
    'Колбаса',
    'Котлетка по киевски',
    'Яйца',
    'Салатик или зажарочка',
    'Куриные ножки',
    'Котлетки по-домашнему',
  ],

  yummys: [
    'Чипсики + кола',
    'Сухарики + кола',
    'Мороженка',
    'Орешки',
    'Фруктики (банан, аппельсин, яблоко, виноград, персик)',
  ],
};

const getIndex = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const generateMenu = () => {
  list.innerHTML = Object
    .keys(data)
    .map((key) => data[key][getIndex(data[key].length)])
    .map((item) => `<li>${item}</li>`)
    .join('');
};



const list = document.querySelector('#list');
const generate = document.querySelector('#generate');

generate.onclick = generateMenu;
