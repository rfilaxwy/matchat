SELECT DISTINCT u.username,u.userid, p.bio, p.interest_1, p.interest_2, p.interest_3
FROM users AS u INNER JOIN PROFILE AS P ON u.userid = p.userid
WHERE $1 IN (p.interest_1, p.interest_2, p.interest_3)
OR $2 IN (p.interest_1, p.interest_2, p.interest_3)
OR $3 IN (p.interest_1, p.interest_2, p.interest_3);