type ImgList = {
  src: string;
  alt: string;
  link: string;
};

export function shuffleImgList(imgList: ImgList[]): ImgList[] {
  const shuffledList = [...imgList]; // Create a copy of the original array to avoid mutation
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]]; // Swap elements
  }
  return shuffledList;
}
