# Contributing to Networking Survey Website

Thank you for your interest in contributing to the Networking Survey Website! This document provides guidelines and instructions for contributors.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Supabase account (for database functionality)

### Development Setup

1. **Fork the repository**
   - Go to the GitHub repository
   - Click the "Fork" button in the top right
   - Clone your forked repository locally

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/networking-survey-website.git
   cd networking-survey-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

5. **Set up the database**
   - Create a new Supabase project at [supabase.com](https://supabase.com)
   - Go to SQL Editor in your Supabase dashboard
   - Run the contents of `supabase-setup.sql`

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── survey/page.tsx    # Survey form
│   ├── thank-you/page.tsx # Thank you page
│   └── admin/page.tsx     # Admin dashboard
├── components/            # Reusable React components
│   ├── ProgressBar.tsx
│   ├── QuestionField.tsx
│   ├── ErrorBoundary.tsx
│   └── DemoModeIndicator.tsx
├── lib/                   # Utility libraries
│   ├── supabase.ts        # Supabase client
│   └── utils.ts           # Helper functions
└── types/                 # TypeScript type definitions
    └── survey.ts
```

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Use ESLint and Prettier (configured in the project)

### Component Guidelines

- Create reusable components in `src/components/`
- Use TypeScript interfaces for props
- Follow the existing naming conventions
- Use Tailwind CSS for styling
- Keep components focused and single-purpose

### Database Changes

- If you modify the database schema, update `supabase-setup.sql`
- Test your changes with the existing data
- Document any breaking changes

### Adding New Features

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing patterns
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   - Run the development server
   - Test all affected functionality
   - Check for TypeScript errors

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your feature branch
   - Fill out the PR template

## Pull Request Guidelines

### Before submitting a PR

- [ ] Code follows the project's style guidelines
- [ ] All TypeScript errors are resolved
- [ ] The app builds successfully (`npm run build`)
- [ ] All existing functionality still works
- [ ] New features are tested
- [ ] Documentation is updated if needed

### PR Template

When creating a pull request, please include:

1. **Description**: What does this PR do?
2. **Type of change**: Bug fix, feature, documentation, etc.
3. **Testing**: How was this tested?
4. **Screenshots**: If UI changes are involved
5. **Breaking changes**: Any breaking changes?

## Common Tasks

### Adding a new survey question

1. Update the `surveySteps` array in `src/app/survey/page.tsx`
2. Add the field to `SurveyFormData` interface in `src/types/survey.ts`
3. Update the database schema if needed
4. Test the form flow

### Modifying the database schema

1. Update `supabase-setup.sql`
2. Run the new SQL in your Supabase dashboard
3. Update TypeScript interfaces if needed
4. Test all database operations

### Styling changes

1. Use Tailwind CSS classes
2. Follow the existing design patterns
3. Test on different screen sizes
4. Ensure accessibility standards are met

## Getting Help

- Check the [README.md](README.md) for setup instructions
- Look at existing issues and pull requests
- Create an issue if you find a bug or have a feature request
- Ask questions in the issues section

## Code of Conduct

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the project's coding standards

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing! 🎉 