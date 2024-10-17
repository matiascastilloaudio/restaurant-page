export function createMenu() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    container.appendChild(h1);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    container.appendChild(menu);

    const lunch = document.createElement('h2');
    lunch.textContent = 'Lunch';
    menu.appendChild(lunch)

    const lunchList = document.createElement('ul');

    const lunchItem1 = document.createElement('li');
    lunchItem1.textContent = 'Crab & avocado bruschetta - $ 14.95';
    const lunchItem2 = document.createElement('li');
    lunchItem2.textContent = 'Salmon salad - $ 18.35';
    const lunchItem3 = document.createElement('li');
    lunchItem3.textContent = 'Italian steak frites - $ 11.99';

    lunchList.append(lunchItem1, lunchItem2, lunchItem3);
    menu.appendChild(lunchList);

    const dinner = document.createElement('h2');
    dinner.textContent = 'Dinner';
    menu.appendChild(dinner)

    const dinnerList = document.createElement('ul');

    const dinnerItem1 = document.createElement('li');
    dinnerItem1.textContent = 'Turkey milanese - $ 32.30';
    const dinnerItem2 = document.createElement('li');
    dinnerItem2.textContent = 'Italian pate bruschetta - $ 12.65';
    const dinnerItem3 = document.createElement('li');
    dinnerItem3.textContent = 'Italian steak frites - $ 11.99';

    dinnerList.append(dinnerItem1, dinnerItem2, dinnerItem3);
    menu.appendChild(dinnerList);

    const dessert = document.createElement('h2');
    dessert.textContent = 'Dessert';
    menu.appendChild(dessert)

    const dessertList = document.createElement('ul');

    const dessertItem1 = document.createElement('li');
    dessertItem1.textContent = 'Turkey milanese - $ 32.30';
    const dessertItem2 = document.createElement('li');
    dessertItem2.textContent = 'Italian pate bruschetta - $ 12.65';
    const dessertItem3 = document.createElement('li');
    dessertItem3.textContent = 'Italian steak frites - $ 11.99';

    dessertList.append(dessertItem1, dessertItem2, dessertItem3);
    menu.appendChild(dessertList);

    const wine = document.createElement('h2');
    wine.textContent = 'Wine';
    menu.appendChild(wine)

    const wineList = document.createElement('ul');

    const wineItem1 = document.createElement('li');
    wineItem1.textContent = 'Turkey milanese - $ 32.30';
    const wineItem2 = document.createElement('li');
    wineItem2.textContent = 'Italian pate bruschetta - $ 12.65';
    const wineItem3 = document.createElement('li');
    wineItem3.textContent = 'Italian steak frites - $ 11.99';

    wineList.append(wineItem1, wineItem2, wineItem3);
    menu.appendChild(wineList);

}