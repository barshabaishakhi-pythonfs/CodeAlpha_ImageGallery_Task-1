/* ═══════════════════════════════════════════════════════════
   LUMINA GALLERY — script.js
   Pure JavaScript · Beginner-friendly · Well commented
   ═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   1. IMAGE DATA
   All 100 images grouped by category (10 each).
   Each image object has:
     - src  : Unsplash URL (w=800 for quality, auto=format)
     - title: Caption / label
     - cat  : Category key (must match filter-btn data-cat)
   ───────────────────────────────────────────────────────── */
const IMAGES = [

  /* ── NATURE (10) ──────────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&q=80', title: 'Mountain Peaks', cat: 'nature' },
  { src: 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=800&auto=format&q=80', title: 'Misty Forest', cat: 'nature' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&q=80', title: 'Rolling Hills', cat: 'nature' },
  { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&auto=format&q=80', title: 'Lake Reflections', cat: 'nature' },
  { src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&auto=format&q=80', title: 'Autumn Canopy', cat: 'nature' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&auto=format&q=80', title: 'Wildflower Fields', cat: 'nature' },
  { src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&auto=format&q=80', title: 'Cascading Waterfall', cat: 'nature' },
  { src: 'https://plus.unsplash.com/premium_photo-1661963573455-ba0446e2cab9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Desert Dunes', cat: 'nature' },
  { src: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?w=800&auto=format&q=80', title: 'Ocean Sunrise', cat: 'nature' },
  { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&q=80', title: 'Pine Forest Path', cat: 'nature' },

  /* ── ARCHITECTURE (10) ────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&q=80', title: 'Glass Tower', cat: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?w=800&auto=format&q=80', title: 'Cathedral Arch', cat: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&auto=format&q=80', title: 'Spiral Staircase', cat: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&auto=format&q=80', title: 'Modern House', cat: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1725981741179-ce9becf4e723?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Rooftop View', cat: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&q=80', title: 'City Skyline', cat: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&auto=format&q=80', title: 'Ancient Ruins', cat: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&q=80', title: 'Dubai Architecture', cat: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1549517045-bc93de075e53?w=800&auto=format&q=80', title: 'Geometric Facade', cat: 'architecture' },
  { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&auto=format&q=80', title: 'Gothic Spires', cat: 'architecture' },

  /* ── BUSINESS (10) ────────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&q=80', title: 'Team Meeting', cat: 'business' },
  { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&q=80', title: 'Work Analysis', cat: 'business' },
  { src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&q=80', title: 'Office Huddle', cat: 'business' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&q=80', title: 'Digital Strategy', cat: 'business' },
  { src: 'https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=800&auto=format&q=80', title: 'Handshake Deal', cat: 'business' },
  { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&q=80', title: 'Collaborative Work', cat: 'business' },
  { src: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&auto=format&q=80', title: 'Coffee & Laptop', cat: 'business' },
  { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&q=80', title: 'Startup Meeting', cat: 'business' },
  { src: 'https://images.unsplash.com/photo-1416339684178-3a239570f315?w=800&auto=format&q=80', title: 'Finance Charts', cat: 'business' },
  { src: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&q=80', title: 'Leadership Talk', cat: 'business' },

  /* ── FASHION (10) ─────────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&q=80', title: 'Street Style', cat: 'fashion' },
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&q=80', title: 'Runway Look', cat: 'fashion' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&q=80', title: 'Monochrome Edit', cat: 'fashion' },
  { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&q=80', title: 'Model Portrait', cat: 'fashion' },
  { src: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=800&auto=format&q=80', title: 'Boho Chic', cat: 'fashion' },
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&q=80', title: 'Urban Minimal', cat: 'fashion' },
  { src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&q=80', title: 'Summer Dress', cat: 'fashion' },
  { src: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=800&auto=format&q=80', title: 'Luxury Watch', cat: 'fashion' },
  { src: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=800&auto=format&q=80', title: 'Tailored Suit', cat: 'fashion' },
  { src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&q=80', title: 'Accessories Flat Lay', cat: 'fashion' },

  /* ── FOOD (10) ────────────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&q=80', title: 'Artisan Burger', cat: 'food' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&q=80', title: 'Healthy Bowl', cat: 'food' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&q=80', title: 'Neapolitan Pizza', cat: 'food' },
  { src: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&auto=format&q=80', title: 'Coffee Latte Art', cat: 'food' },
  { src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&q=80', title: 'Sushi Platter', cat: 'food' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&q=80', title: 'Pancake Stack', cat: 'food' },
  { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&auto=format&q=80', title: 'Pasta Dish', cat: 'food' },
  { src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&q=80', title: 'Dessert Spread', cat: 'food' },
  { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&q=80', title: 'Fresh Salad', cat: 'food' },
  { src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&q=80', title: 'Avocado Toast', cat: 'food' },

  /* ── INTERIORS (10) ───────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&q=80', title: 'Minimal Kitchen', cat: 'interiors' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&q=80', title: 'Cozy Living Room', cat: 'interiors' },
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&q=80', title: 'Modern Bedroom', cat: 'interiors' },
  { src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&q=80', title: 'Spa Bathroom', cat: 'interiors' },
  { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&q=80', title: 'Loft Office', cat: 'interiors' },
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&auto=format&q=80', title: 'Velvet Armchair', cat: 'interiors' },
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&q=80', title: 'Scandinavian Style', cat: 'interiors' },
  { src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&auto=format&q=80', title: 'Library Wall', cat: 'interiors' },
  { src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&q=80', title: 'Open Plan Living', cat: 'interiors' },
  { src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&auto=format&q=80', title: 'Luxury Hotel Suite', cat: 'interiors' },

  /* ── TECHNOLOGY (10) ──────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&q=80', title: 'Circuit Board', cat: 'technology' },
  { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&q=80', title: 'Data Streams', cat: 'technology' },
  { src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&q=80', title: 'Laptop Setup', cat: 'technology' },
  { src: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?w=800&auto=format&q=80', title: 'Drone Shot', cat: 'technology' },
  { src: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&q=80', title: 'VR Headset', cat: 'technology' },
  { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&q=80', title: 'Gaming Setup', cat: 'technology' },
  { src: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&q=80', title: 'Code on Screen', cat: 'technology' },
  { src: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&q=80', title: 'Smartphone Tech', cat: 'technology' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&q=80', title: 'Robotics Lab', cat: 'technology' },
  { src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&q=80', title: 'Developer Desk', cat: 'technology' },

  /* ── TRAVEL (10) ──────────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&q=80', title: 'Santorini Sunset', cat: 'travel' },
  { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&q=80', title: 'Tokyo Streets', cat: 'travel' },
  { src: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800&auto=format&q=80', title: 'Bali Temple', cat: 'travel' },
  { src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&q=80', title: 'Paris Eiffel', cat: 'travel' },
  { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&q=80', title: 'Road Trip', cat: 'travel' },
  { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&auto=format&q=80', title: 'Amalfi Coast', cat: 'travel' },
  { src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&q=80', title: 'Gondola Venice', cat: 'travel' },
  { src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&q=80', title: 'New York City', cat: 'travel' },
  { src: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&auto=format&q=80', title: 'Maldives Beach', cat: 'travel' },
  { src: 'https://images.unsplash.com/photo-1664346288114-ee72907d2c52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Marrakech Market', cat: 'travel' },

  /* ── ANIMALS (10) ─────────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&auto=format&q=80', title: 'Red Fox', cat: 'animals' },
  { src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&auto=format&q=80', title: 'Elephant Herd', cat: 'animals' },
  { src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&auto=format&q=80', title: 'Sea Turtle', cat: 'animals' },
  { src: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&auto=format&q=80', title: 'Snow Leopard', cat: 'animals' },
  { src: 'https://images.unsplash.com/photo-1520552159191-e28a1d9f0d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFscyUyMC0lMjBodW1taW5nJTIwYmlyZHxlbnwwfHwwfHx8MA%3D%3D', title: 'Hummingbird', cat: 'animals' },
  { src: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Jungle Elephant', cat: 'animals' },
  { src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&auto=format&q=80', title: 'Eagle in Flight', cat: 'animals' },
  { src: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&auto=format&q=80', title: 'Tiger Portrait', cat: 'animals' },
  { src: 'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=800&auto=format&q=80', title: 'Cheetah Sprint', cat: 'animals' },
  { src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&q=80', title: 'Wolf Pack', cat: 'animals' },

  /* ── STREET (10) ──────────────────────────────────────── */
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&q=80', title: 'Downtown Hustle', cat: 'street' },
  { src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&q=80', title: 'Neon Reflections', cat: 'street' },
  { src: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&auto=format&q=80', title: 'Rainy Evening', cat: 'street' },
  { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&q=80', title: 'Times Square', cat: 'street' },
  { src: 'https://plus.unsplash.com/premium_photo-1715783495625-1da3a04fd8f6?q=80&w=1292&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Tokyo Crosswalk', cat: 'street' },
  { src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&q=80', title: 'Market Alley', cat: 'street' },
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&q=80', title: 'Night Cityscape', cat: 'street' },
  { src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format&q=80', title: 'Street Performer', cat: 'street' },
  { src: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&auto=format&q=80', title: 'Graffiti Wall', cat: 'street' },
  { src: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&q=80', title: 'Rush Hour', cat: 'street' }
];

/* ─────────────────────────────────────────────────────────
   2. STATE VARIABLES
   Track what's currently shown and open in lightbox
   ───────────────────────────────────────────────────────── */
let currentFilter  = 'all';      // Active category
let currentView    = 'grid';     // 'grid' or 'list'
let filteredImages = [...IMAGES]; // Currently visible images
let lightboxIndex  = 0;          // Which image is open in lightbox

/* ─────────────────────────────────────────────────────────
   3. DOM REFERENCES
   Cache all the elements we'll interact with
   ───────────────────────────────────────────────────────── */
const galleryGrid  = document.getElementById('galleryGrid');
const resultsCount = document.getElementById('resultsCount');
const lightbox     = document.getElementById('lightbox');
const lbImg        = document.getElementById('lbImg');
const lbTitle      = document.getElementById('lbTitle');
const lbCat        = document.getElementById('lbCat');
const lbCounter    = document.getElementById('lbCounter');
const lbStrip      = document.getElementById('lbStrip');
const lbLoader     = document.getElementById('lbLoader');
const lbClose      = document.getElementById('lbClose');
const lbPrev       = document.getElementById('lbPrev');
const lbNext       = document.getElementById('lbNext');
const lbBackdrop   = document.getElementById('lbBackdrop');
const navbar       = document.getElementById('navbar');
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobileMenu');
const navCount     = document.getElementById('navCount');

/* ─────────────────────────────────────────────────────────
   4. BUILD GALLERY CARDS
   Creates HTML card elements for each image and
   appends them to the gallery grid.
   ───────────────────────────────────────────────────────── */
function buildGallery() {
  // Clear the grid first
  galleryGrid.innerHTML = '';

  if (filteredImages.length === 0) {
    // Show empty state message
    galleryGrid.innerHTML = `
      <div class="empty-state">
        <h3>No Photos Found</h3>
        <p>Try selecting a different category above.</p>
      </div>`;
    resultsCount.textContent = 'No photos to show';
    return;
  }

  // Update results counter text
  resultsCount.textContent =
    currentFilter === 'all'
      ? `Showing all ${filteredImages.length} photos`
      : `Showing ${filteredImages.length} photo${filteredImages.length !== 1 ? 's' : ''} · ${capitalize(currentFilter)}`;

  // Build each card
  filteredImages.forEach(function(img, index) {
    const card = document.createElement('div');
    card.className = 'card';
    // Stagger the entry animation per card
    card.style.animationDelay = Math.min(index * 35, 600) + 'ms';

    card.innerHTML = `
      <div class="card-img-wrap">
        <img
          class="card-img"
          src="${img.src}"
          alt="${img.title}"
          loading="lazy"
        />
        <span class="card-cat">${capitalize(img.cat)}</span>
        <div class="card-overlay">
          <div class="card-overlay-inner">
            <div class="card-overlay-eye">👁</div>
            <span class="card-overlay-num">${index + 1} / ${filteredImages.length}</span>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-title">${img.title}</span>
        <span class="card-heart">♥</span>
      </div>
    `;

    // Click card → open lightbox at this index
    card.addEventListener('click', function() {
      openLightbox(index);
    });

    galleryGrid.appendChild(card);
  });
}

/* ─────────────────────────────────────────────────────────
   5. FILTER FUNCTIONALITY
   When user clicks a filter button, update which
   images are visible and re-render the grid.
   ───────────────────────────────────────────────────────── */
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Get the category from the data attribute
    const cat = btn.getAttribute('data-cat');
    currentFilter = cat;

    // Update which button looks active
    filterButtons.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');

    // Filter the images array
    if (cat === 'all') {
      filteredImages = [...IMAGES];
    } else {
      filteredImages = IMAGES.filter(function(img) { return img.cat === cat; });
    }

    // Rebuild the gallery with matching images
    buildGallery();
  });
});

/* ─────────────────────────────────────────────────────────
   6. VIEW TOGGLE (Grid / List)
   ───────────────────────────────────────────────────────── */
function setView(view) {
  currentView = view;

  // Toggle grid CSS class
  if (view === 'list') {
    galleryGrid.classList.add('list-view');
  } else {
    galleryGrid.classList.remove('list-view');
  }

  // Toggle active state on view buttons
  document.getElementById('gridBtn').classList.toggle('active', view === 'grid');
  document.getElementById('listBtn').classList.toggle('active', view === 'list');
}

/* ─────────────────────────────────────────────────────────
   7. LIGHTBOX — OPEN
   Shows the lightbox modal with the clicked image.
   Also builds the thumbnail strip.
   ───────────────────────────────────────────────────────── */
function openLightbox(index) {
  lightboxIndex = index;
  lightbox.classList.add('open');

  // Prevent body from scrolling while lightbox is open
  document.body.style.overflow = 'hidden';

  // Build the thumbnail strip (only on first open, then update)
  buildStrip();

  // Load the image
  showLightboxImage(lightboxIndex);
}

/* Load a specific image into the lightbox */
function showLightboxImage(index) {
  const img = filteredImages[index];
  if (!img) return;

  // Show loader spinner
  lbLoader.classList.add('show');
  lbImg.classList.add('loading');

  // Create a temp image to preload
  const preload = new Image();
  preload.onload = function() {
    lbImg.src = img.src;
    lbImg.alt = img.title;
    lbLoader.classList.remove('show');
    lbImg.classList.remove('loading');
  };
  preload.onerror = function() {
    // If image fails to load, still remove loader
    lbImg.src = img.src;
    lbLoader.classList.remove('show');
    lbImg.classList.remove('loading');
  };
  preload.src = img.src;

  // Update text info
  lbTitle.textContent   = img.title;
  lbCat.textContent     = capitalize(img.cat);
  lbCounter.textContent = (index + 1) + ' / ' + filteredImages.length;

  // Update Prev/Next button disabled state
  lbPrev.disabled = index === 0;
  lbNext.disabled = index === filteredImages.length - 1;

  // Highlight the active thumbnail
  updateStripActive(index);

  // Scroll the strip to keep the active thumb visible
  const activThumb = lbStrip.querySelector('.lb-thumb.active');
  if (activThumb) {
    activThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

/* ─────────────────────────────────────────────────────────
   8. LIGHTBOX — BUILD THUMBNAIL STRIP
   Creates small thumbnail images at the bottom
   ───────────────────────────────────────────────────────── */
function buildStrip() {
  lbStrip.innerHTML = '';

  filteredImages.forEach(function(img, i) {
    const thumb = document.createElement('img');
    thumb.className  = 'lb-thumb' + (i === lightboxIndex ? ' active' : '');
    thumb.src        = img.src;
    thumb.alt        = img.title;
    thumb.loading    = 'lazy';

    // Click thumb → jump to that image
    thumb.addEventListener('click', function() {
      lightboxIndex = i;
      showLightboxImage(i);
    });

    lbStrip.appendChild(thumb);
  });
}

/* Update the active class on strip thumbnails */
function updateStripActive(index) {
  const thumbs = lbStrip.querySelectorAll('.lb-thumb');
  thumbs.forEach(function(t, i) {
    t.classList.toggle('active', i === index);
  });
}

/* ─────────────────────────────────────────────────────────
   9. LIGHTBOX — CLOSE
   ───────────────────────────────────────────────────────── */
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = ''; // Restore scrolling
  lbImg.src = ''; // Clear image to save memory
}

/* ─────────────────────────────────────────────────────────
   10. LIGHTBOX — NAVIGATION
   Go to previous or next image
   ───────────────────────────────────────────────────────── */
function prevImage() {
  if (lightboxIndex > 0) {
    lightboxIndex--;
    showLightboxImage(lightboxIndex);
  }
}

function nextImage() {
  if (lightboxIndex < filteredImages.length - 1) {
    lightboxIndex++;
    showLightboxImage(lightboxIndex);
  }
}

/* ─────────────────────────────────────────────────────────
   11. EVENT LISTENERS — LIGHTBOX
   ───────────────────────────────────────────────────────── */
// Close button
lbClose.addEventListener('click', closeLightbox);

// Backdrop click also closes
lbBackdrop.addEventListener('click', closeLightbox);

// Prev / Next buttons
lbPrev.addEventListener('click', prevImage);
lbNext.addEventListener('click', nextImage);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (!lightbox.classList.contains('open')) return; // Only when lightbox is open

  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')    prevImage();
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  nextImage();
  if (e.key === 'Escape')                                closeLightbox();
});

/* ─────────────────────────────────────────────────────────
   12. TOUCH / SWIPE SUPPORT FOR LIGHTBOX
   Detect finger swipe left/right on mobile
   ───────────────────────────────────────────────────────── */
let touchStartX = 0;
let touchStartY = 0;

lightbox.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

lightbox.addEventListener('touchend', function(e) {
  const deltaX = e.changedTouches[0].screenX - touchStartX;
  const deltaY = e.changedTouches[0].screenY - touchStartY;

  // Only swipe horizontal if movement is more horizontal than vertical
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
    if (deltaX < 0) nextImage();  // Swipe left  → next
    else             prevImage(); // Swipe right → prev
  }
}, { passive: true });

/* ─────────────────────────────────────────────────────────
   13. NAVBAR — SCROLL EFFECT
   Add a scrolled class to navbar when page scrolls
   ───────────────────────────────────────────────────────── */
window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ─────────────────────────────────────────────────────────
   14. HAMBURGER MENU (Mobile)
   ───────────────────────────────────────────────────────── */
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

/* Called from HTML onclick attributes on mobile menu links */
function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

/* ─────────────────────────────────────────────────────────
   15. HELPER: CAPITALIZE
   Turns 'architecture' → 'Architecture'
   ───────────────────────────────────────────────────────── */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ─────────────────────────────────────────────────────────
   16. INIT
   Run when the page first loads
   ───────────────────────────────────────────────────────── */
function init() {
  // Build the initial gallery with all images
  buildGallery();

  // Update the nav counter
  navCount.textContent = IMAGES.length + ' photos';

  // Log a friendly message to the browser console
  console.log(
    '%c LUMINA Gallery Loaded ',
    'background: linear-gradient(135deg,#c8a96e,#7c6df0); color:#fff; padding:6px 12px; border-radius:6px; font-size:14px',
    '\n' + IMAGES.length + ' images · 10 categories · Pure HTML/CSS/JS'
  );
}

// Start the gallery!
init();
