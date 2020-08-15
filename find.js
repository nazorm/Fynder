var generalItemList = document.querySelector(".generalDataList");
var specificdataList = document.querySelector(".specificdataList");

class Details {
  constructor() {
    this.items = [];
  }
debounce(fn, delay){
let timer;
return function (){
  setTimeout(timer)
    timer = setTimeout(()=>{
     fn()
  }, delay)
}
}

  fetchData() {
    var value = document.querySelector(".username");
    var userValue = value.value;

    fetch(`https://api.github.com/search/users?q=${userValue}`)
      .then((response) => response.json())
      .then((data) => {
        this.items = data.items;
        this.handleEveryUserDisplay(this.items);
       // console.log(this.items);
      });
  }
  handleEveryUserDisplay(items) {
    generalItemList.innerHTML = " ";
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

        this.pasteUserInfo(userInfo);

        document.querySelector(".userImage").src = specificUser.avatar_url;
        document.querySelector(".name").innerHTML = username;
        document.querySelector(".userP").href = specificUser.html_url;
      });
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

// document.querySelector(".username").addEventListener("input", debounce(e =>{
//   details.fetchData();
// }, 3000))




const getUserDetails = () => {
  details.debounce(details.fetchData(), 3000)
  //details.fetchData()
   };

const handleSpecificUserClick = (index) => {
  var catalog = document.querySelector(".dataCatalog");
  catalog.style.display = "block";
  details.handleSpecificUser(index);
};
