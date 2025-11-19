import React, { useState } from 'react';
import { Home, Users, Briefcase, BookOpen, User, Send, Search, Filter, MapPin, Clock, TrendingUp, MessageCircle, ThumbsUp, Share2, Award, Calendar, Building } from 'lucide-react';

const EIPLevelUp = () => {
  const [activeTab, setActiveTab] = useState('community');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [newPost, setNewPost] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Mock Data
  const communityRooms = [
    { id: 1, name: 'Business & Marketing', members: 234, icon: '💼', color: 'from-purple-500 to-pink-500' },
    { id: 2, name: 'Tourism & Hospitality', members: 189, icon: '✈️', color: 'from-blue-500 to-cyan-500' },
    { id: 3, name: 'Technology & IT', members: 456, icon: '💻', color: 'from-green-500 to-teal-500' },
    { id: 4, name: 'Education & Teaching', members: 167, icon: '📚', color: 'from-orange-500 to-red-500' },
    { id: 5, name: 'Healthcare', members: 123, icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 6, name: 'Creative Arts', members: 201, icon: '🎨', color: 'from-purple-500 to-indigo-500' }
  ];

  const posts = [
    {
      id: 1,
      author: 'María González',
      role: 'Marketing Specialist',
      time: '2 hours ago',
      content: 'Just landed my first remote marketing role thanks to EIP LevelUp! The community conversations really helped me prepare for the interview. Grateful for this platform! 🎉',
      likes: 45,
      comments: 12,
      avatar: '👩‍💼'
    },
    {
      id: 2,
      author: 'Carlos Ramírez',
      role: 'Software Developer',
      time: '5 hours ago',
      content: 'Anyone interested in a coding workshop this weekend? We could practice technical English while building a small project together. DM me if interested!',
      likes: 28,
      comments: 8,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      author: 'Ana Martínez',
      role: 'Tourism Professional',
      time: '1 day ago',
      content: 'The Tourism conversation room is amazing! I\'ve improved my hospitality vocabulary so much. We discussed customer service scenarios today - super helpful!',
      likes: 67,
      comments: 15,
      avatar: '👩‍✈️'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Junior Software Developer',
      company: 'TechDR Solutions',
      location: 'Santo Domingo (Remote)',
      type: 'Full-time',
      salary: 'RD$35,000 - RD$50,000',
      posted: '2 days ago',
      description: 'Looking for a bilingual junior developer to join our growing team. No experience required, just passion for coding and good English communication skills.',
      requirements: ['English B2+', 'Basic programming knowledge', 'Team player'],
      logo: '💻'
    },
    {
      id: 2,
      title: 'Customer Success Representative',
      company: 'Global Services Inc',
      location: 'Remote',
      type: 'Full-time',
      salary: 'RD$30,000 - RD$40,000',
      posted: '1 week ago',
      description: 'Join our international team as a Customer Success Rep. Work with clients from different countries and grow your career in a supportive environment.',
      requirements: ['Fluent English', 'Customer service mindset', 'Problem-solving skills'],
      logo: '🌐'
    },
    {
      id: 3,
      title: 'Marketing Intern',
      company: 'Creative Agency DR',
      location: 'Santo Domingo',
      type: 'Internship',
      salary: 'RD$15,000 - RD$20,000',
      posted: '3 days ago',
      description: 'Perfect opportunity for recent graduates! Learn digital marketing while working with international clients. Bilingual environment.',
      requirements: ['English B1+', 'Social media knowledge', 'Creative thinking'],
      logo: '🎯'
    },
    {
      id: 4,
      title: 'Hotel Front Desk Agent',
      company: 'Paradise Resort',
      location: 'Punta Cana',
      type: 'Full-time',
      salary: 'RD$25,000 - RD$35,000',
      posted: '5 days ago',
      description: 'Work in a luxury resort environment. Interact with international guests daily and use your English skills professionally.',
      requirements: ['Fluent English', 'Customer service experience', 'Tourism background preferred'],
      logo: '🏨'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'Business Communication Skills',
      instructor: 'Prof. Jennifer Smith',
      duration: '4 weeks',
      level: 'Intermediate',
      students: 234,
      rating: 4.8,
      image: '📊',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Technical English for IT',
      instructor: 'Prof. Michael Chen',
      duration: '6 weeks',
      level: 'Advanced',
      students: 189,
      rating: 4.9,
      image: '💻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Customer Service Excellence',
      instructor: 'Prof. Sarah Johnson',
      duration: '3 weeks',
      level: 'Beginner',
      students: 456,
      rating: 4.7,
      image: '🎯',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Public Speaking & Presentations',
      instructor: 'Prof. David Williams',
      duration: '5 weeks',
      level: 'Intermediate',
      students: 321,
      rating: 4.9,
      image: '🎤',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleApplyJob = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  const renderCommunity = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-purple-600 to-red-500 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Community</h2>
        <p className="text-purple-100">Connect with bilingual professionals and practice English in real contexts</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {communityRooms.map(room => (
          <div
            key={room.id}
            onClick={() => setSelectedRoom(room)}
            className="bg-white rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100"
          >
            <div className={`w-16 h-16 bg-gradient-to-br ${room.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
              {room.icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">{room.name}</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <Users size={16} className="mr-1" />
              <span>{room.members} members</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Community Feed</h3>
        
        <div className="mb-6">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts with the community... (in English)"
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none"
            rows="3"
          />
          <button className="mt-3 bg-gradient-to-r from-purple-600 to-red-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center">
            <Send size={18} className="mr-2" />
            Post
          </button>
        </div>

        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="border-2 border-gray-100 rounded-xl p-5 hover:shadow-md transition-all duration-300">
              <div className="flex items-start mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl mr-3">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{post.author}</h4>
                  <p className="text-sm text-gray-500">{post.role} • {post.time}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center hover:text-purple-600 transition-colors">
                  <ThumbsUp size={18} className="mr-1" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center hover:text-purple-600 transition-colors">
                  <MessageCircle size={18} className="mr-1" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center hover:text-purple-600 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderJobs = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Jobs & Opportunities</h2>
        <p className="text-blue-100">Find bilingual positions that match your skills and career goals</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
            />
          </div>
          <button className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
            <Filter size={20} className="mr-2" />
            Filters
          </button>
        </div>

        <div className="space-y-4">
          {jobs.map(job => (
            <div key={job.id} className="border-2 border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-3xl mr-4">
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                    <p className="text-gray-600 font-semibold">{job.company}</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {job.type}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.requirements.map((req, idx) => (
                  <span key={idx} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm">
                    {req}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <TrendingUp size={16} className="mr-1" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {job.posted}
                </div>
              </div>

              <button
                onClick={() => handleApplyJob(job.id)}
                disabled={appliedJobs.includes(job.id)}
                className={`w-full md:w-auto px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  appliedJobs.includes(job.id)
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-gradient-to-r from-purple-600 to-red-500 text-white hover:shadow-lg'
                }`}
              >
                {appliedJobs.includes(job.id) ? '✓ Applied' : 'Apply Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-green-600 to-teal-500 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Skills Development</h2>
        <p className="text-green-100">Enhance your professional skills with courses taught in English</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`h-40 bg-gradient-to-br ${course.color} flex items-center justify-center text-6xl`}>
              {course.image}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </span>
                <div className="flex items-center text-yellow-500">
                  <span className="font-bold mr-1">{course.rating}</span>
                  <span>⭐</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">by {course.instructor}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-1" />
                  {course.students} students
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Your Profile</h2>
        <p className="text-orange-100">Showcase your skills and connect with opportunities</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-red-500 h-32"></div>
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 mb-6">
            <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-xl flex items-center justify-center text-5xl mb-4 md:mb-0 md:mr-6">
              👤
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Your Name</h2>
              <p className="text-gray-600">Software Developer | EIP Graduate</p>
              <div className="flex items-center justify-center md:justify-start mt-2 text-sm text-gray-500">
                <MapPin size={16} className="mr-1" />
                Santo Domingo, Dominican Republic
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">B2+</div>
              <div className="text-sm text-gray-600">English Level</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
              <div className="text-sm text-gray-600">Profile Complete</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <Award className="mr-2 text-purple-600" />
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {['English Communication', 'JavaScript', 'React', 'Customer Service', 'Team Collaboration', 'Problem Solving'].map((skill, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-purple-600 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <Building className="mr-2 text-purple-600" />
                Experience
              </h3>
              <div className="border-l-4 border-purple-500 pl-4 space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Junior Developer</h4>
                  <p className="text-gray-600 text-sm">Tech Solutions DR • 2024 - Present</p>
                  <p className="text-gray-600 text-sm mt-1">Working on web applications using React and Node.js</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <BookOpen className="mr-2 text-purple-600" />
                Education
              </h3>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-800">English Immersion Program</h4>
                <p className="text-gray-600 text-sm">MESCyT • Graduated 2024</p>
                <p className="text-gray-600 text-sm mt-1">Advanced English certification with focus on professional communication</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-lg">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/icon.png" 
                alt="EIP Level Up Icon" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold" style={{ color: '#E31E24', letterSpacing: '0.5px' }}>
                  EIP LEVEL UP
                </h1>
                <p className="text-xs" style={{ color: '#4A1D8C', letterSpacing: '1px', marginTop: '-2px' }}>
                  CONNECT • GROW • WORK • LEVEL UP
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-lg transition-all">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {[
              { id: 'community', icon: Users, label: 'Community' },
              { id: 'jobs', icon: Briefcase, label: 'Jobs' },
              { id: 'skills', icon: BookOpen, label: 'Skills' },
              { id: 'profile', icon: User, label: 'Profile' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 font-semibold transition-all duration-300 border-b-4 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-purple-600'
                    : 'text-gray-500 border-transparent hover:text-purple-600'
                }`}
              >
                <tab.icon size={20} className="mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'community' && renderCommunity()}
        {activeTab === 'jobs' && renderJobs()}
        {activeTab === 'skills' && renderSkills()}
        {activeTab === 'profile' && renderProfile()}
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EIPLevelUp;