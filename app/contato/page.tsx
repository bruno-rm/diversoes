import Rot13Converter from "@/components/rot13";

export default async function Page() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-15rem)] justify-center pt-30">
        <div className="font-semibold text-lg  ">
          <Rot13Converter />
        </div>
      </div>
    </>
  );
}

// min-h-[calc(100vh-8rem)]