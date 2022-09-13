const form = document.getElementById("formToggle");
console.log(form);

export const toggleForm = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
};

export const clearForm = (name, phone, emailid) => {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};
 