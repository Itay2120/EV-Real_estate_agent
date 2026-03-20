const properties = [
  {
    title: "דירת 5 חדרים במרכז מודיעין",
    neighborhood: "בוכמן",
    location: "מודיעין - שכונת בוכמן",
    price: 3250000,
    priceText: "₪3,250,000",
    rooms: 5,
    size: 128,
    sizeText: '128 מ"ר',
    elevator: true,
    mamad: true,
    parking: true,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "פנטהאוז 6 חדרים עם מרפסת גדולה",
    neighborhood: "אבני חן",
    location: "מודיעין - אבני חן",
    price: 4780000,
    priceText: "₪4,780,000",
    rooms: 6,
    size: 168,
    sizeText: '168 מ"ר',
    elevator: true,
    mamad: true,
    parking: true,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "דירת 4 חדרים משופצת",
    neighborhood: "קייזר",
    location: "מודיעין - קייזר",
    price: 2690000,
    priceText: "₪2,690,000",
    rooms: 4,
    size: 104,
    sizeText: '104 מ"ר',
    elevator: false,
    mamad: true,
    parking: false,
    images: [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "דירת גן 5 חדרים",
    neighborhood: "מוריה",
    location: "מודיעין - מוריה",
    price: 3480000,
    priceText: "₪3,480,000",
    rooms: 5,
    size: 145,
    sizeText: '145 מ"ר',
    elevator: false,
    mamad: true,
    parking: true,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "דירת 3 חדרים להשקעה",
    neighborhood: "הציפורים",
    location: "מודיעין - שכונת הציפורים",
    price: 2150000,
    priceText: "₪2,150,000",
    rooms: 3,
    size: 82,
    sizeText: '82 מ"ר',
    elevator: true,
    mamad: false,
    parking: true,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "דירת 3 חדרים להשקעה",
    neighborhood: "איתי",
    location: "איתי",
    price: 2150000,
    priceText: "₪2,150,000",
    rooms: 3,
    size: 82,
    sizeText: '82 מ"ר',
    elevator: true,
    mamad: true,
    parking: true,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

const grid = document.getElementById("propertiesGrid");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");

const searchInput = document.getElementById("searchInput");
const neighborhoodFilter = document.getElementById("neighborhoodFilter");
const roomsFilter = document.getElementById("roomsFilter");
const sortFilter = document.getElementById("sortFilter");
const elevatorFilter = document.getElementById("elevatorFilter");
const mamadFilter = document.getElementById("mamadFilter");
const parkingFilter = document.getElementById("parkingFilter");
const resetFiltersBtn = document.getElementById("resetFilters");

function featureText(label, value) {
  return `
    <span class="feature-badge ${value ? "yes" : "no"}">
      ${label}: ${value ? "כן" : "לא"}
    </span>
  `;
}

function createSlider(images, propertyId) {
  const slides = images.map((src, index) => `
    <div class="property-slide ${index === 0 ? "active" : ""}">
      <img src="${src}" alt="תמונה ${index + 1} של הנכס" loading="lazy">
    </div>
  `).join("");

  const dots = images.map((_, index) => `
    <button class="slider-dot ${index === 0 ? "active" : ""}" type="button" data-index="${index}" aria-label="מעבר לתמונה ${index + 1}"></button>
  `).join("");

  return `
    <div class="property-slider" data-slider-id="${propertyId}">
      <div class="property-slides">
        ${slides}
      </div>
      <button class="slider-btn prev" type="button" aria-label="תמונה קודמת">‹</button>
      <button class="slider-btn next" type="button" aria-label="תמונה הבאה">›</button>
      <div class="slider-dots">${dots}</div>
    </div>
  `;
}

function createCard(property, index) {
  return `
    <article class="property-card">
      ${createSlider(property.images, index)}

      <div class="property-body">
        <div class="property-top">
          <div>
            <h3 class="property-title">${property.title}</h3>
            <p class="property-location">${property.location}</p>
          </div>
          <div class="property-price">${property.priceText}</div>
        </div>

        <div class="property-specs">
          <div class="spec-item">
            <span class="spec-label">חדרים</span>
            <span class="spec-value">${property.rooms}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">גודל</span>
            <span class="spec-value">${property.sizeText}</span>
          </div>
        </div>

        <div class="features">
          ${featureText("מעלית", property.elevator)}
          ${featureText('ממ"ד', property.mamad)}
          ${featureText("חניה", property.parking)}
        </div>

        <div class="property-actions">
          <a class="property-btn primary" href="https://wa.me/972506711227" target="_blank" rel="noopener">לפרטים בוואטסאפ</a>
          <a class="property-btn secondary" href="tel:+972506711227">התקשרו עכשיו</a>
        </div>
      </div>
    </article>
  `;
}

function populateNeighborhoods() {
  const neighborhoods = [...new Set(properties.map(property => property.neighborhood))];

  neighborhoodFilter.innerHTML =
    `<option value="">כל השכונות</option>` +
    neighborhoods.map(name => `<option value="${name}">${name}</option>`).join("");
}

function getFilteredProperties() {
  const searchValue = searchInput.value.trim().toLowerCase();
  const neighborhoodValue = neighborhoodFilter.value;
  const roomsValue = roomsFilter.value;
  const sortValue = sortFilter.value;
  const elevatorOnly = elevatorFilter.checked;
  const mamadOnly = mamadFilter.checked;
  const parkingOnly = parkingFilter.checked;

  let filtered = [...properties].filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchValue) ||
      property.location.toLowerCase().includes(searchValue) ||
      property.neighborhood.toLowerCase().includes(searchValue);

    const matchesNeighborhood =
      !neighborhoodValue || property.neighborhood === neighborhoodValue;

    const matchesRooms =
      !roomsValue || Number(property.rooms) === Number(roomsValue);

    const matchesElevator =
      !elevatorOnly || property.elevator;

    const matchesMamad =
      !mamadOnly || property.mamad;

    const matchesParking =
      !parkingOnly || property.parking;

    return (
      matchesSearch &&
      matchesNeighborhood &&
      matchesRooms &&
      matchesElevator &&
      matchesMamad &&
      matchesParking
    );
  });

  if (sortValue === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "size-desc") {
    filtered.sort((a, b) => b.size - a.size);
  }

  return filtered;
}

