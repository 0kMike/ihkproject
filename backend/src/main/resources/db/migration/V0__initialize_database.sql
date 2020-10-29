CREATE TABLE job
(
    id              uuid PRIMARY KEY,
    jobkey          bigint NOT NULL,
    jobtitle        varchar(255) NOT NULL,
    location        bigint NOT NULL,
    lastdate        date NOT NULL
);