

function myFunction() {

    var date = new Date();

    document.body.innerHTML = "<h3>Date today is</h3> " + "<h1>" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "</h1>";
}