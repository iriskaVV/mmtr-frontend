debugger
// переход на services-block
let serviceFormLink = document.getElementById('serviceForm');

serviceFormLink.onclick = function link() {
    document.getElementById('servicesBlock').scrollIntoView({
        behavior: 'smooth'
    });
}

//блок services

const servicesBlockContent = document.getElementById("servicesBlockContent");

const blockService = [{
  titleService: "Research",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},
{
  titleService: "Portfolio",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},

{
  titleService: "Support",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},

{
  titleService: "Documentation",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},

{
  titleService: "Development",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},

{
  titleService: "Design",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
}
];


// blockService.forEach((item) => {
//     createElement(item.titleService, item.descriptionService);
// });

// function createElement(title, description){
//     //сам блок
//     const serviceBlock = document.createElement('div');
//     serviceBlock.className = "services-block__content-info";
    
//     //иконка
//     const iconService = document.createElement("img");
//     iconService.src = "img/smartphone_copy.png";
//     iconService.className = "services-block__content-info-icon";
//     serviceBlock.append(iconService);

//     //заголовок
//     const titleService = document.createElement("h1");
//     titleService.className = "services-block__content-info-heading";
//     serviceBlock.append(titleService);

//     //текст
//     const descriptionService = document.createElement("p");
//     descriptionService.className = "services-block__content-info-text";
//     serviceBlock.append(descriptionService);

//     //кнопка
//     const btnService = document.createElement("button");
//     btnService.className = "services-block__content-info-btn";
//     serviceBlock.append(btnService);
//     btnService.textContent='READ MORE';

//     servicesBlockContent.appendChild(serviceBlock);
    
//     titleService.innerHTML = title;
//     descriptionService.innerHTML = description;
// }

class services{
  constructor (titleService, descriptionService){
    this.titleService=titleService;
    this.descriptionService=descriptionService;
  }
}
services.prototype.create = function (){
  const serviceBlock = document.createElement('div');
  serviceBlock.className = "services-block__content-info";
    
  //иконка
  const iconService = document.createElement("img");
  iconService.src = "img/smartphone_copy.png";
  iconService.className = "services-block__content-info-icon";
  serviceBlock.append(iconService);

  //заголовок
  const titleService = document.createElement("h1");
  titleService.className = "services-block__content-info-heading";
  serviceBlock.append(titleService);

  //текст
  const descriptionService = document.createElement("p");
  descriptionService.className = "services-block__content-info-text";
  serviceBlock.append(descriptionService);

  //кнопка
  const btnService = document.createElement("button");
  btnService.className = "services-block__content-info-btn";
  serviceBlock.append(btnService);
  btnService.textContent='READ MORE';

  servicesBlockContent.appendChild(serviceBlock);
    
  // titleService.innerHTML = title;
  // descriptionService.innerHTML = description;
}

const services1 = new services ("Research",  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!");
services1.create();
const services2 = new services ("Research",  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!");
services2.create();
const services3 = new services ("Research",  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!");
services3.create();
const services4 = new services ("Research",  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!");
services4.create();
const services5 = new services ("Research",  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!");
services5.create();
const services6 = new services ("Research",  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!");
services6.create();











