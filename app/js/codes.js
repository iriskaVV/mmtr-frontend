debugger
// переход на servicec-block
let serviceFormLink = document.getElementById('serviceForm');

serviceFormLink.onclick = function link() {
    document.getElementById('servicesBlock').scrollIntoView({
        behavior: 'smooth'
    });
  }