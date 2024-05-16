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
      <p className="text-xl mt-4">Welcome to Next.js on Cloudflare Pages!</p>
      <div className="flex justify-between items-center p-4 bg-slate-950 border border-slate-800 rounded mt-4">
        <code>git clone git@github.com:gmdotdev/cloudflare-quickstart.git</code>
      </div>
    </div>
  );
}
