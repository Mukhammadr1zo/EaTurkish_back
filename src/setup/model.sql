create database eaturkish_db;

create EXTENSION "uuid-ossp";

create table subscribers(
    subscriber_id UUID default uuid_generate_v4(),
    subscriber_email text not null unique
);

create table categories(
    category_id UUID default uuid_generate_v4() primary key,
    category_name text not null unique
);

insert into categories(category_name) values ('Birinchi'), ('Ikkinchi'), ('Uygur Taomlari'), ('Yevropa Taomlari'), ('Kaboblar'), ('Salatlar');

create table news(
    news_id uuid default uuid_generate_v4(),
    news_img text not null,
    news_title text not null,
    news_desc text not null,
    created_at timestamp default current_timestamp
);

create table messages(
    message_id uuid default uuid_generate_v4(),
    client_name varchar(32) not null,
    client_phone varchar(12) not null,
    client_email text not null,
    message_body text not null,
    created_at timestamp default current_timestamp
);

create table foods(
    food_id uuid default uuid_generate_v4(),
    food_img text not null,
    food_name varchar(255) not null,
    food_price decimal(9, 2) not null,
    food_stars int default 0,
    count_of_vote int default 0,
    food_category uuid references categories(category_id) not null
);

