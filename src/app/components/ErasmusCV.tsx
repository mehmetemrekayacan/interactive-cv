import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe, MapPin, Download } from 'lucide-react';

export function ErasmusCV() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 print:bg-white print:min-h-0 print:px-[10mm] print:pt-[6mm] print:pb-[10mm] print:flex print:justify-center">
      {/* A4 Container - 210mm x 297mm */}
      <div className="max-w-[210mm] w-full mx-auto bg-white shadow-lg print:shadow-none print:max-w-none print:m-0 print:pt-0 print:pb-0" 
           style={{ minHeight: '297mm' }}>
        
        {/* Main Content with padding - Equal margins on all sides */}
        <div className="p-12 print:p-0 print:flex print:flex-col" style={{ minHeight: '270mm' }}>
          
          {/* Header Section */}
          <header className="mb-6 print:mb-5 border-b-2 border-gray-300 print:border-gray-300 pb-4 print:pb-3 bg-gradient-to-r from-slate-50 to-gray-50 print:from-slate-50 print:to-gray-50 rounded-lg p-4 print:p-3" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            <h1 className="text-3xl font-semibold tracking-tight mb-2 print:mb-1.5 text-gray-900" style={{ fontSize: '26pt' }}>
              Mehmet Emre Kayacan
            </h1>
            
            <div className="flex items-center gap-2 text-gray-700 mb-2 print:mb-1.5" style={{ fontSize: '9pt' }}>
              <MapPin className="w-3.5 h-3.5 print:w-3 print:h-3" />
              <span>Konya, Turkey | Open to relocation in Europe
            Available for Erasmus Internship | Summer 2026
            </span>
            </div>
            
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 print:gap-x-3 print:gap-y-1 text-gray-700 print:text-gray-900" style={{ fontSize: '9pt' }}>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>+90 545 367 68 48</span>
              </div>
              <a href="mailto:emremehmet32@hotmail.com" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors print:no-underline print:text-gray-900">
                <Mail className="w-3.5 h-3.5" />
                <span>emremehmet32@hotmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/mehmet-emre-kayacan-5a4556254/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors print:no-underline print:text-gray-900">
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/mehmetemrekayacan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors print:no-underline print:text-gray-900">
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a href="https://mehmet-emre-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors print:no-underline print:text-gray-900">
                <Globe className="w-3.5 h-3.5" />
                <span>Portfolio</span>
              </a>
            </div>
          </header>

          {/* Two Column Layout */}
          <div className="grid grid-cols-[1fr_240px] gap-6 print:gap-4 print:flex-1">
            
            {/* Left Column - Main Content */}
            <div className="space-y-5 print:space-y-4 print:flex-1">
              
              {/* Profile Summary */}
              <section className="print:break-inside-avoid bg-white print:bg-white rounded-lg p-3 print:p-2.5 border-l-4 border-gray-400 print:border-gray-400 border border-gray-200">
                <h2 className="uppercase tracking-wide mb-2 print:mb-1.5 text-gray-900 print:text-gray-900 border-b border-gray-300 print:border-gray-300 pb-1" 
                    style={{ fontSize: '11pt', fontWeight: 600 }}>
                  Profile
                </h2>
                <p className="text-gray-700 leading-relaxed print:leading-tight" style={{ fontSize: '9.5pt', lineHeight: '1.3' }}>
                4th-year Computer Engineering student focused on Python-based backend development and modern web technologies, with hands-on experience in networking, virtualization, and real-world system design. Actively seeking an Erasmus Internship to gain international industry experience in software and IT teams.

                </p>
              </section>

              {/* Professional Experience */}
              <section className="print:break-inside-avoid bg-white print:bg-white rounded-lg p-3 print:p-2.5 border-l-4 border-gray-400 print:border-gray-400 border border-gray-200">
                <h2 className="uppercase tracking-wide mb-2 print:mb-1.5 text-gray-900 print:text-gray-900 border-b border-gray-300 print:border-gray-300 pb-1" 
                    style={{ fontSize: '11pt', fontWeight: 600 }}>
                  Professional Experience
                </h2>
                
                <div className="space-y-3 print:space-y-2.5">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-gray-900" style={{ fontSize: '10pt' }}>
                        Front-End Development Intern
                      </h3>
                      <span className="text-gray-600" style={{ fontSize: '9pt' }}>Aug 2024 – Sep 2024</span>
                    </div>
                    <p className="text-gray-700 italic mb-1.5" style={{ fontSize: '9.5pt' }}>
                      Anadolu Birlik Holding, IT Dept.
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 print:space-y-0.5 text-gray-700" style={{ fontSize: '9.5pt', lineHeight: '1.3' }}>
                      <li>Built an Invoice Management Application using React, JavaScript, HTML, and CSS</li>
                      <li>Transformed Figma designs into responsive, production-ready UI</li>
                      <li>Improved data handling by implementing client-side persistence with localStorage</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-gray-900" style={{ fontSize: '10pt' }}>
                        Network & System Intern
                      </h3>
                      <span className="text-gray-600" style={{ fontSize: '9pt' }}>Aug 2025</span>
                    </div>
                    <p className="text-gray-700 italic mb-1.5" style={{ fontSize: '9.5pt' }}>
                      Süleyman Demirel University, IT Dept.
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 print:space-y-0.5 text-gray-700" style={{ fontSize: '9.5pt', lineHeight: '1.3' }}>
                      <li>Configured VLANs and managed Linux-based virtual machines</li>
                      <li>Designed firewall rules using OPNsense to improve network security</li>
                      <li>Supported real-world troubleshooting in an academic IT environment</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-gray-900" style={{ fontSize: '10pt' }}>
                        Global Volunteer (AIESEC)
                      </h3>
                      <span className="text-gray-600" style={{ fontSize: '9pt' }}>Sep 2025 – Oct 2025</span>
                    </div>
                    <p className="text-gray-700 italic mb-1.5" style={{ fontSize: '9.5pt' }}>
                      SDG Quality Education Program | Galati, Romania
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 print:space-y-0.5 text-gray-700" style={{ fontSize: '9.5pt', lineHeight: '1.3' }}>
                      <li>Led English workshops for middle school students on SDG & cultural topics</li>
                      <li>Designed (Canva) & presented educational materials, honing public speaking skills</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="bg-white print:bg-white rounded-lg p-3 print:p-2 border-l-4 border-gray-400 print:border-gray-400 border border-gray-200">
                <h2 className="uppercase tracking-wide mb-2 print:mb-1.5 text-gray-900 print:text-gray-900 border-b border-gray-300 print:border-gray-300 pb-1" 
                    style={{ fontSize: '11pt', fontWeight: 600 }}>
                  Projects
                </h2>

                <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-gray-900" style={{ fontSize: '10pt' }}>
                        CampusPlus
                      </h3>
                      <span className="text-gray-600" style={{ fontSize: '9pt' }}>Python, FastAPI, PostgreSQL, React, Docker</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 print:space-y-0.5 text-gray-700" style={{ fontSize: '9.5pt', lineHeight: '1.3' }}>
                      <li>Developed a full-stack platform with an async FastAPI backend and React frontend.</li>
                      <li>Integrated AI features using vector databases (FAISS) and LLM workflows with LangChain, focusing on practical application and learning-by-building.
