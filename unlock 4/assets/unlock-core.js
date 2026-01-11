/* UNLOCK 2026 — Advanced Streak System (v2)
   - Streak as currency with real power
   - Daily quest requirement
   - Streak shield (1x per week)
   - In-game multipliers
   - Emotional feedback
*/

(function () {
  const STORAGE_KEY = "unlock_user_v2";

  // ====== UTILITIES ======
  function pad2(n){ return String(n).padStart(2,"0"); }

  function todayStr(d=new Date()){
    return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
  }

  function parseYMD(s){
    if(!s || typeof s !== "string") return null;
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(!m) return null;
    const y = Number(m[1]), mo = Number(m[2]), da = Number(m[3]);
    return new Date(y, mo-1, da, 12, 0, 0, 0);
  }

  function daysBetween(aStr, bStr){
    const a = parseYMD(aStr), b = parseYMD(bStr);
    if(!a || !b) return null;
    const ms = 24*60*60*1000;
    return Math.round((b - a) / ms);
  }

  function randomId(){
    return "u_" + Math.random().toString(36).slice(2, 8) + Math.random().toString(36).slice(2, 6);
  }

  // ====== STORAGE ======
  function loadUser(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return null;
      return JSON.parse(raw);
    }catch(e){
      return null;
    }
  }

  function saveUser(u){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    return u;
  }

  function ensureUser(){
    let u = loadUser();
    if(!u || typeof u !== "object"){
      u = {
        id: randomId(),
        createdAt: Date.now(),
        streak: 0,
        maxStreak: 0,
        lastPlayDate: null,
        lastQuestDate: null,
        questCompleted: false,
        shieldCount: 1,
        lastShieldDate: null,
        totalOpens: 0,
        totalRounds: 0,
        levelsCompleted: { wordDrop: 0, wordMatch: 0, wordStack: 0 },
        badges: {}
      };
    }
    // Ensure badges object exists
    if(!u.badges || typeof u.badges !== "object"){
      u.badges = {};
    }
    return u;
  }

  // ====== STREAK LOGIC ======
  function updateStreakOnOpen(u){
    const today = todayStr();
    const last = u.lastPlayDate;

    if(last === today){
      return u;
    }

    if(!last){
      u.streak = 1;
    } else {
      const diff = daysBetween(last, today);
      if(diff === 1){
        u.streak = (u.streak || 0) + 1;
      } else if(diff > 1){
        // Quebrou a sequência - verificar se tem shield
        if(u.shieldCount > 0){
          u.shieldCount--;
          u.lastShieldDate = last;
          // Mantém streak
        } else {
          // Perdeu o streak
          u.streak = 1;
        }
      }
    }

    // Track max streak
    if(u.streak > (u.maxStreak || 0)){
      u.maxStreak = u.streak;
    }

    u.lastPlayDate = today;
    return u;
  }

  // ====== DAILY QUEST ======
  function resetDailyQuest(u){
    const today = todayStr();
    const lastQuest = u.lastQuestDate;

    if(lastQuest !== today){
      u.questCompleted = false;
      u.lastQuestDate = today;

      // Recarregar shield 1x por semana
      const lastShield = u.lastShieldDate ? parseYMD(u.lastShieldDate) : null;

      if(!lastShield || daysBetween(u.lastShieldDate, today) >= 7){
        u.shieldCount = Math.min((u.shieldCount || 0) + 1, 1);
      }
    }
    return u;
  }

  function completeQuest(u){
    u.questCompleted = true;
    u.totalRounds = (u.totalRounds || 0) + 1;
    return u;
  }

  function unlockBadge(u, badgeId, badgeData){
    // badgeId format: "wordDrop_aula01_perfect" or similar
    // badgeData: { icon, title, description, unlockedAt }
    if(!u.badges) u.badges = {};
    if(!u.badges[badgeId]){
      u.badges[badgeId] = {
        ...badgeData,
        unlockedAt: Date.now()
      };
      return true; // Novo badge desbloqueado
    }
    return false; // Badge já existia
  }

  function getBadges(u){
    return u.badges || {};
  }

  // ====== MULTIPLIERS ======
  function getStreakMultiplier(u){
    const streak = u.streak || 0;
    return 1 + (streak * 0.01);
  }

  function getUnlockedFeatures(u){
    const streak = u.streak || 0;
    const features = {
      extraOption: streak >= 3,
      betterAnimations: streak >= 5,
      turboMode: streak >= 7,
      secretLevels: streak >= 21,
      permanentBadge: streak >= 30
    };
    return features;
  }

  // ====== BOOT ======
  function boot(){
    let u = ensureUser();
    u.totalOpens = (u.totalOpens || 0) + 1;
    u = updateStreakOnOpen(u);
    u = resetDailyQuest(u);
    saveUser(u);
    return u;
  }

  // ====== UI ======
  function setText(selector, text){
    const el = document.querySelector(selector);
    if(el) el.textContent = text;
  }

  function updateBadgeCounter(){
    let u = loadUser();
    if(!u) u = ensureUser();
    const badges = getBadges(u);
    const badgeCount = Object.keys(badges).length;
    setText("#badgeCounterIndex", String(badgeCount));
  }

  function hydrateUI(u){
    const today = todayStr();
    const isToday = u.lastPlayDate === today;
    const questDone = u.questCompleted;

    setText("#unlockStreakValue", String(u.streak || 0));
    setText("#unlockMaxStreakValue", String(u.maxStreak || 0));
    setText("#unlockUserIdShort", (u.id || "").slice(0, 8));

    // Atualizar badge de streak
    const badge = document.querySelector("[data-unlock-streak]");
    if(badge){
      let badgeText = `🔥 ${u.streak || 0}`;

      if(!isToday){
        // Não abriu hoje
        const lastDate = u.lastPlayDate ? parseYMD(u.lastPlayDate) : null;
        const daysAgo = lastDate ? daysBetween(u.lastPlayDate, today) : null;

        if(daysAgo === 1){
          badgeText = `⚠️ ÚLTIMA CHANCE | 🔥 ${u.streak}`;
        } else if(daysAgo > 1){
          if(u.shieldCount > 0){
            badgeText = `❌ PROTEGIDO | 🔥 ${u.streak}`;
          } else {
            badgeText = `❄️ RECOMEÇAR | 🔥 0`;
          }
        }
      } else {
        if(!questDone){
          badgeText = `🔥 ${u.streak} | ⏳ Jogue hoje`;
        } else {
          badgeText = `✅ 🔥 ${u.streak}`;
        }
      }

      badge.textContent = badgeText;
    }

    // Shield indicator
    const shieldEl = document.querySelector("[data-unlock-shield]");
    if(shieldEl){
      shieldEl.textContent = `🛡️ ${u.shieldCount || 0}`;
    }

    // Features feedback
    const features = getUnlockedFeatures(u);
    const featureEl = document.querySelector("[data-unlock-features]");
    if(featureEl){
      const active = Object.entries(features)
        .filter(([_, v]) => v)
        .map(([k]) => k)
        .join(", ");
      featureEl.textContent = active || "Nenhuma feature desbloqueada";
    }
  }

  // ====== EXPOSE PUBLIC API ======
  window.UNLOCK = {
    boot,
    loadUser,
    saveUser,
    todayStr,
    completeQuest,
    getStreakMultiplier,
    getUnlockedFeatures,
    hydrateUI,
    unlockBadge,
    getBadges,
    updateBadgeCounter
  };

  document.addEventListener("DOMContentLoaded", function(){
    const u = boot();
    hydrateUI(u);
    updateBadgeCounter();
  });
})();
