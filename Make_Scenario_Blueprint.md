
# 🔁 Make Scenario: SalonSync Booking Flow

This document outlines the recommended Make.com scenario for automating SalonSync bookings via Google Calendar and Notion.

---

## ✅ Scenario Name
**SalonSync: Google Calendar + Notion Sync**

---

## 🧩 Step-by-Step Modules

### 1. **Trigger: Webhooks by Make**
- Module: `Custom Webhook`
- Method: `POST`
- Name it: `SalonSync_Booking_Webhook`
- After creation, copy the webhook URL to your Dify HTTP Request Node

---

### 2. **Google Calendar: Create an Event**
- Module: `Google Calendar > Create an Event`
- Connect your Google account
- Fields to map:

| Field        | Value                                |
|--------------|--------------------------------------|
| Calendar     | (Choose calendar)                    |
| Summary      | `SalonSync: {{client_name}} – {{service_type}}` |
| Description  | `Booked via SalonSync – Status: {{booking_status}}` |
| Start Time   | `{{appointment_time}}`               |
| End Time     | `addMinutes(appointment_time; duration)` using Date/Time tools |

---

### 3. **Notion: Create a Database Item**
- Module: `Notion > Create a Database Item`
- Connect your Notion integration (must share DB with Make API)
- Map to a Notion database titled: `SalonSync Bookings`
- Fields:

| Notion Field      | Value                    |
|-------------------|--------------------------|
| Client Name       | `{{client_name}}`        |
| Service Type      | `{{service_type}}`       |
| Appointment Time  | `{{appointment_time}}`   |
| Booking Status    | `{{booking_status}}`     |
| Add-ons           | `{{add_ons}}`            |
| Duration          | `{{duration}}`           |
| Booked On         | *(auto-created)*         |

---

## 🧪 Sample Payload from Dify (HTTP Request Node)
```json
{
  "client_name": "Sarah Kim",
  "service_type": "Layered Cut",
  "appointment_time": "2024-08-16T13:00:00-04:00",
  "booking_status": "Confirmed",
  "add_ons": "Scalp Massage",
  "duration": 60
}
```

---

## 📌 Make Best Practices
- Use `Tools > Text > Split` if `add_ons` is comma-separated
- Use `Tools > Date/Time > Format` if your appointment_time is not ISO format
- Log errors using a Slack or Email module for failed bookings

---

## ✅ Success Output
- Google Calendar shows confirmed appointment
- Notion has logged entry with all metadata
- Optional: send confirmation via Gmail, SMS, or Slack
