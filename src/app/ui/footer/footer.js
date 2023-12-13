import Link from "next/link";
import { FiLinkedin, FiMail, FiTwitter, FiGithub } from "react-icons/fi";

const social_links = [
  {
    id: 1,
    icon: FiLinkedin,
    url: "https://linkedin.com/in/ehtishamhassan9",
  },
  {
    id: 2,
    icon: FiTwitter,
    url: "https://x.com/ehtisham9hassan",
  },
  {
    id: 3,
    icon: FiGithub,
    url: "https://github.com/ehtishama",
  },
  {
    id: 4,
    icon: FiMail,
    url: "mailto:ehtisham9hassan@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 mt-32">
      <section className="max-w-screen-lg container mx-auto py-20 space-y-4">
        <h2 className="font-bold text-4xl capitalize">
          Let&apos;s build someting together
        </h2>
        <p className="max-w-sm">
          Feel free to reach out if you’re looking for a developer, have a
          question or just want to say hi 👋.
        </p>
        <p className="underline ">ehtisham9hassan@gmail.com</p>

        <div className="flex space-x-4 mt-2">
          {social_links.map((link) => (
            <a key={link.id} href={link.url}>
              {link.icon()}
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}
