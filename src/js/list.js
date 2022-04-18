const campos = document.getElementById('campos');

listUsers = window.api.getUsers();

var cont = 1

listUsers.forEach(element => {
    campos.innerHTML += `<h1 class="text-center pt-5">${cont}</h1>
                        <div class="form-group col-sm-12 col-md-6 pt-3">
                            <label for="document">Número de documento:</label>
                            <input disabled  type="number" class="form-control" name="document" value="${element.document}">
                        </div>
                        <div class="form-group col-sm-12 col-md-6 pt-3">
                            <label for="name">Nombres y apellidos completos:</label>
                            <input disabled type="text" class="form-control"  name="name" value="${element.name}">
                        </div>`;
    cont++;
});
