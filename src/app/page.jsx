"use client";
import { useState } from "react";
const worker = ["TOMMY", "BIGDROP", "CUKER"];
const roles = ["Full Stack Web Developer", "Front-End Engineer", "Engineer Intern"];

const dates = [
  "December 2015 – Present",
  "May 2015 – December 2015",
  "May 2014 – September 2015",
];

const bullets = [
  [
    "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
    "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
    "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
  ],
  [
    "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
    "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
    "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
    "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
  ],
  [
    "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
    "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
    "Tour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
  ],
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <main className="min-h-screen flex justify-center mt-20">
      <div className="flex gap-16">
        {/* Left */}

        <div className="relative w-40">
        
          <div
            className="absolute left-0 w-0.5 h-5 bg-emerald-600"
            style={{ top: active * 45 }}
          />

          
          {hover !== null && hover !== active && (
            <div
              className="absolute left-0 w-0.5 h-5 bg-emerald-400 transition-all"
              style={{ top: hover * 45 }}
            />
          )}

          <ul className="pl-10 space-y-6 text-sm">
            {worker.map((name, index) => (
              <li
                key={name}
                onClick={() => setActive(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
                className={`cursor-pointer transition-colors ${
                  active === index || hover === index
                    ? "text-emerald-500"
                    : "text-gray-400"
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

   
        <div className="w-163">
          <h2 className="text-3xl font-semibold text-gray-900">
            {roles[active]}
          </h2>

          <span className="inline-block bg-gray-300 text-gray-600 px-3 py-1 rounded text-sm mt-4">
            {worker[active]}
          </span>

          <p className="text-sm text-gray-500 mt-3">{dates[active]}</p>

          <ul className="mt-6 space-y-4 text-gray-600">
            {bullets[active].map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-500">»</span>
                <p>{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
