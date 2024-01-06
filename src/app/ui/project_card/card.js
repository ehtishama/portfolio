import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ProjectCard({ id, title, description, image }) {
  return (
    <div className="">
      <div className="h-96 bg-slate-50 p-8 relative flex justify-center items-center rounded-lg overflow-hidden shadow-inner border">
        <Image
          src={image}
          height={300}
          width={450}
          alt="project thumnail image"
          className="left-4 top-4 transform shadow-lg rounded-lg object-cover max-h-full "
        />
      </div>
      <div className="p-2">
        <h4 className="font-semibold text-2xl my-4 leading-6">{title}</h4>
        <p className="text-gray-700">{description}</p>
        <Link
          href={`/projects/${id}`}
          className="block my-3 text-black font-medium"
          scroll={true}
        >
          <span className="underline underline-offset-4 flex items-center gap-x-1 group">
            See more{" "}
            <BsArrowRight
              size={20}
              className="group-hover:transform group-hover:translate-x-2 transition-transform"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
