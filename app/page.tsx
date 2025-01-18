import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex flex-col h-full pt-4 px-4'>
      <section id='image-slider' className='flex justify-center w-full'>
        <Image
          src={'https://placehold.co/600x400/EEE/31343C'}
          alt='placeholder'
          width={600}
          height={400}
          unoptimized
        />
      </section>
      <section
        id='company-profile'
        className='grid lg:grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_1fr] justify-center gap-2 mt-2 xl:grid-cols-[42rem_300px_300px]'
      >
        <div className='max-w-2xl row-span-2 justify-self-end col-span-2 md:col-span-1'>
          <h2 className='text-2xl font-bold'>รู้จักกับเรา</h2>
          <div className='pl-10'>
            <h3 className='text-2xl font-bold relative'>
              <div className='absolute -left-5 -top-1'>●</div>
              2022
            </h3>
            <p className='relative'>
              <div className='absolute -left-[14.5px] border-l-4 border-[var(--text-base)] -top-5 -bottom-3'></div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptates at consectetur impedit sit voluptas cum ut vel ipsa
              tempore repellat illum id natus omnis officiis, atque recusandae?
              Molestias, iste.
            </p>
            <h3 className='text-2xl font-bold relative'>
              <div className='absolute -left-5 -top-1'>●</div>
              2023
            </h3>
            <p className='relative'>
              <div className='absolute -left-[14.5px] border-l-4 border-[var(--text-base)] -top-5 -bottom-3'></div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptates at consectetur impedit sit voluptas cum ut vel ipsa
              tempore repellat illum id natus omnis officiis, atque recusandae?
              Molestias, iste.
            </p>
            <h3 className='text-2xl font-bold relative'>
              <div className='absolute -left-5 -top-1'>●</div>
              2024
            </h3>
            <p className='relative'>
              <div className='absolute -left-[14.5px] border-l-4 border-[var(--text-base)] -top-5 bottom-2'></div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptates at consectetur impedit sit voluptas cum ut vel ipsa
              tempore repellat illum id natus omnis officiis, atque recusandae?
              Molestias, iste.
            </p>
          </div>
        </div>

        <Image
          src={'https://placehold.co/300x200/EEE/31343C'}
          alt='placeholder'
          width={300}
          height={200}
          unoptimized
          className='justify-self-center w-full max-h-[200px] xl:justify-self-start'
        />
        <Image
          src={'https://placehold.co/300x200/EEE/31343C'}
          alt='placeholder'
          width={300}
          height={200}
          unoptimized
          className='justify-self-center w-full max-h-[200px] xl:justify-self-start'
        />
        <Image
          src={'https://placehold.co/300x200/EEE/31343C'}
          alt='placeholder'
          width={300}
          height={200}
          unoptimized
          className='justify-self-center w-full max-h-[200px] xl:justify-self-start'
        />
        <Image
          src={'https://placehold.co/300x200/EEE/31343C'}
          alt='placeholder'
          width={300}
          height={200}
          unoptimized
          className='justify-self-center w-full max-h-[200px] xl:justify-self-start'
        />
      </section>
    </div>
  )
}
