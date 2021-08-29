let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");
let btn = document.querySelector("#btn");

let msg = document.querySelector(".msg");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value == "" || author.value == "" || isbn.value == "") {
    console.log("Error");
    msg.innerHTML = `<div class="alert alert-danger" role="alert">
    Please Enter All fields
  </div>`;
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  } else {
    const row = document.createElement("tr");
    localStorage.setItem("title", title.value);
    const tit = localStorage.getItem("title");
    console.log(tit);
    row.innerHTML = `
    <tr class>
            <td>${title.value}</td>
            <td>${author.value}</td>
            <td>${isbn.value}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>
      </tr>
            `;
    console.log(row);
    let body = document.querySelector("#book-list");
    body.appendChild(row);
    title.value = "";
    author.value = "";
    isbn.value = "";

    document.querySelector("#book-list").addEventListener("click", (e) => {
      deleteBook(e.target);
    });

    msg.innerHTML = `<div class="alert alert-success " role="alert">
   Book Added Successfully
  </div>`;
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
});

function deleteBook(el) {
  if (el.classList.contains("delete")) {
    el.parentElement.parentElement.remove();

    msg.innerHTML = `<div class="alert alert-success" role="alert">
    Book Deleted Successfully
  </div>`;
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}
