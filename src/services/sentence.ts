// service form https://developer.hitokoto.cn/sentence/

export interface SentenceInfo {
  id: number; // 5677,
  uuid: string; // "b2b6918f-32ff-4d1c-a291-f3112668ad0e",
  hitokoto: string; // "三十功名尘与土，八千里路云和月。",
  type: SentenceType; // i,
  from: string; // "满江红·写怀",
  from_who: string; // "岳飞",
  creator: string; // "a632079",
  creator_uid: number; // 1044,
  reviewer: number; // 1044,
  commit_from: string; // "api",
  created_at: string; // "1586271524",
  length: number; // 16
}

export enum SentenceType {
  Animation = 'a', // 动画
  Comic = 'b', // 漫画
  Game = 'c', // 游戏
  Literature = 'd', // 文学
  Original = 'e', // 原创
  InternetCatchwords = 'f', // 来自网络
  Other = 'g', // 其他
  Movies = 'h', // 影视
  Poetry = 'i', // 诗词
  NetEaseCloud = 'j', // 网易云
  Philosophy = 'k', // 哲学
  Nonsense = 'l', // 抖机灵
}

function sentenceType2QuerySting(typeArr: SentenceType[]) {
  const strArr = typeArr.map((type) => `c=${type}`);
  const result = '?' + strArr.join('&');
  return result;
}

export function sentenceService(
  typeArr: SentenceType[]
): Promise<SentenceInfo> {
  return new Promise((resolve, reject) => {
    fetch(
      `https://v1.hitokoto.cn${sentenceType2QuerySting(typeArr)}&max_length=25`
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        console.error('fetch sentenceInfo fail', JSON.stringify(e));
        reject(e);
      });
  });
}
