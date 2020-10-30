CREATE TABLE job
(
    id       uuid PRIMARY KEY,
    key      bigint       NOT NULL,
    title    varchar(255) NOT NULL,
    location bigint       NOT NULL,
    lastdate date         NOT NULL
);