
//lagde først en map for å kunne sette alt innhold inn på sidene
resources.map(resource => {
  let inneholdet = `
    <h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>
      ${resource.sources.map(ressurs => `<li><a href="${ressurs.url}" onclick="handleButtonClick('${ressurs.title}', '${ressurs.url}')">${ressurs.title}</a></li>`).join('')}
    </ul>`;
    //lagde en map inni mappen for at jeg 
  //skulle kunne gå inn i source for å finne ting også lagde 
  //jeg et nytt navn på ressurs for å kunne gå inn i den

  const siden = document.createElement('div');
  siden.innerHTML = inneholdet;
//satte de nye divene inn i en tom variabel
 
  const sidenhtml = document.getElementById(resource.category.toLowerCase());
  if (sidenhtml) {
    sidenhtml.appendChild(siden);
  }
});

//brukte nettet og litt chatgpt mest på slutten der(nettside shecodes.io og w3schools.com)










