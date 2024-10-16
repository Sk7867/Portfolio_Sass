let componentMap = [
  {
    componentId: 'headerComp',
    htmlFilePath: '/components/header/header.html',
    cssFilePath: '/components/header/header.css',
    jsFilePath: '/components/header/header.js'
  }
]

function loadComponents(){
  componentMap.forEach((component)=>{
    fetch(component.htmlFilePath)
    .then(response => {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.text()
    })
    .then(data => {
      document.getElementById(component.componentId).innerHTML = data;    //Load HTML

      // Load the header CSS
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.type = 'text/css';
      linkElement.href = component.cssFilePath;  // Path to the .scss file
      document.head.appendChild(linkElement);

      if(component.jsFilePath){
        let scriptElement = document.createElement('script');
        scriptElement.src = component.jsFilePath;
        document.body.appendChild(scriptElement);
      }

    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  })
}

//Call load component function
loadComponents()