DELETE FROM profile 
WHERE userid = $1;
DELETE FROM users
WHERE userid = $1;