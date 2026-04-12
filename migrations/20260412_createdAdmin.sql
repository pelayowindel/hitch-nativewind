create table public.admininstrator (
  administrator_id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  email text not null,
  name text null,
  user_id uuid not null,
  constraint admininstrator_pkey primary key (administrator_id),
  constraint admininstrator_email_key unique (email),
  constraint admininstrator_user_id_key unique (user_id),
  constraint admininstrator_user_id_fkey foreign KEY (user_id) references auth.users (id) on update CASCADE on delete CASCADE
) TABLESPACE pg_default;