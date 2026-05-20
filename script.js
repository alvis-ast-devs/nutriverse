function createFoodImage(label, background, accent) {
  const safeLabel = label.replace(/&/g, "and");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
      <rect width="160" height="160" rx="38" fill="${background}"/>
      <circle cx="112" cy="42" r="28" fill="rgba(255,255,255,.42)"/>
      <circle cx="50" cy="110" r="34" fill="rgba(255,255,255,.32)"/>
      <path d="M38 96c22-42 63-52 91-23-11 36-45 54-91 23Z" fill="${accent}"/>
      <path d="M55 91c17 9 36 7 57-7" stroke="rgba(255,255,255,.72)" stroke-width="7" stroke-linecap="round" fill="none"/>
      <text x="80" y="132" text-anchor="middle" font-family="Inter, Arial" font-size="18" font-weight="800" fill="#102012">${safeLabel}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const foodDatabase = [
  { id: 1, name: "Boiled Chicken Breast", calories: 165, protein: 31, category: "healthy", image: createFoodImage("Chicken", "#eaffbd", "#78b82a") },
  { id: 2, name: "Whey Protein", calories: 120, protein: 24, category: "healthy", image: createFoodImage("Whey", "#dff8ff", "#39a8c6") },
  { id: 3, name: "Boiled Egg", calories: 78, protein: 6, category: "healthy", image: createFoodImage("Egg", "#fff1b6", "#f2b43b") },
  { id: 4, name: "Garden Salad", calories: 95, protein: 4, category: "healthy", image: createFoodImage("Salad", "#efffd6", "#42a850") },
  { id: 5, name: "Brown Rice", calories: 215, protein: 5, category: "healthy", image: createFoodImage("Rice", "#f5ead7", "#b98f5b") },
  { id: 6, name: "Banana Oatmeal", calories: 260, protein: 9, category: "healthy", image: createFoodImage("Oats", "#fff3c7", "#d2a231") },
  { id: 7, name: "Greek Yogurt", calories: 140, protein: 17, category: "healthy", image: createFoodImage("Yogurt", "#edf5ff", "#7ea8e5") },
  { id: 8, name: "Grilled Salmon", calories: 280, protein: 30, category: "healthy", image: createFoodImage("Salmon", "#ffe3d7", "#f17561") },
  { id: 9, name: "Grilled Tempeh", calories: 190, protein: 18, category: "healthy", image: createFoodImage("Tempeh", "#fff4d9", "#c89140") },
  { id: 10, name: "Sauteed Broccoli", calories: 110, protein: 6, category: "healthy", image: createFoodImage("Broccoli", "#dcffd5", "#198848") },
  { id: 11, name: "Avocado Smoothie", calories: 230, protein: 6, category: "healthy", image: createFoodImage("Avocado", "#e9ffd1", "#62a83f") },
  { id: 12, name: "Clear Chicken Soup", calories: 180, protein: 20, category: "healthy", image: createFoodImage("Soup", "#fff0cf", "#e5a83c") },
  { id: 13, name: "Fried Chicken", calories: 430, protein: 24, category: "fast-food", image: createFoodImage("Fried", "#ffe4d2", "#d66f30") },
  { id: 14, name: "Cheese Burger", calories: 540, protein: 27, category: "fast-food", image: createFoodImage("Burger", "#ffe7b5", "#bf6027") },
  { id: 15, name: "French Fries", calories: 365, protein: 4, category: "fast-food", image: createFoodImage("Fries", "#fff0ac", "#e0a418") },
  { id: 16, name: "Pepperoni Pizza", calories: 620, protein: 26, category: "fast-food", image: createFoodImage("Pizza", "#ffd8ca", "#c94d3f") },
  { id: 17, name: "Chicken Noodles", calories: 520, protein: 22, category: "fast-food", image: createFoodImage("Noodles", "#fff2c6", "#d2932d") },
  { id: 18, name: "Creamy Coconut Soup", calories: 480, protein: 21, category: "fast-food", image: createFoodImage("Soup", "#ffefc9", "#cc8a26") },
  { id: 19, name: "Special Fried Rice", calories: 610, protein: 19, category: "fast-food", image: createFoodImage("Fried Rice", "#ffe5bf", "#bd6c28") },
  { id: 20, name: "Instant Noodles with Egg", calories: 470, protein: 14, category: "fast-food", image: createFoodImage("Noodle", "#ffedb7", "#d8901f") },
  { id: 21, name: "Chocolate Donut", calories: 320, protein: 5, category: "fast-food", image: createFoodImage("Donut", "#f8d7c8", "#8b563e") },
  { id: 22, name: "Iced Milk Coffee", calories: 250, protein: 6, category: "fast-food", image: createFoodImage("Coffee", "#ead8c2", "#7a5434") },
  { id: 23, name: "Beef Burrito", calories: 560, protein: 28, category: "fast-food", image: createFoodImage("Burrito", "#ffe0bf", "#ba6e34") },
  { id: 24, name: "Chicken Nuggets", calories: 390, protein: 18, category: "fast-food", image: createFoodImage("Nugget", "#ffe9ad", "#d38a23") }
];

const meals = [
  { key: "breakfast", label: "Breakfast" },
  { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Dinner" }
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const finishButton = document.querySelector("#finishDay");
const dailySummary = document.querySelector("#dailySummary");
const summaryDate = document.querySelector("#summaryDate");
const quickItems = document.querySelector("#quickItems");
const quickCalories = document.querySelector("#quickCalories");
const quickProtein = document.querySelector("#quickProtein");
const totalCalories = document.querySelector("#totalCalories");
const totalProtein = document.querySelector("#totalProtein");
const fastFoodPercent = document.querySelector("#fastFoodPercent");
const donutChart = document.querySelector("#donutChart");
const donutHealthyLabel = document.querySelector("#donutHealthyLabel");
const healthMessage = document.querySelector("#healthMessage");
const healthIcon = document.querySelector("#healthIcon");
const personalizedTip = document.querySelector("#personalizedTip");
const calendarGrid = document.querySelector("#calendarGrid");
const calendarMonthLabel = document.querySelector("#calendarMonthLabel");
const selectedDateText = document.querySelector("#selectedDateText");
const greetingTime = document.querySelector("#greetingTime");
const greetingTitle = document.querySelector("#greetingTitle");
const topProteinList = document.querySelector("#topProteinList");
const tipTitle = document.querySelector("#tipTitle");
const tipText = document.querySelector("#tipText");
const tipImage = document.querySelector("#tipImage");
const trackingArea = document.querySelector(".tracking-area");
const carbProgressText = document.querySelector("#carbProgressText");
const carbProgressBar = document.querySelector("#carbProgressBar");
const fatProgressText = document.querySelector("#fatProgressText");
const fatProgressBar = document.querySelector("#fatProgressBar");
const macroProteinText = document.querySelector("#macroProteinText");
const macroProteinBar = document.querySelector("#macroProteinBar");
const waterProgressText = document.querySelector("#waterProgressText");
const waterGlassList = document.querySelector("#waterGlassList");
const siteNav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");

const nutritionTargets = {
  carbs: 250,
  fat: 70,
  protein: 120,
  water: 8
};

let activeDate = new Date();
let visibleMonth = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
let dailyEntries = createEmptyDay();

function createEmptyDay() {
  return meals.reduce((entries, meal) => {
    entries[meal.key] = [];
    return entries;
  }, {});
}

function getDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getStorageKey(dateString) {
  return `calorie-health-tracker:${dateString}`;
}

function formatDisplayDate(date) {
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function isSameDay(firstDate, secondDate) {
  return getDateString(firstDate) === getDateString(secondDate);
}

function populateDropdowns() {
  const options = foodDatabase
    .map((food) => {
      const label = `${food.name} - ${food.calories} kcal, ${food.protein}g protein`;
      return `<option value="${food.id}">${label}</option>`;
    })
    .join("");

  meals.forEach((meal) => {
    document.querySelector(`#${meal.key}Select`).innerHTML = options;
  });
}

function saveActiveDay() {
  localStorage.setItem(getStorageKey(getDateString(activeDate)), JSON.stringify(dailyEntries));
  renderCalendar();
}

function loadActiveDay() {
  const stored = localStorage.getItem(getStorageKey(getDateString(activeDate)));
  dailyEntries = stored ? normalizeStoredEntries(JSON.parse(stored)) : createEmptyDay();
  hideSummary();
  renderMeals();
  renderCalendar();
  renderSideContent();
  selectedDateText.textContent = formatDisplayDate(activeDate);

  trackingArea.classList.remove("date-switching");
  requestAnimationFrame(() => {
    trackingArea.classList.add("date-switching");
  });
}

function normalizeStoredEntries(entries) {
  const normalizedEntries = createEmptyDay();
  const legacyMealKeys = {
    sarapan: "breakfast",
    makanSiang: "lunch",
    makanMalam: "dinner"
  };

  meals.forEach((meal) => {
    normalizedEntries[meal.key] = [...(entries[meal.key] || [])];
  });

  Object.entries(legacyMealKeys).forEach(([legacyKey, currentKey]) => {
    normalizedEntries[currentKey] = [...normalizedEntries[currentKey], ...(entries[legacyKey] || [])];
  });

  meals.forEach((meal) => {
    normalizedEntries[meal.key] = normalizedEntries[meal.key].map((entry, index) => {
      const sourceFood = foodDatabase.find((food) => food.id === entry.id);
      return normalizeEntry(sourceFood ? { ...sourceFood, ...entry, image: sourceFood.image } : entry, meal.key, index);
    });
  });

  return normalizedEntries;
}

function normalizeEntry(entry, mealKey, index) {
  return {
    ...entry,
    entryId: entry.entryId || `${mealKey}-${entry.id}-${index}-${Date.now()}`,
    name: entry.name || entry.nama,
    calories: entry.calories || entry.kalori || 0,
    category: entry.category || (entry.kategori === "sehat" ? "healthy" : entry.kategori)
  };
}

function addFoodToMeal(mealKey) {
  const select = document.querySelector(`#${mealKey}Select`);
  const selectedFood = foodDatabase.find((food) => food.id === Number(select.value));

  if (!selectedFood) {
    return;
  }

  dailyEntries[mealKey].push({
    ...selectedFood,
    entryId: `${Date.now()}-${Math.random().toString(16).slice(2)}`
  });

  saveActiveDay();
  hideSummary();
  renderMeals();
}

function deleteFoodFromMeal(mealKey, entryId) {
  dailyEntries[mealKey] = (dailyEntries[mealKey] || []).filter((food) => food.entryId !== entryId);
  saveActiveDay();
  hideSummary();
  renderMeals();
}

function renderMeals() {
  meals.forEach((meal) => {
    const list = document.querySelector(`#${meal.key}List`);
    const count = document.querySelector(`#${meal.key}Count`);
    const entries = dailyEntries[meal.key] || [];

    list.innerHTML = entries.map(renderFoodItem).join("");
    count.textContent = formatItemCount(entries.length);
  });

  renderQuickStats();
}

function formatItemCount(count) {
  return `${count} ${count === 1 ? "item" : "items"}`;
}

function renderFoodItem(food) {
  const tagLabel = food.category === "healthy" ? "Healthy" : "Fast-food";

  return `
    <li class="food-item" data-entry-id="${food.entryId}">
      <div class="food-thumb">
        <img src="${food.image}" alt="${food.name}" />
      </div>
      <div class="food-info">
        <span class="food-name">${food.name}</span>
        <span class="food-meta">
          <span>${food.calories} kcal</span>
          <span>${food.protein}g protein</span>
        </span>
        <span class="category-pill ${food.category}">${tagLabel}</span>
      </div>
      <button type="button" class="delete-food-button" data-entry-id="${food.entryId}" aria-label="Remove ${food.name}">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v5" />
          <path d="M14 11v5" />
        </svg>
      </button>
    </li>
  `;
}

function getAllEntries() {
  return meals.flatMap((meal) => dailyEntries[meal.key] || []);
}

function calculateTotals() {
  const allEntries = getAllEntries();
  const fastFoodCount = allEntries.filter((food) => food.category === "fast-food").length;
  const healthyCount = allEntries.filter((food) => food.category === "healthy").length;
  const calories = allEntries.reduce((sum, food) => sum + food.calories, 0);
  const protein = allEntries.reduce((sum, food) => sum + food.protein, 0);
  const fastFoodRatio = allEntries.length ? Math.round((fastFoodCount / allEntries.length) * 100) : 0;
  const healthyRatio = allEntries.length ? 100 - fastFoodRatio : 0;

  return {
    calories,
    protein,
    fastFoodCount,
    healthyCount,
    fastFoodRatio,
    healthyRatio,
    totalItems: allEntries.length
  };
}

function renderQuickStats() {
  const totals = calculateTotals();

  quickItems.textContent = totals.totalItems;
  renderMetricValue(quickCalories, totals.calories, "kcal");
  renderMetricValue(quickProtein, totals.protein, "g");
  renderMacroProgress(totals);
}

function renderMetricValue(element, value, unit) {
  element.innerHTML = `<span>${value}</span><small>${unit}</small>`;
}

function renderMacroProgress(totals) {
  const estimatedCarbs = Math.round((totals.calories * 0.45) / 4);
  const estimatedFat = Math.round((totals.calories * 0.25) / 9);
  const waterGlasses = Math.min(nutritionTargets.water, totals.totalItems === 0 ? 0 : Math.max(2, Math.ceil(totals.totalItems * 1.5)));

  updateProgress(carbProgressText, carbProgressBar, estimatedCarbs, nutritionTargets.carbs, "g");
  updateProgress(fatProgressText, fatProgressBar, estimatedFat, nutritionTargets.fat, "g");
  updateProgress(macroProteinText, macroProteinBar, totals.protein, nutritionTargets.protein, "g");

  waterProgressText.textContent = `${waterGlasses} / ${nutritionTargets.water} glasses`;
  waterGlassList.innerHTML = Array.from({ length: nutritionTargets.water }, (_, index) => {
    const filledClass = index < waterGlasses ? " is-filled" : "";
    return `<span class="water-glass${filledClass}"></span>`;
  }).join("");
}

function updateProgress(textElement, barElement, value, target, unit) {
  const cappedValue = Math.min(value, target);
  const percentage = Math.min(100, Math.round((value / target) * 100));

  textElement.textContent = `${cappedValue} / ${target}${unit}`;
  barElement.style.width = `${percentage}%`;
}

function renderCalendar() {
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const blanks = firstDay.getDay();
  const today = new Date();

  calendarMonthLabel.textContent = `${monthNames[month]} ${year}`;
  calendarGrid.innerHTML = "";

  for (let blankIndex = 0; blankIndex < blanks; blankIndex += 1) {
    const blank = document.createElement("span");
    blank.className = "calendar-day is-muted";
    blank.setAttribute("aria-hidden", "true");
    calendarGrid.appendChild(blank);
  }

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    const date = new Date(year, month, day);
    const dateString = getDateString(date);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.textContent = day;
    button.setAttribute("aria-label", `Select ${formatDisplayDate(date)}`);

    if (isSameDay(date, today)) {
      button.classList.add("is-today");
    }

    if (isSameDay(date, activeDate)) {
      button.classList.add("is-active");
    }

    if (localStorage.getItem(getStorageKey(dateString))) {
      button.classList.add("has-data");
    }

    button.addEventListener("click", () => setActiveDate(date));
    calendarGrid.appendChild(button);
  }
}

function setActiveDate(date) {
  activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  visibleMonth = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
  loadActiveDay();
}

function changeMonth(offset) {
  visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + offset, 1);
  renderCalendar();
}

function finishDay() {
  const totals = calculateTotals();
  const healthyDegrees = Math.round((totals.healthyRatio / 100) * 360);

  totalCalories.textContent = `${totals.calories} kcal`;
  totalProtein.textContent = `${totals.protein} g`;
  fastFoodPercent.textContent = `${totals.fastFoodRatio}%`;
  donutHealthyLabel.textContent = `${totals.healthyRatio}%`;
  donutChart.style.background = `conic-gradient(var(--healthy) 0deg ${healthyDegrees}deg, var(--fast) ${healthyDegrees}deg 360deg)`;
  summaryDate.textContent = formatDisplayDate(activeDate);

  healthMessage.className = "health-message";

  if (totals.totalItems === 0) {
    healthMessage.classList.add("neutral");
    healthIcon.textContent = "i";
    healthMessage.querySelector("p").textContent = "No foods have been logged for this date yet.";
    personalizedTip.textContent = "Start with one protein source and one fiber-rich food to give today a strong foundation.";
  } else if (totals.fastFoodRatio >= 40) {
    healthMessage.classList.add("warning");
    healthIcon.textContent = "!";
    healthMessage.querySelector("p").textContent = "Warning: today's intake includes too much fast food.";
    personalizedTip.textContent = "Personal tip: balance the rest of the day with water, fiber-rich vegetables, and lean protein. Tomorrow, aim to keep fast food under 30%.";
  } else if (totals.healthyCount > totals.fastFoodCount) {
    healthMessage.classList.add("success");
    healthIcon.textContent = "+";
    healthMessage.querySelector("p").textContent = "Excellent! Today's nutrition balance looks healthy and well structured.";
    personalizedTip.textContent = "Personal tip: your balance is strong. Keep protein in every meal and add more colorful vegetables for micronutrients.";
  } else {
    healthMessage.classList.add("neutral");
    healthIcon.textContent = "i";
    healthMessage.querySelector("p").textContent = "Fairly balanced. Add more nutrient-dense foods for an even better result.";
    personalizedTip.textContent = "Personal tip: choose one simple swap, such as replacing a sweet drink with yogurt or whole fruit.";
  }

  dailySummary.classList.remove("hidden", "revealed");
  requestAnimationFrame(() => {
    dailySummary.classList.add("revealed");
    if (dailySummary.scrollIntoView) {
      dailySummary.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

function hideSummary() {
  dailySummary.classList.add("hidden");
  dailySummary.classList.remove("revealed");
}

function renderSideContent() {
  const healthyFoods = foodDatabase.filter((food) => food.category === "healthy");
  const selectedTipFood = healthyFoods[activeDate.getDate() % healthyFoods.length];

  tipTitle.textContent = selectedTipFood.name;
  tipText.textContent = `Add ${selectedTipFood.name.toLowerCase()} when you want a lighter option with a clean nutrition profile.`;
  tipImage.src = selectedTipFood.image;

  topProteinList.innerHTML = [...foodDatabase]
    .filter((food) => food.category === "healthy")
    .sort((first, second) => second.protein - first.protein)
    .slice(0, 4)
    .map((food) => `
      <li>
        <img src="${food.image}" alt="${food.name}" />
        <div>
          <strong>${food.name}</strong>
          <span>${food.calories} kcal</span>
        </div>
        <b>${food.protein}g</b>
      </li>
    `)
    .join("");
}

function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "Good Morning";

  if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon";
  } else if (hour >= 18 || hour < 4) {
    greeting = "Good Evening";
  }

  greetingTime.textContent = greeting;
  greetingTitle.textContent = `${greeting}, Alvis! Let's build your perfect day`;
}

function bindEvents() {
  bindGlobalNavigation();

  document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", () => addFoodToMeal(button.dataset.meal));
  });

  document.querySelectorAll(".food-list").forEach((list) => {
    list.addEventListener("click", (event) => {
      const button = event.target.closest(".delete-food-button");

      if (!button) {
        return;
      }

      const mealKey = list.id.replace("List", "");
      deleteFoodFromMeal(mealKey, button.dataset.entryId);
    });
  });

  document.querySelector("#prevMonth").addEventListener("click", () => changeMonth(-1));
  document.querySelector("#nextMonth").addEventListener("click", () => changeMonth(1));
  finishButton.addEventListener("click", finishDay);
}

function bindGlobalNavigation() {
  if (!siteNav || !navToggle) {
    return;
  }

  const closeNavigation = () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1025px)").matches) {
      closeNavigation();
    }
  });
}

function init() {
  activeDate = new Date();
  visibleMonth = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
  populateDropdowns();
  bindEvents();
  updateGreeting();
  loadActiveDay();
}

init();
