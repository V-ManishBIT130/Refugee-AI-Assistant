# 🏥 Refugee AI Assistant

A comprehensive healthcare assistance application designed to help refugees access medical information and connect with healthcare providers. This application provides multilingual support and user-friendly interfaces for symptom reporting and medical guidance.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)

## 🌟 Features

- **Multilingual Support**: Available in multiple languages to serve diverse refugee communities
- **Symptom Reporting**: Easy-to-use interface for reporting health symptoms
- **Healthcare Provider Connection**: Connect with nearby healthcare providers
- **Mobile-First Design**: Optimized for mobile devices with responsive design
- **Secure Data Storage**: MongoDB integration for secure user data management
- **AI-Powered Assistance**: Intelligent health guidance and recommendations

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your computer:

1. **Node.js** (version 18.0 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: Open terminal and run `node --version`

2. **Git** (for cloning the repository)
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: Run `git --version`

3. **MongoDB Atlas Account** (for database)
   - Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Refugee-AI-Assistant.git
   cd Refugee-AI-Assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string:
   ```env
   VITE_MONGODB_URI=your_mongodb_connection_string_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application should now be running!

## 🔧 Configuration

### MongoDB Setup

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account

2. **Create a New Cluster**
   - Choose the free tier (M0)
   - Select your preferred region
   - Create the cluster

3. **Set Up Database Access**
   - Go to "Database Access" in the left sidebar
   - Add a new database user
   - Choose "Password" authentication
   - Remember your username and password

4. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Add your IP address (or 0.0.0.0/0 for development)

5. **Get Connection String**
   - Go to "Clusters" and click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

### Environment Variables

Create a `.env` file in your project root:

```env
# MongoDB Configuration
VITE_MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/refugee-assistant?retryWrites=true&w=majority

# Optional: API Keys (if needed)
VITE_API_KEY=your_api_key_here
```

## 📱 Usage

### For Users

1. **Select Language**: Choose your preferred language from the dropdown
2. **Register/Login**: Create an account or sign in
3. **Report Symptoms**: Use the symptom checker to report health issues
4. **Find Providers**: Search for nearby healthcare providers
5. **Get Guidance**: Receive AI-powered health recommendations

### For Developers

1. **Development Mode**
   ```bash
   npm run dev
   ```

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

4. **Run Tests**
   ```bash
   npm run test
   ```

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **Database**: MongoDB Atlas
- **State Management**: React Hooks
- **Routing**: React Router (if applicable)
- **Icons**: React Icons

## 📁 Project Structure

```
Refugee-AI-Assistant/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── SymptomForm.tsx
│   │   └── ProviderList.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Symptoms.tsx
│   │   └── Providers.tsx
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── utils/
│   │   └── api.ts
│   ├── App.tsx
│   └── main.tsx
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🌐 Deployment

### Deploying to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploying to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository

## 🔍 Troubleshooting

### Common Issues

1. **"Module not found" errors**
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

2. **Database connection issues**
   - Check your MongoDB connection string
   - Ensure your IP address is whitelisted
   - Verify username and password are correct

3. **Port already in use**
   - Kill the process using the port: `npx kill-port 5173`
   - Or use a different port: `npm run dev -- --port 3000`

4. **Build failures**
   - Check for TypeScript errors: `npx tsc --noEmit`
   - Ensure all dependencies are installed

### Getting Help

- **Issues**: Open an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check the wiki for detailed guides

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Write tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React and TypeScript
- Powered by Vite for fast development
- Database by MongoDB Atlas
- Icons by React Icons
- Inspired by the need to help refugee communities access healthcare

## 📞 Support

For support and questions:
- **Email**: support@refugee-ai-assistant.com
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/Refugee-AI-Assistant/issues)
- **Documentation**: [Project Wiki](https://github.com/yourusername/Refugee-AI-Assistant/wiki)

---

**Made with ❤️ for refugee communities worldwide**
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
