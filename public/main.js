fetch('/todos')
  .then((response) => response.json())
  .then((json) => {
    document.querySelector('#app').innerHTML = json.map((todo) => `
      <li>
        ${todo.text}
      </li>
    `)
      .join('');
  });
