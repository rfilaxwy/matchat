UPDATE profile
SET bio=$1,
interest_1= $2,
interest_2 = $3,
interest_3 = $4
WHERE userid= $5;