
# 📋 SalonSync Bookings – Notion Template (Markdown Version)

Create a Notion database titled **SalonSync Bookings** with the following structure:

---

## ✅ Column Setup

| Column Name         | Type          | Notes |
|---------------------|---------------|-------|
| `Client Name`       | Title         | Primary column (name of client) |
| `Service Type`      | Text          | e.g. “Fade”, “Layered Cut” |
| `Appointment Time`  | Date & Time   | Enable 'Include time' |
| `Booking Status`    | Select        | Options: Confirmed, Unavailable |
| `Add-ons`           | Multi-select  | Options: Scalp Massage, Beard Trim |
| `Duration`          | Number        | Unit: minutes |
| `Booked On`         | Created Time  | Auto-fills when new entry is created |

---

## 🧠 Optional Columns

| Column              | Type          | Description |
|---------------------|---------------|-------------|
| `Preferred Stylist` | Text          | Add stylist names if desired |
| `Notified`          | Checkbox      | For follow-up tracking |
| `Notes`             | Text          | For custom requests or reminders |

---

## 🔍 Example Entry

| Client Name | Service Type | Appointment Time       | Booking Status | Add-ons       | Duration | Booked On           |
|-------------|--------------|------------------------|----------------|---------------|----------|----------------------|
| Sarah Kim   | Layered Cut  | Aug 16, 2024 @ 1:00 PM | Confirmed      | Scalp Massage | 60       | Auto-generated       |

---

## 📊 Suggested Notion Views

### 1. This Week's Bookings
- **Type**: Calendar
- **Filter**: `Appointment Time is within this week`

### 2. Most Popular Services
- **Type**: Table or Grouped View
- **Group by**: `Service Type`

### 3. Failed Bookings
- **Type**: Table
- **Filter**: `Booking Status = Unavailable`

---

## 🧩 Use with Make.com

Once built, this Notion database can be auto-filled from Make.com using the **Create Database Item** module.

Map these fields:
- `Client Name`
- `Service Type`
- `Appointment Time`
- `Booking Status`
- `Add-ons`
- `Duration`
