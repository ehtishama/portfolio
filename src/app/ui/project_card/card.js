import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ id, title, description, image }) {
  return (
    <div className="w-1/2 space-y-3">
      <div className="h-80 bg-yellow-700/30 relative flex justify-center items-center rounded-lg">
        <Image
          src={"/dissertation-thumbnail.png"}
          height={300}
          width={450}
          alt="dissertation thumnail image"
          className="left-4 top-4 -rotate-1 shadow-lg rounded-lg"
        />
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-700">{description}</p>

      <Link href={`/projects/${id}`} className="block">
        <span className="underline">View Project</span>
      </Link>
    </div>
  );
}
