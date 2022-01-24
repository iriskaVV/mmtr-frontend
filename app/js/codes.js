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

class Services{
  constructor (titleService, descriptionService){
    this.titleService=titleService;
    this.descriptionService=descriptionService;
  }
}
Services.prototype.create = function (){
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
  titleService.textContent=this.titleService;

  //текст
  const descriptionService = document.createElement("textarea");
  descriptionService.className = "services-block__content-info-text";
  serviceBlock.append(descriptionService);
  descriptionService.placeholder=this.descriptionService;
  descriptionService.disabled = true;

  //кнопка
  const btnService = document.createElement("button");
  btnService.className = "services-block__content-info-btn";
  serviceBlock.append(btnService);
  btnService.textContent='EDIT';
  btnService.addEventListener('click', editSave );


  servicesBlockContent.appendChild(serviceBlock);
}

blockService.forEach((item) => {
  const services1 = new Services(item.titleService, item.descriptionService);
  services1.create();
});

//Редактирование текста
function editSave (){
  if (this.textContent == 'EDIT') {
      this.textContent = 'SAVE';
      descriptionService.contentEditable = true;
      descriptionService.focus();
  }
  else {
      this.textContent = 'EDIT';
      descriptionService.contentEditable = false;
  }
}







