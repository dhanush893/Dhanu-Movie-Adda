# 🎬 Dhanu Movie Adda - Premium Movie Streaming Website

A fully functional, responsive movie and TV shows streaming platform built with vanilla HTML5, CSS3, and JavaScript. No frameworks, no dependencies—just pure web technologies.

![Dhanu Movie Adda](https://img.shields.io/badge/Status-Active-green) ![License](https://img.shields.io/badge/License-MIT-blue) ![Vanilla JS](https://img.shields.io/badge/Built%20With-Vanilla%20JS-yellow)

## 🌟 Features

### Core Features
- ✅ **Responsive Design** - Optimized for desktop, tablet, and mobile
- ✅ **Dark/Light Mode** - Toggle between themes with persistent storage
- ✅ **Sticky Navigation Bar** - Always accessible navigation with search
- ✅ **Hero Banner** - Featured movie showcase with interactive buttons
- ✅ **Multiple Sections** - Movies, TV Shows, Trending, Recently Added
- ✅ **Category Filtering** - Browse by Action, Comedy, Horror, Romance, Sci-Fi, Animation, South Indian, Hollywood, Thriller
- ✅ **Real-time Search** - Instant search with filtering by title, description, and genre
- ✅ **Search Results Page** - Dedicated page for displaying search results

### Movie Features
- 📽️ **Interactive Movie Cards** - Hover animations with rating and action buttons
- 📋 **Movie Details Modal** - Complete information with cast, genres, rating, runtime
- ▶️ **Video Player Modal** - Integrated video player for watching content
- 📌 **My List** - Add/remove movies to personal list (localStorage)
- 👀 **Continue Watching** - Resume where you left off
- ⭐ **Trending Section** - Popular movies and shows
- 🆕 **Recently Added** - Latest additions to the platform

### User Experience
- 🎨 **Premium Dark Theme** - Modern cinematic design with glassmorphism
- 🔄 **Smooth Animations** - Fade-in, slide-up, hover effects
- 🚀 **Loading Animation** - Splash screen with spinner
- ⬆️ **Scroll to Top Button** - Quick navigation to top
- 📱 **Mobile Menu** - Hamburger menu for mobile devices
- ⌨️ **Keyboard Shortcuts** - Ctrl+/ to focus search, Esc to close modals

### Data Management
- 💾 **localStorage Integration** - Persistent My List and Continue Watching
- 🔄 **Movie Database** - 16 movies + 4 TV shows with full details
- 🎭 **Multiple Genres** - 9 different categories
- 📊 **Dynamic Content** - Easy to add more movies/shows

### Design Elements
- 🎨 **Glassmorphism UI** - Modern card designs with blur effects
- 🌈 **Gradient Overlays** - Beautiful linear and radial gradients
- 💎 **Premium Typography** - Google Fonts (Poppins & Inter)
- 🎯 **Consistent Spacing** - CSS variables for unified design
- 🎪 **Smooth Transitions** - 150ms to 500ms animation speeds

## 📋 Pages & Sections

1. **Home** - Landing page with hero banner and all sections
2. **Movies** - Complete movie catalog with filtering
3. **TV Shows** - All available TV shows
4. **Trending** - Currently trending content
5. **My List** - Personal saved movies/shows
6. **Search Results** - Results from search queries
7. **About** - About page (placeholder)
8. **Contact** - Contact page (placeholder)

## 🎯 Categories Included

- Action
- Comedy
- Horror
- Thriller
- Romance
- Sci-Fi
- Animation
- South Indian
- Hollywood

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with accessibility
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Font Awesome 6.4** - Icon library
- **Google Fonts** - Poppins & Inter typefaces
- **Unsplash API** - Movie poster images

## 📦 File Structure

```
dhanu-movie-adda/
├── index.html          # Main HTML file
├── style.css          # Complete CSS styling
├── script.js          # All JavaScript functionality
└── README.md          # Documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required for local development

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/dhanush893/dhanu-movie-adda.git
cd dhanu-movie-adda
```

2. **Open in browser:**
   - Double-click `index.html` to open in default browser
   - Or right-click → Open With → Choose your browser

### Deployment

#### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Site will be live at `https://username.github.io/dhanu-movie-adda`

#### Netlify
1. Drag and drop the folder to [Netlify.com](https://netlify.com)
2. Site goes live instantly

#### Vercel
1. Connect your GitHub repository
2. Vercel auto-deploys on push
3. Get a production URL immediately

#### Local Development Server (Optional)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #e50914 | Buttons, highlights |
| Secondary | #221f1f | Dark backgrounds |
| Accent | #ffc917 | Hover states |
| Success | #10b981 | Added to list |
| Background Dark | #141414 | Main bg |
| Text Primary | #ffffff | Main text |
| Text Secondary | #b3b3b3 | Secondary text |

## 🔄 JavaScript Features

### Data Management
- **movieDatabase** - Array of 16 movies with full details
- **tvShowDatabase** - Array of 4 TV shows
- **allMovies** - Combined database
- **myList** - User's saved movies (localStorage)
- **continueWatching** - Recently watched movies (localStorage)

### Key Functions
- `renderHeroBanner()` - Display featured movie
- `renderTrendingMovies()` - Show trending content
- `createMovieCard(movie)` - Generate movie card DOM
- `openMovieModal(movie)` - Show movie details
- `performSearch()` - Search functionality
- `toggleMyList(movieId)` - Add/remove from list
- `filterMovies(category)` - Filter by genre
- `setTheme(theme)` - Toggle dark/light mode

### Event Listeners
- Click events for all interactive elements
- Keyboard shortcuts (Escape, Ctrl+/)
- Scroll events for navbar and scroll-to-top
- Input events for real-time search
- Theme toggle with persistence

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile Browsers (iOS Safari, Chrome Mobile)

## 📊 Movie Database Structure

Each movie object contains:
```javascript
{
    id: 1,
    title: "Movie Title",
    year: 2024,
    genre: ["Action", "Sci-Fi"],
    runtime: 148,
    rating: 8.5,
    description: "Movie description...",
    cast: ["Actor 1", "Actor 2"],
    image: "image_url",
    category: "Sci-Fi",
    featured: true,
    trending: true,
    type: "movie",
    trailer: "trailer_url"
}
```

## 🔧 Customization

### Adding More Movies
1. Open `script.js`
2. Add new movie object to `movieDatabase` array
3. Follow the structure shown in database section
4. Update image URLs and details

### Changing Colors
1. Open `style.css`
2. Modify CSS variables in `:root` section
3. All colors will update automatically

### Adding Categories
1. Update `renderCategories()` function in `script.js`
2. Add category name to array
3. Movies with that category will auto-filter

### Custom Fonts
Replace Google Fonts link in `index.html` with your preferred fonts

## 🎬 Sample Movie Data

The website comes pre-loaded with:
- 16 movies across multiple genres
- 4 TV shows
- Complete cast information
- Ratings and descriptions
- High-quality poster images

## 💾 localStorage Keys

- **myList** - Array of movie IDs in user's list
- **continueWatching** - Array of recently watched movie IDs
- **theme** - Current theme preference (dark/light)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Ctrl + /` | Focus search bar |
| `Escape` | Close modal/player |
| `Enter` | Perform search |

## 🎯 Future Enhancements

- [ ] Movie ratings and reviews system
- [ ] User authentication
- [ ] Personalized recommendations
- [ ] Watchlist sharing
- [ ] Multiple language support
- [ ] Advanced filtering (year, rating, runtime)
- [ ] Movie trailers embedded
- [ ] Social media integration
- [ ] Comments section
- [ ] Subscription tiers

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Dhanush** - Full Stack Developer

- GitHub: [@dhanush893](https://github.com/dhanush893)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for images
- All contributors and users

---

**Made with ❤️ by Dhanush | All rights reserved © 2024**

*Premium streaming experience without the premium price tag!*