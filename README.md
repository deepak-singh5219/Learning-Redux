select LName, count(LName) from Employees group by LNAME;
SELECT LName, COUNT(*) as name_count
FROM Employees
GROUP BY Lname
ORDER BY name_count DESC
LIMIT 1;