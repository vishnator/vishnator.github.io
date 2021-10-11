document.addEventListener('DOMContentLoaded', () => {
  const urlList = document.getElementById('url-list')
  let urlsExist = false;

  const createURL = (categories, pages, formatType, monthYear) => {
    let month = monthYear.value.slice(5);
    if (month[0] === '0') {
      month = month[1];
    } 
    const year = monthYear.value.slice(0, -3)
    let link = ''
    categories.forEach( el => {
    if (el === '3A618073011'){
      return;
    } else if (el === 'nonfiction'){
        link = `https://www.amazon.com/s?i=digital-text&rh=n%3A157325011%2Cp_20%3AEnglish&s=salesrank&page=2&Adv-Srch-Books-Submit.x=30&Adv-Srch-Books-Submit.y=13&field-datemod=${month}&field-dateop=During&field-dateyear=${year}&unfiltered=1`
    } else {
      link = `https://www.amazon.com/s?i=stripbooks&rh=n%${el}%2Cp_n_feature_browse-bin%${formatType}%2Cp_20%3AEnglish&s=salesrank&page=1&Adv-Srch-Books-Submit.&Adv-Srch-Books-Submit.&field-datemod=${month}&field-dateop=During&field-dateyear=${year}&unfiltered=1`
    }
      appendLinks(link, pages)
    })
    
  }
  
  
  const appendLinks = (link, pages) => {
    const pageIndex = link.indexOf('page=') + 5;
    let linkArr = link.split('');
    for (let i = 1; i <= pages; i++) {
      linkArr.splice(pageIndex, 1, i)
      urlList.append(linkArr.join(''))
      const br = document.createElement('BR');
      urlList.appendChild(br)
    };
  }

  const submitButton = document.getElementById("create-urls");

  submitButton.addEventListener('click', (err) => {
    err.preventDefault();
    const totalPages = document.getElementById("number-of-pages").value;
    const monthYear = document.getElementById("month");
    const radios = document.getElementsByTagName("input");
    let formatType = '3A618073011'
    let values = [];
    for (let i = 0; i < radios.length; i++){
      if (radios[i].type === 'radio' && radios[i].checked){
        if (radios[i].value === '3A1240885011'){
          formatType = radios[i].value;
        } else {
          values.push(radios[i].value)
        }
        console.log(values)
      } 
    }
    if (!urlsExist){
    urlsExist = true;
    createURL(values, totalPages, formatType, monthYear)
    } else {
      while (urlList.hasChildNodes()){
        urlList.removeChild(urlList.firstChild)
      }
      createURL(values, totalPages, formatType, monthYear)
    }
  })
});

/*

3A1 = Arts & Photography
3A2 = Biographies & Memoirs
3A3 = Business & Investing
3A4 = Children's Books
3A12290 = Christian Books & Bibles
3A4366 = Comics & Graphic Novels
3A6 = Cookbooks, Food & Wine
3A48 = Crafts, Hobbies & Home
3A5 = Computers & Technology
3A21 = Education & Reference
3A301889 = Gay & Lesbian
3A10 = Health, Fitness & Dieting
3A9 = History
3A86 = Humor & Entertainment
3A10777 = Law
3A17 = Literature & Fiction
3A18 = Mystery, Thriller & Suspense
3A20 = Parenting & Relationships
3A3377866011 = Politics & Social Sciences
3A173507 = Professional & Technical Books
3A22 = Religion & Spirituality
3A23 = Romance
3A75 = Science & Math
3A25 = Science Fiction & Fantasy
3A26 = Sports & Outdoors
3A28 = Teen & Young Adult
3A27 = Travel

bin:
audible = 3A1240885011 
kindle = 3A618073011

*/