"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "~/components/primitives/icon";

export default function SearchButtonBlock() {
  const router = useRouter();

  //임시적으로 만든 함수 나중에 input의 텍스트를 받아 api/naver를 통해서 url값을 얻어오도록 할 것
  const setURL = () => {
    const searchURL = new URL(`https://cafe.naver.com/steamindiegame`);
    //searchURL.searchParams.set(`search.clubid`, `27842958`);
    return searchURL;
  };

  return (
    //TODO: Search icon이 포함된 DynamicButton으로 바꿀것
    <Link href={setURL()} target="_blank">
      <Search size="SEARCH" />
    </Link>
  );
}
