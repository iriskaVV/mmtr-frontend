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

const ls = localStorage.getItem('user_editing');
const userEditing = ls || blockService;
!ls && localStorage.setItem('user_editing', JSON.stringify(userEditing))


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
  const titleServiceText = document.createElement("h1");
  titleServiceText.className = "services-block__content-info-heading";
  serviceBlock.append(titleServiceText);
  titleServiceText.textContent=this.titleService;

  //текст
  const descriptionServiceText = document.createElement("textarea");
  descriptionServiceText.className = "services-block__content-info-text";
  serviceBlock.append(descriptionServiceText);
  descriptionServiceText.textContent=this.descriptionService;

  //кнопка
  const btnService = document.createElement("button");
  btnService.className = "services-block__content-info-btn";
  serviceBlock.append(btnService);
  btnService.textContent='EDIT';

  servicesBlockContent.appendChild(serviceBlock);

  btnService.onclick = function(){
    const desiredBlock = blockService.find(block => block.titleService === titleServiceText.textContent);
    // console.log(desiredBlock)
    // debugger
    if(btnService.textContent == 'EDIT'){
      btnService.textContent = 'SAVE';
      descriptionServiceText.contentEditable = true;
      descriptionServiceText.focus();
    }
    else{
      btnService.textContent == 'SAVE';
      btnService.textContent = 'EDIT';
      descriptionServiceText.contentEditable = false;


      const userEditing1 = ls || desiredBlock;
      !ls && localStorage.setItem('user_editing', JSON.stringify(userEditing1))
      const data = JSON.parse(localStorage.getItem('user_editing'))

    }
  }
}

blockService.forEach((item) => {
  const services1 = new Services(item.titleService, item.descriptionService);
  services1.create();
});