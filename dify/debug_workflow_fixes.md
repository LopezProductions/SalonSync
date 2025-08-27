# 🔧 Dify Workflow Debug Guide

## 🚨 Current Issues

### 1. Variable Reference Problems
- Hardcoded IDs like `{{#1739997745812.final_response#}}` may not match actual node outputs
- Agent outputs not properly connected to Conclusion Agent

### 2. Agent Output Variables
Current agents output these variables:
- `book_response` (from Booking Agent)
- `pricing_response` (from Service Agent) 
- `profiling_response` (from Profile Agent)
- `total_price` (from Service Agent)
- `special_requests` (from Profile Agent)

### 3. Knowledge Retrieval Issues
- Knowledge Retrieval node connected but may not provide relevant data
- Service Agent may not be getting pricing information from RAG

## 🔧 Fixes Required

### Fix 1: Update Conclusion Agent Variables
Replace the current variable references with:

```json
{
  "book_response": "{{#17447761097130.text#}}",
  "pricing_response": "{{#17448377239020.text#}}", 
  "profiling_response": "{{#17447760972560.text#}}",
  "total_price": "{{#17448377239020.price#}}",
  "special_requests": "{{#17447760972560.special_requests#}}"
}
```

### Fix 2: Verify Agent Outputs
Each agent should output to a specific variable:

**Booking Agent (17447761097130):**
- Output: `book_response` = "You're booked with Joe on Saturday at 10 AM."

**Service Agent (17448377239020):**
- Output: `pricing_response` = "A fade is $25—clippers as usual?"
- Output: `price` = "25"

**Profile Agent (17447760972560):**
- Output: `profiling_response` = "Updated your profile with new preferences."
- Output: `special_requests` = "Prefers clippers over scissors"

### Fix 3: Update Answer Node
The Answer node should reference:
```json
{
  "answer": "{{#17404285543240.final_response#}}"
}
```

### Fix 4: Test Knowledge Retrieval
Ensure the Knowledge Retrieval node (17448361884360) is providing:
- Service pricing data
- Staff availability
- Service descriptions

## 🧪 Testing Steps

1. **Test Intent Detection**
   - Input: "hello my name is john miller can you schedule my haircut appointment for 12:30pm next tuesday?"
   - Expected: Intent = "booking", client_name = "john miller", appointment_time = "12:30pm next tuesday"

2. **Test Agent Routing**
   - Verify Booking Agent receives the booking request
   - Verify Service Agent gets service type (if mentioned)
   - Verify Profile Agent gets client name

3. **Test Variable Flow**
   - Check each agent's output variables
   - Verify Conclusion Agent receives all inputs
   - Confirm Answer node displays final_response

## 🔄 Workflow Flow

```
User Input → Intent Agent → Question Classifier → Knowledge Retrieval → Service Agent → Booking Agent → Profile Agent → Conclusion Agent → Answer
```

## 📝 Debug Checklist

- [ ] Intent Agent correctly extracts variables
- [ ] Question Classifier routes to correct agents
- [ ] Knowledge Retrieval provides relevant data
- [ ] Service Agent outputs pricing_response
- [ ] Booking Agent outputs book_response
- [ ] Profile Agent outputs profiling_response
- [ ] Conclusion Agent receives all inputs
- [ ] Answer node displays final_response
- [ ] No hardcoded mock data in responses
