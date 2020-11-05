insert into cloud_roles (role)
Select 'ROLE_ADMIN' Where not exists(select * from cloud_roles where role='ROLE_ADMIN');
insert into cloud_roles (role)
Select 'ROLE_PM' Where not exists(select * from cloud_roles where role='ROLE_PM');
insert into cloud_roles (role)
Select 'ROLE_USER' Where not exists(select * from cloud_roles where role='ROLE_USER');

