CREATE TABLE jobs
(
    jobkey          bigserial PRIMARY KEY,
    jobtitle        varchar(255) NOT NULL,
    expired         boolean NOT NULL,
    location        bigint NOT NULL,
    lastdate        date NOT NULL
);