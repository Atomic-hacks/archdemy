"use client";
import React from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Chinedu Amaechi",
    position: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=640&h=800&fit=crop&crop=faces",
    bio: "Oversees project delivery and client partnerships, ensuring every build aligns with Archademy's standards.",
  },
  {
    id: 2,
    name: "Ibukun Ajayi",
    position: "Lead Architect",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=640&h=800&fit=crop&crop=faces",
    bio: "Shapes signature architectural concepts tailored to the local environment and each client's aspirations.",
  },
  {
    id: 3,
    name: "Somto Nwosu",
    position: "Head of Construction",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=640&h=800&fit=crop&crop=faces",
    bio: "Leads multidisciplinary site teams with a focus on precision, safety, and long-term structural integrity.",
  },
  {
    id: 4,
    name: "Tari Briggs",
    position: "Client Relations Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=640&h=800&fit=crop&crop=faces",
    bio: "Guides homeowners and developers through every project milestone with clear communication and support.",
  },
];

const MeetTheTeam: React.FC = () => {
  return (
    <section
      className="bg-emerald-900 text-white"
      aria-labelledby="meet-our-team-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
            Leadership
          </p>
          <h2
            id="meet-our-team-heading"
            className="mt-4 text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl"
          >
            Meet Our Team
          </h2>
          <p className="mt-6 text-base text-emerald-100 sm:text-lg">
            A collaborative mix of architects, builders, and relationship
            specialists dedicated to elevating every Archademy project from
            concept to completion.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="group flex flex-col rounded-3xl bg-white/5 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full overflow-hidden rounded-2xl bg-emerald-950">
                <div className="aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                  {member.position}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-emerald-100">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
