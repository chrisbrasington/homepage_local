document.addEventListener('DOMContentLoaded', () => {
  const configDataElement = document.getElementById('config-data');
  const data = JSON.parse(configDataElement.textContent);

  const menu = document.getElementById('menu');

  data.categories.forEach((category, index) => {
    const ul = document.createElement('ul');

    const titleItem = document.createElement(`l${index + 1}`);
    titleItem.className = 'title';
    titleItem.innerHTML = `<i class="${category.icon} category"></i>&nbsp;${category.title}`;
    ul.appendChild(titleItem);

    category.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.name;
      li.appendChild(a);
      ul.appendChild(li);
    });

    menu.appendChild(ul);
  });
});
