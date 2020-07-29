use northwind;

drop table users;
create table users(
    id int primary key auto_increment,
    firstname varchar(40) not null,
    lastname varchar(40),
    email varchar(255) unique, -- used as username
    password varchar(255) -- stored in MD5 format; try with bcrypt as assignment
);

insert into users values
(null, 'Vinod', 'Kumar', 'vinod@vinod.co', md5('topsecret')),
(null, 'John', 'Doe', 'johndoe@example.com', md5('secret')),
(null, 'Jane', 'Doe', 'janedoe@example.com', md5('bigsecret'));

