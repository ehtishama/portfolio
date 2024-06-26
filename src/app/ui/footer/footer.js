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
    <footer className="bg-gray-100 dark:bg-gray-800 mt-32 min-h-screen flex flex-col justify-center" id="footer">
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-4">
        <h2 className="font-bold text-4xl capitalize">
          Let&apos;s build someting together
        </h2>
        <p className="max-w-sm">
          Feel free to reach out if you’re looking for a developer, have a
          question or just want to say hi 👋.
        </p>
        <p className="underline underline-offset-8 pb-4">
          ehtisham9hassan@gmail.com
        </p>

        <div className="flex space-x-4 mt-2">
          {social_links.map((link) => (
            <a key={link.id} href={link.url} className="bg-black rounded-full p-2">
              {<link.icon stroke="white"   />}
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}
