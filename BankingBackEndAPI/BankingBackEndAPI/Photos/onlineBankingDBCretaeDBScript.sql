


create table Departments
(
DeptId tinyint not null primary key identity,
DeptName varchar(70) not null
)

create table Employees
(
EmpId int not null primary key identity,
EmpFirstName varchar(70) not null,
EmpLastName varchar(70) not null,
EmpGender bit,
EmpContact nvarchar(15),
EmpEmail nvarchar(35),
EmpDateOfBirth date,
EmpPassword nvarchar(100) not null,
EmpQualification varchar(80) not null,
EmpUserName varchar(20),
EmpSalary money,
EmpDepartment tinyint Foreign Key references Departments(DeptId) on delete set null on update no action
)


create table AccountsType
(
ActypeId tinyint not null primary key identity,
ActypeName varchar(80) not null
)

create table City
(
CityId int not null primary key identity,
CityName varchar(70)
)

create table Customer
(
CustId int not null primary key identity,
CustFirstName varchar(70) not null,
CustLastName varchar(70) not null,
CustContact nvarchar(15),
CustEmail nvarchar(35),
CustAddress nvarchar(150),
CustCity int foreign key references City(CityId) on delete set null on update no action,
CustOccupation nvarchar(100),
CustDOB date,
CustNIC nvarchar(25)
)

Create table Branch
(
BranId int not null primary key identity,
BranName nvarchar(150) not null,
BranAddress nvarchar(150)
)

create table Account
(
AccId int not null primary key identity,
AccCustomerId int foreign key references Customer(CustId) on delete set null on update no action, 
AccType tinyint foreign key references AccountsType(ActypeId) on delete set null on update no action,
AccOpeningBalance money,
AccDateOfOpening date,
AccStatus bit,
AccBranchId int foreign key references Branch(BranId) on delete set null on update no action,
AccAccountCode nvarchar(60) not null
)

create table Transactions
(
TranId int not null primary key identity,
TranAccountNoSender nvarchar(60) not null,
TranAccountNoReciever nvarchar(60) not null,
TranDate date,
TranAmountTransffered money
)


Create table Loan
(
LoanId int not null primary key identity,
LoanCustomerId int foreign key references Customer(CustId) on delete set null on update no action,
LoanDateOfTransfer date,
LoanAmountTransffered money
)


create table LoanApplications
(
LoanAppId int not null primary key identity,
LoanAppCustId int foreign key references Customer(CustId) on delete set null on update no action,
LoanAppSubject varchar(200),
LoanAppBody varchar(800),
LoanAppMoneyAsked money,
LoanNumberOfInstallments int,
LoanReason varchar(150),
LoanIsAccepted bit	
)


create table Complaints
(
CompId int not null primary key identity,
CompCustId int foreign key references Customer(CustId) on delete set null on update no action,
CompDate date,
CompMatter varchar(200),
CompStatus bit
)


