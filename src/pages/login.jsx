import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import InchargeImage from '@/images/Incharge.jpeg'
import Image from 'next/image'
import { Logo } from '@/components/Logo'
import logo from '@/images/logos/logo.jpeg'

export default function Login() {
  return (
    <>
      <Head>
        <title>Student Incharge</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          {/* <Link href="/" aria-label="Home">
            <Image
              className="h-14 w-14 object-cover"
              src={logo}
              alt=""
              width={56}
              height={56}
            />
          </Link> */}
          <div className="mt-10">
            <div className="w-100vw flex justify-center">
              <Image
                className="mt-10 w-full rounded-full"
                src={InchargeImage}
                alt=""
                width={196}
                height={196}
              />
            </div>

            <h2 className="mt-4 text-center  text-xl font-semibold text-gray-200">
              Harshit kumar singh
            </h2>
            <h2 className=" mt-4 text-center text-sm font-semibold text-gray-200">
              Student Incharge
            </h2>
            <h2 className=" mt-4 text-center text-sm font-semibold text-gray-200">
              Phone :- +91-8534833926
            </h2>
            <h2 className=" mt-4 text-center text-sm font-semibold text-gray-200">
              Email :- club.csitmjpru@gmail.com
            </h2>
            <h2 className=" mt-4 text-center text-sm font-semibold text-gray-200">
              Address :- Department of computer science and information
              technology , Mahatma Jyotiba Phule Rohilkhand University ,
            </h2>
            <h2 className=" mt-1 text-center text-sm font-semibold text-gray-200">
              Bareilly , Uttar Pradesh , Pincode :- 243006
            </h2>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
