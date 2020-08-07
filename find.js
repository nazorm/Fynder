let getList = document.querySelector(".dataList");  


class Details{
    constructor(items){
     this.items = [items];
    }
   
   
    fetchData(){
        var value = document.querySelector(".username");
      var userValue = value.value;
     fetch(`https://api.github.com/users/${userValue}`)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data)
})
this.items = this.data
 }

getUserRepo(){
    console.log(this.items)
//     let ul = document.getElementsByTagName("ul")
//     let newItem = document.createElement("li")
    
// // for (let i = 0; i<=0; i++){
//     let itemText = document.createTextNode("")
//     newItem.appendChild(itemText)
//     ul.appendChild(newItem)
//     ul.appendChild("br")
// // }
}



}

var details = new Details


const getUserDetails = () => {
    var catalog = document.querySelector(".dataCatalog");
    catalog.style.display = "block";
    details.fetchData()
}
const getUserRepo = ()=>{
    details.getUserRepo()
}