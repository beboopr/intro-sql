--select * from customer
UPDATE public.customer
	SET first_name='Ed', last_name='Dav', email='hedye@gmail.com', phone=6757463, 
	--created_at=?, updated_at=?
	updated_at=NOW()
	WHERE customer_id=6;
	
-- select * from customers
-- delete from customers where customer_id=11

--Damians way
-- UPDATE customers
-- 	SET first_name='super', 
-- 	last_name='fantastic',
-- --	email=?, phone=?, 
-- -- 	created_at=?, 
-- 	updated_at=NOW()
-- 	WHERE customer_id=1;