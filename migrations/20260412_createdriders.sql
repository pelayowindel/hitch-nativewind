create table public.riders (
  rider_id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  email text not null,
  full_name text not null,
  phone number text not null,
  user_id uuid not null,
  constraint riders_pkey primary key (rider_id),
  constraint riders_email_key unique (email),
  constraint riders_phone number_key unique ("phone number"),
  constraint riders_user_id_key unique (user_id),
  constraint riders_user_id_fkey foreign KEY (user_id) references auth.users (id) on update CASCADE on delete CASCADE
) TABLESPACE pg_default;