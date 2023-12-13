import Image from "next/image";
import Nav from "./ui/nav/nav";
import Card from "./ui/project_card/card";
import Footer from "./ui/footer/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen max-w-screen-lg container mx-auto pt-8">
        <section className="flex justify-between items-center space-x-12 py-32">
          <div className="w-8/12 pr-4 space-y-4">
            <div className="text-[#132E32]">
              <p className="font-bold text-[28px] block">Hi, I’m Ehtisham</p>
              <h3 className="font-extrabold text-[60px] leading-tight ">
                Software Developer & ML Enthusiast.
              </h3>
            </div>
            <p className="pt-2 text-[20px] text-gray-800">
              I am junior Full Stack Software Developer located in Sheffield,
              UK. In the December 2023, I graduated in MSc Artificial
              Intelligence with distinction from the Manchester Metropolitan
              University. I love making web and mobile applications.
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
            <Card />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
