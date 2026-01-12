# 🎯 How to Update Classes - NO CODING NEEDED

All your class data is in **ONE file**: `/assets/classes-data.json`

This is a simple text file. You just add/edit information like you would in a spreadsheet.

---

## 📋 What is a JSON File?

It's just organized data. Think of it like:

```
CLASS 1:
  Name: "IS / ARE"
  Emoji: "🔵🟢"
  Description: "Domine o verbo..."
  WORD PAIRS:
    - Portuguese: "ele está feliz" → English: "he is happy"
    - Portuguese: "ela está triste" → English: "she is sad"
    ...

CLASS 2:
  Name: "NUMBERS"
  ...
```

---

## 🔄 Monthly Update Process

### Step 1: Open the file
- Location: `assets/classes-data.json`
- Open with any text editor (VS Code, Notepad, TextEdit, etc.)

### Step 2: Find the class you want to update
```json
{
  "id": 1,
  "title": "IS / ARE",
  "emoji": "🔵🟢",
  "description": "Domine o verbo 'to be' no presente...",
  "pairs": [
    { "pt": "ele está feliz", "en": "he is happy" },
    { "pt": "ela está triste", "en": "she is sad" }
  ]
}
```

### Step 3: Edit what you need

**Change the name:**
```json
"title": "IS / ARE - FEBRUARY"
```

**Change the emoji:**
```json
"emoji": "🎯"
```

**Change the description:**
```json
"description": "New description here..."
```

**Add/edit word pairs:**
```json
"pairs": [
  { "pt": "new portuguese phrase", "en": "new english phrase" },
  { "pt": "another portuguese", "en": "another english" }
]
```

### Step 4: Save the file

That's it! The games will automatically load the new data.

---

## 📝 Template for a New Class

Want to add a new class? Just copy this template:

```json
{
  "id": 25,
  "title": "NEW CLASS NAME",
  "emoji": "🎯",
  "description": "What students will learn in Portuguese...",
  "pairs": [
    { "pt": "portuguese phrase 1", "en": "english phrase 1" },
    { "pt": "portuguese phrase 2", "en": "english phrase 2" },
    { "pt": "portuguese phrase 3", "en": "english phrase 3" },
    { "pt": "portuguese phrase 4", "en": "english phrase 4" },
    { "pt": "portuguese phrase 5", "en": "english phrase 5" },
    { "pt": "portuguese phrase 6", "en": "english phrase 6" },
    { "pt": "portuguese phrase 7", "en": "english phrase 7" },
    { "pt": "portuguese phrase 8", "en": "english phrase 8" }
  ]
}
```

Then add it to the `"classes": [` array in the JSON file, after the last class.

---

## ⚠️ Important Rules

**Keep these rules or it will break:**

1. **Every class needs:**
   - `"id"` (unique number: 1, 2, 3... 25)
   - `"title"` (class name)
   - `"emoji"` (pick any emoji)
   - `"description"` (what they'll learn)
   - `"pairs"` (word pairs)

2. **Each pair needs:**
   - `"pt"` (Portuguese)
   - `"en"` (English)

3. **Comma rules:**
   - Between items: use commas `,`
   - After last item: NO comma
   - Example:
     ```json
     "pairs": [
       { "pt": "phrase1", "en": "translation1" },  // comma here
       { "pt": "phrase2", "en": "translation2" }   // NO comma here (last item)
     ]
     ```

4. **Quotes matter:**
   - Always use `"double quotes"` around text
   - Not 'single quotes' or `backticks`

---

## 🧪 Quick Check

After editing, look for these signs it's correct:

✅ File opens without errors in your text editor
✅ Games load without warnings in browser console
✅ New classes appear in the game menu

❌ Red underlines in editor → Fix syntax
❌ Games don't load data → Check commas and quotes

---

## 🔧 Examples

### Example 1: Change Class 5 for February

Find Class 5:
```json
{
  "id": 5,
  "title": "GO / COME",
  "emoji": "🚶",
  "description": "Aprenda verbos direcionais...",
  "pairs": [...]
}
```

Change it to:
```json
{
  "id": 5,
  "title": "GO / COME - FEBRUARY EDITION",
  "emoji": "🚶‍♂️",
  "description": "New February description...",
  "pairs": [
    { "pt": "new pair 1", "en": "translation 1" },
    { "pt": "new pair 2", "en": "translation 2" },
    ...
  ]
}
```

### Example 2: Add a New Class for February

Add this to the end of the `"classes"` array:

```json
{
  "id": 25,
  "title": "VALENTINE'S DAY",
  "emoji": "💕",
  "description": "Aprenda frases de amor e romance para o dia de São Valentim...",
  "pairs": [
    { "pt": "eu te amo", "en": "i love you" },
    { "pt": "você é bonito", "en": "you are beautiful" },
    { "pt": "meu coração", "en": "my heart" },
    { "pt": "você é especial", "en": "you are special" },
    { "pt": "quero estar com você", "en": "i want to be with you" },
    { "pt": "você é meu amor", "en": "you are my love" },
    { "pt": "eu sou seu", "en": "i am yours" },
    { "pt": "juntos para sempre", "en": "together forever" }
  ]
}
```

Don't forget the comma after Class 24!

---

## 📱 How It Works

1. You edit `assets/classes-data.json`
2. Games load this file automatically
3. All 3 games (Word Match, Word Drop, Word Stack) use the same data
4. Changes appear instantly (just refresh the page)

---

## ❓ FAQ

**Q: Do I need to edit three game files?**
A: No! Just edit `classes-data.json` and all games update automatically.

**Q: How many pairs per class?**
A: 8+ pairs work best for gameplay. You can add more (up to 30) for better variety.

**Q: Can I remove a class?**
A: Yes, just delete that whole `{...}` block. Make sure you don't break the comma rules.

**Q: What if I mess up?**
A: The games will show an error in the browser console. Check your commas and quotes, or restore from a backup.

**Q: Can I add more than 24 classes?**
A: Yes! Use IDs 25, 26, 27... The games will show all of them.

---

## 💾 Backup Tip

Before major edits, copy your file:
- `classes-data.json` → `classes-data-FEBRUARY-BACKUP.json`

That way if something breaks, you have a backup to restore from.

---

## 🚀 You're Ready!

That's all you need. Every month:

1. Open `assets/classes-data.json`
2. Change the word pairs and descriptions
3. Save
4. Done!

No coding. No three files. Just one simple data file. 🎯
