/** @format */

const DefencePS1 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">
        Autonomous Surveillance Path Optimisation
      </h1>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">I. Introduction:</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In modern defence and security operations, drones are widely used for
          surveillance and monitoring purposes. However, flying a drone randomly
          is not useful. The drone must follow an optimised path so that it can
          cover maximum area in minimum time and with minimum battery
          consumption. At the same time, it should avoid restricted areas,
          no-fly zones, and obstacles such as buildings, mountains, or trees.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The main challenge is to design an algorithm that balances three
          important factors:
        </p>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Maximum area coverage</li>
          <li>Minimum energy consumption</li>
          <li>Safe navigation</li>
        </ol>
        <p className="text-gray-700 leading-relaxed">
          This makes the problem more engineering-oriented rather than
          application-oriented.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">II. Problem Statement:</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The aim is to design a path planning algorithm for an unmanned
          surveillance drone such that:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>It covers the maximum possible area,</li>
          <li>Uses minimum battery power,</li>
          <li>Avoids no-fly zones and obstacles,</li>
          <li>
            Works even when the map data is incomplete or slightly inaccurate.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          The drone starts from a fixed position and has limited battery. The
          area is represented using a grid or map where some regions are safe
          and some are restricted.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">III. Core Objective:</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The proposed solution should aim to:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Maximize Area Coverage:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The drone should scan as much of the accessible area as possible
              while avoiding redundant or overlapping paths.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Minimize Energy Consumption:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The path chosen should reduce unnecessary movement, sharp turns,
              and hovering, ensuring efficient battery usage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Ensure Safe Navigation:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The drone must strictly avoid no-fly zones and obstacles. Paths
              passing too close to dangerous regions should be penalized.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. Handle Uncertain or Incomplete Map Data:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The system should be capable of adjusting its path when new
              obstacles are detected or when the environment differs from the
              initial map.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefencePS1;
