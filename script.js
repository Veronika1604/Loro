// Дані для меню
const menuItems = {
  meals: [
    { title: 'Паста Карбонара', image: 'pasta1.jpg', description: 'Традиційна італійська паста з беконом і вершковим соусом' },
    { title: 'Лазанья', image: 'pasta2.jpg', description: 'Шари макаронів, м’ясного соусу та сиру' },
    { title: 'Ризотто з грибами', image: 'risotto1.jpg', description: 'Кремове ризотто з ароматними білими грибами' },
    { title: 'Піца Маргарита', image: 'pizza1.jpg', description: 'Класична піца з моцарелою, томатами та базиліком' },
    { title: 'Піца Пепероні', image: 'pizza2.jpg', description: 'Пікантна піца з салямі та сиром' },
    { title: 'Кальцоне', image: 'pizza3.jpg', description: 'Закрита піца з шинкою та сиром' },
    { title: 'Гnocchi з соусом', image: 'gnocchi.jpg', description: 'Італійські картопляні галушки в томатному соусі' },
    { title: 'Феттучині Альфредо', image: 'fettuccine.jpg', description: 'Паста з вершковим соусом та пармезаном' },
    { title: 'Паста з морепродуктами', image: 'seafood_pasta.jpg', description: 'Мікс креветок, кальмарів у білому вині' },
    { title: 'Курка по-міланськи', image: 'milano_chicken.jpg', description: 'Куряче філе в хрусткій паніровці' },
    { title: 'Тальятеле з трюфелем', image: 'tagliatelle.jpg', description: 'Паста з вершковим соусом і трюфельною олією' },
    { title: 'М’ясна антіпаста', image: 'antipasti.jpg', description: 'Асорті з прошутто, салямі та сирів' },
    { title: 'Мінестроне', image: 'minestrone.jpg', description: 'Овочевий суп із макаронами' },
    { title: 'Салат Капрезе', image: 'caprese.jpg', description: 'Томати, моцарела, базилік, оливкова олія' },
    { title: 'Брускети з помідорами', image: 'bruschetta.jpg', description: 'Хрусткий хліб із томатами та базиліком' }
  ],
  drinks: [
    { title: 'Еспресо', image: 'espresso.jpg', description: 'Класична італійська кава' },
    { title: 'Капучино', image: 'cappuccino.jpg', description: 'Кава з молочною пінкою' },
    { title: 'Американо', image: 'americano.jpg', description: 'Чорна кава з водою' },
    { title: 'Лате', image: 'latte.jpg', description: 'М’який кавовий напій із молоком' },
    { title: 'Мохіто', image: 'mojito.jpg', description: 'Освіжаючий безалкогольний коктейль з м’ятою' },
    { title: 'Апельсиновий сік', image: 'orangejuice.jpg', description: 'Свіжовичавлений сік' },
    { title: 'Мінеральна вода', image: 'water.jpg', description: 'Газована або негазована вода' },
    { title: 'Чай чорний', image: 'blacktea.jpg', description: 'Ароматний чорний чай' },
    { title: 'Чай зелений', image: 'greentea.jpg', description: 'Легкий зелений чай' },
    { title: 'Лимонад', image: 'lemonade.jpg', description: 'Домашній лимонад з лимоном і м’ятою' },
    { title: 'Фреш гранатовий', image: 'pomegranate.jpg', description: 'Свіжовичавлений гранатовий сік' },
    { title: 'Вино червоне', image: 'redwine.jpg', description: 'Класичне червоне сухе' },
    { title: 'Вино біле', image: 'whitewine.jpg', description: 'Напівсолодке біле вино' },
    { title: 'Просекко', image: 'prosecco.jpg', description: 'Ігристе біле вино з Італії' },
    { title: 'Апероль шприц', image: 'aperol.jpg', description: 'Популярний літній коктейль' }
  ],
  desserts: [
    { title: 'Тірамісу', image: 'tiramisu.jpg', description: 'Десерт з маскарпоне та кавовим бісквітом' },
    { title: 'Панна Котта', image: 'pannacotta.jpg', description: 'Вершковий десерт з ягідним соусом' },
    { title: 'Канолі', image: 'cannoli.jpg', description: 'Сицилійські трубочки з рікотою' },
    { title: 'Джелато', image: 'gelato.jpg', description: 'Італійське морозиво' },
    { title: 'Шоколадний мус', image: 'mousse.jpg', description: 'Ніжний десерт з темного шоколаду' },
    { title: 'Сицилійський торт', image: 'cassata.jpg', description: 'Фруктовий торт з рікотою' },
    { title: 'Сорбет з лимону', image: 'sorbet.jpg', description: 'Легкий освіжаючий десерт' },
    { title: 'Крем-брюле', image: 'cremebrulee.jpg', description: 'З хрусткою карамельною скоринкою' },
    { title: 'Фруктова тарілка', image: 'fruitplate.jpg', description: 'Сезонні фрукти з м’ятою' },
    { title: 'Печиво Амаретті', image: 'amaretti.jpg', description: 'Мигдальне печиво' }
  ]
};

// Завантажити категорію
function loadMenu(category) {
  const container = document.getElementById('menuItems');
  container.innerHTML = '';

  menuItems[category].forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card h-100 shadow-sm menu-card" data-title="${item.title}" data-description="${item.description}" data-image="img/${item.image}">
        <img src="img/${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  // Після завантаження карток — додати події
  addCardEventListeners();
}

// Додавання подій для карток
function addCardEventListeners() {
  document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('modalTitle').innerText = card.dataset.title;
      document.getElementById('modalDescription').innerText = card.dataset.description;
      document.getElementById('modalImage').src = card.dataset.image;
      new bootstrap.Modal(document.getElementById('menuModal')).show();
    });
  });
}

// Події кнопок категорій
document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadMenu(btn.dataset.category);
  });
});

// Завантажити перші страви при запуску
window.addEventListener('DOMContentLoaded', () => {
  loadMenu('meals');
});


