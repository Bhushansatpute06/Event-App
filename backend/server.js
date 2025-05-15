const express = require("express");
const cors = require("cors");
const app = express();
const events = require("./events.json");

app.use(cors());

// GET /events → List of event titles and formatted date
app.get("/events", (req, res) => {
  const formatted = events.map((event) => {
    const date = new Date(event.date);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });  
    return {
      id: event.id,
      title: event.title,
      date: `${day} ${month}`
    };
  });
  res.json(formatted);
});

// GET /events/:id → Full details
app.get("/events/:id", (req, res) => {
  const event = events.find((e) => e.id === parseInt(req.params.id));
  if (!event) return res.status(404).json({ error: "Event not found" });

  const dateObj = new Date(event.date);
  const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${dateObj.getFullYear()}`;

  res.json({
    ...event,
    date: formattedDate
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
