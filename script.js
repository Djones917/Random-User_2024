function fetchUser() {
  fetch('https://randomuser.me/api').then((res) => res.json()).then((data) => {
    displayUser(data.results[0]);
  });
  
}

function displayUser(user) {
  const userDisplay = document.querySelector('#user');

  if (user.gender === 'female') {
     document.body.style.backgroundColor = 'purple';
  } else {
    document.body.style.backgroundColor = 'royalblue';
  }

  userDisplay.innerHTML = '';
}


fetchUser();