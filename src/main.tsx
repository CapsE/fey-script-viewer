import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const code: string = `
# Allosaurus
_Large Beast (Dinosaur), Unaligned_

AC 13
Initiative +1 (11)

HP 51 (6d10+18)
Speed 60 ft.

| Attr | Value | Mod | Save |
| ---- | ----- | --- | ---- |
| Str | 19 | +4 | +4 |
| Dex | 13 | +1 | +1 |
| Con | 17 | +3 | +3 |
| Int | 2  | -4 | -4 |
| Wis | 12 | +1 | +1 |
| Char | 5 | -3 | -3 |

Skills Perception +5

Senses Passive Perception 15

Languages --

CR 2 (XP 450; PB +2)

## Actions
__Bite.__ Melee Attack Roll: +6, reach 5 ft. Hit: 15 (2d10 + 4) Piercing damage.

__Claws.__ Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Slashing damage. If the target is a Large or smaller creature and the allosaurus moved 30+ feet straight toward it immediately before the hit, the target has the Prone condition, and the allosaurus can make one Bite attack against it.

## Values
i[hp;{"value":51}]
i[initiative]
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App code={code} />
  </StrictMode>,
)
