import React from 'react';
import Image from 'next/image';

const Layout = ({children}: {children: React.ReactNode}) => {
  console.log(11);
  
  return (
    <div className="flex min-h-screen">
      <section className="bg-[#EA6365] p-10 w-[50%]">
        <div>
          <div className="flex items-center text-2xl font-bold">
            <Image
              src="/favicon.ico"
              alt="logo"
              width={32}
              height={32}
              className="h-auto mr-2"
            />
            Storage
          </div>
          <div className="space-y-5 text-white mt-30">
            <h1 className="text-4xl font-bold">
              Manage your files the best way!
            </h1>
            <p className="body-1">
              This is a place where you can store all your documents.
            </p>
          </div>
          <div className='flex justify-center mt-30'>
            <Image
              src="/file.svg"
              alt="logo"
              width={320}
              height={320}
              className="transition-all hover:rotate-2 hover:scale-105"
            />
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};

export default Layout;
