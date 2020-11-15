create table if not exists "cloud_users"
(
    id           serial primary key,
    username     varchar(50) unique,
    email        varchar(100) not null unique,
    password     varchar(255),
    enabled      boolean      not null,
    name         varchar(25),
    lastname     varchar(25),
    age          varchar(3),
    phone_number varchar(10)
);

create table if not exists "topic"
(
    id                serial primary key,
    topic_name        varchar(50)                 not null unique,
    number_of_content int,
    user_id           int                         not null references cloud_users (id),
    create_date       timestamp without time zone NOT NULL
);

create table if not exists "cloud_content"
(
    id            serial primary key,
    content       varchar                     not null,
    total_like    int,
    total_dislike int,
    daily_like    int,
    daily_dislike int,
    create_date   timestamp without time zone NOT NULL,
    user_id       int                         not null references cloud_users (id),
    topic_id      int                         not null references topic (id)
);

create table if not exists "cloud_roles"
(
    id               serial primary key,
    role             varchar(50) not null unique,
    is_account_admin boolean     not null default false
);

create table if not exists "user_roles"
(
    user_id int not null references cloud_users (id),
    role_id int not null references cloud_roles (id)
);

create table if not exists "content_like"
(
    user_id    int         not null references cloud_users (id),
    content_id int         not null references cloud_content (id)
);

create table if not exists "content_dislike"
(
    user_id    int         not null references cloud_users (id),
    content_id int         not null references cloud_content (id)
);

create table if not exists "token_blacklist"
(
    token text primary key not null unique,
    type  varchar(50)      not null
);

create table if not exists "email_templates"
(
    id            serial primary key,
    template_name text not null unique,
    content       text not null
);

create table if not exists "user_attempt"
(
    ip                 varchar(255) primary key,
    attempt_counter    int                         not null,
    first_attempt_date timestamp without time zone NOT NULL
);

create table if not exists "active_sessions"
(
    refresh_token varchar(255) primary key,
    access_token  varchar(255),
    user_agent    text,
    issue_date    timestamp without time zone NOT NULL,
    expire_date   timestamp without time zone NOT NULL,
    user_id       int                         not null references cloud_users (id)
);