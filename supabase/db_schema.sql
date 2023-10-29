/* Items: Stores data about the items. */
create table
  public."Items" (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    name character varying null,
    description character varying null,
    image_url character varying null,
    constraint Items_pkey primary key (id)
  ) tablespace pg_default;

/* Slots: Contains options for an item. */
create table
  public."Slots" (
    id uuid not null default gen_random_uuid (),
    item_id uuid null,
    created_at timestamp with time zone not null default now(),
    key character varying null,
    value character varying null,
    booked_seats smallint not null,
    total_seats smallint not null,
    constraint Slots_pkey primary key (id),
    constraint Slots_item_id_fkey foreign key (item_id) references "Items" (id)
  ) tablespace pg_default;

/* User Slots: Stores information about specific user booked slots. */
create table
  public."User Slots" (
    created_at timestamp with time zone not null default now(),
    user_id uuid not null,
    slot_id uuid not null,
    constraint user Slots_pkey primary key (user_id, slot_id),
    constraint user Slots_slot_id_fkey foreign key (slot_id) references "Slots" (id) on update cascade on delete cascade,
    constraint user Slots_user_id_fkey foreign key (user_id) references auth.users (id) on update cascade on delete cascade
  ) tablespace pg_default;