const apiKey = "cbb9d72063fa430899bdd2a01d8aea56";

// Fetch Tech News
fetch(`https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=5&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        const techDiv = document.getElementById("tech-news");
        techDiv.innerHTML = "";

        data.articles.forEach(article => {
            techDiv.innerHTML += `
                <article>
                    <h3>${article.title}</h3>
                    <p>${article.description || ""}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </article>
            `;
        });
    });

// Fetch World News
fetch(`https://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        const worldDiv = document.getElementById("world-news");
        worldDiv.innerHTML = "";

        data.articles.forEach(article => {
            worldDiv.innerHTML += `
                <article>
                    <h3>${article.title}</h3>
                    <p>${article.description || ""}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </article>
            `;
        });
    });
