CREATE TABLE jobs
(
    jobkey          bigint PRIMARY KEY,
    jobtitle        varchar(255) NOT NULL,
    location        bigint NOT NULL,
    lastdate        date NOT NULL
);