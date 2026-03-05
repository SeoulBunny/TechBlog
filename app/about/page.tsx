import ContainerLayouts from "@/_layouts/ContainerLayouts";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <ContainerLayouts>
      <div className="px-4 sm:px-12">
        <div className="space-y-14">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About TechBlog
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A modern tech blog, with real-world development, and thoughtful
              engineering.
            </p>
          </div>

          {/* sectioon 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image
              src="/images/about.png"
              alt="About image"
              width={600}
              height={600}
              className="rounded-2xl object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                Why TechBlog
              </h2>
              <p className="text-gray-400 leading-relaxed">
                TechBlog was created to share insights on modern technologies
                and web-development. We focus on practical concepts, clean code,
                and real tools that help developers understand how things work
                and help then to build better applications, faster.
              </p>
            </div>
          </div>

          {/* sectioon 2 */}
          <div className="bg-secondary-background rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4 text-center pb-3">
              What we write about
            </h2>
            <ul className="space-y-3 text-gray-400 list-disc p-2 md:p-5">
              <li>Modern web tech</li>
              <li>Frontend development</li>
              <li>Backend tools, Api&apos;s, and architecture</li>
              <li>Guides and insights</li>
            </ul>
          </div>

          {/* sectioon 3 */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-200 mb-6">
              Built for developers by developers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed my-2">
              Whether you&apos;re just starting out or refining your skills,
              TechBlog will inspire better, cleaner code and design, as well as
              better thinking.
            </p>
            <Link
              href="/articles"
              className="inline-flex items-center justify-center px-6 py-3 mt-8 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold"
            >
              Explore the articles
            </Link>
          </div>
        </div>
      </div>
    </ContainerLayouts>
  );
};

export default AboutPage;
