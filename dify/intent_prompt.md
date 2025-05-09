# 🎯 Dify Intent Prompts & Agent Flow

This file documents how Dify is used to classify user input, extract variables, and route to the correct automation flow.

---

## 🧠 Intent Detection Prompts

Dify uses natural language classification to determine what the user wants to do.

| Intent Name      | Trigger Examples                                 | Target Agent         |
|------------------|--------------------------------------------------|----------------------|
| `book_appointment` | "Can I book a cut at 2PM?" "Schedule me for Friday" | Booking Agent        |
| `ask_price`      | "How much is a fade?" "What do you charge for color?" | Service Agent        |
| `profile_update` | "Change my number" "Update my name to Sarah"     | Profile Agent        |
| `cancel_booking` | "Cancel my appointment on Saturday"             | Booking Agent        |
| `reschedule`     | "Move my appointment to next week"              | Booking Agent        |

---

## 📦 Variables Extracted

Each intent captures key entities from the message:

| Variable         | Description                        | Example Value      |
|------------------|------------------------------------|--------------------|
| `client_name`    | Name of the person                 | "Sarah Kim"        |
| `service_type`   | Type of service requested          | "fade + wash"      |
| `appointment_time` | Desired time and date            | "Thursday at 2 PM" |
| `preferred_staff` | (Optional) stylist name           | "Jay"              |
| `special_requests` | Notes like allergies or styles   | "Layered cut only" |

---

## 🧭 Agent Routing Logic

1. Input goes to a **Sys.Query** node.
2. `Intent Detection Agent` classifies the message.
3. Based on `intent_name`, the message routes to:
   - `Booking Agent`
   - `Service Agent`
   - `User Profile Agent`

Each of these agents:
- Fills out structured variables
- Returns a `final_response`
- Triggers downstream webhook if booking-related

---

## 🛠️ To Do
- [ ] Add screenshots or flow diagram to `/assets/images/`
- [ ] Link this file in `README.md`
