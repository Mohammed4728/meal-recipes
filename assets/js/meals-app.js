/*
https://dummyjson.com/docs
https://www.themealdb.com/api.php
*/
// ============================================
// Simple Meal Recipe App
// ============================================

// API Configuration
const API_URL = "https://www.themealdb.com/api/json/v1/1";
// Global Variables
let allMeals = [];
const MEALS_PER_PAGE = 6;
let currentChunkIndex = 0;

// ============================================
// Function 1: Load All Meals on Page Load
// ============================================
/**
 * Load all meals when page loads
 * Uses Fetch API with Promises
 * Only loads meals starting with letter 'a'
 */
function loadAllMeals() {
  allMeals = [];
  currentChunkIndex = 0;
  fetch(`${API_URL}/search.php?f=a`)
    .then((response) => response.json())
    .then((data) => {
      const meals = data.meals || [];
      allMeals = meals;

      //   displayMeals(allMeals);
      displayMealsChunk();
      //   console.log("allMeals:", allMeals);
      document.getElementById("loaderScreen").classList.add("d-none");
    })
    .catch((error) => {
      console.error("Error loading meals:", error);
      alert("Failed to load meals. Please refresh the page.");
      document.getElementById("loaderScreen").classList.add("d-none");
    });
}

// ============================================
// Function 2: Display Meals
// ============================================
/**
 * Display meals in the container
 * DOM Manipulation
 * @param {Array} meals - Array of meal objects
 */

