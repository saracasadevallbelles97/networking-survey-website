-- Create the survey_responses table
CREATE TABLE IF NOT EXISTS survey_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  email TEXT,
  networking_frequency TEXT NOT NULL,
  networking_platforms TEXT[] NOT NULL,
  main_problems TEXT[] NOT NULL,
  desired_solutions TEXT[] NOT NULL,
  additional_comments TEXT,
  industry TEXT,
  experience_level TEXT NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_survey_responses_created_at ON survey_responses(created_at);
CREATE INDEX IF NOT EXISTS idx_survey_responses_networking_frequency ON survey_responses(networking_frequency);
CREATE INDEX IF NOT EXISTS idx_survey_responses_experience_level ON survey_responses(experience_level);

-- Enable Row Level Security (RLS)
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for survey submissions)
CREATE POLICY "Allow anonymous inserts" ON survey_responses
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for authenticated users (optional, for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON survey_responses
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create a view for analytics (optional)
CREATE OR REPLACE VIEW survey_analytics AS
SELECT 
  COUNT(*) as total_responses,
  COUNT(DISTINCT email) as unique_emails,
  networking_frequency,
  experience_level,
  industry,
  COUNT(*) OVER (PARTITION BY networking_frequency) as frequency_count,
  COUNT(*) OVER (PARTITION BY experience_level) as experience_count
FROM survey_responses
GROUP BY networking_frequency, experience_level, industry;

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON survey_responses TO anon, authenticated;
GRANT ALL ON survey_analytics TO anon, authenticated; 