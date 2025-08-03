import { Mail, Phone, MapPin, Linkedin, Calendar, Award, Users, Globe, Briefcase, GraduationCap, Code, Languages, Star } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-slate-800 mb-2">Abdelfateh EL HADJ NOUNA</h1>
              <p className="text-xl text-slate-600 mb-4">Program Manager & Product Development Professional</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Algiers, ALGERIA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+213669526395</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>abdelfateh.elhadjnouna@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/abdelfatehelhadjnouna/</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-slate-800 mb-3">Professional Summary</h2>
              <p className="text-slate-700 leading-relaxed">
                Highly accomplished and results-oriented Program Manager and Product Development professional with extensive experience in driving innovation, managing complex projects, and fostering startup ecosystems. Proven ability to lead cross-functional teams, define product strategies, and deliver impactful solutions from ideation to launch. Adept at leveraging agile methodologies, stakeholder engagement, and strategic partnerships to achieve organizational objectives and drive digital transformation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Briefcase className="w-6 h-6" />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Program Manager */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Program Manager</h3>
                  <p className="text-blue-600 font-medium">Algeria Venture, Algiers</p>
                </div>
                <div className="flex items-center gap-1 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>January 2024 - PRESENT</span>
                </div>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• Led the end-to-end design and full implementation of the ASEP program website (asep.dz), overseeing UI/UX, partner coordination, and backend requirements</li>
                <li>• Negotiated and secured 4 international cohorts in South Korea for Algerian startups, resulting in fully funded participation by foreign partners and expanding global exposure for 120+ startups</li>
                <li>• Spearheaded a cross-border exploration mission to Slovenia (March 2025) to establish strategic alliances for ASEP 2025</li>
                <li>• Provided product mentoring to 15+ startups within the accelerator, guiding them in refining features, optimizing strategies, and enhancing user experience</li>
                <li>• Led 5 international delegations (4 to South Korea, 1 to the USA) for 150+ startups, facilitating exposure to global innovation networks</li>
                <li>• Facilitated agile-style planning cycles, including weekly syncs, sprint-style roadmaps, and program retrospectives across cross-functional teams</li>
              </ul>
            </div>

            {/* Product Development Coach */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Product Development and Startup Coach (Freelance)</h3>
                  <p className="text-green-600 font-medium">Algeria</p>
                </div>
                <div className="flex items-center gap-1 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>Mai 2022 - Present</span>
                </div>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• Managed end-to-end development of Fenin.dz, an event platform, from concept to launch, achieving significant user adoption</li>
                <li>• Served as a startup coach and product consultant for Hawess and Vovista, advising on product strategy, UX, and GTM planning</li>
                <li>• Coordinated development teams, prepared comprehensive business documentation, and supported critical technical architecture decisions</li>
                <li>• Guided teams in business model development and pitch preparation, empowering them to secure funding and partnerships</li>
              </ul>
            </div>

            {/* Training Coordinator */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Training Coordinator</h3>
                  <p className="text-purple-600 font-medium">GREAT SAFETY SERVICES, Algiers</p>
                </div>
                <div className="flex items-center gap-1 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2021 - Mai 2023</span>
                </div>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• Managed more than 10 international training sessions for startups and businesses in risk management and safety</li>
                <li>• Assisted in certification and compliance processes, helping startups meet international standards (e.g., IRATA certification from the UK)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GraduationCap className="w-6 h-6" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-lg font-semibold text-slate-800">Master's Degree in Strategic Management & Information Systems</h3>
              <p className="text-indigo-600 font-medium">Superior National School of Management, Algeria</p>
              <p className="text-slate-600">2020</p>
              <p className="text-slate-700 mt-2">
                <strong>Key Learnings:</strong> Strategic planning, business intelligence, digital transformation, project management, and risk analysis.
              </p>
              <p className="text-slate-700">
                <strong>Graduation Topic:</strong> Blockchain Technology as a tool of modernization of supply chain management in Pharmaceutical Industry.
              </p>
            </div>
            
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-lg font-semibold text-slate-800">Bachelor's Degree in Computer Science</h3>
              <p className="text-cyan-600 font-medium">Saad Dahleb University - BLIDA 1, Algeria</p>
              <p className="text-slate-600">2018</p>
              <p className="text-slate-700 mt-2">
                <strong>Key Learnings:</strong> Software development, database management, algorithms, system security, and web technologies.
              </p>
              <p className="text-slate-700">
                <strong>Graduation Project:</strong> Development of a Web-application that Helps users to choose the best local Bank based on their needs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Star className="w-6 h-6" />
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Project & Product Management
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Agile & Lean Methodologies (Scrum)', 'Digital Product Development', 'Risk & Issue Management',
                  'Technical Documentation & Reporting', 'UX/UI Collaboration & Testing', 'Project & Program Coordination',
                  'Product Strategy & Roadmap Development', 'Go-to-Market (GTM) Planning', 'Vendor Management',
                  'Budget & Resource Allocation', 'Scope & Change Management', 'Communication Planning'
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Innovation & Entrepreneurship
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Design Thinking Mindset', 'Innovation Management in Tech Ecosystems', 'Startup Mentorship & Coaching',
                  'Ecosystem & Partnership Development', 'AI-Assisted Workflow Automation & Prototyping',
                  'Business Intelligence Concepts', 'Digital Transformation Awareness'
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Soft & Leadership Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Stakeholder Engagement & Cross-Functional Collaboration', 'Negotiation with International Partners',
                  'Cross-Cultural Communication', 'Public Speaking & Presentation', 'Strategic Planning Support',
                  'Workshop Facilitation', 'Client-Facing Interaction', 'Problem Solving & Decision Making',
                  'Leadership', 'Team Motivation', 'Adaptability'
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Languages className="w-5 h-5" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Arabic (Native)</Badge>
                <Badge variant="outline">French (Very Good)</Badge>
                <Badge variant="outline">English (Very Good)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Development Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Globe className="w-6 h-6" />
              Professional Development & Engagements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Participation in GITEX Dubai (2023)',
                'Participation in COEX Innovation, Seoul, South Korea (2024)',
                'Startup Weekend Mentor & Coach',
                'Hackathons & Entrepreneurship Events',
                'Design Thinking Trainer',
                'Established a free zone company in Dubai Silicon Oasis',
                'Hosted a cybersecurity seminar in Dubai Knowledge Park'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-slate-600 text-sm">
          <p>© 2025 Abdelfateh EL HADJ NOUNA. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App

