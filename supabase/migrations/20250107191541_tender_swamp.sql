/*
  # Initial Schema Setup

  1. New Tables
    - `realizations`
      - `id` (uuid, primary key)
      - `date` (timestamp with time zone)
      - `title` (text)
      - `description` (text)
      - `photos` (jsonb for multiple photo URLs)
      - `created_at` (timestamp with time zone)
      - `updated_at` (timestamp with time zone)
    
    - `reviews`
      - `id` (uuid, primary key)
      - `name` (text)
      - `review` (text)
      - `status` (text)
      - `response` (text)
      - `created_at` (timestamp with time zone)
      - `updated_at` (timestamp with time zone)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users (admins)
    - Add policies for public access where needed
*/

-- Create realizations table
CREATE TABLE realizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date timestamptz NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  photos jsonb NOT NULL DEFAULT '[]',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create reviews table
CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  review text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  response text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE realizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policies for realizations
CREATE POLICY "Allow public read access" ON realizations
  FOR SELECT TO public
  USING (true);

CREATE POLICY "Allow admin full access" ON realizations
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for reviews
CREATE POLICY "Allow public read verified reviews" ON reviews
  FOR SELECT TO public
  USING (status = 'verified');

CREATE POLICY "Allow public insert reviews" ON reviews
  FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Allow admin full access reviews" ON reviews
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);