import { getPostData } from "@/app/lib/posts";
import { getProjectById } from "@/app/lib/projects";
import Footer from "@/app/ui/footer/footer";
import Nav from "@/app/ui/nav/nav";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { BsArrowBarRight } from "react-icons/bs";
import { FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6";

export default async function Page({ params }) {
  const project = await getPostData(params.id);

  return (
    <>
      <Nav />
      <main className="max-w-6xl px-4 mx-auto py-12 space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="">
            <h2 className="font-bold text-[36px]">{project.title}</h2>
            <p className="text-gray-500 mt-4 text-lg font-mono">
              Posted on February 19, 2023
            </p>
            <p className="text-lg font-sans">{project.long_desc}</p>
          </div>
          <div className="self-center flex space-x-12 justify-center">
            <div>
              <p className="font-medium">Built using</p>
              <ul className="list-disc list-inside">
                {project.built_using.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium">Live</p>
              <ul>
                {project.demo_links.map((link) => (
                  <li
                    className="underline underline-offset-4 capitalize "
                    key={link.src}
                  >
                    <a
                      href={link.src}
                      target="blank"
                      className="flex items-center gap-2"
                    >
                      {link.text}
                      {/* <FaArrowRightArrowLeft /> */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* hero image */}
        <section className=" flex items-center justify-center rounded-lg">
          <Image
            src={project.featured_image}
            height={500}
            width={900}
            alt="Cheetah classification with python "
            className="w-full shadow-xl rounded-xl border-4 border-white hover:-rotate-1 transition-all"
          />
        </section>

        <div
          dangerouslySetInnerHTML={{ __html: project.contentHtml }}
          className="prose-lg max-w-4xl mx-auto prose-img:mx-auto prose-img:block
                    "
        ></div>
        {/* <section className="mx-auto grid grid-cols-2 gap-x-16 gap-y-20">
          <div className="h-[300px] bg-teal-700/30"></div>
          <div className="">
            <h2 className="text-[24px] font-semibold mb-4">Tech Stack</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ut amet semper sit aliquam
              sit. Sagittis quis nunc nisi morbi vitae ornare. Dictum nisi non
              cursus sit aliquam fames ornare. Fames aliquam habitant dui odio
              aliquet. Libero egestas augue tellus ac. Felis vestibulum cras
              gravida enim venenatis eu mus ac. Ultrices nibh lacus eget duis
              aenean lectus commodo nisi. Lorem ipsum dolor sit amet
              consectetur. Ut amet semper sit aliquam sit. Sagittis quis nunc
              nisi morbi vitae ornare. Dictum nisi non cursus sit aliquam fames
              ornare. Fames aliquam habitant dui odio aliquet.
            </p>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
