const localBtn = document.querySelector(".btn");
const inputVal = document.querySelector("input");
const localGetBtn = document.querySelector(".btn-get-locale");
const p = document.querySelector("p");

let nameString = "Muhammed";

const obj = {
  first: "ssss",
};

// Boolean()

function BooleanTyp(nameString) {
  if (nameString) {
    return true;
  }

  return false;
}

let a = "dsfsdfdf";
console.log(parseFloat(a));

// Number

// if(parseFloat(a)){
//     return a
// }

localBtn.addEventListener("click", () => {
  //   localStorage.setItem("educator", false);
  //   localStorage.setItem("numberType", 5);
  //   localStorage.setItem("booleanType", false);
  //   localStorage.setItem("arrayss", JSON.stringify([4, 2, "sss"]));
  //   localStorage.setItem("objects", "sss");
  //   localStorage.setItem("objects", JSON.stringify({ obj: "ol" }));
  //   console.log(inputVal.value);

  if (inputVal.value === "muhammed") {
    localStorage.setItem("logined", inputVal.value);
  }
});

nameString = "Tesr";

let getLocalData = "";

const intervalled = setInterval(() => {
  if (localStorage.getItem("logined")) {
    p.style.display = "block";
    p.innerText += `, ${localStorage.getItem("logined")}`;

    inputVal.style.display = "none";

    clearInterval(intervalled);
  }
  console.log("test");
}, 1000);

localGetBtn.addEventListener("click", () => {
  //   getLocalData = localStorage.getItem("educator");
  //   getLocalData = localStorage.getItem("salam");
  //   getLocalData = localStorage.getItem("salam");
  //   if (getLocalData) {
  //     console.log("Salam");
  //   }
  //   console.log(Boolean(localStorage.getItem("educator")));
  //   console.log(Number(localStorage.getItem("numberType")));
  //   console.log(JSON.parse(localStorage.getItem("booleanType")));
  //   console.log(JSON.parse(localStorage.getItem("arrayss")));
  //   console.log(localStorage.getItem("objects"));
  //   sessionStorage.setItem("educator", nameString);

  //   localStorage.removeItem("educator");

  if (localStorage.getItem("logined")) {
    p.style.display = "block";
    p.innerText += `, ${localStorage.getItem("logined")}`;

    inputVal.style.display = "none";
  }
  //   console.log(false);
  //   console.log(5);
  //   console.log(localStorage.getItem("educator"));
});
