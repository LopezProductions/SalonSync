# 💈 SalonSync AI Booking System

SalonSync is an AI-driven appointment scheduling and customer experience system built using Dify, Make.com, Notion, and Google Calendar.

This repo contains the templates and setup instructions for the back-office integrations that power automated bookings, profile handling, and service logic.

## 🔗 System Overview

### 🧠 Built With:
- **Dify**: Handles user input, intent detection, and smart agent logic
- **Make.com**: Executes bookings via Google Calendar and syncs with Notion
- **Notion**: Acts as the backend CRM and analytics dashboard
- **Google Calendar**: Where appointments are confirmed and shared

### 📅 What It Does:
- Classifies messages like "Book me at 1 PM"
- Extracts user details and service types
- Routes requests to the correct agent
- Books the appointment via Make.com + Google Calendar
- Stores a full booking log in Notion
- Tracks usage analytics

### 📋 Files in This Repo
- [SalonSync Notion Template](docs/SalonSync_Notion_Template.md)
- [Make Scenario Setup](docs/Make_Scenario_Blueprint.md)
- [Dify Prompts + Agent Flow](dify/intents_prompt.md)
- [Make Automation Steps](make/Make_Automation_Steps.md)

## 🌐 Live Docs

👉 [View the full documentation](https://salonsync.xyz)
