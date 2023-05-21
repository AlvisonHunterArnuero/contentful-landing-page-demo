export default function Deals() {
  return (
    <div className="container mx-auto bg-indigo-200 px-8">
      <section className="py-6">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src="https://mdbootstrap.com/img/new/standard/people/035.jpg"
                className="w-full rounded-lg shadow-lg"
                id="cta-img-nml-50"
                alt=""
              />
            </div>
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-neutral-800 p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-6 text-3xl font-bold">
                  What are you waiting for?
                </h2>
                <p className="mb-6 pb-2 lg:pb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, sint, repellat vel quo quisquam accusamus in qui at
                  ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
                  distinctio eum neque!
                </p>
                <button
                  type="button"
                  className="inline-block rounded-full border-2 border-white px-7 py-3 text-sm font-medium uppercase leading-snug text-white transition duration-150 ease-in-out hover:bg-black focus:outline-none focus:ring-0"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Call Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
