-- The services shown on the Home page ("What we capture")
CREATE TABLE services (
  id          INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug        TEXT NOT NULL UNIQUE,        -- short name for links, e.g. 'pre-wedding'
  title       TEXT NOT NULL,
  subtitle    TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url   TEXT NOT NULL,               -- e.g. '/images/services/weddings.jpg'
  page_path   TEXT NOT NULL,               -- where the card links to
  sort_order  INTEGER NOT NULL DEFAULT 0,  -- smaller number = shown first
  is_visible  BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
