---
title: SalonSync
layout: default
---

<!-- 
  1. Hide the built‑in Cayman “hero” banner
  2. Draw your own custom header (dark) 
-->
<style>
/* 1) Remove the theme’s blue gradient banner */
.hero {
  display: none !important;
}

/* 2) Custom header styling */
header.custom-header {
  background-color: #121212;
  color: #F3F3F3;
  text-align: center;
  padding: 4rem 1rem;
}
header.custom-header h1 {
  margin: 0;
  font-size: 2.5rem;
  color: #D72638;
}
header.custom-header p {
  margin: 0.5rem 0;
  opacity: 0.8;
}
header.custom-header a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #D72638;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
}
</style>

<header class="custom-header">
  <!-- 3) Use a relative path so it resolves on GitHub Pages -->
  <img src="assets/images/logo.png" alt="SalonSync Logo" width="150" style="margin-bottom:1rem;" />
  <h1>SalonSync</h1>
  <p>AI booking system for barbers & stylists</p>
  <a href="https://github.com/LopezProductions/SalonSync" target="_blank">
    View on GitHub
  </a>
</header>

<section>
## 📖 Documentation

- [Dify Intent Setup](/dify/intents_prompt.md)  
- [Make.com Automation Steps](/make/Make_Automation_Steps.md)  
- [Notion Template Guide](/docs/SalonSync_Notion_Template.md)  
- [Make Scenario Blueprint](/docs/Make_Scenario_Blueprint.md)  
- [Contributing Guidelines](/CONTRIBUTING.md)  
</section>

<section>
## 🔧 System Stack

| Tool             | Function                              |
|------------------|---------------------------------------|
| **Dify**         | Classifies input & handles agents     |
| **Make.com**     | Executes bookings & syncs data        |
| **Notion**       | Stores CRM data and analytics         |
| **Google Calendar** | Manages confirmed appointments     |
</section>
