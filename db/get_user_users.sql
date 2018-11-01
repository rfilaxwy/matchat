SELECT username, firstname, city, country
FROM users
WHERE userid = $1;