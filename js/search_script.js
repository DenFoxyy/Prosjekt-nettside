const searchInput = document.querySelector("#game-search");
const suggestions = document.querySelector("#search-suggestions");
const posterPreview = document.querySelector("#poster-preview");
const productList = document.querySelector("#product-list");
const noResults = document.querySelector("#no-results");
const catalogLink = document.querySelector(".catalog-link");

function showPoster(product, x, y) {
    const image = posterPreview.querySelector("img");
    image.src = product.poster;
    image.alt = `${product.name} poster`;
    posterPreview.style.left = `${Math.min(x + 12, window.innerWidth - 132)}px`;
    posterPreview.style.top = `${Math.min(y + 12, window.innerHeight - 182)}px`;
    posterPreview.classList.add("visible");
}

function hidePoster() {
    posterPreview.classList.remove("visible");
}

function renderCatalog(searchText) {
    if (!productList) {
        return;
    }

    const matches = produkter.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    productList.replaceChildren();

    matches.forEach((product) => {
        const card = document.createElement("a");
        card.className = "Produkt1";
        card.href = product.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const poster = document.createElement("img");
        poster.src = product.poster;
        poster.alt = `${product.name} poster`;

        card.append(poster, document.createTextNode(product.name));
        productList.append(card);
    });

    noResults.hidden = matches.length > 0;
}

function renderSuggestions(searchText) {
    suggestions.replaceChildren();
    hidePoster();

    if (!searchText) {
        suggestions.classList.remove("visible");
        return;
    }

    const matches = produkter
        .filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
        .slice(0, 5);

    matches.forEach((product) => {
        const suggestion = document.createElement("button");
        suggestion.className = "suggestion";
        suggestion.type = "button";
        suggestion.textContent = product.name;
        suggestion.setAttribute("role", "option");

        suggestion.addEventListener("pointerenter", (event) => {
            showPoster(product, event.clientX, event.clientY);
        });
        suggestion.addEventListener("pointermove", (event) => {
            showPoster(product, event.clientX, event.clientY);
        });
        suggestion.addEventListener("pointerleave", hidePoster);
        suggestion.addEventListener("click", () => {
            searchInput.value = product.name;
            renderCatalog(product.name);
            suggestions.classList.remove("visible");

            if (!productList) {
                window.location.href = `index.html?search=${encodeURIComponent(product.name)}`;
            }
        });

        suggestions.append(suggestion);
    });

    suggestions.classList.toggle("visible", matches.length > 0);
}

const initialSearch = new URLSearchParams(window.location.search).get("search") || "";
searchInput.value = initialSearch;
renderCatalog(initialSearch);
renderSuggestions(initialSearch);

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.trim();
    renderCatalog(searchText);
    renderSuggestions(searchText);

    if (catalogLink) {
        catalogLink.href = searchText
            ? `index.html?search=${encodeURIComponent(searchText)}`
            : "index.html";
    }
});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !productList && searchInput.value.trim()) {
        window.location.href = `index.html?search=${encodeURIComponent(searchInput.value.trim())}`;
    }
});

searchInput.addEventListener("blur", () => {
    window.setTimeout(() => suggestions.classList.remove("visible"), 150);
});

searchInput.addEventListener("focus", () => {
    renderSuggestions(searchInput.value.trim());
});