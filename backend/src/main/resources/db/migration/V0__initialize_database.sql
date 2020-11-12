CREATE TABLE job
(
    id        uuid PRIMARY KEY,
    key       bigint       NOT NULL,
    jobtitle     varchar(255) NOT NULL,
    longitude decimal      NOT NULL,
    latitude  decimal      NOT NULL,
    firstDate date         NOT NULL,
    lastdate  date         NOT NULL
);

CREATE TABLE location
(
    zip       varchar(5) PRIMARY KEY,
    city      varchar(255) NOT NULL,
    longitude decimal      NOT NULL,
    latitude  decimal      NOT NULL
)