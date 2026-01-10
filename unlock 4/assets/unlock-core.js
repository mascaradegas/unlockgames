/* UNLOCK 2026 — localStorage user + streak (v1)
   - No login
   - Streak increments once per calendar day when the app is opened
   - Uses the user's local device date (recommended for MVP)
*/

(function () {
  const STORAGE_KEY = "unlock_user_v1";

  function pad2(n){ return String(n).padStart(2,"0"); }

  function todayStr(d=new Date()){
    return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
  }

  function parseYMD(s){
    // s = YYYY-MM-DD
    if(!s || typeof s !== "string") return null;
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(!m) return null;
    const y = Number(m[1]), mo = Number(m[2]), da = Number(m[3]);
    return new Date(y, mo-1, da, 12, 0, 0, 0); // noon avoids DST edge cases
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
        lastPlayDate: null,
        totalOpens: 0,
        totalRounds: 0,
        levelsCompleted: { wordDrop: 0, wordMatch: 0, wordStack: 0 }
      };
    }
    return u;
  }

  function updateStreakOnOpen(u){
    const today = todayStr();
    const last = u.lastPlayDate;

    if(last === today){
      // already counted today
      return u;
    }

    if(!last){
      u.streak = 1;
    } else {
      const diff = daysBetween(last, today);
      if(diff === 1){
        u.streak = (u.streak || 0) + 1;
      } else {
        u.streak = 1;
      }
    }

    u.lastPlayDate = today;
    return u;
  }

  function boot(){
    let u = ensureUser();
    u.totalOpens = (u.totalOpens || 0) + 1;
    u = updateStreakOnOpen(u);
    saveUser(u);
    return u;
  }

  function setText(selector, text){
    const el = document.querySelector(selector);
    if(el) el.textContent = text;
  }

  function hydrateUI(u){
    // Any element with these IDs will be updated if present
    setText("#unlockStreakValue", String(u.streak || 0));
    setText("#unlockUserIdShort", (u.id || "").slice(0, 8));
    // app bar compact streak badge
    const badge = document.querySelector("[data-unlock-streak]");
    if(badge) badge.textContent = `🔥 ${u.streak || 0}`;
  }

  window.UNLOCK = {
    boot,
    loadUser,
    saveUser,
    todayStr
  };

  document.addEventListener("DOMContentLoaded", function(){
    const u = boot();
    hydrateUI(u);
  });
})();
