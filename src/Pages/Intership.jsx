import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import EliClip from "../Assets/Video/EliClip.mp4";
import image1 from "../assets/Images/image1.jpg";
import image2 from "../assets/Images/image2.jpg";
import image3 from "../assets/Images/image3.jpg";

function Intership() {
  const [activeMonth, setActiveMonth] = useState("june");
  const galleryImages = [
    {
      src: image2,
      alt: "Internship 1",
    },
    {
      src: image1,
      alt: "Internship 2",
    },
    {
      src: image3,
      alt: "Internship 3",
    },
  ];

  const internshipTimeline = {
    june: {
      month: "June",
      year: 2025,
      days: 14,
      hours: 60,
      description: "Onboarding & Technical Foundation",
      highlights: [
        "Company orientation and team introduction",
        "Tech stack setup (React, MySQL, Sequelize ORM)",
        "React fundamentals and data fetching",
        "MySQL JOIN operations and familiarization",
        "SBF project familiarization and login page responsiveness",
      ],
      projects: ["SBF (Supply Chain & Inventory System)"],
    },
    july: {
      month: "July",
      year: 2025,
      days: 31,
      hours: 240,
      description: "Active Development & Feature Implementation",
      highlights: [
        "SBF Phase II UI development and responsiveness",
        "Report module responsiveness implementation",
        "Pagination and loading state enhancements",
        "RBAC (Role-Based Access Control) implementation",
        "Bug fixing for multiple modules (Masterlist, Stock Transfer, Receiving)",
        "Landing page UI and warehouse module development",
      ],
      projects: ["SBF Phase II"],
    },
    august: {
      month: "August",
      year: 2025,
      days: 31,
      hours: 144,
      description: "Advanced Features & CRM Development",
      highlights: [
        "Docker setup and QA testing",
        "Automated email credential sender implementation",
        "Enhanced table and UI components",
        "Warehouse module optimization and enhancement",
        "Executive list and issuance optimization",
        "CRM UI development (Contacts, Leads, Customer Details)",
        "Stock Replenishment data fetching implementation",
      ],
      projects: ["SBF Phase II", "CRM Development", "Red Maroon"],
    },
    september: {
      month: "September",
      year: 2025,
      days: 25,
      hours: 80,
      description: "Report Module & Final Optimizations",
      highlights: [
        "Inventory, Purchase Request, and Purchase Order report enhancements",
        "CSV and PDF export functionality",
        "Notification system enhancement and optimization",
        "Change password format indicator implementation",
        "Bug fixing for date filters across multiple reports",
        "Profile view button and low stock product route modifications",
      ],
      projects: ["SBF Phase II", "CRM", "Red Maroon"],
    },
  };

  return (
    <div className="min-h-screen bg-white font-montserrat py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Internship Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-montserrat">
            My Internship Experience
          </h1>
          <p className="text-lg text-gray-600 font-montserrat">
            At Endless Logic Innovation IT Solution
          </p>
          <p className="text-base text-gray-500 font-montserrat mt-2">
            June 17, 2025 - September 25, 2025
          </p>
          <div className="mt-4 flex justify-center gap-8 text-gray-700">
            <div>
              <p className="font-bold text-black">486 Hours</p>
              <p className="text-sm">Intern Hours</p>
            </div>
            <div>
              <p className="font-bold text-black">488 Hours</p>
              <p className="text-sm">Total Hours</p>
            </div>
            <div>
              <p className="font-bold text-black">Software Developer</p>
              <p className="text-sm">Position</p>
            </div>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16 bg-gray-50 p-8 rounded-lg">
          {/* Video Section */}
          <div className="md:w-1/3">
            <video
              width="260"
              height="315"
              autoPlay
              muted
              loop
              controlsList="nodownload"
              className="rounded-lg shadow-lg"
            >
              <source src={EliClip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Company Details */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-black mb-4 font-montserrat">
              Endless Logic Innovation IT Solution
            </h2>

            <div className="flex items-center gap-2 mb-6">
              <FaMapMarkerAlt className="text-black text-xl" />
              <span className="text-gray-700 font-montserrat">
                #18 Isidro Francisco St. Maysan Val-City
              </span>
            </div>

            <div className="space-y-2 mb-6">
              <p>
                <span className="font-semibold text-black">Supervisor:</span>{" "}
                Mr. Patrick John Nito & Mr. Chester Miñoza
              </p>
              <p>
                <span className="font-semibold text-black">Department:</span> IT
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed font-montserrat">
              This is where I completed my internship, working as a Software
              Developer with an IT solutions company that specializes in
              enterprise software development. The company provided me with
              valuable real-world experience in full-stack development and
              professional practices.
            </p>
          </div>
        </div>

        {/* Internship Timeline Calendar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 font-montserrat">
            Internship Timeline & Monthly Progress
          </h2>

          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {Object.keys(internshipTimeline).map((key) => (
              <button
                key={key}
                onClick={() => setActiveMonth(key)}
                className={`px-6 py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
                  activeMonth === key
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {internshipTimeline[key].month}
              </button>
            ))}
          </div>

          {/* Month Detail Card */}
          <div className="bg-white border-2 border-black rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2 font-montserrat">
                {internshipTimeline[activeMonth].month}{" "}
                {internshipTimeline[activeMonth].year}
              </h3>
              <p className="text-gray-600 font-montserrat mb-4">
                {internshipTimeline[activeMonth].description}
              </p>
              <div className="flex gap-4 mb-4">
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-full">
                  <span className="text-sm text-gray-700 font-montserrat font-semibold">
                    {internshipTimeline[activeMonth].days} days
                  </span>
                </div>
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-full">
                  <span className="text-sm text-gray-700 font-montserrat font-semibold">
                    {internshipTimeline[activeMonth].hours} hours
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-black mb-4 font-montserrat text-lg">
                Key Highlights:
              </h4>
              <ul className="space-y-2">
                {internshipTimeline[activeMonth].highlights.map(
                  (highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-black font-bold">✓</span>
                      <span className="text-gray-700 font-montserrat">
                        {highlight}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-bold text-black mb-2 font-montserrat">
                Projects:
              </h4>
              <div className="flex flex-wrap gap-2">
                {internshipTimeline[activeMonth].projects.map(
                  (project, index) => (
                    <span
                      key={index}
                      className="bg-black text-white px-3 py-1 rounded-full text-sm font-montserrat"
                    >
                      {project}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills & Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 font-montserrat">
            Technical Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-black mb-4 font-montserrat">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-700 font-montserrat">
                <li>• React.js</li>
                <li>• Tailwind CSS</li>
                <li>• UI/UX Enhancement</li>
                <li>• Responsive Design</li>
                <li>• Table Components</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-black mb-4 font-montserrat">
                Backend & Database
              </h3>
              <ul className="space-y-2 text-gray-700 font-montserrat">
                <li>• MySQL</li>
                <li>• Sequelize ORM</li>
                <li>• Data Fetching & Optimization</li>
                <li>• API Integration</li>
                <li>• DBeaver</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-black mb-4 font-montserrat">
                Tools & Practices
              </h3>
              <ul className="space-y-2 text-gray-700 font-montserrat">
                <li>• Docker</li>
                <li>• QA Testing</li>
                <li>• Bug Fixing & Debugging</li>
                <li>• CSV/PDF Export</li>
                <li>• RBAC Implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Major Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 font-montserrat">
            Major Projects Worked On
          </h2>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-black p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-2 font-montserrat">
                SBF (Supply & Budget Finance) - Phase II
              </h3>
              <p className="text-gray-600 mb-3 font-montserrat">
                A comprehensive supply chain and budget finance system featuring
                inventory management, purchase requests, and financial
                reporting.
              </p>
              <p className="text-sm text-gray-700 font-montserrat">
                <span className="font-semibold">Contributions:</span> UI
                development, report module enhancements, RBAC implementation,
                pagination optimization, export functionality (CSV/PDF),
                warehouse module development, and extensive bug fixing.
              </p>
            </div>

            <div className="bg-white border-l-4 border-black p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-2 font-montserrat">
                CRM (Customer Relationship Management) - SunTech
              </h3>
              <p className="text-gray-600 mb-3 font-montserrat">
                Customer relationship management system for managing contacts,
                leads, and customer interactions.
              </p>
              <p className="text-sm text-gray-700 font-montserrat">
                <span className="font-semibold">Contributions:</span> UI
                development for contacts and leads modules, customer details
                page, quotation templates, and analytics module implementation.
              </p>
            </div>

            <div className="bg-white border-l-4 border-black p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-2 font-montserrat">
                Red Maroon - Quotation & Service Invoice System
              </h3>
              <p className="text-gray-600 mb-3 font-montserrat">
                A system for managing quotations and service invoices.
              </p>
              <p className="text-sm text-gray-700 font-montserrat">
                <span className="font-semibold">Contributions:</span> Quotation
                form templates and service invoice form development.
              </p>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6 font-montserrat">
            Key Learnings & Growth
          </h2>
          <div className="bg-gray-50 border-l-4 border-black p-8 rounded-lg text-gray-700 font-montserrat">
            During my internship, I gained practical experience building
            large-scale enterprise systems with complex business logic and
            multiple interconnected modules. I developed my skills in both
            frontend (React, UI/UX) and backend (MySQL, data optimization)
            development, transitioning into a full-stack developer. This journey
            improved my debugging and troubleshooting abilities through
            extensive bug fixing and optimization work. I learned industry best
            practices, code organization, and effective team collaboration,
            which contributed to my professional development. Most importantly,
            I contributed to products used by real clients, helping me
            understand the responsibility and quality standards required in
            professional software development.
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-black mb-6 font-montserrat text-center">
            Internship Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative group rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0   flex items-center justify-center">
                  <span className="text-white text-lg font-montserrat">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intership;
