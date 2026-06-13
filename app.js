const targets = {
  kcal: 2400,
  protein: 110,
  carbs: 330,
  fat: 60,
};

const foods = [
  {
    id: "beef-shank",
    name: "牛腱子肉",
    caution: "尿酸/LDL偏高，每周0-1次",
    raw: { kcal: 130, protein: 21, carbs: 0, fat: 4 },
    cooked: { kcal: 200, protein: 34, carbs: 0, fat: 6 },
  },
  {
    id: "chicken-leg",
    name: "去皮鸡腿肉",
    raw: { kcal: 120, protein: 19, carbs: 0, fat: 4 },
    cooked: { kcal: 178, protein: 25, carbs: 0, fat: 8 },
  },
  {
    id: "egg",
    name: "鸡蛋全蛋",
    raw: { kcal: 143, protein: 12.6, carbs: 0.7, fat: 9.5 },
    cooked: { kcal: 143, protein: 12.6, carbs: 0.7, fat: 9.5 },
  },
  {
    id: "egg-white",
    name: "蛋清",
    raw: { kcal: 52, protein: 10.9, carbs: 0.7, fat: 0.2 },
    cooked: { kcal: 52, protein: 10.9, carbs: 0.7, fat: 0.2 },
  },
  {
    id: "salmon",
    name: "三文鱼",
    caution: "每周1-2次，晚餐少放油",
    raw: { kcal: 208, protein: 20, carbs: 0, fat: 13 },
    cooked: { kcal: 206, protein: 23, carbs: 0, fat: 12 },
  },
  {
    id: "basa",
    name: "巴沙鱼/白鱼",
    caution: "冷冻含水量差异大，包装优先",
    raw: { kcal: 92, protein: 16, carbs: 0, fat: 2.5 },
    cooked: { kcal: 118, protein: 20, carbs: 0, fat: 3 },
  },
  {
    id: "rice",
    name: "白米饭/大米",
    raw: { kcal: 365, protein: 7, carbs: 80, fat: 0.7 },
    cooked: { kcal: 130, protein: 2.7, carbs: 28, fat: 0.3 },
  },
  {
    id: "white-bread",
    name: "白面包",
    raw: { kcal: 265, protein: 9, carbs: 49, fat: 3.2 },
    cooked: { kcal: 265, protein: 9, carbs: 49, fat: 3.2 },
  },
  {
    id: "whole-wheat-bread",
    name: "全麦面包",
    raw: { kcal: 252, protein: 12, carbs: 43, fat: 3.5 },
    cooked: { kcal: 252, protein: 12, carbs: 43, fat: 3.5 },
  },
  {
    id: "alkaline-noodle",
    name: "碱水面/中式面条",
    raw: { kcal: 350, protein: 11, carbs: 73, fat: 1.5 },
    cooked: { kcal: 140, protein: 4.5, carbs: 28, fat: 1 },
  },
  {
    id: "low-fat-milk",
    name: "低脂牛奶",
    raw: { kcal: 46, protein: 3.4, carbs: 5, fat: 1.5 },
    cooked: { kcal: 46, protein: 3.4, carbs: 5, fat: 1.5 },
  },
  {
    id: "low-fat-yogurt",
    name: "低脂酸奶",
    raw: { kcal: 63, protein: 5.3, carbs: 7, fat: 1.6 },
    cooked: { kcal: 63, protein: 5.3, carbs: 7, fat: 1.6 },
  },
  {
    id: "tofu",
    name: "豆腐",
    raw: { kcal: 85, protein: 8, carbs: 2, fat: 5 },
    cooked: { kcal: 85, protein: 8, carbs: 2, fat: 5 },
  },
  {
    id: "oats",
    name: "燕麦片",
    raw: { kcal: 389, protein: 17, carbs: 66, fat: 7 },
    cooked: { kcal: 71, protein: 2.5, carbs: 12, fat: 1.5 },
  },
];

