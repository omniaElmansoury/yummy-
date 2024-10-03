let CloseIcon = document.querySelector(".close-i");
let BarIcon = document.querySelector(".bar-i");
let BlackLinks = document.querySelector(".parent-header");
let m = document.querySelectorAll("ul li a");
let li = document.querySelectorAll(".v");
let row = document.querySelector(".allmeals .row");
let rowlayer = document.querySelector(".layero .row");
let rowcategory = document.querySelector(".row-category");
let rowrecat = document.querySelector(".row-recat");
let rowrecato = document.querySelector(".row-recato");
let rowrecatdatalis = document.querySelector(".row-recatdatalis");
let spinnre = document.querySelector(".loader");
let z = document.querySelectorAll(".z");
let parentallmeal = document.querySelector(".parent-allmeal");
let layero = document.querySelector(".layero");
let rowsearch = document.querySelector(".rowsearch");
let word = document.querySelector(".word");
let letter = document.querySelector(".letter");
let form = document.querySelector("form");
let rowdeserch = document.querySelector(".row-deserch");
let rowarea = document.querySelector(".row-area");
let rowcounrty = document.querySelector(".row-counrty");
let dtailspecifi = document.querySelector(".row-dtailspecifi");
let counrtydetails = document.querySelector(".row-counrtydetails");
let rowingerdient = document.querySelector(".row-ingerdient");
let rowinger = document.querySelector(".row-inger");
let ingersmall = document.querySelector(".row-ingersmall");
let ingersmalldtalis = document.querySelector(".row-ingersmalldtalis");
let rowcontact = document.querySelector(".contact");
let area = document.getElementById("area");
let search = document.getElementById("search");
let Category = document.getElementById("Category");
let ingerident = document.getElementById("ingerident");
let contact = document.getElementById("contact");
let submitBtn = document.getElementById("submitBtn");

BarIcon.addEventListener("click", function () {
  BlackLinks.classList.toggle("slideleft");
  BarIcon.classList.add("n");
  CloseIcon.classList.add("d");
  li.forEach((r) => {
    r.classList.add("yt");
  });
});
CloseIcon.addEventListener("click", function () {
  BlackLinks.classList.remove("slideleft");

  BarIcon.classList.remove("n");
  CloseIcon.classList.remove("d");
  li.forEach((r) => {
    r.classList.remove("yt");
  });
});
const arr = Array.from(m);
arr.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    e.preventDefault();
    BlackLinks.classList.toggle("slideleft");
    BarIcon.classList.remove("n");
    CloseIcon.classList.remove("d");
  });
});

