# 🔁 Make.com Automation Steps

This file outlines the full Make.com automation flow triggered by Dify after a booking intent is detected.

## ✅ Overview
Dify → Webhook → Make.com → Google Calendar + Notion → (optional: SMS/Email)

## 🔗 Step-by-Step Automation Flow

### 1. Webhook Trigger
Receives JSON payload with client, time, service, etc.

### 2. Google Calendar
Creates new event with title and time block.

### 3. Notion Logging
Creates CRM entry in Notion with appointment data.

### 4. Optional: SMS/Email
Confirmation message sent via Twilio or Gmail.
