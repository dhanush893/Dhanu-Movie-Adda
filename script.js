// ==========================================
// CENTRAL DATA REPOSITORY (Mock Database)
// ==========================================
const movieDatabase = [
    {
        id: "m1",
        title: "Interstellar Voyage",
        year: 2024,
        genres: ["Sci-Fi", "Hollywood"],
        runtime: "169 min",
        rating: 8.7,
        description: "A team of explorers travel beyond this galaxy to discover whether mankind has a future among the stars in this breathtaking cinematic epic.",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        type: "movie",
        isTrending: true,
        isPopular: true,
        trailerUrl: "https://www.youtube.com/results?search_query=interstellar+trailer"
    },
    {
        id: "m2",
        title: "Shadow of Death",
        year: 2025,
        genres: ["Horror", "Thriller"],
        runtime: "112 min",
        rating: 7.4,
        description: "An isolated investigator uncovers an ancient demonic entity mimicking human frequencies inside a remote mountain outpost.",
        cast: "Lupita Nyong'o, Bill Skarsgård",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80",
        type: "movie",
        isTrending: true,
        isPopular: false,
        trailerUrl: "https://www.youtube.com/results?search_query=horror+movie+trailer"
    },
    {
        id: "m3",
        title: "Cyber City: Neon Pulse",
        year: 2026,
        genres: ["Sci-Fi", "Action"],
        runtime: "135 min",
        rating: 8.9,
        description: "In a dystopian metropolis driven by artificial synapses, a cybernetic rogue agent races against timelines to save sub-sector grids.",
        cast: "Keanu Reeves, Florence Pugh",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
        type: "movie",
        isTrending: true,
        isPopular: true,
        trailerUrl: "https://www.youtube.com/results?search_query=cyberpunk+movie+trailer"
    },
    {
        id: "m4",
        title: "The Comedy Club",
        year: 2024,
        genres: ["Comedy"],
        runtime: "98 min",
        rating: 6.8,
        description: "Four failing stand-up comedians accidentally intercept a high-stakes cryptocurrency heist drop behind their primary venue.",
        cast: "Kevin Hart, Ryan Reynolds, Awkwafina",
        image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=600&auto=format&fit=crop&q=80",
        type: "movie",
        isTrending: false,
        isPopular: true,
        trailerUrl: "https://www.youtube.com/results?search_query=comedy+movie+trailer"
    },
    {
        id: "t1",
        title: "Chronicles of Whispers",
        year: 2025,
        genres: ["Thriller", "Romance"],
        runtime: "1 Season",
        rating: 8.2,
        description: "Two rival international news analysts find themselves bound together by dark romantic links while resolving global corporate blackmail schemes.",
        cast: "Timothée Chalamet, Zendaya",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        type: "tv",
        isTrending: true,
        isPopular: true,
        trailerUrl: "https://www.youtube.com/results?search_query=chronicles+of+whispers+trailer"
    },
    {
        id: "m5",
        title: "Rise of the Monarch",
        year: 2026,
        genres: ["South Indian", "Action"],
        runtime: "162 min",
        rating: 9.1,
        description: "A dynamic local leader rises against tyrannical industrial conglomerates to claim his family lineage and establish localized structural balance.",
        cast: "Allu Arjun, Jr. NTR, Ram Charan",
        image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=600&auto=format&fit=crop&q=80",
        type: "movie",
        isTrending: true,
        isPopular: true,
        trailerUrl: "https://www.youtube.com/results?search_query=south+indian+action+trailer"
    },
    {
        id: "t2",
        title: "Cosmic Odyssey",
        year: 2024,
        genres: ["Sci-Fi", "Animation"],
        runtime: "3 Seasons",
        rating: 8.5,
        description: "An animated futuristic adventure charting the mapping process of remote multi-dimensional planetary arrays by quirky biomechanical bots.",
        cast: "Voice: Tom Hanks, Chris Pratt",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
        type: "tv",
        isTrending: false,
        isPopular: true,
        trailerUrl: "https://www.youtube.com/results?search_query=cosmic+odyssey+animation+trailer"
    },
    {
        id: "m6",
        title: "Bengaluru Skies",
        year: 2025,
        genres: ["South Indian", "Romance"],
        runtime: "140 min",
        rating: 7.9,
        description: "A traditional software developer transitions into an organic farming advocate after experiencing highly transformative urban relationships.",
        cast: "Yash, Rashmika Mandanna",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=80",
        type: "movie",
        isTrending: false,
        isPopular: false,
        trailerUrl: "https://www.youtube.com/results?search_query=bengaluru+skies+trailer"
    }
];

