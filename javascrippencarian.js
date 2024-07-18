function searchNews() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const newsContainer = document.getElementById('news-container');
    const newsItems = newsContainer.getElementsByClassName('kotak');
    const searchResultsContainer = document.getElementById('search-results');
  
    let searchResultsHTML = '';
  
    for (let i = 0; i < newsItems.length; i++) {
      const title = newsItems[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
      const description = newsItems[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      if (title.includes(input) || description.includes(input)) {
        newsItems[i].style.display = '';
        searchResultsHTML += `
          <div class="search-result">
            <h2>${title}</h2>
            <p>${description}</p>
            <a href="${newsItems[i].querySelector('a').getAttribute('href')}" class="baca-selengkapnya" target="_blank">Baca Selengkapnya</a>
          </div>
        `;
      } else {
        newsItems[i].style.display = 'none';
      }
    }
  
    if (searchResultsHTML === '') {
      searchResultsContainer.innerHTML = '<p>Tidak ada hasil yang ditemukan.</p>';
    } else {
      searchResultsContainer.innerHTML = searchResultsHTML;
    }
  }
  