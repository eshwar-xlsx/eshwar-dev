import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-[80%] mx-auto mt-16 md:mt-20">
      <div className="flex items-center">
        <div id="photo" className="h-[100px] w-[100px] px-4 pt-5">
          <Image
            src="/cartoon.jpg" // Make sure this is in your public directory or replace with an external link
            alt="Cartoon Avatar"
            className="rounded-full"
            width={100}
            height={100}
          />
        </div>

        <a
          target="_blank"
          href="https://drive.google.com/file/d/1zg7JWTlr0D2s-WaqUPVaggaUbB9qX6y6/view?usp=sharing"
          rel="noopener noreferrer"
        >
          <button className="text-white bg-blue-500 rounded-lg px-4 py-2 absolute top-0 right-0 mt-4 mr-4">
            Who Am I?
          </button>
        </a>
      </div>

      <div className="mt-4">
        <h3 className="text-white">
          Interned at{' '}
          <a
            className="text-blue-400"
            href="https://ineuron.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iNeuron Intelligence
          </a>{' '}
          &{' '}
          <a
            className="text-blue-400"
            href="https://www.automate-engineering.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Automate Engineering
          </a>{' '}
          as ML intern.
        </h3>
      </div>

      <div className="mt-4">
        <h3 className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab vero rem
          aliquam at? Quos itaque dolorum vitae tempore ut facere illum,
          delectus iure mollitia animi provident dicta autem nesciunt inventore
          reprehenderit in quia corrupti optio voluptate et veritatis nobis
          impedit?
        </h3>
      </div>

      <div className="mt-4">
        <h3 className="text-white">
          I consider myself a creative, tech enthusiast, adaptable guy, enjoying
          building high-value products.
        </h3>
      </div>

      <div className="mt-4 text-white">You can reach me out at #instagram_id</div>

      <div className="mt-8 text-white flex justify-center gap-4">
        <a
          target="_blank"
          className="text-blue-300"
          href="mailto:eshwarlalpotu2@gmail.com"
          rel="noopener noreferrer"
        >
          <h4>mail</h4>
        </a>
        <a
          target="_blank"
          className="text-white-300"
          href="https://github.com/eshwar-xlsx/"
          rel="noopener noreferrer"
        >
          <h4>github</h4>
        </a>
        <a
          target="_blank"
          className="text-blue-300"
          href="https://www.linkedin.com/in/eshwar-lalpotu"
          rel="noopener noreferrer"
        >
          <h4>linkedin</h4>
        </a>
        <a
          target="_blank"
          className="text-white-300"
          href="https://drive.google.com/drive/folders/1o4ocgd9pBHD8BOftF5c7SmkybJ-vLY4O?usp=drive_link"
          rel="noopener noreferrer"
        >
          <h4>research</h4>
        </a>
      </div>

      <div className="mt-8 flex justify-end">
        <p className="text-gray-500">@eshwar-lalpotu</p>
      </div>
    </div>
  );
}
