-- SELECT * FROM customers inner join orders on customers.customerid = orders.customerid -- everything matching
-- SELECT * FROM customers full  join  orders on customers.customerid = orders.customerid -- all 
-- SELECT * FROM customers left  join  orders on customers.customerid = orders.customerid -- care about customers only
-- SELECT * FROM customers right join orders on customers.customerid = orders.customerid -- care about orders only
SELECT * FROM customers full  join  orders on customers.customerid = orders.customeridorder by customersid

select * from customers order by customersid


-- insert into orders (create_time,productionname,customerid) values ('2022-10-22','iphone,'5)
-- update customers set name = 'Edgar' where customerid=4 --too update the table
-- where 
-- customerid = 2 
-- and create_time > '2022-01-01'

-- select * from orders where customerid != 2 --to get orders from customerid 2 witch is Damian
-- select * from customers
-- inner join orders on customers.customerid = orders.customerid
-- left join orders on customers.customerid = orders.customerid