// Mock database tracker for "Continue Watching" module containing runtime tracking states
const continueWatchingData = [
    { movieId: "m1", progress: 65 },
    { movieId: "t1", progress: 28 },
    { movieId: "m3", progress: 85 }
];

// ==========================================
// CORE DOM LIFECYCLE MANAGEMENT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initializeApplication();
});

function initializeApplication() {
    setupThemeEngine();
    renderAllViews();
    registerAppEvents();
    
    // Simulate natural data network fetch cycle via structural spinner hide
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }
    }, 1000);
}

// ==========================================
// VIEW RENDERING INTERFACE UTILITIES
// ==========================================
function renderAllViews() {
    // Populate Rows on Home Panel
    renderMovieRow(movieDatabase.filter(m => m.isTrending), "trending-row");
    renderMovieRow(movieDatabase.filter(m => m.isPopular), "popular-row");
    
    // Sort array by year descending to simulate recently added
    const recent = [...movieDatabase].sort((a, b) => b.year - a.year);
    renderMovieRow(recent, "recently-added-row");

    // Populate Continue Watching Row
    renderContinueWatching();

    // Populate Standalone Full-grid View Sections
    renderMovieGrid(movieDatabase.filter(m => m.type === "movie"), "movies-standalone-grid");
    renderMovieGrid(movieDatabase.filter(m => m.type === "tv"), "tv-standalone-grid");
    renderMovieGrid(movieDatabase.filter(m => m.isTrending), "trending-standalone-grid");
    
    // Sync Watchlist local database interface view state
    updateWatchlistView();
}

