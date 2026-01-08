"use client";
import { useState } from "react";
const experiences = [
  {
    id: 1,
    name: "TOMMY",
    role: "Full Stack Web Developer",
    date: "December 2015 – Present",
    bullets: [
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra.",
      "Post-ironic selvage chambray sartorial freegan meditation.",
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy.",
    ],
  },
  {
    id: 2,
    name: "BIGDROP",
    role: "Front-End Engineer",
    date: "May 2015 – December 2015",
    bullets: [
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast.",
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party.",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack.",
      "Helvetica fixie church-key, small batch jianbing messenger bag.",
    ],
  },
  {
    id: 2,
    name: "CUKER",
    role: "Engineering Intern",
    date: "May 2014 – September 2015",
    bullets: [
      "I'm baby woke mumblecore stumptown enamel pin.",
      "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk.",
      "Pour-over glossier chambray umami 3 wolf moon Iceland kale chips.",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-20">
      <Profile />
    </div>
  );
}
