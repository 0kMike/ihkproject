CREATE TABLE job
(
    id        uuid PRIMARY KEY,
    key       bigint       NOT NULL,
    title     varchar(255) NOT NULL,
    longitude decimal      NOT NULL,
    latitude  decimal      NOT NULL,
    lastdate  date         NOT NULL
);

CREATE TABLE location
(
    zip       int PRIMARY KEY,
    city      varchar(255) NOT NULL,
    longitude decimal      NOT NULL,
    latitude  decimal      NOT NULL
)