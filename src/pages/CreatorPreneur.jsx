import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './CreatorPreneur.css';

// Import images
import buildCreateImg from '../assets/courses/creatorpreneur/build-create-img.png';
import challengeCardBg from '../assets/courses/creatorpreneur/challenge-card-bg.png';
import creatorLedCard1 from '../assets/courses/creatorpreneur/creator-led-card-img1.png';
import credLogo from '../assets/courses/creatorpreneur/cred_logo.png';
import kunalShah from '../assets/courses/creatorpreneur/kunal-shah.png';
import nykaaLogo from '../assets/courses/creatorpreneur/nykaa-logo.png';
import swiggyLogo from '../assets/courses/creatorpreneur/swiggy-logo.png';
import card1 from '../assets/courses/creatorpreneur/wedontteach-card1.png';
import card2 from '../assets/courses/creatorpreneur/wedontteach-card2.png';
import card3 from '../assets/courses/creatorpreneur/wedontteach-card3.png';
import card4 from '../assets/courses/creatorpreneur/wedontteach-card4.png';

// Content for Creator's Playbook tabs
const tabContent = {
  'Challenge Series': [
    'Daily content creation challenges',
    'Brand building exercises',
    'Engagement strategies',
    'Content optimization'
  ],
  'Brand Frameworks': [
    'Brand identity development',
    'Content strategy planning',
    'Audience targeting',
    'Brand voice establishment'
  ],
  'Growth Systems': [
    'Content distribution tactics',
    'Engagement optimization',
    'Analytics and tracking',
    'Growth strategies'
  ]
};

// Creator Testimonials
const testimonials = [
  {
    name: "Kunal Shah",
    role: "Founder, CRED",
    image: kunalShah,
    company: credLogo,
    quote: "Building a personal brand is crucial in today's digital age"
  }
];

const CreatorPreneur = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "What is CreatorPreneur?",
      answer: "CreatorPreneur is an intensive program designed to help you become a successful content creator and build your personal brand. It combines practical challenges with creator-led learning."
    },
    {
      question: "How is this different from other courses?",
      answer: "Unlike traditional courses, CreatorPreneur focuses on hands-on experience through real challenges and direct learning from successful creators. You'll build your brand while learning, not just study theory."
    },
    {
      question: "What will I learn?",
      answer: "You'll learn content creation, personal branding, monetization strategies, community building, and business operations - all through practical challenges and real-world applications."
    },
    {
      question: "Who is this for?",
      answer: "This program is perfect for aspiring creators, professionals looking to build their personal brand, and entrepreneurs who want to leverage content for business growth."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="creator-hero">
        <div className="creator-hero-content">
          <h1>Old Lessons Don't Build New-Age Creators skipperx -</h1>
          <h2 className="welcome-text">Welcome to <span className="highlight">Creatorpreneur</span></h2>
          <p>Where you don't study marketing, you live it through challenges, brand sprints, and creator-led growth.</p>
          <button className="creator-start-btn">Start Learning</button>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="feature-cards-section">
        <div className="feature-cards-container">
          <div className="feature-card">
            <div className="card-content card-gray">
              <div className="card-text">
                <h3>Challenge-Based<br/>Learning</h3>
                <p>Real projects, brand sprints & weekly creative missions.</p>
              </div>
              <div className="card-media">
                <div className="grid-pattern"></div>
                <img src={challengeCardBg} alt="Challenge Based Learning" />
              </div>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="card-content card-blue">
              <div className="card-text">
                <h3>Creator-Led<br/>Approach</h3>
                <p>Fuelled by the stories that built India's creator revolution.</p>
              </div>
              <div className="card-media">
                <div className="grid-pattern"></div>
                <img src={creatorLedCard1} alt="Creator Led Growth" />
              </div>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="card-content card-green">
              <div className="card-text">
                <h3>Build. Create.<br/>Grow</h3>
                <p>Experience brand thinking inspired by CRED, and other modern disruptors.</p>
              </div>
              <div className="card-media">
                <div className="grid-pattern"></div>
                <img src={buildCreateImg} alt="Build Create Grow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-creatorpreneur">
        <div className="section-header">
          <p className="subtitle">WHAT CREATORPRENEUR IS ABOUT</p>
          <h2>From Content Makers to <span>Business Builders</span></h2>
          <p className="description">Because creating is just the beginning.</p>
        </div>
        <div className="about-content">
          <p><strong>Creatorpreneur is where Creators become Entrepreneurs —</strong></p>
          <p>Learning storytelling, Marketing, and Growth through real projects, brand sprints, and creative challenges.</p>
          <p>Forget recorded lectures and static PDFs. Every week, you’ll face a real challenge inspired by brands like:</p>
          <div className="brand-logos">
            <img src={credLogo} alt="CRED" />
            <img src={swiggyLogo} alt="Swiggy" />
            <img src={nykaaLogo} alt="Nykaa" />
          </div>
          <p>with feedback from mentors who live the game, not just teach it.</p>
        </div>
      </section>


      {/* We Don't Teach Section */}
      <section className="we-dont-teach-challenge">
        <div className="section-header">
          <p className="subtitle">HOW WE'RE DIFFERENT</p>
          <h2>We Don't Teach. We Challenge.</h2>
          <p className="description">Because the best creators grow through action, not instruction.</p>
        </div>
        <div className="challenge-grid">
          <img src={card1} alt="Challenge Weeks" className="challenge-card-img" />
          <img src={card2} alt="Brand Takeovers" className="challenge-card-img" />
          <img src={card3} alt="Mentor Circles" className="challenge-card-img" />
          <img src={card4} alt="Portfolio Building" className="challenge-card-img" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CreatorPreneur;