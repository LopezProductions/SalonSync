# 🎯 Dify Intent Prompts & Agent Flow

This file documents how Dify is used to classify user input, extract variables, and route to the correct automation flow.

## 🧠 Intent Detection Prompts
| Intent Name      | Trigger Examples                                 | Target Agent         |
|------------------|--------------------------------------------------|----------------------|
| `book_appointment` | "Can I book a cut at 2PM?" "Schedule me for Friday" | Booking Agent        |
| `ask_price`      | "How much is a fade?"                             | Service Agent        |
| `profile_update` | "Change my number"                                | Profile Agent        |

## 📦 Variables Extracted
| Variable         | Description                        |
|------------------|------------------------------------|
| `client_name`    | Name of the person                 |
| `service_type`   | Type of service requested          |
| `appointment_time` | Desired time and date            |
| `preferred_staff` | (Optional) stylist name           |

## 🧭 Agent Routing Logic
Input goes to a **Sys.Query** → classified via Intent Detection Agent → routed to specific agent.
