
# 💈 SalonSync AI Booking System

SalonSync is an AI-driven appointment scheduling and customer experience system built using Dify, Make.com, Notion, and Google Calendar.

This repo contains the templates and setup instructions for the back-office integrations that power automated bookings, profile handling, and service logic.

---

## 🔗 System Overview

### 🧠 Built With:
- **Dify**: Handles user input, intent detection, and smart agent logic
- **Make.com**: Executes bookings via Google Calendar and syncs with Notion
- **Notion**: Acts as the backend CRM and analytics dashboard
- **Google Calendar**: Where appointments are confirmed and shared

---

## 📅 What It Does:
- Classifies messages like "Book me at 1 PM" or "What's the price of a fade?"
- Extracts user details and service types
- Routes requests to the correct agent
- Books the appointment via Make.com + Google Calendar
- Stores a full booking log in Notion
- Tracks usage analytics (e.g., service popularity, client frequency)

---

## 📋 Files in This Repo

| File | Description |
|------|-------------|
| `SalonSync_Notion_Template.md` | Full markdown guide to recreate the Notion booking database |
| `Make_Scenario_Blueprint.md` (coming soon) | Overview of Make.com webhook, calendar event, and Notion sync |

---

## 🧱 Notion Integration

> See [`SalonSync_Notion_Template.md`](./SalonSync_Notion_Template.md)

Set up your Notion database to store:
- Client names
- Appointment times
- Services booked
- Booking status
- Add-ons
- Duration
- Created time

Use saved views to analyze trends like:
- Most booked service
- Weekly booking traffic
- Failed attempts

---

## 🔁 Make.com Automation

After a booking is confirmed in Dify, an **HTTP Request node** sends the result to a **Make.com webhook**. The Make scenario:
1. Adds the booking to Google Calendar
2. Logs the entry into Notion

---

## 📦 Future Add-Ons
- SMS or email reminders via Twilio or Gmail
- Auto rebooking prompts based on appointment history
- Stylist-specific schedule handling

---

## ✨ Contributing
Want to contribute templates, prompt updates, or Make scenarios? Feel free to fork or open a pull request!

---
