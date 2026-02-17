# Google Reviews Infinite Scroll Scraper (Browser Console Script)

A lightweight JavaScript scraper that collects Google Reviews from the review modal using infinite scrolling and downloads the data as a JSON file.

⚡ Runs directly in the browser console  
📜 Automatically scrolls and loads more reviews  
💾 Exports collected reviews into a downloadable JSON file  

---

## 🚀 Features

- Auto scroll until no more reviews are loaded
- Collects:
  - User Name
  - Review Text
  - Rating
  - Review Time
  - User Profile Image
- Skips short or empty reviews
- Automatically downloads a JSON file
- Configurable target count
- No external libraries required

---

## 📦 Output Format

The downloaded JSON file contains:

```json
[
  {
    "imageUrl": "https://...",
    "userName": "John Doe",
    "reviewText": "Amazing service...",
    "ratings": "5 stars",
    "reviewTime": "2 weeks ago"
  }
]