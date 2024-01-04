import Image from "next/image";
import Nav from "./ui/nav/nav";
import ProjectCard from "./ui/project_card/card";
import Footer from "./ui/footer/footer";
import { getSortedPostsData } from "./lib/posts";
import { MdMailOutline, MdOutlineFacebook } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  const sortedPosts = getSortedPostsData();

  return (
    <>
      <Nav />
      <main className="min-h-screen max-w-6xl mx-auto px-4">
        {/* hero section */}
        <section
          className="hero relative flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center space-y-12 py-24"
          id="hero"
        >
          <div className="relative lg:order-2">
            <Image
              src={"/shaam-bw.jpg"}
              alt="model image"
              width={500}
              height={520}
              className="rounded-bl-[120px] rounded-br-[80px] rounded-tr-[190px] rounded-tl-[110px] shadow-md"
            />
            <svg
              width="36"
              height="42"
              viewBox="0 0 36 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute -top-4 -left-4"
            >
              <path
                d="M27.5249 6.55257C27.1158 6.8252 26.8187 7.25027 26.699 7.73427C26.5792 8.21826 26.6466 8.72153 26.8863 9.13337L30.0191 14.516C30.2587 14.9278 30.6511 15.2145 31.1098 15.3129C31.5686 15.4113 32.0561 15.3135 32.4652 15.0409C32.8742 14.7682 33.1713 14.3431 33.2911 13.8591C33.4108 13.3751 33.3435 12.8719 33.1038 12.4601L29.971 7.07744C29.731 6.66602 29.3386 6.37971 28.88 6.28131C28.4214 6.18291 27.9341 6.28046 27.5249 6.55257Z"
                fill="currentColor"
              ></path>
              <path
                d="M21.3172 24.3705C21.6223 23.9713 21.7755 23.4665 21.7431 22.967C21.7107 22.4674 21.4953 22.0142 21.1443 21.7069L9.37136 10.3676C9.02036 10.0604 8.56253 9.92423 8.09857 9.98921C7.63461 10.0542 7.20254 10.3149 6.89741 10.7141C6.59227 11.1132 6.43908 11.6181 6.47151 12.1176C6.50394 12.6171 6.71934 13.0704 7.07034 13.3776L18.8432 24.717C19.1944 25.0237 19.6522 25.1595 20.116 25.0945C20.5798 25.0296 21.0118 24.7692 21.3172 24.3705Z"
                fill="currentColor"
              ></path>
              <path
                d="M13.9635 36.3389C14.1083 35.847 14.0753 35.3173 13.8718 34.8664C13.6683 34.4156 13.311 34.0804 12.8784 33.9346L3.09994 30.1461C2.6674 30.0003 2.19507 30.0559 1.78686 30.3007C1.37864 30.5454 1.06798 30.9592 0.92322 31.4511C0.778456 31.943 0.811449 32.4726 1.01494 32.9235C1.21842 33.3744 1.57574 33.7096 2.00828 33.8554L11.7868 37.6439C12.2193 37.7891 12.6914 37.7332 13.0995 37.4885C13.5076 37.2439 13.8183 36.8304 13.9635 36.3389Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className="lg:w-8/12 pr-4 space-y-4 lg:order-1 lg:pr-12">
            <div className="text-[#132E32]">
              <p className="font-bold text-[28px] block text-center lg:text-left">
                👋Hi, I&apos;m Ehtisham.
              </p>
              <h3 className="font-extrabold text-[60px] leading-tight gradient-text text-center lg:text-left">
                Software and Machine Learning Engineer.
              </h3>
            </div>
            <p className="pt-2 text-[20px] text-gray-800 max-w2xl">
              I am an aspiring Software and AI Developer located in Sheffield,
              England.
            </p>
            <p className="pt-2 text-[20px] text-gray-800 max-w2xl">
              In the December 2023, I graduated in{" "}
              <span className="">MSc Artificial Intelligence </span>
              with distinction from the{" "}
              <span className="underline font-medium">
                Manchester Metropolitan University.
              </span>
              &nbsp; I love making web and mobile applications. Follwoing is
              some of my recent work.
            </p>
            <div className="flex gap-x-4 py-4">
              <Link href={"mailto:ehtisham9hassan@gmail.com"}>
                <span className="py-2 px-3 flex item-center justify-center bg-pink-300/10 backdrop-blur-lg rounded ">
                  <MdMailOutline
                    size={28}
                    className="hover:transform hover:scale-105 transition"
                  />
                </span>
              </Link>

              <Link href={"https://github.com/ehtishama/"} target="blank">
                <span className="py-2 px-3 flex item-center justify-center bg-pink-300/10 backdrop-blur-lg rounded">
                  <FaGithub size={28} />
                </span>
              </Link>

              <Link
                href={"https://linkedin.com/in/ehtishamhassan9/"}
                target="blank"
              >
                <span className="py-2 px-3 flex item-center justify-center bg-pink-300/10 backdrop-blur-lg rounded">
                  <FaLinkedin size={28} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h3
            className="font-semibold uppercase text-3xl mb-12 underline underline-offset-4 scroll-mt-4"
            id="projects"
          >
            Projects
          </h3>

          {/* list of project cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sortedPosts.map((post) => (
              <ProjectCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.short_desc}
                image={post.thumbnail_image}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
