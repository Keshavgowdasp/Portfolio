import OldImage from './KESHAV1.png';
import resumeFile from './Keshav_Resume1.pdf'; // Adjust the path to your resume file

export default function About() {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 items-center bg-red-300 max-w-5xl mx-auto "
    >
      
      <div className="flex-1">
        <img
          width={400} 
          src={OldImage}
          alt="About"
          className="w-auto h-auto max-w-[400px] rounded-md shadow-md"
        />
      </div>

     
      <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
        <div>
          <h2 className="text-center text-red-500 text-5xl font-bold">
            About Me:
          </h2>
        </div>
        <p className="text-center">
          As I said, I am a Full Stack developer...
        </p>
        <p className="text-center">
          I am a passionate self-taught developer. I have around 3 years of
          experience and a deep understanding of creating web products.
        </p>

        
        <a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
        >
          Open Resume
        </a>
        
      </div>
      
    </section>
  );
}
