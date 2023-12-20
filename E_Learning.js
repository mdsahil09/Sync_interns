function loadLesson(lessonId) {
    // Fetch lesson content based on lessonId from the server (simulated here)
    const lessonTitleElement = document.getElementById('lesson-title');
    const lessonBodyElement = document.getElementById('lesson-body');

    // Simulated lesson content
    const lessons = {
        lesson1: {
            title: 'Introduction to SQL',
            body: 'This is an introduction to SQL. Learn the basics of relational databases and SQL syntax.',
        },
        lesson2: {
            title: 'Basic SQL Queries',
            body: 'In this lesson, you will learn how to write basic SQL queries to retrieve data from a database.',
        },
        // Add more lessons as needed
    };

    const selectedLesson = lessons[lessonId];

    // Update lesson content on the page
    lessonTitleElement.textContent = selectedLesson.title;
    lessonBodyElement.innerHTML = `<p>${selectedLesson.body}</p>`;
}
