import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI-Powered NLP Chatbot Application',
        description: "I developed a chatbot using Python, leveraging Flask for the backend. The application integrates NLTK for advanced natural language processing (NLP) features, including lemmatization, synonym recognition, and stop-word filtering. The chatbot learns dynamically, updating its JSON-based knowledge base based on user-provided inputs when answers are not available.",
        tools: ['Flask', 'PyTorch', 'MongoDB', 'NLTK', 'HTML5', 'CSS3', 'JavaScript', 'JSON'],
        role: 'Both  Front-End and Back-End',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'AirBnb Clone',
        description: 'I designed and developed an Airbnb clone using React and Vite with JavaScript. The front end delivers a modern, responsive UI and user experience by leveraging TailwindCSS for styling and React libraries for dynamic components.',
        tools: ['ReactJS', 'Tailwind CSS', "Google Maps", "Gsap", "JavaScript", "MongoDB", "ExpressJS", 'NodeJS', 'JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Apple Showcase Animated Website',
        description: 'I developed an animated iPhone store website using React + Vite and GSAP, feabturing sleek animations, smooth transitions, and a modern, responsive design. The site offers an interactive shopping experience with engaging product displays, customizable options, and detailed pages for each iPhone model. Utilizing GSAP, I created dynamic scrolling effects and captivating animations, ensuring a visually immersive and performance-optimized user experience across all devices. This project highlights my expertise in React, advanced animations, and crafting intuitive, user-friendly interfaces.',
        tools: ['ReactJS', 'Bootstrap', 'Vite', 'TailwindCSS', 'ThreeJS', 'Gsap', 'ExpressJS', 'JavaScript', 'MongoDB', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'One-Step Mobile Solution Application ',
        description: "An all-encompassing Flutter application offering a unified platform for users to execute mobile recharges, procure products, settle bills, review transaction histories, and oversee diverse financial operations. The application is meticulously designed with a contemporary, user-centric interface, incorporating a multitude of features to elevate the user experience. UserID- LG000047 and Pass- 12345678.",
        tools: ['Flutter', 'Dart', 'RestApi', 'Android Studio', "MySQL"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'E-Commerce Mobile App',
        description: "A feature-rich mobile e-commerce application built with Flutter. It includes product browsing, cart management, secure checkout with Stripe, and order tracking. The app features a modern, responsive UI ensuring a seamless shopping experience across iOS and Android devices.",
        tools: ['Flutter', 'Dart', 'Firebase', 'Stripe', 'Provider'],
        role: 'Mobile App Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 6,
        name: 'Salon Booking App',
        description: "A comprehensive salon management and booking application. Users can discover salons, book appointments, and manage their bookings. Salon owners have a dedicated dashboard to manage services, staff, and appointments efficiently.",
        tools: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Redux'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 7,
        name: 'EasyCars Advanced Dashboard',
        description: "An advanced dashboard solution for EasyCars, designed to streamline vehicle inventory management, sales tracking, and customer relationship management. It features real-time analytics, customizable reports, and a user-friendly interface for dealership staff.",
        tools: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Recharts'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 8,
        name: 'Maven - Knowledge Sharing Platform',
        description: "Maven is a collaborative platform connecting experts with learners. It facilitates knowledge sharing through articles, Q&A sessions, and mentorship programs. The platform includes real-time messaging, reputation systems, and content moderation tools.",
        tools: ['React', 'Django', 'PostgreSQL', 'Redis', 'WebSockets'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },