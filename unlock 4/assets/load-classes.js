/**
 * Load Classes Data
 *
 * This script loads class data from classes-data.json
 * and makes it available to all games
 */

let AULAS = [];
let AULA_DESCRIPTIONS = {};

// Fetch and load the classes data
async function loadClassesData() {
  try {
    const response = await fetch('../assets/classes-data.json');
    if (!response.ok) {
      throw new Error('Failed to load classes-data.json');
    }

    const data = await response.json();

    // Convert to AULAS array format
    AULAS = data.classes.map(cls => ({
      id: cls.id,
      title: cls.title,
      emoji: cls.emoji,
      pairs: cls.pairs,
      sentences: cls.pairs.map(p => p.en) // For compatibility
    }));

    // Build descriptions object
    AULA_DESCRIPTIONS = {};
    data.classes.forEach(cls => {
      AULA_DESCRIPTIONS[cls.id] = cls.description;
    });

    console.log('✅ Classes loaded successfully!');
    console.log(`📚 Loaded ${AULAS.length} classes`);

    return { AULAS, AULA_DESCRIPTIONS };
  } catch (error) {
    console.error('❌ Error loading classes:', error);
    // Fallback to empty arrays if loading fails
    return { AULAS: [], AULA_DESCRIPTIONS: {} };
  }
}

// Load on page load
document.addEventListener('DOMContentLoaded', loadClassesData);

// Also expose it globally in case it's needed
window.loadClassesData = loadClassesData;
window.getAulas = () => AULAS;
window.getDescriptions = () => AULA_DESCRIPTIONS;
