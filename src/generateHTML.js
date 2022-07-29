

var employeecards = [];

generateHTML = employees => {
  for (let i = 0; i < employees.length; i++) {
    const role = employees[i].getRole();
    
    if (role === "Manager") {
      const mcard = makemcard(employees[i]);
      employeecards.push(mcard);
    } else if (role === "Engineer") {
      const ecard = makeecard(employees[i]);
      employeecards.push(ecard);
    } else if (role === "Intern") {
      const icard = makeicard(employees[i]);
      employeecards.push(icard);
    };
  };
  const cardsstring = employeecards.join(" ");
  const finalpage = createHTML(cardsstring);
  return finalpage;
};



const createHTML = function (cards) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
  </head>

  <body>
    <div class="text-center bg-danger display-1 d-block h-auto pb-3">
      My Team
    </div>
    <div class="container" style="height: 75vh; width: 100vw">
      <div class="row h-100 justify-content-center">
        ${cards}
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
  </body>
</html>
  `
}





const makemcard = function (m) {
  return `
<div class="card col-2 m-3" style="min-height: 25%; max-height: 40%">
  <div class="card-header">
    <h3 class="row">${m.name}</h3>
    <h4 class="row">Manager</h4>
  </div>
  <div class="card-body">
    <p1 class="row">ID: ${m.id}</p1>
    <p2 class="row">Email: ${m.email}</p2>
    <p3 class="row">Office #: ${m.officenumber}</p3>
  </div>
</div>
  `
}

const makeecard = function (e) {
  return `
<div class="card col-2 m-3" style="min-height: 25%; max-height: 40%">
  <div class="card-header">
    <h3 class="row">${e.name}</h3>
    <h4 class="row">Engineer</h4>
  </div>
  <div class="card-body">
    <p1 class="row">ID: ${e.id}</p1>
    <p2 class="row">Email: ${e.email}</p2>
    <p3 class="row">Github: ${e.github}</p3>
  </div>
</div>
  `
}

const makeicard = function (i) {
  return `
<div class="card col-2 m-3" style="min-height: 25%; max-height: 40%">
  <div class="card-header">
    <h3 class="row">${i.name}</h3>
    <h4 class="row">Intern</h4>
  </div>
  <div class="card-body">
    <p1 class="row">ID: ${i.id}</p1>
    <p2 class="row">Email: ${i.email}</p2>
    <p3 class="row">School: ${i.school}</p3>
  </div>
</div>
  `
}

//console.log(employeecards);

const cardsasstring = employeecards.join(" ")




































module.exports = generateHTML;