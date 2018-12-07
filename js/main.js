// const fetchUsers = async () => (await fetch('http://localhost:9000/getusers')).json();
const fetchUsers = async () => (await fetch('/.netlify/functions/getusers')).json();

fetchUsers().then((data) => {
  const userList = document.querySelector('#users');

  data.forEach((user) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    const link = document.createElement('a');
    link.appendChild(document.createTextNode(user.login));
    link.href = user.html_url;
    link.target = '_blank';
    li.appendChild(link);
    userList.appendChild(li);
  });
});
