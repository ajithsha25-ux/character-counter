## Character Counter (Textarea)

This feature allows users to type a message inside a textarea while displaying a **real-time character counter**.

### Features
- Displays the **maximum allowed characters (200)**.
- Updates the **character count in real-time** as the user types.
- Shows how many characters are **used and remaining**.
- Prevents users from typing **beyond the character limit**.
- Displays a **warning message** when the character limit is reached.

### How It Works
- A **textarea** is created where users can type their message.
- A **JavaScript event listener (`input`)** tracks every keystroke.
- The script counts the number of characters typed using `.length`.
- The counter updates dynamically in the format:# character-counter
