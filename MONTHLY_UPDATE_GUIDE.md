# UNLOCK 2026 - Monthly Update Guide

This document explains **exactly where to edit files** each month to update your game content.

## Quick Summary
- **Classes & Word Pairs**: Located in three game files
- **Descriptions (Tooltips)**: Same files
- **One place to manage everything**: `/assets/game-data.js` (coming soon)

---

## Current File Locations

### 1. Word Match
**File**: `unlock 4/games/word-match.html`

- **Classes (AULAS)**: Line ~1158 - Large array with all 24 classes
- **Descriptions**: Line ~1389 - What students see on hover

**How to update**:
1. Find the `const AULAS = [` section
2. Edit class names, emojis, and word pairs
3. Edit the `AULA_DESCRIPTIONS` object with new Portuguese descriptions

---

### 2. Word Drop
**File**: `unlock 4/games/word-drop.html`

- **Classes (AULAS)**: Large array (similar structure to Word Match)
- **Descriptions**: Line ~2154 in `AULA_DESCRIPTIONS`

**Same process as Word Match** - just in a different file

---

### 3. Word Stack
**File**: `unlock 4/games/word-stack.html`

- **Classes (AULAS)**: Large array
- **Descriptions**: Line ~2154 in `AULA_DESCRIPTIONS`

**Same process as Word Match and Word Drop**

---

## Data Structure

### Class (AULAS array entry)
```javascript
{
  id: 1,
  title: 'IS / ARE',
  emoji: '🔵🟢',
  pairs: [
    { pt: 'ele está feliz', en: 'he is happy' },
    { pt: 'ela está triste', en: 'she is sad' },
    // ... more pairs
  ]
}
```

### Description (AULA_DESCRIPTIONS)
```javascript
1: "Domine o verbo 'to be' no presente. Aprenda a descrever estados...",
2: "Aprenda a contar e reconhecer números...",
```

---

## Step-by-Step: Monthly Update

### Example: Changing Class 1 (IS / ARE) for February

1. **Open**: `games/word-match.html`
2. **Find**: `const AULAS = [` (around line 1158)
3. **Edit the first class**:
   ```javascript
   {
     id: 1,
     title: 'IS / ARE - FEBRUARY CONTENT',
     emoji: '🔵🟢',
     pairs: [
       { pt: 'new portuguese phrase', en: 'new english phrase' },
       { pt: 'another portuguese phrase', en: 'another english phrase' },
       // Add up to 30 pairs
     ]
   }
   ```

4. **Update the description**:
   - Find: `AULA_DESCRIPTIONS = {`
   - Change ID 1: `1: "Domine o verbo 'to be' em fevereiro..."`

5. **Repeat for Word Drop and Word Stack** (same changes in those files)

---

## What You Can Change Each Month

✅ **Add new classes** - Add new entries to AULAS array (id: 25, 26, etc.)
✅ **Remove classes** - Delete entries from AULAS array
✅ **Change word pairs** - Edit the `pairs` array
✅ **Update descriptions** - Edit `AULA_DESCRIPTIONS` object
✅ **Change emojis** - Change the `emoji` field
✅ **Change class names** - Change the `title` field

---

## Example: Adding a New Class (February Update)

In all three game files (`word-match.html`, `word-drop.html`, `word-stack.html`):

**In AULAS array**:
```javascript
{
  id: 25,
  title: 'NEW CLASS NAME',
  emoji: '🎯',
  pairs: [
    { pt: 'phrase in portuguese', en: 'phrase in english' },
    { pt: 'another phrase', en: 'another english phrase' },
    // ... up to 30 pairs
  ]
}
```

**In AULA_DESCRIPTIONS**:
```javascript
25: "Description of what students will learn in this class..."
```

---

## Future: Centralized Data File

We have created `/assets/game-data.js` with all your data. Once we refactor the games to use this file, you'll only need to update ONE file instead of three.

For now:
- Keep using the three game files
- After refactoring → you can use just `game-data.js`

---

## Tips for Monthly Updates

1. **Backup first**: Before making big changes, save a copy of the file
2. **Test changes**: Open the game in your browser to verify updates work
3. **Consistent naming**: Keep class IDs sequential (1, 2, 3... not 1, 3, 5)
4. **Keep pairs**: Each class should have 20-30 word pairs for good gameplay
5. **Portuguese descriptions**: Always write 1-2 sentences in Portuguese for tooltips

---

## Files to Edit Each Month

| File | Purpose | Line |
|------|---------|------|
| `games/word-match.html` | Classes & descriptions | ~1158, ~1389 |
| `games/word-drop.html` | Classes & descriptions | (large AULAS), ~2154 |
| `games/word-stack.html` | Classes & descriptions | (large AULAS), ~2154 |

**Pro tip**: After you make changes in word-match.html, you can copy the same AULAS and AULA_DESCRIPTIONS to the other two files to keep them in sync.

---

## Questions?

- **Where is class 5 defined?** → In the `AULAS` array (find `id: 5`)
- **How do I add a new pair?** → Add `{ pt: '...', en: '...' }` to the `pairs` array
- **Can I change class emojis?** → Yes! Edit the `emoji` field
- **Can I reorder classes?** → Yes, but keep IDs the same (1, 2, 3...) for consistency
