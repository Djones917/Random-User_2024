function fetchUser() {
  fetch('https://randomuser.me/api').then((res) => res.json());
  
}

fetchUser();