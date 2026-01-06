// Mock data for Dorset Spray Plastering & Painting website

export const businessInfo = {
  name: "Dorset Spray Plastering & Painting",
  phone: "07983 643278",
  email: "info@dorsetsprayplastering.com",
  experience: "24 years",
  location: "Dorset"
};

export const services = [
  {
    id: "mf-ceilings",
    title: "MF Ceilings",
    shortDescription: "MF ceiling systems for homes, offices and commercial spaces. Ideal for hiding services, improving acoustics and creating modern level ceilings, bulkheads and lighting features.",
    icon: "Layers",
    image: "https://customer-assets.emergentagent.com/job_88d0e87c-203a-489e-a732-0f3b5ef378f7/artifacts/3p8tbsf5_59756376_658453977938023_3979713677111590912_n.jpg"
  },
  {
    id: "dry-lining",
    title: "Dry Lining",
    shortDescription: "Dry lining to create smooth, ready-to-finish walls and ceilings. Perfect for new builds, extensions and refurbishments, with neat joints and reliable fixing.",
    icon: "Square",
    image: "https://images.unsplash.com/photo-1649766964924-1d257ddf0742?crop=entropy&cs=srgb&fm=jpg&q=85"
  },
  {
    id: "spray-plastering",
    title: "Spray Plastering",
    shortDescription: "Airless spray plastering for fast, consistent finishes on large areas. Reduces drying times and provides a high quality surface that is ready for decorating.",
    icon: "Sparkles",
    image: "https://customer-assets.emergentagent.com/job_88d0e87c-203a-489e-a732-0f3b5ef378f7/artifacts/va81nwcv_70498396_739618843154869_2044506038937321472_n.jpg"
  },
  {
    id: "painting-decorating",
    title: "Painting & Decorating",
    shortDescription: "Interior painting and decorating to complete the job. From mist coats on new plaster through to full repaints, we use trade quality materials for a durable, clean finish.",
    icon: "Paintbrush",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?crop=entropy&cs=srgb&fm=jpg&q=85"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Bournemouth",
    text: "Excellent work on our office refurbishment. The MF ceilings look fantastic and the team were professional throughout.",
    rating: 5
  },
  {
    id: 2,
    name: "John Davies",
    location: "Poole",
    text: "Very impressed with the spray plastering finish. Fast, clean and high quality. Would definitely recommend.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Roberts",
    location: "Dorchester",
    text: "Reliable and tidy contractors. They completed our dry lining and decorating on time and to a great standard.",
    rating: 5
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1559527530-dedb553c65c7?crop=entropy&cs=srgb&fm=jpg&q=85",
    caption: "Professional plastering work"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1543525324-59e153f55a66?crop=entropy&cs=srgb&fm=jpg&q=85",
    caption: "Clean smooth wall finish"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1645448118559-2dc2d8b9ba1f?crop=entropy&cs=srgb&fm=jpg&q=85",
    caption: "Skilled plastering application"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1739700712159-550519327ca7?crop=entropy&cs=srgb&fm=jpg&q=85",
    caption: "Modern ceiling installation"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/5691606/pexels-photo-5691606.jpeg",
    caption: "Professional painting work"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg",
    caption: "Interior wall preparation"
  }
];

export const faqs = [
  {
    id: 1,
    question: "Do you offer free quotes?",
    answer: "Yes, we provide free, no obligation quotes. Where needed we will visit site to assess the work before pricing."
  },
  {
    id: 2,
    question: "What areas do you cover?",
    answer: "We work across Dorset and surrounding areas. For larger projects we may travel further by arrangement."
  },
  {
    id: 3,
    question: "Can you work around other trades on site?",
    answer: "Yes. We regularly work alongside builders, electricians and plumbers and will coordinate timings to keep your project moving."
  },
  {
    id: 4,
    question: "Do you supply materials?",
    answer: "We normally supply all materials required for the MF ceilings, dry lining, plastering and painting, unless agreed otherwise."
  },
  {
    id: 5,
    question: "Are you insured?",
    answer: "Yes, we hold suitable insurance for the work we carry out. Proof of cover can be provided on request."
  },
  {
    id: 6,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on size and scope. We will provide clear timescales in your quote and keep you updated throughout."
  }
];

export const processSteps = [
  {
    step: 1,
    title: "Initial Contact",
    description: "Get in touch with your plans, drawings or a brief description of the work."
  },
  {
    step: 2,
    title: "Survey & Quote",
    description: "We arrange a site visit where needed and provide a clear written quote."
  },
  {
    step: 3,
    title: "Schedule & Prepare",
    description: "Agree dates, access and any protection or prep work required."
  },
  {
    step: 4,
    title: "Carry Out Works",
    description: "We complete the MF ceilings, dry lining, spray plastering and painting."
  },
  {
    step: 5,
    title: "Sign Off",
    description: "Walk through the finished work with you and address any final touches."
  }
];

// Mock form submission handler
export const submitContactForm = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      resolve({ success: true, message: "Thank you for your enquiry. We will contact you within one working day." });
    }, 1000);
  });
};
