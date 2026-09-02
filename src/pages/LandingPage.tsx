import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "../components/layouts/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
              Modern project management
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Manage your team's work
              <span className="text-indigo-600"> effortlessly.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Plan projects, manage tasks, collaborate with your team,
              and track progress from one powerful workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700">
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50">
                View Demo
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Easy to use
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Team collaboration
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Real-time updates
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-xl">
            <div className="rounded-xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Project overview
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-gray-900">
                    E-commerce Website
                  </h3>
                </div>

                <div className="rounded-lg bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
                  72%
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Tasks
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    24
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Completed
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    18
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Members
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    8
                  </p>
                </div>

              </div>

              <div className="mt-8">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-gray-500">
                    Project progress
                  </span>

                  <span className="font-medium">
                    72%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-gray-100">
                  <div className="h-2 w-[72%] rounded-full bg-indigo-600" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Everything your team needs
            </h2>

            <p className="mt-4 text-gray-600">
              Organize projects, manage tasks and keep your entire team
              aligned.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <FeatureCard
              title="Project Management"
              description="Create projects, organize work and track progress."
            />

            <FeatureCard
              title="Task Management"
              description="Assign tasks, set priorities and manage deadlines."
            />

            <FeatureCard
              title="Team Collaboration"
              description="Work together and keep everyone updated."
            />

          </div>

        </div>
      </section>

    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 h-10 w-10 rounded-lg bg-indigo-50" />

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default LandingPage;