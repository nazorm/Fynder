var generalItemList = document.querySelector(".generalDataList");
var specificdataList = document.querySelector(".specificdataList");
var userRepo = document.querySelector(".userRepo");
var profileId = document.querySelector(".username");
var catalog = document.querySelector(".dataCatalog");

class Details {
  constructor() {
    this.items = [];
    this.client_id = "feb4d1a2bb239014cc3c";
    this.client_secret = "d4dd84715469c159227bb369e10c1ef08cfbb704";
  }

  // debounce
  // debounce(fn, delay) {
  //   let timer;
  //   return function () {
  //     setTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn();
  //     }, delay);
  //   };
  // }

  //fetch multiple users
  fetchData() {
    var value = document.querySelector(".username");
    var userValue = value.value;

    fetch(`https://api.github.com/search/users?q=${userValue}`)
      .then((response) => response.json())
      .then((data) => {
        this.items = data.items;
        this.handleEveryUserDisplay(this.items);
      });
  }
  //display multiple querries on screen
  handleEveryUserDisplay(items) {
    generalItemList.innerHTML = " ";
    for (let i = 0; i < items.length; i++) {
      var item = `<li>
        <img src='${items[i].avatar_url}' onclick="handleSpecificUserClick(${i})"/>
        <span>${items[i].login}</span>
        </li>`;
      catalog.style.display = "none";
      generalItemList.innerHTML += item;
    }
  }
  //display specific user details to screen
  handleSpecificUser(itemIndex) {
    generalItemList.innerHTML = " ";
    let specificUser = this.items[itemIndex];
    let username = specificUser.login;

    fetch(specificUser.url)
      .then((res) => res.json())
      .then((data) => {
        let userInfo = data;

        this.getUserRepo(userInfo);
        this.pasteUserInfo(userInfo);

        document.querySelector(".userImage").src = specificUser.avatar_url;
        document.querySelector(".name").innerHTML = username;
        document.querySelector(".userP").href = specificUser.html_url;
      });
  }
  //fetch user Repos
  getUserRepo(value) {
    fetch(value.repos_url)
      .then((res) => res.json())
      .then((data) => {
        let repos = data;
        this.displayRepo(repos);
      });
  }
  // display user repos to screen
  displayRepo(value) {
    for (let i = 0; i < value.length; i++) {
      var repo = `<li>
      <span><a href= "${value[i].html_url}" target="_blank">${value[i].name}</a></span>
      <span>Fork:${value[i].fork}</span>
      <span>Watchers:${value[i].watchers_count}</span>
      <span>Stars:${value[i].stargazers_count}</span>
      
      </li>`;
      userRepo.innerHTML += repo;
    }
  }

  pasteUserInfo(value) {
    document.querySelector(
      ".repos"
    ).innerHTML = `Public Repos: ${value.public_repos} `;
    document.querySelector(
      ".gists"
    ).innerHTML = `Gists: ${value.public_gists} `;
    document.querySelector(
      ".following"
    ).innerHTML = `Following: ${value.following} `;
    document.querySelector(
      ".followers"
    ).innerHTML = `Followers: ${value.followers} `;
    document.querySelector(".company").innerHTML = `Company: ${value.company} `;
    document.querySelector(".website").innerHTML = `Website: ${value.blog} `;
    document.querySelector(
      ".location"
    ).innerHTML = `Location: ${value.location} `;
    document.querySelector(
      ".member"
    ).innerHTML = `Member since: ${value.created_at} `;
  }
}

var details = new Details();

const getUserDetails = () => {
  // details.debounce(details.fetchData(), 3000);
  details.fetchData()
};

const handleSpecificUserClick = (index) => {
  var catalog = document.querySelector(".dataCatalog");
  catalog.style.display = "block";
  details.handleSpecificUser(index);
};
