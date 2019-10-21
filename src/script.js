const data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },
  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function createList(obj) {

  if (!Object.keys(obj).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const item in obj) {

    const li = document.createElement('li');
    li.textContent = item;

    const child = createList(obj[item]);

    if (child) {
      li.append(child);
    }

    ul.append(li);
  }
  return ul;
}

function createTree(container, data) {
  container.append(createList(data));
}

const selector = document.querySelector('#container')

createTree(selector, data);  