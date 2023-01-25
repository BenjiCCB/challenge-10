function renderCard(employee){
    var card =
    `<div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="emp-role my-0 font-weight-normal">${employee.type}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">${employee.name}</h1>
          <ul class="infoList list-unstyled mt-3 mb-4">           
              <li><span class="fieldLabel">ID: </span><span>${employee.id}</span></li>
              <li><span class="fieldLabel">email: </span><span>${employee.email}</span></li>
              <li><span class="fieldLabel">office: </span><span>${employee.office}</span></li>
          </ul>
        </div>
      </div>`

    return card;

}

function renderPage(employeesArray){
    var header = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">
        <link rel="stylesheet" href="./assets/css/style.css" />
        <title>Team Members Roster</title>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
    
      <body>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4">Employees List</h1>
          <p class="lead">Here is your dynamically generated HTML page listing out your employees</p>
        </div>
    
        <div class="container">
          <div class="cards-container card-deck mb-3 text-center">`

    var cardDisplay = renderCard(employeesArray[0]);

    var footer = `</div>
            </div>
          </body>
        </html>`
    
    return header + cardDisplay + footer;
}


module.exports = pageDisplay;