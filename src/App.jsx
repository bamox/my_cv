import { Mail, Phone, MapPin, Linkedin, Calendar, Award, Users, Globe, Briefcase, GraduationCap, Code, Languages, Star, Zap, Rocket, Brain, Target, ChevronRight, ExternalLink, Download } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-8 px-4">
        {/* Header Section */}
        <Card className="mb-8 bg-gradient-to-r from-slate-800/90 to-slate-900/90 border-purple-500/20 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 animate-slide-up">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="relative inline-block mb-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Abdelfateh EL HADJ NOUNA
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-lg animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
                <p className="text-2xl text-slate-300 font-medium">Program Manager & Product Development Professional</p>
                <Rocket className="w-6 h-6 text-purple-400 animate-bounce" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-slate-400 mb-8">
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 cursor-pointer group">
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Algiers, ALGERIA</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 cursor-pointer group">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  <span>+213669526395</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 cursor-pointer group">
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  <span>abdelfateh.elhadjnouna@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 cursor-pointer group">
                  <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
                  <span>linkedin.com/in/abdelfatehelhadjnouna/</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
            
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold text-slate-200">Professional Summary</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Highly accomplished and results-oriented Program Manager and Product Development professional with extensive experience in driving innovation, managing complex projects, and fostering startup ecosystems. Proven ability to lead cross-functional teams, define product strategies, and deliver impactful solutions from ideation to launch. Adept at leveraging agile methodologies, stakeholder engagement, and strategic partnerships to achieve organizational objectives and drive digital transformation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-cyan-500/20 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 animate-slide-up delay-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl text-slate-200">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Program Manager */}
            <div className="group relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              <div className="pl-8 p-6 bg-gradient-to-r from-slate-800/30 to-transparent rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:translate-x-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">Program Manager</h3>
                    <p className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
                      Algeria Venture, Algiers
                      <ChevronRight className="w-4 h-4" />
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">January 2024 - PRESENT</span>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3 hover:text-cyan-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Led the end-to-end design and full implementation of the ASEP program website (asep.dz), overseeing UI/UX, partner coordination, and backend requirements
                  </li>
                  <li className="flex items-start gap-3 hover:text-cyan-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Negotiated and secured 4 international cohorts in South Korea for Algerian startups, resulting in fully funded participation by foreign partners and expanding global exposure for 120+ startups
                  </li>
                  <li className="flex items-start gap-3 hover:text-cyan-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Spearheaded a cross-border exploration mission to Slovenia (March 2025) to establish strategic alliances for ASEP 2025
                  </li>
                  <li className="flex items-start gap-3 hover:text-cyan-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Provided product mentoring to 15+ startups within the accelerator, guiding them in refining features, optimizing strategies, and enhancing user experience
                  </li>
                  <li className="flex items-start gap-3 hover:text-cyan-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Led 5 international delegations (4 to South Korea, 1 to the USA) for 150+ startups, facilitating exposure to global innovation networks
                  </li>
                  <li className="flex items-start gap-3 hover:text-cyan-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Facilitated agile-style planning cycles, including weekly syncs, sprint-style roadmaps, and program retrospectives across cross-functional teams
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Development Coach */}
            <div className="group relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              <div className="pl-8 p-6 bg-gradient-to-r from-slate-800/30 to-transparent rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:translate-x-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">Product Development and Startup Coach (Freelance)</h3>
                    <p className="text-purple-400 font-semibold text-lg flex items-center gap-2">
                      Algeria
                      <ChevronRight className="w-4 h-4" />
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Mai 2022 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3 hover:text-purple-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    Managed end-to-end development of Fenin.dz, an event platform, from concept to launch, achieving significant user adoption
                  </li>
                  <li className="flex items-start gap-3 hover:text-purple-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    Served as a startup coach and product consultant for Hawess and Vovista, advising on product strategy, UX, and GTM planning
                  </li>
                  <li className="flex items-start gap-3 hover:text-purple-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    Coordinated development teams, prepared comprehensive business documentation, and supported critical technical architecture decisions
                  </li>
                  <li className="flex items-start gap-3 hover:text-purple-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    Guided teams in business model development and pitch preparation, empowering them to secure funding and partnerships
                  </li>
                </ul>
              </div>
            </div>

            {/* Training Coordinator */}
            <div className="group relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-red-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              <div className="pl-8 p-6 bg-gradient-to-r from-slate-800/30 to-transparent rounded-2xl border border-pink-500/10 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:translate-x-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">Training Coordinator</h3>
                    <p className="text-pink-400 font-semibold text-lg flex items-center gap-2">
                      GREAT SAFETY SERVICES, Algiers
                      <ChevronRight className="w-4 h-4" />
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Jan 2021 - Mai 2023</span>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3 hover:text-pink-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    Managed more than 10 international training sessions for startups and businesses in risk management and safety
                  </li>
                  <li className="flex items-start gap-3 hover:text-pink-300 transition-colors duration-300">
                    <Target className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    Assisted in certification and compliance processes, helping startups meet international standards (e.g., IRATA certification from the UK)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-green-500/20 backdrop-blur-xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 animate-slide-up delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl text-slate-200">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="group p-6 bg-gradient-to-r from-slate-800/30 to-transparent rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:transform hover:translate-x-2">
              <h3 className="text-xl font-bold text-slate-200 mb-2">Master's Degree in Strategic Management & Information Systems</h3>
              <p className="text-green-400 font-semibold mb-2">Superior National School of Management, Algeria</p>
              <p className="text-slate-400 mb-3">2020</p>
              <div className="space-y-2 text-slate-300">
                <p><strong className="text-green-400">Key Learnings:</strong> Strategic planning, business intelligence, digital transformation, project management, and risk analysis.</p>
                <p><strong className="text-green-400">Graduation Topic:</strong> Blockchain Technology as a tool of modernization of supply chain management in Pharmaceutical Industry.</p>
              </div>
            </div>
            
            <div className="group p-6 bg-gradient-to-r from-slate-800/30 to-transparent rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:translate-x-2">
              <h3 className="text-xl font-bold text-slate-200 mb-2">Bachelor's Degree in Computer Science</h3>
              <p className="text-emerald-400 font-semibold mb-2">Saad Dahleb University - BLIDA 1, Algeria</p>
              <p className="text-slate-400 mb-3">2018</p>
              <div className="space-y-2 text-slate-300">
                <p><strong className="text-emerald-400">Key Learnings:</strong> Software development, database management, algorithms, system security, and web technologies.</p>
                <p><strong className="text-emerald-400">Graduation Project:</strong> Development of a Web-application that Helps users to choose the best local Bank based on their needs.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-yellow-500/20 backdrop-blur-xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 animate-slide-up delay-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl text-slate-200">
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="group">
              <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-3">
                <Code className="w-6 h-6 text-cyan-400" />
                Project & Product Management
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Agile & Lean Methodologies (Scrum)', 'Digital Product Development', 'Risk & Issue Management',
                  'Technical Documentation & Reporting', 'UX/UI Collaboration & Testing', 'Project & Program Coordination',
                  'Product Strategy & Roadmap Development', 'Go-to-Market (GTM) Planning', 'Vendor Management',
                  'Budget & Resource Allocation', 'Scope & Change Management', 'Communication Planning'
                ].map((skill, index) => (
                  <Badge 
                    key={skill} 
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-3">
                <Award className="w-6 h-6 text-purple-400" />
                Innovation & Entrepreneurship
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Design Thinking Mindset', 'Innovation Management in Tech Ecosystems', 'Startup Mentorship & Coaching',
                  'Ecosystem & Partnership Development', 'AI-Assisted Workflow Automation & Prototyping',
                  'Business Intelligence Concepts', 'Digital Transformation Awareness'
                ].map((skill, index) => (
                  <Badge 
                    key={skill} 
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-green-400" />
                Soft & Leadership Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Stakeholder Engagement & Cross-Functional Collaboration', 'Negotiation with International Partners',
                  'Cross-Cultural Communication', 'Public Speaking & Presentation', 'Strategic Planning Support',
                  'Workshop Facilitation', 'Client-Facing Interaction', 'Problem Solving & Decision Making',
                  'Leadership', 'Team Motivation', 'Adaptability'
                ].map((skill, index) => (
                  <Badge 
                    key={skill} 
                    className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30 hover:from-green-500/30 hover:to-emerald-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-3">
                <Languages className="w-6 h-6 text-yellow-400" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 hover:from-yellow-500/30 hover:to-orange-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                  Arabic (Native)
                </Badge>
                <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 hover:from-yellow-500/30 hover:to-orange-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                  French (Very Good)
                </Badge>
                <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 hover:from-yellow-500/30 hover:to-orange-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                  English (Very Good)
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Development Section */}
        <Card className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-indigo-500/20 backdrop-blur-xl shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 animate-slide-up delay-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl text-slate-200">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              Professional Development & Engagements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Participation in GITEX Dubai (2023)',
                'Participation in COEX Innovation, Seoul, South Korea (2024)',
                'Startup Weekend Mentor & Coach',
                'Hackathons & Entrepreneurship Events',
                'Design Thinking Trainer',
                'Established a free zone company in Dubai Silicon Oasis',
                'Hosted a cybersecurity seminar in Dubai Knowledge Park'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-800/30 to-transparent rounded-xl border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:translate-x-2 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse"></div>
                  <span className="text-slate-300 group-hover:text-indigo-300 transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm animate-fade-in delay-600">
          <p>© 2025 Abdelfateh EL HADJ NOUNA. All rights reserved.</p>
          <p className="mt-2 text-xs">Designed for the Digital Innovation Era</p>
        </div>
      </div>
    </div>
  )
}

export default App