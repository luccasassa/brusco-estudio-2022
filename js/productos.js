const dataTypes = [
  {
    project: 'proyecto packaging 1',
    brandProject: 'project brand packaging',
    type: 'packaging',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto packaging 2',
    brandProject: 'project brand packaging',
    type: 'packaging',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto packaging 3',
    brandProject: 'project brand packaging',
    type: 'packaging',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto packaging 4',
    brandProject: 'project brand packaging',
    type: 'packaging',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto editorial 1',
    brandProject: 'project brand editorial',
    type: 'editorial',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto editorial 2',
    brandProject: 'project brand editorial',
    type: 'editorial',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto editorial 3',
    brandProject: 'project brand editorial',
    type: 'editorial',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto editorial 4',
    brandProject: 'project brand editorial',
    type: 'editorial',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto branding 1',
    brandProject: 'project brand branding',
    type: 'branding',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto branding 2',
    brandProject: 'project brand branding',
    type: 'branding',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto branding 3',
    brandProject: 'project brand branding',
    type: 'branding',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto branding 4',
    brandProject: 'project brand branding',
    type: 'branding',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto marketing 1',
    brandProject: 'project brand marketing',
    type: 'marketing',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto marketing 2',
    brandProject: 'project brand marketing',
    type: 'marketing',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto marketing 3',
    brandProject: 'project brand marketing',
    type: 'marketing',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
  {
    project: 'proyecto marketing 4',
    brandProject: 'project brand marketing',
    type: 'marketing',
    img: '../assets/img/proyectos/Hugo_Carteles.jpg',
  },
];

const projects = document.querySelector('.proyectos__projects');

function showProjects(value) {
  const project = dataTypes.filter((p) => p.type === value);
  projects.innerHTML = '';
  project.map(
    (p) =>
      (projects.innerHTML += `
      <div class="proyectos__projects--projects">
      <a
        href="../pages/projects/branding/branding-uno.html"
        class="proyectos__projects--project"
      >
        <img src="${p.img}" class="proyectos__projects--img" />
        <div class="proyect__info">
          <div>
            <p class="proyect__name">${p.project}</p>
            <p class="proyect__brand">${p.brandProject}</p>
          </div>
        </div>
      </a>
    </div>
    `)
  );
}
