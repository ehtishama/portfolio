import Footer from "@/app/ui/footer/footer";
import Nav from "@/app/ui/nav/nav";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="max-w-screen-lg container mx-auto py-12 space-y-20">
        <section className="flex">
          <div className="w-1/2 space-y-2">
            <h2 className="font-bold text-[36px]">Morning Meditation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Enim accumsan amet commodo
              dui volutpat. Amet laoreet vitae ut risus diam sit eu posuere.
              Egestas sollicitudin purus magna aliquet ullamcorper velit eu
              arcu. Rhoncus est nullam sed quis auctor. Lorem ipsum dolor sit
              amet consectetur. Enim accumsan amet commodo dui volutpat. Amet
              laoreet vitae ut risus diam sit eu posuere.
            </p>
          </div>
          <div className="self-center w-1/2 flex space-x-12 justify-center">
            <div>
              <p className="font-medium">Built using</p>
              <ul className="list-disc list-inside">
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            <div>
              <p className="font-medium">Live</p>
              <ul>
                <li className="underline">View Site</li>
              </ul>
            </div>
          </div>
        </section>

        {/* hero image */}
        <section className="h-[600px] bg-teal-950/80"></section>

        <section className="grid grid-cols-2 gap-x-16 gap-y-20">
          <div className="">
            <h2 className="text-[24px] font-semibold mb-4">
              Background information
            </h2>
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

          <div className="h-[300px] bg-teal-700/30"></div>

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
        </section>
      </main>
      <Footer />
    </>
  );
}
