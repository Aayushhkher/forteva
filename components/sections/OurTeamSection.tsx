'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const team = [
  {
    name: 'Aayush Kher',
    role: 'Founder',
    image: '/aayush.png',
    bio: 'Aayush is the visionary founder of FORTEVA, driven by a passion for leveraging cutting-edge technology to solve real-world problems. As a 3rd year BTech CSE (Data Science) student at Manipal University Jaipur, he has built a diverse portfolio of AI-driven tools and platforms. Aayush specializes in full-stack development, machine learning, and product design, and is committed to making high-end tech solutions accessible to startups and enterprises alike. His leadership and technical acumen set the foundation for FORTEVA’s innovative culture.'
  },
  {
    name: 'Gayatri Bhuyan',
    role: 'Creative Director & Head of Social Strategy',
    image: '/gayatri.jpg',
    bio: 'Gayatri is the creative force behind FORTEVA’s brand and digital presence. Currently a 3rd year BTech CSE (Data Science) student at Manipal University Jaipur, she blends technical expertise with a keen sense for design and storytelling. Gayatri leads the company’s creative direction, user experience, and social strategy, ensuring that every product and campaign resonates with FORTEVA’s mission of elegance, innovation, and impact. Her multidisciplinary approach bridges technology and creativity, shaping the company’s unique identity.'
  }
]

export function OurTeamSection() {
  return (
    <section id="team" className="section-padding bg-forteva-card/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-futuristic font-bold mb-6">
            <span className="gradient-text">Our</span> <span className="text-forteva-cta">Team</span>
          </h2>
          <p className="text-lg text-forteva-text/80 max-w-2xl mx-auto">
            Meet the minds behind FORTEVA
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-forteva-base/80 rounded-2xl p-8 flex flex-col items-center shadow-lg glassmorphism hover:scale-105 transition-transform duration-300"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-forteva-cta/30 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-futuristic font-semibold text-forteva-cta mb-1">{member.name}</h3>
              <p className="text-forteva-accent font-medium mb-2">{member.role}</p>
              <p className="text-forteva-text/80 text-center text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 