let urlfetch = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const fetchallmeal = async function () {
  try {
    spinn();
    const response = await fetch(urlfetch);
    let data = await response.json();
    let information = data.meals;
    displayallmeal(information);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displayallmeal(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z">

<div class="imgbgopscity position-relative">
  <img
    src="${elem.strMealThumb}"
    class="w-100"
    alt=""
  />
  <div class="layer position-absolute"><h2>${elem.strMeal}</h2></div>
</div>
</div>
`;

    box = dochtml;

    row.innerHTML += box;
  });
}

fetchallmeal();

function spinn() {
  spinnre.classList.toggle("d-none");
}
row.addEventListener("click", function (e) {
  if (e.target !== row) {
    row.classList.add("d-none");
    layero.classList.add("l");

    fetchameal(e.target.innerText);
  }
});

let fetchspecificmeal = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const fetchameal = async function (namemael) {
  try {
    spinn();
    const response = await fetch(`${fetchspecificmeal}${namemael}`);
    let data = await response.json();
    displayspmeal(data.meals[0]);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};
function displayspmeal(dat) {
  let box = ``;
  let inger = ``;
  let tags = dat.strTags?.split(",");

  if (!tags) tags = [];

  let tagsStr = "";
  for (let i = 0; i < tags.length; i++) {
    tagsStr += `
      
        <button type="button" class="btn btn-light m-2">${tags[i]}</button>`;
  }

  for (let i = 1; i <= 20; i++) {
    if (dat[`strIngredient${i}`]) {
      inger += `
        <button type="button" class="btn btn-light m-2">${
          dat[`strMeasure${i}`]
        } ${dat[`strIngredient${i}`]}</button>
      `;
    }
  }

  let dochtml = `    <div class="col-md-4">
<img src="${dat.strMealThumb}" class="w-100 mb-5 rounded-3" alt="">
<h2>${dat.strMeal}</h2>
</div>
<div class="col-md-8">
<h2>Instructions</h2>
<p>
${dat.strInstructions}
</p>
<div><h2>Area : ${dat.strArea}</h2></div>
<div><h2>Category : ${dat.strCategory}</h2></div>
<div class="mb-4"><h2>Recipes :</h2>

${inger}
</div>
<div class="mb-4"><h2>Tags  :</h2>
${tagsStr}

</div>
<div>
<a type="button" class="btn btn-success" target="_blank" href="${dat.strSource}">souece</a>
<a type="button" class="btn btn-danger" target="_blank" href="${dat.strYoutube}">youtube</a>
</div>
</div>
`;

  box = dochtml;

  rowlayer.innerHTML = box;
}
search.addEventListener("click", function (e) {
  e.preventDefault();
  row.classList.add("d-none");
  rowlayer.classList.add("d-none");
  form.classList.add("l");
  rowsearch.classList.add("l");
  rowcategory.classList.remove("l");
  rowarea.classList.add("d-none");
  rowingerdient.classList.remove("l");
  rowcontact.classList.remove("l");
  submitBtn.classList.remove("l");
});

rowdeserch.addEventListener("click", function (e) {
  if (e.target !== rowdeserch) {
    rowsearch.classList.add("l");
    fetchamealr(e.target.innerText);
  }
});

let fetchspecificmealr = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const fetchamealr = async function (namemael) {
  try {
    spinn();
    const response = await fetch(`${fetchspecificmeal}${namemael}`);
    let data = await response.json();
    displayspmealmk(data.meals[0]);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};
function displayspmealmk(dat) {
  let box = ``;
  let inger = ``;
  let tags = dat.strTags?.split(",");

  if (!tags) tags = [];

  let tagsStr = "";
  for (let i = 0; i < tags.length; i++) {
    tagsStr += `
      
        <button type="button" class="btn btn-light m-2">${tags[i]}</button>`;
  }

  for (let i = 1; i <= 20; i++) {
    if (dat[`strIngredient${i}`]) {
      inger += `
        <button type="button" class="btn btn-light m-2">${
          dat[`strMeasure${i}`]
        } ${dat[`strIngredient${i}`]}</button>
      `;
    }
  }

  let dochtml = `    <div class="col-md-4 float-start">
<img src="${dat.strMealThumb}" class="w-100 mb-5 rounded-3" alt="">
<h2>${dat.strMeal}</h2>
</div>
<div class="col-md-8 float-end">
<h2>Instructions</h2>
<p>
${dat.strInstructions}
</p>
<div><h2>Area : ${dat.strArea}</h2></div>
<div><h2>Category : ${dat.strCategory}</h2></div>
<div class="mb-4"><h2>Recipes :</h2>

${inger}
</div>
<div class="mb-4"><h2>Tags  :</h2>
${tagsStr}

</div>
<div>
<a type="button" class="btn btn-success" target="_blank" href="${dat.strSource}">souece</a>
<a type="button" class="btn btn-danger" target="_blank" href="${dat.strYoutube}">youtube</a>
</div>
</div>
`;

  box = dochtml;

  rowsearch.innerHTML = box;
}

let fetchsaerchr = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const fetchsearchamealu = async function () {
  try {
    spinn();
    const response = await fetch(`${fetchsaerchr}${word.value}`);
    let data = await response.json();
    displsearchnamepw(data.meals);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displsearchnamepw(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z m-3">

<div class="imgbgopscity position-relative">
  <img
    src="${elem.strMealThumb}"
    class="w-100"
    alt=""
  />
  <div class="layer position-absolute"><h2>${elem.strMeal}</h2></div>
</div>
</div>
`;

    box = dochtml;
    rowdeserch.innerHTML = box;
  });
}

word.addEventListener("keyup", function () {
  fetchsearchamealu();
});

let fetchsaerchf = `https://www.themealdb.com/api/json/v1/1/search.php?f=`;
const fetchsearchamealf = async function () {
  try {
    spinn();
    const response = await fetch(`${fetchsaerchf}${letter.value}`);
    let data = await response.json();
    displsearchnamep(data.meals);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displsearchnamep(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z m-3">

<div class="imgbgopscity position-relative">
  <img
    src="${elem.strMealThumb}"
    class="w-100"
    alt=""
  />
  <div class="layer position-absolute"><h2>${elem.strMeal}</h2></div>
</div>
</div>
`;

    box = dochtml;
    rowdeserch.innerHTML = box;
  });
}

let fetchspecificmealrf = `https://www.themealdb.com/api/json/v1/1/search.php?s`;
const fetchamealrf = async function (namemael) {
  try {
    spinn();
    const response = await fetch(`${fetchspecificmealrf}${namemael}`);
    let data = await response.json();
    displayspmealm(data.meals[0]);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};
function displayspmealm(dat) {
  let box = ``;
  let inger = ``;
  let tags = dat.strTags?.split(",");

  if (!tags) tags = [];

  let tagsStr = "";
  for (let i = 0; i < tags.length; i++) {
    tagsStr += `
      
        <button type="button" class="btn btn-light m-2">${tags[i]}</button>`;
  }

  for (let i = 1; i <= 20; i++) {
    if (dat[`strIngredient${i}`]) {
      inger += `
        <button type="button" class="btn btn-light m-2">${
          dat[`strMeasure${i}`]
        } ${dat[`strIngredient${i}`]}</button>
      `;
    }
  }

  let dochtml = `    <div class="col-md-4 float-start">
<img src="${dat.strMealThumb}" class="w-100 mb-5 rounded-3" alt="">
<h2>${dat.strMeal}</h2>
</div>
<div class="col-md-8 float-end">
<h2>Instructions</h2>
<p>
${dat.strInstructions}
</p>
<div><h2>Area : ${dat.strArea}</h2></div>
<div><h2>Category : ${dat.strCategory}</h2></div>
<div class="mb-4"><h2>Recipes :</h2>

${inger}
</div>
<div class="mb-4"><h2>Tags  :</h2>
${tagsStr}

</div>
<div>
<a type="button" class="btn btn-success" target="_blank" href="${dat.strSource}">souece</a>
<a type="button" class="btn btn-danger" target="_blank" href="${dat.strYoutube}">youtube</a>
</div>
</div>
`;

  box = dochtml;

  rowsearch.innerHTML = box;
}

letter.addEventListener("keyup", function () {
  fetchsearchamealf();
});

// mzsiknsinsikn

Category.addEventListener("click", function (e) {
  e.preventDefault();
  row.classList.add("d-none");
  rowlayer.classList.add("d-none");
  rowcategory.classList.add("l");
  rowingerdient.classList.remove("l");
  form.classList.remove("l");
  rowsearch.classList.remove("l");
  rowarea.classList.add("d-none");
  rowcontact.classList.remove("l");
  submitBtn.classList.remove("l");
  fetchallmealc();
  Category.addEventListener("click", function () {
    location.reload();
  });
});

let urlfetchc = `https://www.themealdb.com/api/json/v1/1/categories.php`;
const fetchallmealc = async function () {
  try {
    spinn();
    const response = await fetch(urlfetchc);
    let data = await response.json();
    displayallmeald(data.categories);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displayallmeald(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z">

<div class="imgbgopscity position-relative">
  <img
    src="${elem.strCategoryThumb}"
    class="w-100"
    alt=""
  />
  <div class="layer position-absolute"><h2>${elem.strCategory}</h2>
  <p>${elem.strCategoryDescription}<p/>
  </div>
</div>
</div>
`;

    box = dochtml;

    rowrecat.innerHTML += box;
  });
}

rowcategory.addEventListener("click", function (e) {
  if (e.target !== rowcategory) {
    rowrecat.classList.add("k");
    let nameproduct = e.target.innerText?.split(" ")[0];
    fetchsearchamealfvkn();
    rowrecat.classList.add("d-none");
  }
});
rowrecat.addEventListener("click", function (e) {
  if (e.target !== rowcategory) {
    rowrecat.classList.add("d-none");
    let nameproduct = e.target.innerText?.split(" ")[0];

    fetchsearchamealfvk(nameproduct);

    Category.addEventListener("click", function () {
      location.reload(rowcategory);
    });
  }
});

let fetchsaerchfvn = `https://www.themealdb.com/api/json/v1/1/categories.php`;
const fetchsearchamealfvkn = async function () {
  try {
    spinn();
    const response = await fetch(`${fetchsaerchfv}`);
    let data = await response.json();
    displsearchname(data.meals);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displsearchname(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z m-3">

<div class="imgbgopscity position-relative">
  <img
    src="${elem.strMealThumb}"
    class="w-100"
    alt=""
  />
  <div class="layer position-absolute"><h2 class="op">${elem.strMeal}</h2></div>
</div>
</div>
`;

    box = dochtml;
    rowrecato.innerHTML += box;
  });
}
let fetchsaerchfv = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;
const fetchsearchamealfvk = async function (ol) {
  try {
    spinn();
    const response = await fetch(`${fetchsaerchfv}${ol}`);
    let data = await response.json();
    displsearchnamel(data.meals);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displsearchnamel(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z m-3">

<div class="imgbgopscity position-relative">
  <img
    src="${elem.strMealThumb}"
    class="w-100"
    alt=""
  />
  <div class="layer position-absolute"><h2 class="op">${elem.strMeal}</h2></div>
</div>
</div>
`;

    box = dochtml;
    rowrecato.innerHTML += box;
  });
}

rowrecato.addEventListener("click", function (e) {
  if (e.target !== rowrecato) {
    rowrecato.classList.add("d-none");
    let nameproduct = e.target.innerText;

    fetchamealrd(nameproduct);
    Category.addEventListener("click", function () {
      location.reload(rowcategory);
    });
  }
});

let fetchspecificmealrd = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const fetchamealrd = async function (namemael) {
  try {
    spinn();
    const response = await fetch(`${fetchspecificmealrd}${namemael}`);
    let data = await response.json();
    displayspmealmd(data.meals[0]);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};
function displayspmealmd(dat) {
  let box = ``;
  let inger = ``;
  let tags = dat.strTags?.split(",");

  if (!tags) tags = [];

  let tagsStr = "";
  for (let i = 0; i < tags.length; i++) {
    tagsStr += `
      
        <button type="button" class="btn btn-light m-2">${tags[i]}</button>`;
  }

  for (let i = 1; i <= 20; i++) {
    if (dat[`strIngredient${i}`]) {
      inger += `
        <button type="button" class="btn btn-light m-2">${
          dat[`strMeasure${i}`]
        } ${dat[`strIngredient${i}`]}</button>
      `;
    }
  }

  let dochtml = `    <div class="col-md-3 float-start me-1">
<img src="${dat.strMealThumb}" class="w-100 mb-5 rounded-3" alt="">
<h2>${dat.strMeal}</h2>
</div>
<div class="col-md-8 float-end">
<h2>Instructions</h2>
<p>
${dat.strInstructions}
</p>
<div><h2>Area : ${dat.strArea}</h2></div>
<div><h2>Category : ${dat.strCategory}</h2></div>
<div class="mb-4"><h2>Recipes :</h2>

${inger}
</div>
<div class="mb-4"><h2>Tags  :</h2>
${tagsStr}

</div>
<div>
<a type="button" class="btn btn-success" target="_blank" href="${dat.strSource}">souece</a>
<a type="button" class="btn btn-danger" target="_blank" href="${dat.strYoutube}">youtube</a>
</div>
</div>
`;

  box = dochtml;

  rowrecatdatalis.innerHTML = box;
}

// bsubgsuujscbgujscbscjjsb

area.addEventListener("click", function (e) {
  e.preventDefault();
  rowarea.classList.remove("d-none");
  row.classList.add("d-none");
  rowlayer.classList.add("d-none");
  form.classList.remove("l");
  rowsearch.classList.remove("l");
  rowcategory.classList.remove("l");
  rowingerdient.classList.remove("l");
  rowcontact.classList.remove("l");
  submitBtn.classList.remove("l");
  fetchseararea();
  area.addEventListener("click", function () {
    location.reload();
  });
});

let fetcharea = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
const fetchseararea = async function () {
  try {
    spinn();
    const response = await fetch(`${fetcharea}`);
    let data = await response.json();
    displsearchname(data.meals);
    console.log(data.meals);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displsearchname(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z m-3">

<div class="imgbgopscity position-relative">
<i class="fa-solid fa-house-laptop" style="color: #ffffff; disabled"></i>
<div class="text-white"><h2 class="op">${elem.strArea}</h2></div>
</div>
</div>
`;

    box = dochtml;
    rowcounrty.innerHTML += box;
  });
}
rowcounrty.addEventListener("click", function (e) {
  rowcounrty.classList.add("d-none");
  if (e.target !== rowcounrty) {
    let nameproduct = e.target.innerText;

    if (nameproduct) {
      fetchsearchamearedis(nameproduct);
    } else {
      nameproduct = "British";
      fetchsearchamearedis(nameproduct);
    }
  }
});

let fetchaeaedis = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;
const fetchsearchamearedis = async function (ol) {
  try {
    spinn();
    const response = await fetch(`${fetchaeaedis}${ol}`);
    let data = await response.json();
    displsearchnamek(data.meals);
    console.log(data.meals);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displsearchnamek(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z m-3">

<div class="imgbgopscity position-relative">
  <img
    src="${elem.strMealThumb}"
    class="w-100"
    alt=""
  />
  <div class="layer position-absolute"><h2 class="op">${elem.strMeal}</h2></div>
</div>
</div>
`;

    box = dochtml;
    counrtydetails.innerHTML += box;
  });
}
counrtydetails.addEventListener("click", function (e) {
  e.preventDefault();
  counrtydetails.classList.add("d-none");
  if (e.target !== counrtydetails) {
    let nameproduct = e.target.innerText;

    fetchamealder(nameproduct);
  }
});

let fetchspecificde = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const fetchamealder = async function (namemael) {
  try {
    spinn();
    const response = await fetch(`${fetchspecificde}${namemael}`);
    let data = await response.json();
    displayspmealm(data.meals[0]);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};
function displayspmealm(dat) {
  let box = ``;
  let inger = ``;
  let tags = dat.strTags?.split(",");

  if (!tags) tags = [];

  let tagsStr = "";
  for (let i = 0; i < tags.length; i++) {
    tagsStr += `
      
        <button type="button" class="btn btn-light m-2">${tags[i]}</button>`;
  }

  for (let i = 1; i <= 20; i++) {
    if (dat[`strIngredient${i}`]) {
      inger += `
        <button type="button" class="btn btn-light m-2">${
          dat[`strMeasure${i}`]
        } ${dat[`strIngredient${i}`]}</button>
      `;
    }
  }

  let dochtml = `    <div class="col-md-4 float-start">
<img src="${dat.strMealThumb}" class="w-100 mb-5 rounded-3" alt="">
<h2>${dat.strMeal}</h2>
</div>
<div class="col-md-8 float-end">
<h2>Instructions</h2>
<p>
${dat.strInstructions}
</p>
<div><h2>Area : ${dat.strArea}</h2></div>
<div><h2>Category : ${dat.strCategory}</h2></div>
<div class="mb-4 text-white"><h2>Recipes :</h2>

${inger}
</div>
<div class="mb-4"><h2>Tags  :</h2>
${tagsStr}

</div>
<div>
<a type="button" class="btn btn-success" target="_blank" href="${dat.strSource}">souece</a>
<a type="button" class="btn btn-danger" target="_blank" href="${dat.strYoutube}">youtube</a>
</div>
</div>
`;

  box = dochtml;

  dtailspecifi.innerHTML = box;
}

//ctctcttgcygcgcgcgcgc
ingerident.addEventListener("click", function (e) {
  e.preventDefault();
  rowingerdient.classList.add("l");
  row.classList.add("d-none");
  rowlayer.classList.add("d-none");
  form.classList.remove("l");
  rowsearch.classList.remove("l");
  rowcategory.classList.remove("l");
  rowarea.classList.add("d-none");
  rowcontact.classList.remove("l");
  submitBtn.classList.remove("l");
  fetchsinger();
  ingerident.addEventListener("click", function () {
    location.reload();
  });
});

let fetchinger = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
const fetchsinger = async function () {
  try {
    spinn();
    const response = await fetch(`${fetchinger}`);
    let data = await response.json();
    displinger(data.meals);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displinger(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z m-3 text-white text-center">

<div class="imgbgopscity position-relative">
<div><i class="fa-solid fa-drumstick-bite fa-4x"></i></div>
  <div><h2 class="op">${elem.strIngredient}</h2></div>
  <p>${elem.strDescription.slice(0, 100)}</p>
</div>
</div>
`;

    box = dochtml;
    rowinger.innerHTML += box;
  });
}

rowinger.addEventListener("click", function (e) {
  rowinger.classList.add("d-none");
  if (e.target !== rowcounrty) {
    let nameproduct = e.target.innerText?.split(" ");
    for (var i = 0; i < nameproduct.length; i++) {
      if (nameproduct[i] === "The") {
        nameproduct.splice(i, 1);
      }
      fetchsmal(nameproduct[0]);
    }
  }
});

let fetchsmall = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`;
const fetchsmal = async function (ol) {
  try {
    spinn();
    const response = await fetch(`${fetchsmall}${ol}`);
    let data = await response.json();
    displsearchnamekl(data.meals);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};

function displsearchnamekl(dat) {
  let box = ``;
  dat.forEach((elem) => {
    let dochtml = ` 
 <div class="col-md-3 z m-3">

<div class="imgbgopscity position-relative">
  <img
    src="${elem.strMealThumb}"
    class="w-100"
    alt=""
  />
  <div class="layer position-absolute"><h2 class="op">${elem.strMeal}</h2></div>
</div>
</div>
`;

    box = dochtml;
    ingersmall.innerHTML += box;
  });
}

ingersmall.addEventListener("click", function (e) {
  e.preventDefault();
  ingersmall.classList.add("d-none");
  if (e.target !== ingersmall) {
    let nameproduct = e.target.innerText;

    fetchamea(nameproduct);
  }
});

let fetchdetails = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const fetchamea = async function (namemael) {
  try {
    spinn();
    const response = await fetch(`${fetchdetails}${namemael}`);
    let data = await response.json();
    displayspmealiu(data.meals[0]);
  } catch {
    console.error("erro");
  } finally {
    spinn();
  }
};
function displayspmealiu(dat) {
  let box = ``;
  let inger = ``;
  let tags = dat.strTags?.split(",");

  if (!tags) tags = [];

  let tagsStr = "";
  for (let i = 0; i < tags.length; i++) {
    tagsStr += `
      
        <button type="button" class="btn btn-light m-2">${tags[i]}</button>`;
  }

  for (let i = 1; i <= 20; i++) {
    if (dat[`strIngredient${i}`]) {
      inger += `
        <button type="button" class="btn btn-light m-2">${
          dat[`strMeasure${i}`]
        } ${dat[`strIngredient${i}`]}</button>
      `;
    }
  }

  let dochtml = `    <div class="col-md-4 float-start text-white">
<img src="${dat.strMealThumb}" class="w-100 mb-5 rounded-3" alt="">
<h2>${dat.strMeal}</h2>
</div>
<div class="col-md-8 float-end text-white">
<h2>Instructions</h2>
<p>
${dat.strInstructions}
</p>
<div><h2>Area : ${dat.strArea}</h2></div>
<div><h2>Category : ${dat.strCategory}</h2></div>
<div class="mb-4"><h2>Recipes :</h2>

${inger}
</div>
<div class="mb-4"><h2>Tags  :</h2>
${tagsStr}

</div>
<div>
<a type="button" class="btn btn-success" target="_blank" href="${dat.strSource}">souece</a>
<a type="button" class="btn btn-danger" target="_blank" href="${dat.strYoutube}">youtube</a>
</div>
</div>
`;

  box = dochtml;

  ingersmalldtalis.innerHTML = box;
}

contact.addEventListener("click", function (e) {
  e.preventDefault();
  row.classList.add("d-none");
  rowlayer.classList.add("d-none");
  rowcontact.classList.add("l");
  submitBtn.classList.add("l");
  form.classList.remove("l");
  rowsearch.classList.remove("l");
  rowcategory.classList.add("d-none");
  rowarea.classList.add("d-none");
  rowingerdient.classList.add("d-none");
  contact.addEventListener("click", function () {
    location.reload();
  });
});

submitBtn = document.getElementById("submitBtn");

document.getElementById("nameInput").addEventListener("focus", () => {
  nameInputTouched = true;
});

document.getElementById("emailInput").addEventListener("focus", () => {
  emailInputTouched = true;
});

document.getElementById("phoneInput").addEventListener("focus", () => {
  phoneInputTouched = true;
});

document.getElementById("ageInput").addEventListener("focus", () => {
  ageInputTouched = true;
});

document.getElementById("passwordInput").addEventListener("focus", () => {
  passwordInputTouched = true;
});

document.getElementById("repasswordInput").addEventListener("focus", () => {
  repasswordInputTouched = true;
});

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;

function inputsValidation() {
  if (nameInputTouched) {
    if (nameValidation()) {
      document
        .getElementById("nameAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("nameAlert")
        .classList.replace("d-none", "d-block");
    }
  }
  if (emailInputTouched) {
    if (emailValidation()) {
      document
        .getElementById("emailAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("emailAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (phoneInputTouched) {
    if (phoneValidation()) {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (ageInputTouched) {
    if (ageValidation()) {
      document
        .getElementById("ageAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("ageAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (passwordInputTouched) {
    if (passwordValidation()) {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-none", "d-block");
    }
  }
  if (repasswordInputTouched) {
    if (repasswordValidation()) {
      document
        .getElementById("repasswordAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("repasswordAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (
    nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
}

function nameValidation() {
  return /^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value);
}

function emailValidation() {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    document.getElementById("emailInput").value
  );
}

function phoneValidation() {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    document.getElementById("phoneInput").value
  );
}

function ageValidation() {
  return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
    document.getElementById("ageInput").value
  );
}

function passwordValidation() {
  return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
    document.getElementById("passwordInput").value
  );
}

function repasswordValidation() {
  return (
    document.getElementById("repasswordInput").value ==
    document.getElementById("passwordInput").value
  );
}
