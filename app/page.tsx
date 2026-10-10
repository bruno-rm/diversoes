import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div className="md:flex min-h-[calc(100vh-8rem)] justify-center items-center pt-10 gap-4">
        <div className="flex-1  p-6 ">
          <Image
            className="mx-auto"
            src="/diversoes-logo.jpeg"
            alt="Black cat at night"
            width={500}
            height={500}
            loading="eager"
          />
          
        </div>
        
      </div>
      
    </div>
  );
}
