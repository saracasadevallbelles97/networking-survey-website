# Networking Survey Website

A modern, responsive survey website built with Next.js and Supabase to collect data on people's networking activities, challenges, and desired solutions.

## Features

- 🎨 **Beautiful UI**: Modern, responsive design with Tailwind CSS
- 📱 **Mobile-First**: Optimized for all device sizes
- 🔄 **Multi-Step Form**: Progressive survey with progress tracking
- 💾 **Real-time Database**: Supabase integration for data storage
- 🚀 **Fast Performance**: Built with Next.js 14 and App Router
- 🔒 **Privacy-Focused**: Anonymous responses with optional email collection
- 📊 **Analytics Ready**: Database structure optimized for data analysis
- 🤖 **Survey Assistant**: AI-powered help for survey questions and guidance

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **AI**: Google Gemini API
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd networking-survey-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Settings > API to get your project URL and anon key
   - Copy `env.example` to `.env.local` and fill in your Supabase credentials

4. **Set up the database**
   - In your Supabase dashboard, go to SQL Editor
   - Run the contents of `supabase-setup.sql` to create the necessary tables and policies

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
GEMINI_API_KEY=your_gemini_api_key
```

### Setting up Gemini API

1. Go to [Google AI Studio](https://aistudio.google.com/) or [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Gemini API
4. Create an API key
5. Add the API key to your `.env.local` file as `GEMINI_API_KEY`

## Database Schema

The survey collects the following data:

- **Email** (optional): For follow-up insights
- **Networking Frequency**: How often they network
- **Networking Platforms**: Which platforms they use
- **Main Problems**: Challenges they face
- **Desired Solutions**: What would improve their experience
- **Industry** (optional): Their industry
- **Experience Level**: Professional experience level
- **Additional Comments**: Open-ended feedback

## Survey Flow

1. **Landing Page**: Introduction and benefits
2. **Basic Information**: Email, frequency, experience level
3. **Platforms**: Which networking platforms they use
4. **Problems**: Main challenges they face
5. **Solutions**: Desired improvements
6. **Additional Info**: Industry and comments
7. **Thank You**: Confirmation and next steps

## Survey Assistant

The website includes an AI-powered survey assistant to help users understand the survey and project:

- **Survey Guidance**: Answers questions about survey purpose and content
- **Privacy Information**: Explains data handling and anonymity
- **Quick Help**: Pre-built questions for common concerns
- **Survey Navigation**: Direct link to start the survey

### Accessing the Assistant

1. Navigate to `/chat` in your browser
2. Or click "Survey Help" in the main navigation
3. Ask questions about the survey or use the quick action buttons

### Assistant Features

- **Survey-specific knowledge**: Trained on survey content and purpose
- **Privacy-focused**: Emphasizes data protection and anonymity
- **Quick actions**: Pre-built questions for common topics
- **Survey integration**: Direct link to start the survey
- **Mobile responsive**: Optimized for all screen sizes

### Adding New Questions

1. Update the `surveySteps` array in `src/app/survey/page.tsx`
2. Add corresponding fields to the `SurveyFormData` interface in `src/types/survey.ts`
3. Update the database schema if needed

### Styling

- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Use the existing component classes for consistency

### Database

- The `supabase-setup.sql` file contains the complete database schema
- Modify the table structure as needed for your specific requirements
- The analytics view provides basic aggregation capabilities

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Data Analysis

The database includes an analytics view that provides:
- Total response count
- Unique email count
- Breakdowns by frequency and experience level
- Industry distribution

You can query this data directly in Supabase or export it for analysis in tools like:
- Google Sheets
- Tableau
- Power BI
- Python/R for statistical analysis

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help setting up the project, please open an issue on GitHub.

---

Built with ❤️ for the networking community 