export interface ITestimonial {
  jobTitle: string
  client: {
    testimonial: string
    imgSrc: string
    name: string
    jobTitle: string
    companyName: string
  }
}

export const testimonials: ITestimonial[] = [
  {
    jobTitle: 'software engineer',
    client: {
      testimonial:
        'Working with Rachmat was an absolute pleasure. Their ability to tackle complex problems with simple, elegant solutions truly impressed me. They consistently delivered high-quality work and went above and beyond to meet project goals.',
      imgSrc: '/testimonials/client-1.jpg',
      name: 'Vika Ariska',
      jobTitle: 'CEO',
      companyName: 'Company Name'
    }
  },
  {
    jobTitle: 'front-end web developer',
    client: {
      testimonial:
        'I’ve never met someone so passionate and dedicated to their craft. Rachmat combines technical expertise with a creative approach, making every project they touch stand out. They are an asset to any team.',
      imgSrc: '/testimonials/client-2.jpg',
      name: 'Ryan Thompson',
      jobTitle: 'CEO',
      companyName: 'Company Name'
    }
  },
  {
    jobTitle: 'software engineer',
    client: {
      testimonial:
        'From day one, Rachmat showcased an exceptional work ethic and attention to detail. Their ability to collaborate and communicate effectively made the entire process smooth and enjoyable. Highly recommended!',
      imgSrc: '/testimonials/client-3.jpg',
      name: 'Sophia Martinez',
      jobTitle: 'UI/UX Designer',
      companyName: 'Company Name'
    }
  }
]
