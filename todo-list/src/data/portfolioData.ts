import { 
  Project, 
  SkillCategory, 
  ExperienceItem, 
  StatItem, 
  NavItem, 
  FeatureItem 
} from '../types/portfolio';

export const personalInfo = {
  name: 'საბა',
  title: 'Junior Web Developer & Frontend Enthusiast',
  tagline: 'ვქმნი თანამედროვე, სრულად რესპონსიულ და სემანტიკურად გამართულ ვებ-ინტერფეისებს React-ისა და Tailwind CSS-ის გამოყენებით.',
  bio: `მოგესალმებით! მე ვარ საბა — ტექნოლოგიებითა და ვებ-დეველოპმენტით გატაცებული დეველოპერი. ჩემი მიზანია შევქმნა სუფთა, სწრაფი და მომხმარებელზე ორიენტირებული ციფრული პროდუქტები. განსაკუთრებულ ყურადღებას ვუთმობ სემანტიკურ HTML5-ს, ხელმისაწვდომობას (A11y), მოდულარულ React კომპონენტებსა და თანამედროვე REST API ინტეგრაციებს.`,
  location: 'თბილისი, საქართველო',
  email: 'saba.amiranashvilite05@geolab.edu.ge',
  phone: '+995 555 12 34 56',
  status: 'ღია ვარ სტაჟირებისა და შემოთავაზებებისთვის',
  image: 'images.jpg',
  quote: '„კარგი კოდი არის ისეთი კოდი, რომელსაც არა მხოლოდ კომპიუტერი კითხულობს, არამედ მარტივად ესმის ადამიანსაც.“',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    dribbble: 'https://dribbble.com',
    email: 'mailto:saba.amiranashvilite05@geolab.edu.ge'
  }
};

export const navigationLinks: NavItem[] = [
  { label: 'მთავარი', href: '#hero' },
  { label: 'ჩემ შესახებ', href: '#about' },
  { label: 'უნარები', href: '#skills' },
  { label: 'პროექტები', href: '#projects' },
  { label: 'თანამშრომლები', href: '#team' },
  { label: 'განათლება', href: '#experience' },
  { label: 'კონტაქტი', href: '#contact' }
];

export const portfolioStats: StatItem[] = [
  {
    id: 'projects',
    label: 'შექმნილი პროექტი',
    value: '3+',
    description: 'ვებ-აპლიკაციები და ინტერფეისები',
    iconName: 'code'
  },
  {
    id: 'semantic',
    label: 'სემანტიკური სტანდარტი',
    value: '100%',
    description: 'A11y & W3C ვალიდური მარკირება',
    iconName: 'check-circle'
  },
  {
    id: 'learning',
    label: 'პრაქტიკული საათები',
    value: '400+',
    description: 'კოდირება, ალგორითმები და UI/UX',
    iconName: 'calendar'
  },
  {
    id: 'motivation',
    label: 'მოტივაცია და ზრდა',
    value: '24/7',
    description: 'მზადყოფნა ახალი ტექნოლოგიების ასათვისებლად',
    iconName: 'star'
  }
];

