import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        alt="Logo"
        src="/gm-logo.png"
        width={128}
        height={128}
      />
      <p className="text-xl mt-4">Welcome to Cloudflare Pages!</p>
    </div>
  );
}
