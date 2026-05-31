import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto w-full max-w-5xl px-4">
        <h1 className="text-center text-4xl font-bold">Home</h1>
        <Link href={'/docs'}>Document →</Link>
      </div>
    </div>
  );
}