export const semanticBenefits: FeatureItem[] = [
  {
    id: 'seo',
    title: 'SEO ოპტიმიზაცია',
    description: 'საძიებო სისტემები (Google, Bing) უკეთ იგებენ გვერდის სტრუქტურას, სათაურების იერარქიასა და რეალურ შინაარსს.',
    icon: 'magnifying-glass',
    color: 'blue'
  },
  {
    id: 'a11y',
    title: 'ხელმისაწვდომობა (A11y)',
    description: 'ეკრანის წამკითხველები (Screen Readers) შეზღუდული შესაძლებლობის მქონე პირებს უმარტივებენ საიტზე ნავიგაციას.',
    icon: 'universal-access',
    color: 'indigo'
  },
  {
    id: 'clean-code',
    title: 'სუფთა და მოდულარული კოდი',
    description: 'დეველოპერებისთვის მარტივია კოდის გააზრება, ახალი ფუნქციონალის დამატება და გუნდური პროექტების მართვა.',
    icon: 'code',
    color: 'cyan'
  }
];

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'სასკოლო ელექტრონული ბიბლიოთეკა',
    description: 'ონლაინ კატალოგი წიგნების მოსაძებნად, დაჯავშნისა და კატეგორიების მიხედვით დასაფილტრად. აგებულია სემანტიკური ცხრილებითა და ფორმებით.',
    category: 'frontend',
    tags: ['HTML5 Semantic', 'Tailwind CSS', 'Forms', 'A11y'],
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'proj2',
    title: 'პირადი ბლოგი & პორტფოლიო',
    description: 'მრავალგვერდიანი სემანტიკური საიტი, რომელიც მოიცავს სტატიებს, საკონტაქტო ფორმასა და ინტერაქტიულ გალერეას.',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Responsive Nav', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'proj3',
    title: 'ამინდის საინფორმაციო ბარათი',
    description: 'ინფორმაციული და ვიზუალურად გამართული ამინდის ვიჯეტი, რომელიც აჩვენებს ტემპერატურას, ტენიანობასა და კვირის პროგნოზს.',
    category: 'tools',
    tags: ['React', 'REST API', 'Grid Layout', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=700&q=80',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'markup',
    title: 'მარკირება & სემანტიკა',
    description: 'ვებ-გვერდის სტრუქტურული ჩონჩხი და ხელმისაწვდომობის სტანდარტები',
    iconName: 'code',
    skills: [
      { name: 'HTML5 Semantic Elements', level: 95 },
      { name: 'HTML Forms & Validation', level: 90 },
      { name: 'HTML Tables & Accessibility', level: 88 },
      { name: 'W3C & Web Standards', level: 92 }
    ]
  },
  {
    id: 'styling',
    title: 'დიზაინი & სტილები',
    description: 'თანამედროვე ვიზუალური სისტემები და რესპონსიული ბადეები',
    iconName: 'layout',
    skills: [
      { name: 'Tailwind CSS & Utility-First', level: 92 },
      { name: 'Responsive Web Design (RWD)', level: 90 },
      { name: 'Flexbox & CSS Grid', level: 88 },
      { name: 'CSS Animations & Transitions', level: 85 }
    ]
  },
  {
    id: 'react-js',
    title: 'React & თანამედროვე JS',
    description: 'ინტერაქტიული კომპონენტები, Hook-ები და API ინტეგრაცია',
    iconName: 'react',
    skills: [
      { name: 'React (Components, Props, State)', level: 85 },
      { name: 'JavaScript (ES6+, DOM, Events)', level: 88 },
      { name: 'Fetch API & REST Integrations', level: 86 },
      { name: 'TypeScript Basics', level: 80 }
    ]
  }
];

export const softSkills = [
  {
    id: 'responsibility',
    title: 'პასუხისმგებლობა',
    description: 'ამოცანების დროული და ხარისხიანი შესრულება დათქმული ვადების განუხრელი დაცვით.',
    icon: 'bullseye'
  },
  {
    id: 'teamwork',
    title: 'გუნდურობა',
    description: 'კონსტრუქციული კომუნიკაცია, უკუკავშირის მიღება და გუნდის წევრების მხარდაჭერა.',
    icon: 'users'
  },
  {
    id: 'detail',
    title: 'დეტალებზე ორიენტირება',
    description: 'კოდის სიზუსტე, სისუფთავე და ვებ-სტანდარტების ზედმიწევნით ზუსტი შესრულება.',
    icon: 'magnifying-glass'
  },
  {
    id: 'problem-solving',
    title: 'პრობლემების გადაჭრა',
    description: 'ანალიტიკური მიდგომა, შეცდომების დიაგნოსტიკა და ოპტიმალური გადაწყვეტილებების მოძიება.',
    icon: 'lightbulb'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-1',
    role: 'Frontend საფუძვლები: HTML5, CSS3, Tailwind',
    company: 'ვებ-აკადემია / ონლაინ კურსები',
    location: 'თბილისი',
    period: '2025 - 2026',
    description: 'სემანტიკური მარკირების, Tailwind CSS-ის, რესპონსიული განლაგებისა და თანამედროვე ვებ-პრინციპების სიღრმისეული შესწავლა.',
    achievements: [
      'შევქმენი 3+ სრულმასშტაბიანი სემანტიკური ვებ-გვერდი',
      'ავითვისე Flexbox, Grid და მობილური ადაპტაციის პრინციპები'
    ],
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'Git'],
    isCurrent: false
  },
  {
    id: 'edu-2',
    role: 'კომპიუტერული მეცნიერება / IT',
    company: 'უნივერსიტეტი',
    location: 'თბილისი',
    period: '2023 - 2027',
    description: 'ალგორითმები, მონაცემთა სტრუქტურები, მონაცემთა ბაზები და პროგრამული უზრუნველყოფის ინჟინერიის საფუძვლები.',
    achievements: [
      'მაღალი აკადემიური მოსწრება პროგრამირების საგნებში',
      'მონაწილეობა სტუდენტურ ჰაკათონებსა და გუნდურ პროექტებში'
    ],
    technologies: ['Algorithms', 'Data Structures', 'C++', 'JavaScript'],
    isCurrent: true
  },
  {
    id: 'edu-3',
    role: 'Responsive Web Design Certification',
    company: 'freeCodeCamp',
    location: 'ონლაინ',
    period: '2024',
    description: 'საერთაშორისო სერტიფიკაცია, რომელიც მოიცავს 300+ საათიან პრაქტიკულ სამუშაოებსა და 5 სავალდებულო პროექტის დაცვას.',
    achievements: [
      'წარმატებით დავასრულე ყველა საგამოცდო პროექტი 100%-იანი შეფასებით'
    ],
    technologies: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'A11y'],
    isCurrent: false
  }
];

export const faqData = [
  {
    question: 'რატომ ენიჭება უპირატესობა სემანტიკურ HTML-ს არასემანტიკურთან (div/span) შედარებით?',
    answer: 'სემანტიკური თეგები (როგორიცაა <header>, <article>, <nav>, <section>) ბრაუზერს, საძიებო რობოტებსა და ეკრანის წამკითხველებს ზუსტად ეუბნება, რა დანიშნულება აქვს თითოეულ ბლოკს. ეს ზრდის საიტის SEO რეიტინგს და უზრუნველყოფს საყოველთაო ხელმისაწვდომობას (A11y).'
  },
  {
    question: 'ხელმისაწვდომი ხართ თუ არა პრაქტიკისა და სტაჟირებისთვის?',
    answer: 'დიახ! აქტიურად ვეძებ დამწყები დეველოპერის პოზიციას (Junior Frontend / Web Developer) ან სტაჟირებას, სადაც შევძლებ ჩემი ცოდნის გაღრმავებას და რეალურ პროექტებში წვლილის შეტანას.'
  },
  {
    question: 'როგორ შეიძლება თქვენთან დაკავშირება?',
    answer: 'შეგიძლიათ ისარგებლოთ საიტზე არსებული საკონტაქტო ფორმით ან მომწეროთ პირდაპირ ელექტრონულ ფოსტაზე: saba.amiranashvilite05@geolab.edu.ge.'
  }
];

export const servicesData = [
  {
    id: 'responsive-design',
    title: 'რესპონსიული ვებ-დიზაინი',
    description: 'საიტების ადაპტაცია ნებისმიერი ზომის ეკრანზე: სმარტფონები, ტაბლეტები და დესკტოპ მონიტორები.',
    iconName: 'mobile-screen-button',
    tags: ['Mobile First', 'Flexbox', 'CSS Grid', 'Tailwind']
  },
  {
    id: 'frontend-dev',
    title: 'Frontend დეველოპმენტი',
    description: 'ინტერაქტიული, მოდულარული და სწრაფი ინტერფეისების შექმნა თანამედროვე React-ისა და TypeScript-ის გამოყენებით.',
    iconName: 'laptop-code',
    tags: ['React 18', 'TypeScript', 'State Management', 'Hooks']
  },
  {
    id: 'semantic-a11y',
    title: 'სემანტიკური HTML & A11y',
    description: 'W3C სტანდარტების სრული დაცვა, ეკრანის წამკითხველებთან თავსებადობა და SEO ოპტიმიზაცია.',
    iconName: 'universal-access',
    tags: ['W3C Standards', 'ARIA', 'Screen Readers', 'SEO']
  },
  {
    id: 'api-integration',
    title: 'REST API & მონაცემთა მართვა',
    description: 'სერვერულ ენდფოინთებთან ეფექტური კომუნიკაცია, ასინქრონული Fetch მოთხოვნები და CRUD ოპერაციები.',
    iconName: 'network-wired',
    tags: ['Fetch API', 'JSON', 'Async/Await', 'Error Handling']
  }
];
