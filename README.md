# MongoDB Practice: Comprehensive Guide with Examples 🚀

Welcome to the **MongoDB Practice** repository! 🎉 This guide covers 12 essential MongoDB topics, complete with simple examples to help you learn and practice. Whether you're a beginner or experienced developer, this repository provides hands-on experience to master MongoDB.

---

## 📚 Topics Covered

1. [Switching Databases](#1-switching-databases)
2. [Inserting Data](#2-inserting-data)
3. [Querying All Data](#3-querying-all-data)
4. [Filtering Data](#4-filtering-data)
5. [Updating Data](#5-updating-data)
6. [Adding New Fields](#6-adding-new-fields)
7. [Deleting Documents](#7-deleting-documents)
8. [Using Aggregation](#8-using-aggregation)
9. [Embedding Data](#9-embedding-data)
10. [Referencing Data](#10-referencing-data)
11. [Dropping Collections](#11-dropping-collections)
12. [Dropping Databases](#12-dropping-databases)

---

## 1. Switching Databases

### Example:

```javascript
// Switch to the "WebDevelopment" database (it will be created if it doesn't exist)
use WebDevelopment;
```

## 2. Inserting Data

### Example:

```javascript
// Create the "Frontend" collection and insert multiple documents
db.Frontend.insertMany([
    { course: "HTML & CSS Basics", price: 50, instructor: "Munawar Hussain" },
    { course: "JavaScript Advanced", price: 100, instructor: "Shazil Shahid" },
    { course: "React for Beginners", price: 120, instructor: "Raziq" },
    { course: "Frontend Frameworks", price: 150, instructor: "Sharif" },
    { course: "Bootstrap & Tailwind", price: 70, instructor: "Hussnain" }
]);
```

## 3. Querying All Data

### Example:

```javascript
// Retrieve all documents from the "Frontend" collection
db.Frontend.find();
```

## 4. Filtering Data

### Example:

```javascript
// Find courses with a price greater than 100
db.Frontend.find({ price: { $gt: 100 } });
```

## 5. Updating Data

### Example:

```javascript
// Update the price of "JavaScript Advanced" to 110
db.Frontend.updateOne(
    { course: "JavaScript Advanced" },
    { $set: { price: 110 } }
);
```

## 6. Adding New Fields

### Example:

```javascript
// Add a "discounted" field to all courses with a price less than 100
db.Frontend.updateMany(
    { price: { $lt: 100 } },
    { $set: { discounted: true } }
);
```

## 7. Deleting Documents

### Example:

```javascript
// Delete the course "Bootstrap & Tailwind"
db.Frontend.deleteOne({ course: "Bootstrap & Tailwind" });
```

## 8. Using Aggregation

### Example:

```javascript
// Group courses by instructor and count their total courses
db.Frontend.aggregate([
    { $group: { _id: "$instructor", totalCourses: { $sum: 1 } } }
]);
```

## 9. Embedding Data

### Example:

```javascript
// Embed related data: Create a course with modules and topics
db.Courses.insertOne({
    course: "Full Stack Development",
    modules: [
        { name: "Frontend", topics: ["HTML", "CSS", "JavaScript"] },
        { name: "Backend", topics: ["Node.js", "Express", "MongoDB"] }
    ]
});
```

## 10. Referencing Data

### Example:

```javascript
// Reference data: Create instructors with references to courses
db.Instructors.insertMany([
    { name: "Munawar Hussain", specialty: "HTML & CSS Basics" },
    { name: "Shazil Shahid", specialty: "JavaScript Advanced" }
]);
```

## 11. Dropping Collections

### Example:

```javascript
// Delete the "Frontend" collection
db.Frontend.drop();
```

## 12. Dropping Databases

### Example:

```javascript
// Delete the "WebDevelopment" database
db.dropDatabase();
```

---

## 🔥 How to Use This Repository

1. Clone the repository:

```bash
git clone https://github.com/MunawarJohar/Mongodb-Practice.git
```

2. Open your MongoDB shell or MongoDB Compass.
3. Run the commands provided in this guide to practice and learn MongoDB step-by-step.

Enjoy learning MongoDB! 🌐



