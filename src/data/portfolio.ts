import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const personalInfo = {
  name: 'Ankush Ratnani',
  title: 'AIML Engineer | GenAI & ML Developer',
  email: 'ankush.ratnani36@gmail.com',
  github: 'https://github.com/ankushratnani',
  linkedin: 'https://linkedin.com/in/ankushratnani',
  shortIntro: 'Building intelligent AI-powered applications using Machine Learning, Generative AI, RAG systems, and modern web technologies.',
  about: 'I am an AIML Engineering student passionate about building intelligent AI-powered applications. My expertise lies in Machine Learning, Generative AI, and RAG systems, with hands-on experience in LLM integration and vector databases. Currently, I am seeking AI/ML or GenAI internship opportunities where I can apply my skills to solve complex problems and contribute to innovative AI solutions.',
  location: 'Ahmedabad, Gujarat, India',
};

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'JavaScript'],
  },
  {
    category: 'AI/ML',
    items: ['Deep Learning', 'Neural Networks', 'NLP', 'Machine Learning', 'Time-Series Forecasting'],
  },
  {
    category: 'GenAI & LLMs',
    items: ['LangChain', 'RAG', 'LLM Integration', 'Vector Databases', 'Embeddings'],
  },
  {
    category: 'Frameworks',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Streamlit', 'React'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Docker', 'ChromaDB', 'HuggingFace'],
  },
];

export const projects = [
  {
    title: 'NextGPT – AI-Powered Chrome Extension',
    tech: ['React', 'JavaScript', 'Chrome Extension APIs', 'Generative AI', 'LLM Integration', 'LangChain', 'Vector Embeddings', 'Tailwind CSS'],
    description: 'A premium AI-powered browser assistant that intelligently reads webpage content and enables real-time AI interaction directly inside the browser. It allows users to chat with any webpage, summarize content, and extract critical insights instantly.',
    highlights: ['AI webpage understanding', 'Context-aware chatbot', 'Real-time summarization', 'Intelligent text extraction'],
    github: 'https://github.com/ankush-365/NextGPT---AI-Powered-Chrome-Extension',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    isFeatured: true,
    details: {
      problem: 'Users often spend excessive time reading long articles or documentation. Existing browser assistants are often disconnected from the actual webpage context or have clunky UIs.',
      architecture: [
        { step: 'User', desc: 'Interacts with Extension UI' },
        { step: 'Extraction', desc: 'Webpage Content Parsing' },
        { step: 'AI Processing', desc: 'Contextual Chunking & Embeddings' },
        { step: 'LLM Response', desc: 'Real-time Answer Generation' }
      ],
      learnings: 'Mastered Chrome Extension architecture, background scripts, and efficient context management for LLMs within browser constraints.',
      future: ['Personalized knowledge base', 'Cross-browser sync', 'Voice command integration']
    }
  },
  {
    title: 'AI Resume Screening & Candidate Ranking System',
    tech: ['LangChain', 'ChromaDB', 'HuggingFace', 'Groq LLM', 'Streamlit'],
    description: 'Built an AI-powered Resume Screening & Candidate Ranking System using RAG and semantic similarity to analyze resumes against job descriptions. Implemented resume parsing, embeddings, vector search, ATS-style matching, skill-gap analysis, and AI-generated hiring insights.',
    highlights: ['RAG pipeline', 'Vector database', 'Embeddings', 'AI candidate ranking', 'LLM workflows'],
    github: 'https://github.com/ankush-365/AI-Resume-Screening-Candidate-Ranking-System',
    demo: 'https://ai-resume-screening-insights.streamlit.app',
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'URL Content Summarizer (YouTube + Website)',
    tech: ['Python', 'Streamlit', 'LangChain', 'Groq API', 'LLaMA 3.1', 'YouTube Transcript API'],
    description: 'A powerful AI application that summarizes content from YouTube videos (via transcript extraction) and Websites (via web scraping). Built using LangChain and Groq LLaMA 3.1 for ultra-fast, structured bullet-point summaries.',
    highlights: ['YouTube transcript extraction', 'Website web scraping', 'Groq LLaMA 3.1 integration', 'Structured bullet-point summaries'],
    github: 'https://github.com/ankush-365/URL-Content-Summarization',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1887&auto=format&fit=crop',
    // details: {
    //   architecture: [
    //     { step: 'Input', desc: 'User provides a YouTube or Website URL' },
    //     { step: 'Extraction', desc: 'Retrieves transcripts or scrapes page content' },
    //     { step: 'LangChain', desc: 'Processes text through summarization chains' },
    //     { step: 'Groq AI', desc: 'Generates ultra-fast summaries with LLaMA 3.1' }
    //   ],
      learnings: 'Improved expertise in varied data ingestion (APIs vs Scraping), handling long-context summarization with LangChain, and optimizing inference speed with Groq.',
      future: ['Language translation support', 'Multiple output formats (PDF/TXT)', 'Voice summary playback']
    }
  },
  {
    title: 'Monthly Sales Forecasting System',
    tech: ['Python', 'SARIMA', 'Facebook Prophet'],
    description: 'Developed time-series forecasting models to predict monthly sales trends using SARIMA and Prophet. Performed feature engineering to capture seasonality and temporal dependencies.',
    highlights: ['3.15% forecasting error', 'Predictive analytics', 'Time-series modeling'],
    github: 'https://github.com/ankush-365/Retail-Sales-Forecasting-Using-Time-Series-Models',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a8f1ad?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Song Recommendation System',
    tech: ['Python', 'NLP', 'TF-IDF', 'Cosine Similarity', 'Streamlit'],
    description: 'Built an NLP-powered music recommendation engine using TF-IDF and cosine similarity to generate personalized song recommendations and playlists.',
    highlights: ['NLP preprocessing', 'Recommendation engine', 'Real-time recommendations'],
    github: 'https://github.com/ankush-365/Song-Recommendation-Model',
    demo: 'https://song-recommendation-model.streamlit.app',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
  },
];

export const experience = [
  {
    company: 'GradConnect Innovations Pvt. Ltd.',
    position: 'AI/ML Intern',
    period: 'Feb 2026 – May 2026',
    responsibilities: [
      'Integrated AI/ML and Generative AI features into web applications',
      'Built AI-driven workflows',
      'Worked on candidate ranking systems',
      'Implemented intelligent data pipelines',
      'Gained hands-on experience with LLMs, embeddings, vector databases, and scalable AI deployment',
    ],
  },
  {
    company: 'LDCE - Departmental Newsletter Team',
    position: 'Team Lead',
    period: 'Present',
    responsibilities: [
      'Leading the departmental newsletter team to curate and publish technical content.',
      'Coordinating between different sub-teams for content, design, and distribution.',
    ],
  },
];

export const education = [
  {
    institution: 'L.D College of Engineering, Ahmedabad',
    degree: 'B.Tech in Artificial Intelligence and Machine Learning',
    period: '2023 – 2027',
    description: 'Specializing in advanced algorithms, deep learning, and architectural design for intelligent systems. Focused on building production-ready AI solutions.',
    highlights: ['GPA: 8.33', 'Specialization in AIML', 'Core Algorithms & Data Structures']
  }
];

export const socialLinks = [
  { name: 'GitHub', icon: Github, url: personalInfo.github },
  { name: 'LinkedIn', icon: Linkedin, url: personalInfo.linkedin },
  { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}` },
];
