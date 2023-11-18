// `app/page.js` is the UI for the `/` URL

'use client'
 
import { useSearchParams } from 'next/navigation'
import { ExampleChart } from '../components/charts'
import CardLineChart from '../components/chartsNotus'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Page() {
    const searchParams = useSearchParams()
    const interventionMap = {
        'item1': {'icon': '💵', 'title': 'Right to Counsel', 'desc': 'All tenants are entitled to free legal representation.'},
        'item2': {'icon': '🏛️', 'title': 'Eviction Moratorium', 'desc': 'Evictions are paused indefinitely, until the end of time.'},
        'item3': {'icon': '🚰', 'title': 'Random Solution', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    }

    const interventions = searchParams.get('interventions').split(',')

    const interventionItems = interventions.map((intervention) =>
        <div key={intervention} className='flex flex-col gap-4 text-center bg-gray-800 p-6 rounded-lg justify-center'>
            <p className='text-3xl'>{interventionMap[intervention].icon}</p>
            <p className='text-xl font-medium'>{interventionMap[intervention].title}</p>
            <p className='text-gray-400'>{interventionMap[intervention].desc}</p>
        </div>
    );

    const evictions = searchParams.get('evictions')

    const multiplierLow = 10500
    const multiplierHigh = 29100

    // const baselineData = [65, 74, 66, 64, 56, 67, 73, 80, 85, 88]
    // const interventionData = [63, 72, 69, 65, 56, 60, 65, 62, 58, 64]

    const baselineData = searchParams.get('baselineData').split(',')
    const interventionData = searchParams.get('interventionData').split(',')

    const saved = searchParams.get('saved')

    console.log(baselineData)

    return (
        <div className="relative isolate bg-gray-900 h-full min-h-screen text-white w-screen overflow-clip">
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
        <div className="mx-auto max-w-7xl py-24 flex flex-col gap-12 md:px-16 px-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-4xl font-bold leading-12 text-white sm:truncate tracking-tight">
                  Recommended Interventions
                </h2>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {interventionItems}
            </div>
            <div>
              <h2 className='text-xl'>
                  <span className='font-semibold text-yellow-300'>{evictions}</span> evictions could have been prevented
              </h2>
              <p className='text-gray-400'> if the policies above were implemented in 2018.</p>
            </div>

            {/* <ExampleChart/> */}
          <CardLineChart baselineData={baselineData} interventionData={interventionData} />

          <div>
            <h2 className='text-xl'>
                <span className='font-semibold text-yellow-300'>${(evictions * (multiplierHigh - multiplierLow)).toLocaleString()}</span> saved for your city
            </h2>
            <p className='text-gray-400'>based on a budgeted ${evictions} spent on interventions.</p>
          </div>

          <div className='w-full -mt-6'>
            <div className='flex items-center'>
            <div className='flex flex-col gap-2 items-center border border-gray-400 rounded-md p-4'>
                <p className='text-gray-300 font-light'>Conservative outcome</p>
                <p className='font-semibold text-orange-500'>${numberWithCommas(evictions * multiplierLow)}</p>
              </div>
              <hr className='w-64'/>
              <div className='flex flex-col gap-2 items-center border border-gray-400 rounded-md p-4'>
                <p className=''>Expected outcome</p>
                <p className='font-semibold text-yellow-300'>${numberWithCommas(evictions * (multiplierHigh - multiplierLow))}</p>
              </div>
              <hr className='w-64'/>
              <div className='flex flex-col gap-2 items-center border border-gray-400 rounded-md p-4'>
                <p className='text-gray-300 font-light'>Best case scenario</p>
                <p className='font-semibold text-green-600'>${numberWithCommas(evictions * multiplierHigh)}</p>
              </div>
            </div>
          </div>          
        </div>
    </div>
    )
  }