function createMovieCard(movie, customFill = null) {
    const isSaved = getWatchlist().includes(movie.id);
    const saveIcon = isSaved ? "fa-solid fa-heart" : "fa-regular fa-heart";
    
    const card = document.createElement("div");
    card.className = "movie-card";
    card.setAttribute("data-id", movie.id);
    
    let progressElement = "";
    if (customFill !== null) {
        progressElement = `
            <div class="continue-progress-bar">
                <div class="continue-progress-fill" style="width: ${customFill}%"></div>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <div class="card-badge">${movie.year}</div>
            <div class="card-overlay-actions">
                <button class="circle-action-btn btn-play-action" aria-label="Play"><i class="fas fa-play"></i></button>
                <button class="circle-action-btn btn-list-toggle" aria-label="Toggle Watchlist"><i class="${saveIcon}"></i></button>
            </div>
            ${progressElement}
        </div>
        <div class="card-details">
            <h3 class="card-title">${movie.title}</h3>
            <div class="card-meta">
                <span>${movie.runtime}</span>
                <span class="card-rating"><i class="fas fa-star text-gold"></i> ${movie.rating}</span>
            </div>
        </div>
    `;

    // Hook internal interaction bindings safely
    card.addEventListener("click", (e) => {
        if (e.target.closest(".btn-list-toggle")) {
            e.stopPropagation();
            toggleWatchlistState(movie.id);
            return;
        }
        openMovieDetailsModal(movie);
    });

    return card;
}

function renderMovieRow(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    items.forEach(item => {
        container.appendChild(createMovieCard(item));
    });
}

function renderMovieGrid(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    if (items.length === 0) {
        container.innerHTML = `<div class="empty-state"><p>No items match current filter standards.</p></div>`;
        return;
    }
    items.forEach(item => {
        container.appendChild(createMovieCard(item));
    });
}

function renderContinueWatching() {
    const container = document.getElementById("continue-watching-row");
    if (!container) return;
    container.innerHTML = "";
    
    continueWatchingData.forEach(item => {
        const targetMovie = movieDatabase.find(m => m.id === item.movieId);
        if (targetMovie) {
            container.appendChild(createMovieCard(targetMovie, item.progress));
        }
    });
}

// ==========================================
// SCREEN SYSTEM TABS ROUTING SYSTEM
// ==========================================
function switchAppActiveView(targetViewId) {
    // Hide all view panel layers safely
    const panels = document.querySelectorAll(".view-panel, #search-view");
    panels.forEach(panel => panel.classList.add("hidden"));

    // Expose correct layout element block
    const targetPanel = document.getElementById(targetViewId);
    if (targetPanel) {
        targetPanel.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Sync state visual highlights inside header links
    const links = document.querySelectorAll(".nav-link, .foot-nav-link");
    links.forEach(link => {
        if (link.getAttribute("data-target") === targetViewId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Collapse adaptive mobile overlay menus post selection step safely
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) navMenu.classList.remove("mobile-open");
}

// ==========================================
// REALTIME LOOKUP ENGINE (Search & Filters)
// ==========================================
function executionLiveSearch(queryString) {
    const cleanQuery = queryString.trim().toLowerCase();
    const searchView = document.getElementById("search-view");
    const searchQueryText = document.getElementById("search-query-text");
    const gridContainer = document.getElementById("search-results-grid");
    
    if (cleanQuery === "") {
        // Fallback to active home panel layer state state safely
        searchView.classList.add("hidden");
        const activeNav = document.querySelector(".nav-link.active");
        const fallbackTarget = activeNav ? activeNav.getAttribute("data-target") : "home-view";
        document.getElementById(fallbackTarget).classList.remove("hidden");
        return;
    }

    // Isolate current targets across visible structural tags
    const activeViewPanel = document.querySelector(".view-panel:not(.hidden)");
    if (activeViewPanel && activeViewPanel.id !== "search-view") {
        activeViewPanel.classList.add("hidden");
    }
    searchView.classList.remove("hidden");
    searchQueryText.textContent = `"${queryString}"`;

    const filteredItems = movieDatabase.filter(item => 
        item.title.toLowerCase().includes(cleanQuery) ||
        item.description.toLowerCase().includes(cleanQuery) ||
        item.genres.some(g => g.toLowerCase().includes(cleanQuery)) ||
        item.cast.toLowerCase().includes(cleanQuery)
    );

    renderMovieGrid(filteredItems, "search-results-grid");
}

function processGenreFilterChips(genreName, selectedChipButton) {
    const gridContainer = document.getElementById("genre-filtered-grid");
    const chips = document.querySelectorAll(".chip");
    
    chips.forEach(c => c.classList.remove("active"));
    selectedChipButton.classList.add("active");

    if (genreName === "all") {
        gridContainer.classList.add("hidden");
        return;
    }

    gridContainer.classList.remove("hidden");
    const filtered = movieDatabase.filter(m => m.genres.includes(genreName));
    renderMovieGrid(filtered, "genre-filtered-grid");
}

// ==========================================
// PERSISTENT DATA DRIVERS (LocalStorage)
// ==========================================
function getWatchlist() {
    return JSON.parse(localStorage.getItem("dhanu_watchlist")) || [];
}

function toggleWatchlistState(movieId) {
    let currentList = getWatchlist();
    if (currentList.includes(movieId)) {
        currentList = currentList.filter(id => id !== movieId);
    } else {
        currentList.push(movieId);
    }
    localStorage.setItem("dhanu_watchlist", JSON.stringify(currentList));
    
    // Rerender active component states seamlessly
    renderAllViews();
}

function updateWatchlistView() {
    const watchlistIds = getWatchlist();
    const items = movieDatabase.filter(m => watchlistIds.includes(m.id));
    const emptyState = document.getElementById("mylist-empty-state");
    
    renderMovieGrid(items, "mylist-grid");
    
    if (items.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }
}

// ==========================================
// CONTEXT DETAILS WINDOW (Modal Controller)
// ==========================================
function openMovieDetailsModal(movie) {
    const modal = document.getElementById("movie-modal");
    
    document.getElementById("modal-poster").src = movie.image;
    document.getElementById("modal-poster").alt = movie.title;
    document.getElementById("modal-title").textContent = movie.title;
    document.getElementById("modal-year").textContent = movie.year;
    document.getElementById("modal-runtime").textContent = movie.runtime;
    document.getElementById("modal-description").textContent = movie.description;
    document.getElementById("modal-cast").textContent = movie.cast;
    
    const ratingContainer = document.getElementById("modal-rating");
    ratingContainer.innerHTML = `<i class="fas fa-star text-gold"></i> ${movie.rating}`;
    
    const genreWrapper = document.getElementById("modal-genres");
    genreWrapper.innerHTML = "";
    movie.genres.forEach(g => {
        const pill = document.createElement("span");
        pill.textContent = g;
        genreWrapper.appendChild(pill);
    });

    const trailerBtn = document.getElementById("modal-trailer-btn");
    trailerBtn.href = movie.trailerUrl;

    const listBtn = document.getElementById("modal-watchlist-btn");
    const isSaved = getWatchlist().includes(movie.id);
    listBtn.innerHTML = isSaved ? `<i class="fas fa-check"></i> In Watchlist` : `<i class="fas fa-plus"></i> Add to List`;
    
    // Rebind clean specific function on the unique modal operational button instance
    listBtn.onclick = () => {
        toggleWatchlistState(movie.id);
        openMovieDetailsModal(movie); // Refresh state visually inside modal window
    };

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Block page scroll actions downstream
}

function closeMovieDetailsModal() {
    const modal = document.getElementById("movie-modal");
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

// ==========================================
// APP INTERFACE COLOR CONFIGURATIONS
// ==========================================
function setupThemeEngine() {
    const storedTheme = localStorage.getItem("dhanu_theme") || "dark";
    const themeBtnIcon = document.querySelector("#theme-toggle i");
    
    if (storedTheme === "light") {
        document.body.classList.add("light-theme");
        themeBtnIcon.className = "fas fa-sun";
    } else {
        document.body.classList.remove("light-theme");
        themeBtnIcon.className = "fas fa-moon";
    }
}

function toggleThemeState() {
    const themeBtnIcon = document.querySelector("#theme-toggle i");
    document.body.classList.toggle("light-theme");
    
    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("dhanu_theme", "light");
        themeBtnIcon.className = "fas fa-sun";
    } else {
        localStorage.setItem("dhanu_theme", "dark");
        themeBtnIcon.className = "fas fa-moon";
    }
}

// ==========================================
// APP BOUND EVENT REGISTRATION ROUTERS
// ==========================================
function registerAppEvents() {
    // Nav view link interceptors
    document.querySelectorAll(".nav-link, .foot-nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("data-target");
            
            // Clear search string data buffers synchronously upon navigating manually
            const searchInput = document.getElementById("search-input");
            if (searchInput) searchInput.value = "";
            
            switchAppActiveView(target);
        });
    });

    // Brand Logo Reset Action
    document.getElementById("brand-logo").addEventListener("click", (e) => {
        e.preventDefault();
        switchAppActiveView("home-view");
    });

    // Theme Switch Module Trigger
    document.getElementById("theme-toggle").addEventListener("click", toggleThemeState);

    // Responsive Mobile Hamburger Interface Toggles
    document.getElementById("hamburger-menu").addEventListener("click", () => {
        document.getElementById("nav-menu").classList.toggle("mobile-open");
    });

    // Keydown Input Debounce / Intercept bindings on real-time search field
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", (e) => {
        executionLiveSearch(e.target.value);
    });

    // Genre filter selection event bindings
    document.getElementById("category-chips-container").addEventListener("click", (e) => {
        const activeTarget = e.target.closest(".chip");
        if (!activeTarget) return;
        processGenreFilterChips(activeTarget.getAttribute("data-genre"), activeTarget);
    });

    // Details Modal Exit Triggers
    document.getElementById("modal-close-btn").addEventListener("click", closeMovieDetailsModal);
    document.getElementById("movie-modal").addEventListener("click", (e) => {
        if (e.target.id === "movie-modal") closeMovieDetailsModal();
    });

    // Hero interaction bindings referencing spotlight asset data entry index 0 manually
    document.getElementById("hero-watch-btn").addEventListener("click", () => openMovieDetailsModal(movieDatabase[0]));
    document.getElementById("hero-info-btn").addEventListe
