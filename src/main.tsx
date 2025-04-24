import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const code: string = `
**The Green Prince**
====================

_A Feywild-Inspired One-Shot Adventure for 3–5 Characters (Level 3–5)_

**Summary**
-----------

The quiet village of Emmendingen is being swallowed by wild, overgrown plants. Trees burst from the soil, vines choke buildings, and crops rot beneath tangled roots. The cause? A mischievous fey known as **The Green Prince**, recently freed from his prison by accident. He now delights in chaos, watching mortals struggle against nature gone mad.

The party must uncover the truth, gather tools to fight back, and seal the Green Prince once more between the **Standing Stones** before the village is lost to the forest forever.

**Hooks**
---------

*   The party is summoned by Emmendingen’s elders for aid against the mysterious overgrowth.
    
*   A friend or contact (perhaps Angelique) has gone missing or is acting strangely.
    
*   A local druid sends for help, warning of a fey presence gone rogue.
    

**Key NPCs**
------------

### **Angelique**

A dreamy young villager who accidentally freed the Green Prince. Since meeting him, she’s been entranced, unable to focus or work. The village hunters are nearly out of arrows without her help, threatening their food supply.

### **Elistor Harthammer**

A lumberjack who once wished the trees would grow faster to shorten his commute. The Prince granted his wish—with terrifying results.

### **Viola Messandra**

A bard who wished woodland creatures would join in her songs. Now, every time she opens her mouth, a cacophony of animal noises erupts.

### **Gründam Baumvogel**

An old, slightly bumbling druid brought from the forest to advise the villagers. Though magically weak, he is a font of knowledge about Fey creatures and their weaknesses.

**Adventure Outline**
---------------------

### **Part 1: The Boar Attack**

As the party arrives, the village is under attack by **wild boars** twisted by fey magic. During the fight, eerie laughter echoes through the trees—an unsettling introduction to the Green Prince.

### **Part 2: Clues and Connections**

The players investigate:

*   **Angelique**’s dazed state and her story of meeting a charming man in the woods.
    
*   **Viola’s cursed singing** and **Elistor’s overgrown commute**—both linked to whispered wishes.
    
*   **Gründam** explains the nature of the Fey and the old prison of the Green Prince: the **Standing Stones**.
    

### **Part 3: The Fairy Lotus**

To reveal the Green Prince’s true form, the party must harvest a rare **Fairy Lotus** at midnight in a glowing Fey-lit glade. The area is guarded by minor Fey creatures like **Will-o’-Wisps** or **Pixies** with mischief in mind.

### **Part 4: The Iron Chains**

Fey are vulnerable to cold iron. A ruined forge deep in the woods holds **ancient iron chains** blessed for binding fey. The forge may be haunted or protected by a nature spirit still loyal to the Prince.

### **Part 5: Confrontation**

The players confront the Green Prince:

*   They can **bait him** into following them to the Standing Stones with trickery or diplomacy.
    
*   Or, they can **ambush and bind** him with the iron chains.
    
*   Either way, once he’s inside the circle, a **ritual** (known to Gründam or found on an old scroll) must be performed to imprison him again.
    

**The Green Prince (Stat Block)**
---------------------------------

Treat as an **Archfey Warlock** or **custom fey sorcerer** with charm, illusion, and plant-themed abilities. Focus on mobility, illusions, and battlefield control (like _Entangle_, _Plant Growth_, and _Misty Step_).

**Conclusion**
--------------

With the Green Prince sealed once more, the plants slowly recede, though remnants of magic may linger. The villagers have learned to be careful what they wish for—and the party leaves behind grateful hearts and a wary peace.
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App code={code} />
  </StrictMode>,
)
