// Use or create the database
use ('WebDevelopment');

// Create the "Frontend" collection and insert dummy data
db.Frontend.insertMany([
    {
        course: "HTML & CSS Basics",
        price: 50,
        instructor: "Munawar Hussain"
    },
    {
        course: "JavaScript Advanced",
        price: 100,
        instructor: "Shazil Shahid"
    },
    {
        course: "React for Beginners",
        price: 120,
        instructor: "Raziq"
    },
    {
        course: "Frontend Frameworks",
        price: 150,
        instructor: "Sharif"
    },
    {
        course: "UI/UX Design Principles",
        price: 80,
        instructor: "Alam"
    },
    {
        course: "Bootstrap & Tailwind",
        price: 70,
        instructor: "Hussnain"
    }
]);
