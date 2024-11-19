import React, { useState } from 'react'
import { TextHoverEffect } from '../GlowText/ui'

const Team = () => {
  
  const people = [
    {
      firstname: "Shubhendu",
      lastname: "Halder",
      role: "Python Developer",
      picture: "https://avatars.githubusercontent.com/u/141364632?v=4",
      description: "Seeking a skilled Python Developer to create scalable web applications. Proficient in Django or Flask and API development. Familiarity with SQL/NoSQL databases and cloud services is desirable.",
      facebookURL: "#link",
      linkedinURL: "#link",
    },
    {
      firstname: "Sandip",
      lastname: "Saha",
      role: "Java Developer",
      picture: "https://media.licdn.com/dms/image/v2/D5603AQEFc8dTpQijew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726243938897?e=1733356800&v=beta&t=A77cGQRpnHolX2VEcW9EF1ivozRlD0IR7rKx_FCAkoQ",
      description: "Seeking an experienced Senior Java Developer to design and maintain scalable applications. Must have expertise in Java, Spring, and RESTful APIs. Leadership and mentorship skills are essential.",
      facebookURL: "#link",
      linkedinURL: "#link",
    },
    {
      firstname: "Aman",
      lastname: "Jha",
      role: "Java Developer",
      picture: "https://avatars.githubusercontent.com/u/80311301?v=4",
      description: "Join us as a Java Software Engineer to develop robust applications. Strong Java and web technology skills required. Familiarity with Agile and version control is a plus.",
      facebookURL: "#link",
      linkedinURL: "#link",
    },
    {
      firstname: "Sangik",
      lastname: "Ghosh",
      role: "Java Developer",
      picture: "https://avatars.githubusercontent.com/u/136787875?v=4",
      description: "Looking for a Junior Java Developer eager to learn and grow. Basic Java knowledge required. Work under senior developers and assist in application development.",
      facebookURL: "#link",
      linkedinURL: "#link",
    },
  ]

  const [member, setMember] = useState(0)

  return (
      <div className="relative mx-auto py-10 w-full max-w-full bg-[#0a0a0a] text-white">
        <TextHoverEffect text="OUR TEAM" id="team" size={5}/>

      {/* :TITLE CONTAINER */}

      <div className="mx-auto px-4 w-full max-w-5xl grid grid-cols-2 gap-y-4 sm:gap-y-10">

        {/* :PICTURES CONTAINER */}
        <div className="col-span-full lg:col-span-1 flex flex-col sm:flex-row justify-center items-center">
          {/* ::Team members */}
          <ul className="mb-4 sm:mb-0 px-4 flex sm:flex-col justify-center items-center space-x-3 sm:space-x-0 sm:space-y-3">
            {people.map((person, index) => (
              <li key={person.lastname} className={`w-12 h-12 rounded-full overflow-hidden filter ${index !== member ? "saturate-0 hover:brightness-125" : "saturate-100"}`}>
                <button className="w-full h-full" onClick={() => setMember(index)}>
                  <img src={person.picture} alt="" className="object-cover" />
                </button>
              </li>
            ))
            }
          </ul>
          {/* ::Picture selected team member */}
          <div className="rounded overflow-hidden">
            <img src={people[member].picture} alt="" className="w-full max-w-xs object-cover" />
          </div>
        </div>


        {/* :DETAILS CONTAINER */}
        <div className="col-span-full lg:col-span-1 mx-auto lg:mx-0 max-w-lg flex flex-col justify-center space-y-4">
          {/* ::Role */}
          <span className="font-bold uppercase tracking-wider">{people[member].role}</span>
          {/* ::Name */}
          <h3 className="text-4xl sm:text-5xl font-bold space-y-2">
            <span className="block">{people[member].firstname}</span>
            <span className="block">{people[member].lastname}</span>
          </h3>
          {/* ::Description */}
          <p className="py-2 text-base">{people[member].description}</p>
          {/* ::Socials */}
          <div className="mb-4 inline-flex space-x-4">
            {/* Facebook */}
            <a href={people[member].facebookURL} className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z"/></svg>
            </a>
            {/* Linkedin */}
            <a href={people[member].linkedinURL} className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"><path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Team
