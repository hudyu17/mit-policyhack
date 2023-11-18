/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
import { calculate } from './calculate.js'
import { useRouter } from 'next/router.js'
import { redirect } from "next/navigation";
import Loading from './loading.js';

export default function Example() {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
 
  // const router = useRouter();

  async function handleSubmit(formData) {
    setLoading(true)
    const queryString = calculate(formData)
    console.log(queryString)

    redirect(`/results?${queryString}`)
  }

  return (
    <div className="relative isolate bg-gray-900 h-full min-h-screen">
      {loading &&
        <Loading/>
      }
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 pb-32 lg:static lg:px-16 my-auto">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h1 className="font-bold tracking-tight text-white text-6xl">
              <p className='mb-4'>🏠</p>
              Eviction <br/>
              Prevention <br/>
              Calculator
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Every city is unique. Your interventions should be too.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-400">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                    +1 (617) 603-1700
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="mailto:hello@example.com">
                    ctrl-alt-defeat@mail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action={calculate} method="POST" className="px-6 pt-24 pb-20 my-auto lg:px-16">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-white">
                  Desired Budget
                </label>
                <div className="relative mt-2.5 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="budget"
                    id="budget"
                    className="block w-full rounded-md border-0 bg-white/5 pl-7 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="0"
                    aria-describedby="price-currency"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 sm:text-sm" id="price-currency">
                      / year
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-start-1">
                <label htmlFor="state" className="block text-sm font-medium leading-6 text-white">
                  State <span className='font-normal text-gray-400'>(of your City)</span> 
                </label>
                <div className="mt-2.5">
                  <select
                    id="state"
                    name="state"
                    className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                  >
                    <option></option>
                    <option>New York</option>
                    <option>Florida</option>
                    <option>Ohio</option>
                    <option>Colorado</option>
                  </select>
                </div>
              </div>

              <div className='col-start-1'>
                <label htmlFor="population" className="block text-sm font-semibold leading-6 text-white">
                  Population
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="population"
                    id="population-number"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* TODO: demographic inputs */}

              <div className="">
                <label htmlFor="state" className="block text-sm font-medium leading-6 text-white">
                  Predominant racial category
                </label>
                <div className="mt-2.5">
                  <select
                    id="state"
                    name="state"
                    className="block w-full rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                  >
                    <option></option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Hispanic</option>
                    <option>Native American / Alaska Native</option>
                    <option>Asian</option>
                    <option>Native Hawaiian / Other Pacific Islander</option>
                  </select>
                </div>
              </div>

              <fieldset className='sm:col-span-2'>
              <legend className="text-sm font-semibold leading-6 text-white">Current Policies</legend>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                Select all eviction-related interventions currently implemented in your city.
              </p>
              <div className="mt-5 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="counsel"
                      name="counsel"
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="counsel" className="font-medium text-white">
                      Right to Counsel
                    </label>
                    <p className="text-gray-400">All tenants facing eviction are entitled to free legal representation.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="moratorium"
                      name="moratorium"
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="moratorium" className="font-medium text-white">
                      Eviction Moratorium
                    </label>
                    <p className="text-gray-400">Evictions are paused for a pre-determined period.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="cure"
                      name="cure"
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="cure" className="font-medium text-white">
                      Right to Cure
                    </label>
                    <p className="text-gray-400">Tenants are given opportunity to pay outstanding arrears.</p>
                  </div>
                </div>
              </div>
            </fieldset>


            </div>
            <div className="mt-12 flex">
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => setLoading(true)}
              >
                Identify Interventions
              </button>

              {/* <Link
                href={{
                  pathname: '/results',
                  query: {
                    search: 'search'
                  }
                }}
              >
                Go to another page
              </Link> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