function renderProperties() {
  const filteredProperties = getFilteredProperties();

  grid.innerHTML = filteredProperties
    .map((property, index) => createCard(property, index))
    .join("");

  resultsCount.textContent = `נמצאו ${filteredProperties.length} נכסים`;

  emptyState.classList.toggle("hidden", filteredProperties.length > 0);

  initSliders();
}

function initSliders() {
  const sliders = document.querySelectorAll(".property-slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".property-slide");
    const dots = slider.querySelectorAll(".slider-dot");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");
    let current = 0;

    function showSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });

      current = index;
    }

    prevBtn.addEventListener("click", () => showSlide(current - 1));
    nextBtn.addEventListener("click", () => showSlide(current + 1));

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        showSlide(Number(dot.dataset.index));
      });
    });
  });
}

function resetFilters() {
  searchInput.value = "";
  neighborhoodFilter.value = "";
  roomsFilter.value = "";
  sortFilter.value = "default";
  elevatorFilter.checked = false;
  mamadFilter.checked = false;
  parkingFilter.checked = false;
  renderProperties();
}

[
  searchInput,
  neighborhoodFilter,
  roomsFilter,
  sortFilter,
  elevatorFilter,
  mamadFilter,
  parkingFilter
].forEach((element) => {
  element.addEventListener("input", renderProperties);
  element.addEventListener("change", renderProperties);
});

resetFiltersBtn.addEventListener("click", resetFilters);

populateNeighborhoods();
renderProperties();