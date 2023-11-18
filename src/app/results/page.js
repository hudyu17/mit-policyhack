// `app/page.js` is the UI for the `/` URL

'use client'
 
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams()
    const interventionMap = {
        'item1': {'icon': '💵', 'title': 'Right to Counsel', 'desc': 'All tenants are entitled to free legal representation.'},
        'item2': {'icon': '🏛️', 'title': 'Eviction Moratorium', 'desc': 'Evictions are paused indefinitely, until the end of time.'},
        'item3': {'icon': '🚰', 'title': 'Random Solution', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    }

    const interventions = searchParams.get('interventions').split(',')

    const interventionItems = interventions.map((intervention) =>
        <div className='flex flex-col gap-4 text-center bg-gray-800 p-6 rounded-lg justify-center'>
            <p className='text-3xl'>{interventionMap[intervention].icon}</p>
            <p className='text-xl font-medium'>{interventionMap[intervention].title}</p>
            <p className='text-gray-400'>{interventionMap[intervention].desc}</p>
        </div>
    );

    const evictions = searchParams.get('evictions')

    return (
        <div className="relative isolate bg-gray-900 h-full min-h-screen text-white">
               <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
        <div className="mx-auto max-w-7xl py-24 flex flex-col gap-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                  Recommended Interventions
                </h2>
              </div>
              <div className="mt-4 flex md:ml-4 md:mt-0">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Share
                </button>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {interventionItems}
            </div>
            <p>
                Evictions: {evictions}
            </p>

        </div>
    </div>
    )
  }