const mealPlan = [
  {
    id: "breakfast",
    title: "08:00 早餐",
    text: "燕麦70g或全麦面包2片；低脂奶250ml；全蛋1个+蛋清2个；水果1份。",
    macros: "蛋白约30g · 碳水40-55g",
  },
  {
    id: "lunch",
    title: "12:30 午餐",
    text: "熟米饭250-300g；去皮鸡腿/鸡胸120-150g或豆腐250g；蔬菜300g；油8-10g。",
    macros: "蛋白35-45g · 碳水70-85g",
  },
  {
    id: "snack",
    title: "16:30 训练前加餐",
    text: "低脂酸奶200g或牛奶250ml；红薯150g/面包1-2片/香蕉1根。",
    macros: "蛋白8-15g · 碳水35-55g",
  },
  {
    id: "dinner",
    title: "20:00 晚餐",
    text: "熟米饭250g或熟面250g；巴沙鱼150g熟重/去皮鸡腿120g熟重/豆腐250g；蔬菜300g。",
    macros: "蛋白35-45g · 碳水65-75g",
  },
  {
    id: "water",
    title: "全天饮水",
    text: "至少2.5L，训练/游泳日约3L。避免酒精、含糖饮料、浓肉汤。",
    macros: "高尿酸重点",
  },
];

const trainingPlans = {
  pull: {
    label: "周一 拉：背+二头",
    items: [
      "高位下拉或辅助引体 3组 x 8-12次",
      "坐姿划船 3组 x 8-12次",
      "单臂哑铃划船 2组 x 10-12次/侧",
      "哑铃弯举 3组 x 10-15次",
      "锤式弯举 2组 x 10-15次",
      "面拉 2组 x 12-20次",
      "直腿/屈膝小腿拉伸 各2组 x 45-60秒",
    ],
  },
  push: {
    label: "周二 推：胸+肩+三头",
    items: [
      "平板哑铃卧推 3组 x 8-10次",
      "上斜哑铃卧推 3组 x 8-12次",
      "俯卧撑或器械推胸 2组",
      "哑铃肩推 2-3组 x 8-12次",
      "侧平举 2-3组 x 12-20次",
      "绳索下压 2组 x 10-15次",
    ],
  },
  swim: {
    label: "周三 游泳+活动度",
    items: [
      "自由泳/仰泳 20-30分钟，轻中等强度",
      "不做蝶泳、冲刺、长时间抬头蛙泳",
      "腓肠肌拉伸 3组 x 45秒/侧",
      "比目鱼肌拉伸 3组 x 45秒/侧",
      "鸟狗或死虫 2组 x 8-10次/侧",
    ],
  },
  legs: {
    label: "周四 腿+小腿，腰椎友好",
    items: [
      "腿举或轻深蹲 3组 x 8-12次",
      "臀桥/臀推 3组 x 8-12次",
      "腿弯举 3组 x 10-15次",
      "站姿提踵 3组 x 10-15次，底部停2秒",
      "坐姿提踵 2组 x 12-20次",
      "胫骨前肌抬脚 3组 x 15-25次",
      "侧桥 2-3组 x 20-40秒/侧",
    ],
  },
  upper: {
    label: "周五 上肢综合",
    items: [
      "高位下拉/辅助引体 3组 x 8-12次",
      "哑铃卧推或器械推胸 3组 x 8-12次",
      "胸托划船或坐姿划船 3组 x 8-12次",
      "绳索夹胸/哑铃飞鸟 2组 x 12-15次",
      "反握下拉 2组 x 10-12次",
      "二头弯举 2组 x 10-15次",
    ],
  },
  recovery: {
    label: "周末 恢复/轻松游",
    items: [
      "轻松游泳 30-40分钟，或快走30-45分钟",
      "腰背不加重、无腿麻、第二天不恶化",
      "小腿拉伸 8-10分钟",
      "完全休息也可以，睡眠优先",
    ],
  },
};

