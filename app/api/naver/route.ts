import { NextResponse } from "next/server";

const API_URL = `https://openapi.naver.com/v1/search/cafearticle.json`;
const client_id: string = process.env.NAVER_CLIENT_ID as string;
const client_secret: string = process.env.NAVER_CLIENT_SECRET as string;

/**
 * 이 API는 naver의 전체 카페를 검색하는 api이므로 다른 것으로 변환 필요.
 * TODO: 헤더 검색 cafe내에서 찾아서 그 URL을 반환할 수 있게 할 것
 * ex) https://cafe.naver.com/steamindiegame?iframe_url=/ArticleSearchList.nhn%3Fsearch.clubid=27842958%26search.query=%25A4%25A4%25A4%25A4%25A4%25A4
 *
 * TODO: 카페내에서 특정 카테고리로 검색을 하여 그 검색리스트를 매거진 탬플릿에 표시가 필요
 * ex) 뱅온정보, 왁뱅정보 등...
 */
export async function GET(query: string) {
  try {
    const res = await fetch(`${API_URL}?query=${encodeURIComponent(query)}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    });

    const result: any = await res.json();
    return NextResponse.json(result);
  } catch (error) {
    console.log("Error fetching search results", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
