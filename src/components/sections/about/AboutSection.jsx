import React from 'react'

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Content */}
        <div className="order-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Amayra Enterprises
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            At Amayra Enterprises, we are dedicated to empowering businesses with innovative solutions 
            and strategic guidance. With years of experience across multiple industries, we provide 
            expert business and management consulting services to help your company succeed in today's 
            competitive landscape.
          </p>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our team of seasoned professionals works closely with clients to understand their unique 
            challenges and opportunities, delivering tailored strategies that drive growth, efficiency, 
            and long-term success.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="order-2">
          <img 
            src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0aG1ldGljc3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="About Amayra Enterprises" 
            className="w-full h-auto rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection