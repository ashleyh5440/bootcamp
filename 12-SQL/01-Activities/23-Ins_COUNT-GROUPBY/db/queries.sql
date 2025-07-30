USE courses_db;

SELECT *
FROM course_names;

/* How many courses are in each department? */
SELECT department, COUNT(id) AS number_courses
FROM course_names
GROUP BY department;

/* How many students are enrolled in each department? */
SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM course_names
GROUP BY department;

/* What is the max student enrollment in each department course? */
SELECT department, 
(SELECT name FROM course_names t WHERE MAX(a.total_enrolled) = t.total_enrolled LIMIT 1) 
AS actual_course_name, 
MAX(total_enrolled) AS largest_student_enrollment
FROM course_names a
GROUP BY department;

SELECT name FROM course_names t WHERE 81 = t.total_enrolled LIMIT 1;