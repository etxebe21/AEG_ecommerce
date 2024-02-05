import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  console.log(data);
  return (
   
    <section className="bg-beige-800 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-40">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality products for you.
            We are the best so come and shop with us.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          {data.image4 && (
            <Image
              src={urlFor(data.image4).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          )}
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center gap-40 md:flex-row" style={{ fontFamily: 'helvetica' }}>
        <div className="flex flex-col items-center gap-4">

          <p className="text-2xl font-bold tracking-tight text-primary">SHOES</p>
          <Link href="/SHOES" className="relative w-64 h-96 overflow-hidden rounded-lg border border-primary">
            <Image
              src={urlFor(data.image1).url()} 
              alt="Men Image"
              className="w-full h-full object-cover object-center"
              width={500}
              height={500}
            />
          </Link>    
        </div>

        <div className="flex flex-col items-center gap-4">

        <p className="text-2xl font-bold tracking-tight text-primary">PANTS</p>
          <Link href="/PANTS" className="relative w-64 h-96 overflow-hidden rounded-lg border border-primary">
            <Image
              src={urlFor(data.image5).url()} 
              alt="Women Image"
              className="w-full h-full object-cover object-center"
              width={500}
              height={500}
            />
          </Link> 
        </div>

        <div className="flex flex-col items-center gap-4">

        <p className="text-2xl font-bold tracking-tight text-primary">COATS</p>
          <Link href="/COATS" className="relative w-64 h-96 overflow-hidden rounded-lg border border-primary">
            <Image
              src={urlFor(data.image3).url()} 
              alt="Teens Image"
              className="w-full h-full object-cover object-center"
              width={500}
              height={500}
            />
          </Link>
          
        </div>
      </div>

    </section>

  );
}