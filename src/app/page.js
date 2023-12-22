import Image from "next/image";
import Nav from "./ui/nav/nav";
import ProjectCard from "./ui/project_card/card";
import Footer from "./ui/footer/footer";
import { getSortedPostsData } from "./lib/posts";

export default function Home() {
  const sortedPosts = getSortedPostsData();

  return (
    <>
      <Nav />
      <main className="min-h-screen max-w-6xl container mx-auto px-4 pt-8">
        <section className="flex justify-between items-center space-x-12 py-24">
          <div className="w-8/12 pr-4 space-y-4">
            <div className="text-[#132E32]">
              <p className="font-bold text-[28px] block">
                Hi, I&apos;m Ehtisham
              </p>
              <h3 className="font-extrabold text-[60px] leading-tight ">
                Software & Machine Learning Engineer.
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
          </div>

          <Image
            src={"/profile.png"}
            alt="model image"
            width={500}
            height={520}
            className="w-4/12 rounded-bl-[130px]"
          />
        </section>

        <section className="mt-8">
          <h3 className="font-bold uppercase text-xl mb-4">Projects</h3>

          {/* list of project cards */}
          <div className="flex flex-wrap">
            <ProjectCard
              id={1}
              title={"Dissertation"}
              description={
                "I completed the dissertation as part of my MSc Artificial Intelligence Degree. The focus of the dissertation was to build a motion sensing camera device to detect and classify wildlife."
              }
            />

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
