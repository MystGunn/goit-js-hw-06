const items = document.querySelectorAll('#categories .item');
console.log(`Numărul total de categorii: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('ul li');
    console.log(`Category: ${title}), Elements: ${elements.length}`)});
