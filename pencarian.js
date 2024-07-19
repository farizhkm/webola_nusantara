<script>
        function searchNews() {
            const input = document.getElementById('search-input').value.toLowerCase();
            const filterCategory = document.getElementById('filter-category').value;
            const newsContainer = document.getElementById('news-container');
            const newsItems = newsContainer.getElementsByClassName('kotak');
            const searchResultsContainer = document.getElementById('search-results');

            let searchResultsHTML = '';

            for (let i = 0; i < newsItems.length; i++) {
                const category = newsItems[i].closest('.kotak-group').dataset.category;
                const title = newsItems[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
                const description = newsItems[i].getElementsByTagName('p')[0].innerText.toLowerCase();

                if ((filterCategory === 'all' || category === filterCategory) && (title.includes(input) || description.includes(input))) {
                    newsItems[i].style.display = '';
                    const highlightedTitle = title.replace(new RegExp(input, 'gi'), match => `<mark>${match}</mark>`);
                    const highlightedDescription = description.replace(new RegExp(input, 'gi'), match => `<mark>${match}</mark>`);

                    searchResultsHTML += `
                        <div class="kotak">
                            <img src="${newsItems[i].getElementsByTagName('img')[0].src}" alt="${newsItems[i].getElementsByTagName('img')[0].alt}" />
                            <h2>${highlightedTitle}</h2>
                            <p>${highlightedDescription}</p>
                            <a href="${newsItems[i].getElementsByTagName('a')[0].href}" class="baca-selengkapnya">Baca Selengkapnya</a>
                        </div>
                    `;
                } else {
                    newsItems[i].style.display = 'none';
                }
            }

            if (searchResultsHTML === '') {
                searchResultsContainer.innerHTML = '<p class="no-results">Tidak ada hasil yang ditemukan.</p>';
            } else {
                searchResultsContainer.innerHTML = searchResultsHTML;
            }
        }
    </script>