fetch('https://api.github.com/repos/Likibu/test-discord/hooks')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
kgkhgkjhkj