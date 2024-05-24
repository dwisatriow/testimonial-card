function App() {
  return (
    <>
      {/** App container */}
      <div className="md:container">
        {/** Card container */}
        <div className="mt-[200px] flex flex-col items-center">
          {/** Card */}
          <div className="flex flex-col gap-4 w-[340px] rounded-lg bg-white p-6 shadow-md">
            {/** Card header */}
            <div className="flex items-center">
              <img
                src="profile-thumbnail.png"
                alt="Profile picture"
                className="w-12 rounded-full"
              />
              <div className="flex flex-col w-full ml-4">
                <p className="text-lg font-semibold">Sarah Dole</p>
                <p className="mt-px text-sm text-neutral-600">@sarahdole</p>
              </div>
            </div>
            {/** Card body */}
            <p className="text-neutral-600">
              I've been searching for high-quality abstract images for my design
              projects, and I'm thrilled to have found this platform. The
              variety and depth of creativity are astounding!
            </p>
          </div>
        </div>
      </div>

      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          {' '}
          GreatFrontEnd Projects
        </a>
        . Built by
        <a
          href="https://www.greatfrontend.com/projects/u/username"
          target="_blank"
        >
          {' '}
          Dwi Satrio Wicaksono
        </a>
        .
      </div>
    </>
  )
}

export default App
