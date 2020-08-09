var catalog = document.querySelector(".dataCatalog");
const getUserDetails = () => {
    catalog.style.display = "block";
  var value = document.querySelector(".username");
  var userValue = value.value;

  fetch(`https://api.github.com/users/${userValue}`)
    .then((response) => response.json())
    .then(function (data) {
        var userRepo = data.public_repos
        console.log(userRepo)

    }
   
//    let userRepo =  data.public_repos
//     console.log(userRepo));
  // .catch(err =>
  //     )
  
    )};

    
    const  getUserRepo = () => {
      let li = document.querySelector(".itemList")




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
              this.items = data;
              console.log(data);
            });
        }
      
      
      
      
        
      
        changeDisplay(userInfo) {
          //let ul = document.querySelector(".datalist")
      
          let newItem = document.createElement("li");
          for (let i = 0; i < userInfo.length; i++) {
            let itemText = document.createTextNode(userInfo[i]);
            newItem.appendChild(itemText);
            // ul.appendChild(newItem)
          }
          //console.log(ul)
          // console.log(newItem)
        }
        getUserRepo() {
          this.items = "https://api.github.com/users/nazorm/following";
          this.changeDisplay(this.items);
          console.log(this.items);
        }
      
        getUserGists() {
          this.items = this.items.public_gists;
          this.changeDisplay(this.items);
        }
      
        getUserFollowing() {
          this.items = this.items.following;
          this.changeDisplay(this.items);
        }
      
        getUserFollowers() {
          this.items = this.items.followers;
          this.changeDisplay(this.items);
        }
        leadToUserProfile() {
          var value = document.querySelector(".username");
          var userValue = value.value;
          document.querySelector(".userP").href = `https://github.com/${userValue}`;
        }
        changeAvatar() {
          document.querySelector(".userImage").src =
            "https://avatars3.githubusercontent.com/u/31112419?v=4";
        }
      }
      
      var details = new Details();
      
      const getUserDetails = () => {
        var catalog = document.querySelector(".dataCatalog");
      //   catalog.style.display = "block";
      //   details.fetchData();
      //   details.leadToUserProfile();
      //   details.changeAvatar();
      };
      // const getUserRepo = () => {
      //   details.getUserRepo();
      // };
      
      // const getUserGists = () => {
      //   details.getUserGists();
      // };
      
      // const getUserFollowing = () => {
      //   details.getUserFollowing();
      // };
      
      // const getUserFollowers = () => {
      //   details.getUserFollowers();
      // };
    //    = document.querySelector(".dataList")
    //   dataList.innerHTML = userRepo
    // };
//const getUserRepo = () => {};
const getUserGists = () => {};

const getUserFollowing = () => {};

const getUserFollowers = () => {};
