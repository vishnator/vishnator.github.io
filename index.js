document.addEventListener('DOMContentLoaded', () => {
  const urlList = document.getElementById('url-list')
  let urlsExist = false;

  const createURL = (link, pages) => {
    const pageIndex = link.indexOf('page=') + 5;
    if (pageIndex === 4){
      alert("please enter second page of amazon url")
    } else {
      let linkArr = link.split('').slice(0, -12);
      for (let i = 1; i <= pages; i++) {
        linkArr.splice(pageIndex, 1, i)
        urlList.append(linkArr.join(''))
      };
    }
  }

  const submitButton = document.getElementById("create-urls");

  submitButton.addEventListener('click', (err) => {
    const amazonURL = document.getElementById("url-input").value;
    const totalPages = document.getElementById("number-of-pages").value;
    err.preventDefault();
    if (!urlsExist){
    urlsExist = true;
    createURL(amazonURL, totalPages)
    } else {
      while (urlList.hasChildNodes()){
        urlList.removeChild(urlList.firstChild)
      }
      createURL(amazonURL, totalPages)
    }
  })
});
