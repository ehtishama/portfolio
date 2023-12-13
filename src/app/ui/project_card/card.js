import Link from "next/link";

export default function Card() {
  return (
    <div className="w-1/2 space-y-3">
      <div className="h-80 bg-teal-700">{/* project image */}</div>
      <h4 className="font-semibold">Project title</h4>
      <p className="text-gray-700">
        Morning meditation app lorem ispum text goes here some more text goes
        here. The app helps you relax and focus on the important stuff going on.{" "}
      </p>

      <Link href={""} className="block ">
        <span className="underline">View Project</span>
      </Link>
    </div>
  );
}
