# 🎉 Event Management App (Full-Stack Project)

This is a full-stack web application that displays a list of events with their titles and dates. Users can view detailed information about each event, including location and speakers.

---

## 🚀 Features

### 🔹 Frontend (React)
- Home Page with a list of events (title + formatted date like `16 May`)
- View Details button to navigate to Event Details page
- Event Details page shows:
  - Event title
  - Formatted date (`DD-MM-YYYY`)
  - Location
  - Speaker list (name, designation, company)
- Beautiful styling using CSS

### 🔹 Backend (Node.js + Express)
- REST API with two endpoints:
  - `GET /events` → Returns event title + formatted date
  - `GET /events/:id` → Returns full event detail (title, date, location, speakers)
- No database used — data is read from a JSON file dynamically

---

## 📁 Project Structure

event-management-app/
├── backend/
│ ├── server.js
│ └── data/events.json
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ └── App.js
├── README.md
