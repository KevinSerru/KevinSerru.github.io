import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <a
          href="https://www.linkedin.com/in/kevinserru"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'block',    
            margin: '0 auto',
           }}
        >
          <Image
            src="/kevin.jpg"
            alt="Kevin"
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
              border: '5px solid #333',
            }}
            priority
          />
        </a>
        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p>Hello friend,</p>
          <p>Thank you for reaching out.</p>
          <p>Click on my left eye to learn more about me.</p>
        </div>
      </main>
    </div>
  );
}
