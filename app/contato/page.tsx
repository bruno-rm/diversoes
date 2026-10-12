import Rot13Converter from "@/components/rot13";

export default async function Page() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-8rem)] justify-center items-center">
        <div className="font-semibold text-lg  ">
          <Rot13Converter />
        </div>
      </div>
    </>
  );
}
