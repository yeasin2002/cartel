type ImgList = {
  src: string;
  alt: string;
  link: string;
};

export function shuffleImgList(imgList: ImgList[]): ImgList[] {
  const shuffledList = [...imgList];
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }
  return shuffledList;
}
