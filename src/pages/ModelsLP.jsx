export default function ModelsLP() {
  return (
    <div className="min-h-screen font-sans text-[#0E1F1E] bg-white antialiased overflow-y-scroll">
      <div className="flex flex-col h-screen">

        {/* HERO */}
        <section className="px-10 pt-20 pb-24 flex gap-16 items-center">
          <div className="w-1/2">
            <p className="text-sm text-green-700 font-semibold mb-3">TRY IT NOW!</p>
            <h1 className="text-5xl font-semibold leading-tight">
              Change the way <br /> you use your <span className="italic">money</span>
            </h1>
            <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
              From your everyday spending, to planning for your future with savings and investments,
              Ascone helps you get more from your money.
            </p>
            <div className="flex items-center gap-5 mt-7">
              <button className="bg-[#0F3D36] text-white px-8 py-3 rounded-full text-sm">
                Get Started Now
              </button>
              <div className="flex gap-1 text-yellow-500 text-xl">★★★★★</div>
              <span className="text-gray-600 text-sm">5.0 from 120+ reviews</span>
            </div>
          </div>

          <div className="w-1/2 grid grid-cols-2 gap-3">
            <div className="h-52 bg-gray-200 rounded-xl flex items-center justify-center">
              IMG PHONE
            </div>
            <div className="bg-[#E7E3CF] h-52 rounded-xl flex flex-col items-center justify-center">
              <span className="text-4xl font-semibold">56+</span>
              <p className="text-sm mt-1 text-gray-700">Currencies</p>
            </div>
            <div className="bg-[#E7E3CF] h-52 rounded-xl flex flex-col items-center justify-center">
              <span className="text-xs">Users Active</span>
            </div>
            <div className="bg-[#0F3D36] h-52 rounded-xl text-white flex flex-col items-center justify-center">
              <span className="text-3xl font-semibold">$196,000</span>
              <p className="text-sm mt-2">Saving</p>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-14 flex justify-center gap-20 text-gray-700 text-lg opacity-70">
          <span>loom</span>
          <span>HubSpot</span>
          <span>OpenAI</span>
          <span>Raycast</span>
          <span>zenefits</span>
        </section>

        {/* ABOUT */}
        <section className="px-10 py-24 text-center">
          <p className="text-sm text-green-700 font-semibold mb-2">ABOUT US</p>
          <h2 className="text-4xl font-semibold mb-3">One app for all your money things</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Remove all the friction that stands in the way of your money goals.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-14">
            <div className="bg-[#0F3D36] text-white h-64 rounded-xl flex flex-col items-center justify-center">
              <p className="text-xl mb-3">Grow savings faster</p>
              <span className="text-4xl font-semibold">$12,000</span>
            </div>
            <div className="bg-[#E7E3CF] h-64 rounded-xl flex flex-col justify-center items-center">
              <p className="text-xl mb-3">Send across the global</p>
              <span className="text-3xl font-semibold">$25,000</span>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="px-10 py-24">
          <h2 className="text-4xl font-semibold mb-2">Make your spend, Well-spent</h2>
          <p className="text-gray-600 max-w-3xl">
            Manages a diversified group of specialized private credit brands with efficient
            tech-enabled processes.
          </p>

          <div className="grid grid-cols-3 mt-14 gap-6">
            <div className="border rounded-xl p-8">
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">
                A departure from the industry norm of ambiguity.
              </p>
            </div>
            <div className="border rounded-xl p-8">
              <h3 className="font-semibold mb-2">Creative expansion</h3>
              <p className="text-gray-600 text-sm">
                Proprietary fintech platform helps subsidiaries locate investments.
              </p>
            </div>
            <div className="bg-[#E7E3CF] rounded-xl p-8">
              <h3 className="font-semibold mb-2">Private Credit Investments</h3>
              <p className="text-gray-600 text-sm">
                Access to unique private credit investments as part of a sound portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* NUMBERS */}
        <section className="bg-[#0F3D36] text-white text-center py-32">
          <div className="text-6xl font-semibold">$14B</div>
          <p className="mt-2 opacity-80">Funds and syndicates</p>
          <div className="text-5xl font-semibold mt-8">23k+</div>
          <p className="mt-2 opacity-80">Raised by active startups</p>
        </section>

        {/* FAQ */}
        <section className="px-10 py-24">
          <h2 className="text-4xl font-semibold mb-12">Frequently asked questions</h2>
          <div className="space-y-6 w-full max-w-2xl">
            <div className="border-b pb-5 font-medium">How sending a bank transfer</div>
            <div>
              <div className="border-b pb-5 font-medium">
                What is the scheduled payments feature?
              </div>
              <p classname="text-gray-600 mt-2 text-sm">
                The scheduled payments feature allows you to manage payments in one place.
              </p>
            </div>
            <div className="border-b pb-5 font-medium">How can I reactivate a terminated card?</div>
            <div className="border-b pb-5 font-medium">How about with a refund?</div>
            <div className="border-b pb-5 font-medium">How can add money to my account?</div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-10 py-32 bg-[#0F3D36] text-white flex items-center justify-between rounded-t-3xl">
          <div>
            <h2 className="text-4xl font-semibold leading-tight">
              Change the way you <br /> use your <span className="italic">money</span>
            </h2>
            <p className="mt-4 opacity-80 max-w-md">
              Join over million people who choose Ascone for fast and secure future banking.
            </p>
            <button className="mt-7 bg-white text-[#0F3D36] px-8 py-3 rounded-full text-sm">
              Get Started Now
            </button>
          </div>
          <div className="bg-gray-200 h-40 w-40 rounded-xl">IMG</div>
        </section>

        {/* FOOTER */}
        <footer className="px-10 py-24 grid grid-cols-5 gap-10 text-gray-700 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Account</h4>
            <ul className="space-y-1">
              <li>Saving</li>
              <li>Join Accounts</li>
              <li>Crypto</li>
              <li>Freelance</li>
              <li>Commodities</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Help</h4>
            <ul className="space-y-1">
              <li>Customer Help</li>
              <li>Community</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Finance</h4>
            <ul className="space-y-1">
              <li>Cards</li>
              <li>Linked Accounts</li>
              <li>Payment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Contact</li>
              <li>Sustainability</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="flex items-end justify-end text-5xl font-bold text-[#0F3D36]">
            Ascone
          </div>
        </footer>
      </div>
    </div>
  );
}
