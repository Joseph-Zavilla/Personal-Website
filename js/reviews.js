fetch("Data/reviews.json")
  .then((response) => response.json())
  .then((reviews) => {
    const grid = document.getElementById("reviewGrid");

    reviews.forEach((review) => {
      grid.innerHTML += `
                <a href="${review.url}" class="card">

                    <img src="${review.poster}" alt="${review.title} poster">

                    <h2>${review.title}</h2>

                    <p>${review.year}</p>

                </a>
            `;
    });
  });
