window.addEventListener("load", () => {
  const regEx = /^[\w-\.]+@[\w-]+\.{1,1}[\w-]{2,4}$/gi;
  const form = document.getElementById("form");
  const generarError = () => {
    if (document.getElementById("p-error") == null) {
      const fragment = document.createDocumentFragment();
      const p = document.createElement("p");
      p.id = "p-error";
      p.classList.add("form-register__error");
      p.textContent = "Please, enter a valid email address";

      fragment.appendChild(p);

      form.firstElementChild.appendChild(fragment);
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.firstElementChild.firstElementChild.value;

    regEx.test(email) ? form.submit() : generarError();
  });
});
