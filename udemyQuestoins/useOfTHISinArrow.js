function getItem() {
  console.log(this); //window
}
getItem();

let item1 = {
  title: "Ball",
  getItem() {
    console.log(this); // {title:"ball", ...}
  },
};
item1.getItem();

class Item {
  title = "Ball";
  getItem() {
    console.log(this); // instance of Item  {title:"ball", ...}
  }
}

item2 = new Item();
item2.getItem();

////IMPORTANT STARTS FROM HERE

class Item3 {
  title = "Ball";
  getItem() {
    function somefnc() {
      console.log("somefnc", this); //undefined. we are a function without object (obj.fnc())
    }
    somefnc();
  }
}
item3 = new Item3();
item3.getItem();

//similar is the issue with anonymous function inside map,filter etc

class Item {
  title = "Ball";
  getItem() {
    [1, 2, 3].map(function (item) {
      console.log(this); //undefined
    });
  }
}
const item = new Item();
item.getItem();


//--------------------
//THIS IS WHY IN ANONYMOUS FUNCTION WE USE ARROW FUNCTION SO THAT IT CAN HAVE ITS PARENTS CONTEXT
//------------------------