const storagePrefix = "linghu-fitness-checkin";

const $ = (selector) => document.querySelector(selector);

const state = {
  date: today(),
  entry: defaultEntry(),
};

function today() {
  const date = new Date();
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function defaultEntry() {
  return {
    meals: {},
    training: {},
    foods: [],
    trainingDay: "pull",
    notes: "",
    weight: "",
    waist: "",
    backPain: "",
    water: "",
  };
}

function keyFor(date) {
  return `${storagePrefix}:${date}`;
}

function loadEntry(date) {
  try {
    return { ...defaultEntry(), ...JSON.parse(localStorage.getItem(keyFor(date)) || "{}") };
  } catch {
    return defaultEntry();
  }
}

function saveEntry() {
  localStorage.setItem(keyFor(state.date), JSON.stringify(state.entry));
  $("#save-state").textContent = `已自动保存 ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`;
}

function round(value) {
  return Math.round(value * 10) / 10;
}

function scale(food, grams, stateName) {
  const basis = food[stateName] || food.cooked;
  const factor = Number(grams) / 100;
  return {
    kcal: round(basis.kcal * factor),
    protein: round(basis.protein * factor),
    carbs: round(basis.carbs * factor),
    fat: round(basis.fat * factor),
  };
}

function totals() {
  return state.entry.foods.reduce(
    (sum, item) => {
      sum.kcal += item.kcal;
      sum.protein += item.protein;
      sum.carbs += item.carbs;
      sum.fat += item.fat;
      return sum;
    },
    { kcal: 0, protein: 0, carbs: 0, fat: 0 },
  );
}

function renderMacroProgress() {
  const current = totals();
  const labels = [
    ["kcal", "热量", "kcal", targets.kcal, varColor(current.kcal / targets.kcal)],
    ["protein", "蛋白质", "g", targets.protein, varColor(current.protein / targets.protein)],
    ["carbs", "碳水", "g", targets.carbs, varColor(current.carbs / targets.carbs)],
    ["fat", "脂肪", "g", targets.fat, varColor(current.fat / targets.fat)],
  ];
  $("#macro-progress").innerHTML = labels
    .map(([key, label, unit, target, color]) => {
      const value = round(current[key]);
      const pct = Math.min((value / target) * 100, 140);
      return `
        <article class="macro-card">
          <div class="macro-line">
            <span>${label}</span>
            <strong>${value} / ${target} ${unit}</strong>
          </div>
          <div class="bar" style="--bar-color:${color}">
            <span style="--value:${pct}%"></span>
          </div>
        </article>
      `;
    })
    .join("");
}

function varColor(ratio) {
  if (ratio > 1.15) return "var(--red)";
  if (ratio > 0.9) return "var(--green)";
  if (ratio > 0.65) return "var(--gold)";
  return "var(--blue)";
}

function renderMeals() {
  $("#meal-list").innerHTML = mealPlan
    .map((meal) => {
      const checked = state.entry.meals[meal.id] ? "checked" : "";
      return `
        <article class="check-card">
          <label class="check-row">
            <input type="checkbox" data-meal="${meal.id}" ${checked} />
            <span>
              <h3>${meal.title}</h3>
              <p>${meal.text}</p>
              <div class="meal-meta"><span>${meal.macros}</span></div>
            </span>
          </label>
        </article>
      `;
    })
    .join("");
}

function renderFoodOptions() {
  $("#food-select").innerHTML = foods.map((food) => `<option value="${food.id}">${food.name}</option>`).join("");
}

function renderFoodLog() {
  const tbody = $("#food-log");
  if (!state.entry.foods.length) {
    tbody.innerHTML = `<tr><td colspan="7">还没有记录实际摄入。添加一项后会自动计算。</td></tr>`;
    return;
  }
  tbody.innerHTML = state.entry.foods
    .map(
      (item, index) => `
      <tr>
        <td>${item.name}</td>
        <td>${item.grams}g · ${item.stateName === "raw" ? "生/干" : "熟"}</td>
        <td>${item.protein}g</td>
        <td>${item.carbs}g</td>
        <td>${item.fat}g</td>
        <td>${item.kcal}kcal</td>
        <td><button class="delete-button" data-delete="${index}" type="button">删除</button></td>
      </tr>
    `,
    )
    .join("");
}

function renderTrainingSelect() {
  $("#training-day").innerHTML = Object.entries(trainingPlans)
    .map(([id, plan]) => `<option value="${id}">${plan.label}</option>`)
    .join("");
  $("#training-day").value = state.entry.trainingDay;
}

function renderTraining() {
  const plan = trainingPlans[state.entry.trainingDay];
  $("#training-list").innerHTML = plan.items
    .map((item, index) => {
      const id = `${state.entry.trainingDay}:${index}`;
      const checked = state.entry.training[id] ? "checked" : "";
      return `
        <label class="training-item check-row">
          <input type="checkbox" data-training="${id}" ${checked} />
          <span>
            <p>${item}</p>
          </span>
        </label>
      `;
    })
    .join("");
}

function renderNotes() {
  $("#weight").value = state.entry.weight;
  $("#waist").value = state.entry.waist;
  $("#back-pain").value = state.entry.backPain;
  $("#water").value = state.entry.water;
  $("#notes").value = state.entry.notes;
}

function renderAll() {
  renderMacroProgress();
  renderMeals();
  renderFoodOptions();
  renderFoodLog();
  renderTrainingSelect();
  renderTraining();
  renderNotes();
}

function bindEvents() {
  $("#entry-date").addEventListener("change", (event) => {
    state.date = event.target.value;
    state.entry = loadEntry(state.date);
    renderAll();
  });

  $("#meal-list").addEventListener("change", (event) => {
    const id = event.target.dataset.meal;
    if (!id) return;
    state.entry.meals[id] = event.target.checked;
    saveEntry();
  });

  $("#food-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const food = foods.find((item) => item.id === $("#food-select").value);
    const grams = Number($("#food-grams").value);
    const stateName = $("#food-state").value;
    if (!food || !grams) return;
    const macros = scale(food, grams, stateName);
    state.entry.foods.push({
      id: food.id,
      name: food.name,
      grams,
      stateName,
      ...macros,
    });
    saveEntry();
    renderFoodLog();
    renderMacroProgress();
  });

  $("#food-log").addEventListener("click", (event) => {
    const index = event.target.dataset.delete;
    if (index === undefined) return;
    state.entry.foods.splice(Number(index), 1);
    saveEntry();
    renderFoodLog();
    renderMacroProgress();
  });

  $("#training-day").addEventListener("change", (event) => {
    state.entry.trainingDay = event.target.value;
    saveEntry();
    renderTraining();
  });

  $("#training-list").addEventListener("change", (event) => {
    const id = event.target.dataset.training;
    if (!id) return;
    state.entry.training[id] = event.target.checked;
    saveEntry();
  });

  ["weight", "waist", "back-pain", "water", "notes"].forEach((id) => {
    $(`#${id}`).addEventListener("input", (event) => {
      const key = id === "back-pain" ? "backPain" : id;
      state.entry[key] = event.target.value;
      saveEntry();
    });
  });

  $("#export-json").addEventListener("click", () => {
    const all = {};
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key && key.startsWith(`${storagePrefix}:`)) {
        all[key.replace(`${storagePrefix}:`, "")] = JSON.parse(localStorage.getItem(key));
      }
    }
    const blob = new Blob([JSON.stringify(all, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "fitness-checkin-records.json";
    anchor.click();
    URL.revokeObjectURL(url);
  });
}

function init() {
  $("#entry-date").value = state.date;
  state.entry = loadEntry(state.date);
  renderAll();
  bindEvents();
}

init();
