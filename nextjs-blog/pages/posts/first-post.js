import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>황 버 풀 우승은 나의 꿈!</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}