function displayMeals(meals, appendData = false) {
  const container = document.getElementById("mealsContainer");

  if (!appendData) {
    container.innerHTML = "";
  }

  if (meals.length === 0 && !appendData) {
    container.innerHTML =
      '<div class="col-12"><p class="text-center">No meals found.</p></div>';
    return;
  }

  meals.forEach((meal) => {
    const col = document.createElement("div");
    col.className = "col-md-4 col-sm-6 mb-4";

    col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${meal.strMealThumb}"
                alt="${meal.strMeal}" class="card-img-top" style="height: 250px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text text-muted">${meal.strCategory || "N/A"}</p>
                <button class="btn btn-primary" onclick="showMealDetails('${meal.idMeal}')">
                    View Details
                </button>
            </div>
        </div>
    `;

    container.appendChild(col);
  });
}

// ============================================
// Function 3: Display Meals Chunk (6 meals)
// ============================================

/**
 * Display meals in chunks of 6
 * Simple function for beginners
 */
function displayMealsChunk() {
  const startIndex = currentChunkIndex * MEALS_PER_PAGE; // 0 * 6 => 0
  const endIndex = startIndex + MEALS_PER_PAGE; // 0 + 6 = 6

  const chunk = allMeals.slice(startIndex, endIndex); // 0,6

  if (chunk.length === 0) {
    document.getElementById("loadMoreBtn").classList.add("d-none");
    return;
  }

  displayMeals(chunk, currentChunkIndex > 0);

  if (endIndex >= allMeals.length) {
    document.getElementById("loadMoreBtn").classList.add("d-none");
  } else {
    document.getElementById("loadMoreBtn").classList.remove("d-none");
  }
}

// ============================================
// Function 4: Load More Meals
// ============================================

/**
 * Load more meals from array chunks (6 by 6)
 * Simple function for beginners
 */
function loadMoreMeals() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.disabled = true;

  setTimeout(() => {
    currentChunkIndex++;
    displayMealsChunk();
    loadMoreBtn.disabled = false;
  }, 300);
}

// ============================================
// Function 5: Search Meals
// ============================================

/**
 * Search for meals by name
 * @param {string} searchTerm - The meal name to search for
 */

function searchMeals(searchTerm) {
  //    console.log("searchTerm",searchTerm)

  // sanitize data
  let cleanedSearchTerm = sanitizeData(searchTerm);
  // reset
  if (!cleanedSearchTerm) {
    currentChunkIndex = 0;
    displayMealsChunk();
    document.getElementById("loadMoreBtn").style.display = "block";
    return;
  }

  fetch(`${API_URL}/search.php?s=${encodeURIComponent(cleanedSearchTerm)}`)
    .then((response) => response.json())
    .then((data) => {
      const meals = data.meals || [];

      console.log("meals", meals);
      allMeals = meals;
      console.log("allMeals", allMeals);

      currentChunkIndex = 0;
      displayMealsChunk();
    })
    .catch((error) => {
      console.error("Error loading meals:", error);
      alert("Failed to search meals. Please try again");
    });
}

function sanitizeData(input) {
  return input.trim().replace(/[<>]/g, "");
}

// ============================================
// Function 6: Show Meal Details
// ============================================

/**
 * Show meal details page
 * Navigates to details page
 * @param {string} mealId - The meal ID
 */

function showMealDetails(mealId) {
  document.getElementById("loaderScreen").classList.remove("d-none");

  fetch(`${API_URL}/lookup.php?i=${mealId}`)
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];

      // Generate ingredients list
      let ingredientsHtml = '<div class="row">';
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredientsHtml += `
                        <div class="col-md-6 mb-2">
                            <i class="fas fa-check-circle text-success me-2"></i>
                            <strong>${meal[`strIngredient${i}`]}</strong>: ${meal[`strMeasure${i}`]}
                        </div>
                    `;
        }
      }
      ingredientsHtml += "</div>";

      const content = `
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-fluid rounded shadow w-100">
                    </div>
                    <div class="col-md-6">
                        <h2 class="mb-3 display-4">${meal.strMeal}</h2>
                        <div class="mb-4">
                            <span class="badge bg-primary fs-6 me-2"><i class="fas fa-tags me-1"></i>${meal.strCategory}</span>
                            <span class="badge bg-secondary fs-6"><i class="fas fa-globe-americas me-1"></i>${meal.strArea}</span>
                        </div>
                        
                        <h4 class="mb-3 border-bottom pb-2"><i class="fas fa-list-ul me-2"></i>Ingredients</h4>
                        ${ingredientsHtml}
                    </div>
                </div>
                
                <div class="row mt-5">
                    <div class="col-12">
                        <h3 class="mb-4 text-center"><i class="fas fa-utensils me-2"></i>Instructions</h3>
                        <div class="p-4 bg-light rounded shadow-sm fs-5" style="line-height: 1.8; white-space: pre-line;">
                            ${meal.strInstructions}
                        </div>
                    </div>
                </div>
                
                ${
                  meal.strYoutube
                    ? `
                <div class="row mt-5">
                    <div class="col-12 text-center">
                        <a href="${meal.strYoutube}" target="_blank" class="btn btn-danger btn-lg">
                            <i class="fab fa-youtube me-2"></i>Watch Video Tutorial
                        </a>
                    </div>
                </div>
                `
                    : ""
                }
            `;

      document.getElementById("mealDetailsContent").innerHTML = content;
      document.getElementById("mainContent").classList.add("d-none");
      document.getElementById("mealDetailsPage").classList.remove("d-none");

      // Add fade-in animation
      document.getElementById("mealDetailsPage").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("mealDetailsPage").style.transition =
          "opacity 0.5s";
        document.getElementById("mealDetailsPage").style.opacity = "1";
      }, 50);

      document.getElementById("loaderScreen").classList.add("d-none");
      window.scrollTo(0, 0);
    })
    .catch((error) => {
      console.error("Error loading meal details:", error);
      document.getElementById("loaderScreen").classList.add("d-none");
      alert("Failed to load meal details. Please try again.");
    });
}

// ============================================
// Function 7: Toggle Dark Mode
// ============================================

/**
 * Toggle dark mode and save to localStorage
 * BOM - localStorage usage
 */
function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark);

  // Update icon
  const icon = document.getElementById("darkModeIcon");
  icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
}
/**
 * Load dark mode preference from localStorage
 */
function loadDarkMode() {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") {
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeIcon").classList = "fas fa-sun";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  loadDarkMode();
  loadAllMeals();
  loadRegions();

  document
    .getElementById("searchForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const searchTerm = document.getElementById("searchInput").value;
      const region = document.getElementById("areaFilter").value;

      if (region) {
        filterByArea(region);
      } else {
        searchMeals(searchTerm);
      }
    });

  document
    .getElementById("darkModeToggle")
    .addEventListener("click", toggleDarkMode);

  document.getElementById("backButton").addEventListener("click", () => {
    document.getElementById("mealDetailsPage").classList.add("d-none");
    document.getElementById("mainContent").classList.remove("d-none");
  });
});

// ============================================
// Function 8: Load Regions
// ============================================
function loadRegions() {
  fetch(`${API_URL}/list.php?a=list`)
    .then((response) => response.json())
    .then((data) => {
      const areas = data.meals || [];
      const select = document.getElementById("areaFilter");

      areas.forEach((area) => {
        const option = document.createElement("option");
        option.value = area.strArea;
        option.textContent = area.strArea;
        select.appendChild(option);
      });
    })
    .catch((error) => console.error("Error loading regions:", error));
}

// ============================================
// Function 9: Filter by Area
// ============================================
function filterByArea(area) {
  document.getElementById("loaderScreen").classList.remove("d-none");
  allMeals = [];
  currentChunkIndex = 0;

  fetch(`${API_URL}/filter.php?a=${area}`)
    .then((response) => response.json())
    .then((data) => {
      allMeals = data.meals || [];
      displayMealsChunk();
      document.getElementById("loaderScreen").classList.add("d-none");
    })
    .catch((error) => {
      console.error("Error filtering by area:", error);
      document.getElementById("loaderScreen").classList.add("d-none");
    });
}

// how to host site in git
// https://www.youtube.com/watch?si=g0LI2C798gyPMMXk&v=e5AwNU3Y2es&feature=youtu.be
