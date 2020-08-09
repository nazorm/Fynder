var generalItemList = document.querySelector(".generalDataList");
var specificdataList = document.querySelector(".specificdataList");

class Details {
  constructor() {
    this.items = [];
  }

  fetchData() {
    var value = document.querySelector(".username");
    var userValue = value.value;

    fetch(`https://api.github.com/search/users?q=${userValue}`)
      .then((response) => response.json())
      .then((data) => {
        this.items = data.items;
        this.handleEveryUserDisplay(this.items);
        console.log(this.items);
      });
  }

  handleEveryUserDisplay(items) {
    generalItemList.innerHTML = " ";
    // console.log(items);
    for (let i = 0; i < items.length; i++) {
      var item = `<li>
        <img src='${items[i].avatar_url}' onclick="handleSpecificUserClick(${i})"/>
        <span>${items[i].login}</span>
        </li>`;
      generalItemList.innerHTML += item;
    }
  }

  handleSpecificUser(itemIndex) {
    generalItemList.innerHTML = " ";
    let specificUser = this.items[itemIndex];
    let username = specificUser.login;

    fetch(specificUser.url)
      .then((res) => res.json())
      .then((data) => {
        let userInfo = data;
        this.changeRepo(userInfo);
        this.changeGist(userInfo);
        this.changeFollowing(userInfo);
        this.changeFollowers(userInfo);



           this.changeCompany(userInfo)
           this.changeWebsite(userInfo)
           this.changeLocation(userInfo)
           this.changeMember(userInfo)


        document.querySelector(".userImage").src = specificUser.avatar_url;
        document.querySelector(".name").innerHTML = username;
        document.querySelector(".userP").href = specificUser.html_url;
      });
  }
  changeRepo(value) {
    document.querySelector(
      ".repos"
    ).innerHTML = `Public Repos: ${value.public_repos} `;
  }
  changeGist(value) {
    document.querySelector(
      ".gists"
    ).innerHTML = `Gists: ${value.public_gists} `;
  }
  changeFollowing(value) {
    document.querySelector(
      ".following"
    ).innerHTML = `Following: ${value.following} `;
  }
  changeFollowers(value) {
    document.querySelector(
      ".followers"
    ).innerHTML = `Followers: ${value.followers} `;
  }

     changeCompany(value){
      document.querySelector(".company").innerHTML = `Company: ${value.company} `
     }
     changeWebsite(value){
      document.querySelector(".website").innerHTML = `Website: ${value.blog} `
     }
     changeLocation(value){
      document.querySelector(".location").innerHTML = `Location: ${value.location} `
     }
     changeMember(value){
      document.querySelector(".member").innerHTML = `Member since: ${value.created_at} `
     }
}

var details = new Details();

const getUserDetails = () => {
  details.fetchData();
};

const handleSpecificUserClick = (index) => {
  var catalog = document.querySelector(".dataCatalog");
  catalog.style.display = "block";
  details.handleSpecificUser(index);
};
