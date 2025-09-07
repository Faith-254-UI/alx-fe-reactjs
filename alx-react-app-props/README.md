# Refactor Prop Drilling to Use Context API

This project demonstrates how to refactor a React application that originally used **prop drilling** to manage user data across multiple components, and instead use the **Context API**.

---

## ✅ Checks Implemented

### 1. `UserContext.js` file
- Created `UserContext.js` in the `src/` directory.
- Properly initialized using `React.createContext()`.

```javascript
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