</li>
                    </ul>
                  </div>
                
                <div className="space-y-3 print:space-y-2.5">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-gray-900" style={{ fontSize: '10pt' }}>
                        Hybrid TCP/UDP Network Chat Application
                      </h3>
                      <span className="text-gray-600" style={{ fontSize: '9pt' }}>Python</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 print:space-y-0.5 text-gray-700" style={{ fontSize: '9.5pt', lineHeight: '1.3' }}>
                      <li>Designed a custom protocol over TCP/UDP for reliable messaging</li>
                      <li>Implemented peer discovery and basic reliability mechanisms</li>
                    </ul>
                  </div>

      

                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-gray-900" style={{ fontSize: '10pt' }}>
                        MIPS Assembly Simulator
                      </h3>
                      <span className="text-gray-600" style={{ fontSize: '9pt' }}>Python, Tkinter</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 print:space-y-0.5 text-gray-700" style={{ fontSize: '9.5pt', lineHeight: '1.3' }}>
                      <li>Developed a MIPS assembly IDE with graphical user interface</li>
                      <li>Featured code editor and real-time memory/register views</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline mb-0.5 print:mb-0.5">
                      <h3 className="font-semibold text-gray-900" style={{ fontSize: '9.5pt' }}>
                        8-Bit ALU Circuit Design
                      </h3>
                      <span className="text-gray-600" style={{ fontSize: '8.5pt' }}>Tinkercad, Verilog</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-0 print:space-y-0 text-gray-700" style={{ fontSize: '9pt', lineHeight: '1.2' }}>
                      <li>Designed and simulated an 8-bit ALU circuit for addition/subtraction operations</li>
                      <li>Implemented digital logic design using Verilog HDL</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-5 print:space-y-2.5">
              
              {/* Technical Skills */}
              <section className="bg-white print:bg-white rounded-lg p-3 print:p-2 border-l-4 border-gray-400 print:border-gray-400 border border-gray-200">
                <h2 className="uppercase tracking-wide mb-1.5 print:mb-1 text-gray-900 print:text-gray-900 border-b border-gray-300 print:border-gray-300 pb-0.5" 
                    style={{ fontSize: '11pt', fontWeight: 600 }}>
                  Skills
                </h2>
                
                <div className="space-y-2 print:space-y-1.5">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-0.5" style={{ fontSize: '9.5pt' }}>
                    Programming & Backend
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '9pt', lineHeight: '1.3' }}>
                    Python (3.11+), FastAPI, Async APIs, SQLAlchemy, Alembic, Assembly (MIPS)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-0.5" style={{ fontSize: '9.5pt' }}>
                    Frontend
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '9pt', lineHeight: '1.3' }}>
                    JavaScript (ES6+), React, TypeScript
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-0.5" style={{ fontSize: '9.5pt' }}>
                    Web Technologies
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '9pt', lineHeight: '1.3' }}>
                    HTML5, CSS3, Responsive Design, Tailwind CSS
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-0.5" style={{ fontSize: '9.5pt' }}>
                    AI-Assisted Development
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '9pt', lineHeight: '1.3' }}>
                    Prompt Engineering, LLM Integration (LangChain, Gemini),
                    Embeddings & Vector Search (FAISS), AI-assisted coding & testing
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-0.5" style={{ fontSize: '9.5pt' }}>
                    DevOps & Tooling
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '9pt', lineHeight: '1.3' }}>
                    Docker, Docker Compose, GitHub Actions (CI),
                    Git & GitHub, AI-assisted development and debugging
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-0.5" style={{ fontSize: '9.5pt' }}>
                      Networking & Systems
                    </h3>
                    <p className="text-gray-700" style={{ fontSize: '9pt', lineHeight: '1.3' }}>
                      TCP/IP, Client-Server Architecture, Basic Network Security, VLANs, Firewall (OPNsense), 
                      Virtualization (VirtualBox), Linux System
                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="bg-white print:bg-white rounded-lg p-3 print:p-2 border-l-4 border-gray-400 print:border-gray-400 border border-gray-200">
                <h2 className="uppercase tracking-wide mb-1.5 print:mb-1 text-gray-900 print:text-gray-900 border-b border-gray-300 print:border-gray-300 pb-0.5" 
                    style={{ fontSize: '11pt', fontWeight: 600 }}>
                  Education
                </h2>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5" style={{ fontSize: '9.5pt' }}>
                    B.Sc. Computer Engineering
                  </h3>
                  <p className="text-gray-700 mb-0.5" style={{ fontSize: '8.5pt' }}>
                    Konya Food and Agriculture University
                  </p>
                  <p className="text-gray-700 mb-0.5" style={{ fontSize: '8.5pt' }}>
                    Konya, Turkey
                  </p>
                  <p className="text-gray-600 mb-0.5" style={{ fontSize: '8.5pt' }}>
                    Expected: June 2026
                  </p>
                  <p className="text-gray-700 mb-0.5" style={{ fontSize: '8.5pt' }}>
                    GPA: 3.23 / 4.00
                  </p>
                  <p className="text-gray-700" style={{ fontSize: '8.5pt', lineHeight: '1.25' }}>
                    100% Academic Scholarship | Instruction in English
                  </p>
                </div>
              </section>

              {/* Languages */}
              <section className="bg-white print:bg-white rounded-lg p-2.5 print:p-1.5 border-l-4 border-gray-400 print:border-gray-400 border border-gray-200">
                <h2 className="uppercase tracking-wide mb-1.5 print:mb-1 text-gray-900 print:text-gray-900 border-b border-gray-300 print:border-gray-300 pb-0.5" 
                    style={{ fontSize: '10.5pt', fontWeight: 600 }}>
                  Languages
                </h2>
                
                <div className="space-y-1 print:space-y-0.5">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold text-gray-900" style={{ fontSize: '9.5pt' }}>
                        Turkish
                      </span>
                      <span className="text-gray-600" style={{ fontSize: '9pt' }}>Native</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold text-gray-900" style={{ fontSize: '9.5pt' }}>
                        English
                      </span>
                      <span className="text-gray-600" style={{ fontSize: '9pt' }}>Upper-Intermediate</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Interests */}
              <section className="bg-white print:bg-white rounded-lg p-2.5 print:p-1.5 border-l-4 border-gray-400 print:border-gray-400 border border-gray-200">
                <h2 className="uppercase tracking-wide mb-1 print:mb-0.5 text-gray-900 print:text-gray-900 border-b border-gray-300 print:border-gray-300 pb-0.5" 
                    style={{ fontSize: '10.5pt', fontWeight: 600 }}>
                  Interests
                </h2>
                <p className="text-gray-700" style={{ fontSize: '8pt', lineHeight: '1.2' }}>
                Computer Networks, System Design, AI-Assisted Software Development, Open-Source Projects, International Collaboration

                </p>
              </section>

              {/* References */}
              <section className="bg-white print:bg-white rounded-lg p-2 print:p-1.5 border-l-4 border-gray-400 print:border-gray-400 border border-gray-200">
                <h2 className="uppercase tracking-wide mb-0.5 print:mb-0.5 text-gray-900 print:text-gray-900 border-b border-gray-300 print:border-gray-300 pb-0.5" 
                    style={{ fontSize: '10pt', fontWeight: 600 }}>
                  References
                </h2>
                <p className="text-gray-700 italic" style={{ fontSize: '8pt', lineHeight: '1.15' }}>
                  References available upon request
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Print Instructions & Download Button - Hidden when printing */}
      <div className="max-w-[210mm] mx-auto mt-8 space-y-4 print:hidden">
        <div className="flex justify-center">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
          >
            <Download className="w-5 h-5" />
            <span>PDF Olarak İndir</span>
          </button>
        </div>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold">PDF İndirme Talimatları:</span> Butona tıklayın veya <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Ctrl/Cmd + P</kbd> tuşlarına basın. 
            Yazdırma penceresinde "Hedef" olarak "PDF olarak kaydet" seçin ve kenar boşluklarını "Yok" veya "Minimum" yapın.
          </p>
        </div>
      </div>
    </div>
  );
}
