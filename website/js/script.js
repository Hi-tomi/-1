
function myFunc() {
    var password = document.getElementById("myPassword");
    var open = document.getElementById("hide1");
    var close = document.getElementById("hide2");

    if (password.type == "password") {
      password.type = "text";
      open.style.display = "block";
      close.style.display = "none";
    } else {
      password.type = "password";
      open.style.display = "none";
      close.style.display = "block";
    }
}

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');

  for (let elm of elements) {
    observer.observe(elm);
}
