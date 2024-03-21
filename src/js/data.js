let Data = [];
//신발 객체 틀을 생성하는 함수
const shoes = function(imgNum, name, price, contents, cat){
  this.imgUrl = (`../img/shoes${imgNum}.png`);
  this.name = name;
  this.price = price;
  this.contents = contents;
  this.cat = cat;
  this.reviews = [];
};
for(let i=1;i<=20;i++){
  Data[i-1] = new shoes(i);
  for(j=0;j<3;j++){
    Data[i-1].reviews.push({
      stars:Math.floor(Math.random() * 5) + 1,
      contents : `Review ${j+1} for shoe ${i}`
    })
  }
}

Data[0].reviews[1].stars = 5;
Data[0].name = "솔라 스트라이드 (Solar Stride)";
Data[0].price = 800;
Data[0].contents = "고품질 태양열 축전판이 장착된 발걸음을 가벼운 태양으로 변환하여 편안함과 에너지를 제공하는 신발입니다. 올빼미 꼬리 모양의 디테일이 감각을 더합니다.";
Data[0].cat = "running";

Data[1].name = "레트로 루프 (Retro Loop)";
Data[1].price = 650;
Data[1].contents = "레트로한 감성을 담은 루프 디자인으로, 시대를 초월한 스타일과 편안한 착용감을 제공합니다. 부드러운 소가죽과 부드러운 올빼미 깃털 장식이 특징입니다.";
Data[1].cat = "running";

Data[2].name = "퓨처 페더 (Future Feather)";
Data[2].price = 900;
Data[2].contents = "높은 기술력으로 제작된 퓨처리스틱한 페더 모티브가 돋보이는 고급스러운 신발입니다. 유연한 소재와 미래적인 디자인이 돋보입니다.";
Data[2].cat = "running";

Data[3].name = "크림슨 캐년 (Crimson Canyon)";
Data[3].price = 750;
Data[3].contents = "심플한 디자인에 고급스러운 크림슨 컬러가 어우러진 고지대를 연상시키는 신발입니다. 올빼미 날개 모양의 패턴이 특징입니다.";
Data[3].cat = "running";

Data[4].name = "네온 넥타 (Neon Nectar)";
Data[4].price = 700;
Data[4].contents = "선명한 네온 컬러가 돋보이는 현대적인 디자인의 스니커즈로, 발을 감싸는 올빼미 깃털 소재로 편안한 착용감을 제공합니다.";
Data[4].cat = "running";

Data[5].name = "아이스 플래시 (Ice Flash)";
Data[5].price = 850;
Data[5].contents = "얼음처럼 시원한 느낌을 주는 투명한 소재로 만들어진 플래시 스타일의 신발입니다. 올빼미의 눈이 반짝이는 장식으로 포인트를 주었습니다.";
Data[5].cat = "running";

Data[6].name = "에코 이스케이프 (Echo Escape)";
Data[6].price = 600;
Data[6].contents = "자연을 닮은 디자인과 친환경적인 소재를 사용한 환경 친화적인 스니커즈입니다. 올빼미의 울음소리 모양의 디테일이 포인트입니다.";
Data[6].cat = "running";

Data[7].name = "스카이 라이트닝 (Sky Lightning)";
Data[7].price = 780;
Data[7].contents = "하늘을 닮은 스카이 블루 컬러와 번쩍이는 번개 모양의 장식이 특징인 스니커즈입니다. 올빼미의 날개 모양의 장식이 돋보입니다.";
Data[7].cat = "running";

Data[8].name = "루미너스 루트 (Luminous Route)";
Data[8].price = 720;
Data[8].contents = "어둠 속을 밝히는 빛을 닮은 발걸음을 선보이는 신발로, 발가락 부분의 올빼미 깃털 장식이 눈길을 끕니다.";
Data[8].cat = "running";

Data[9].name = "아우라 스프린트 (Aura Sprint)";
Data[9].price = 830;
Data[9].contents = "오로라를 연상시키는 컬러와 현란한 디자인이 돋보이는 러닝화입니다. 발목 부분의 올빼미 깃털 장식이 특징입니다.";
Data[9].cat = "running";

Data[10].name = "더블 트위스트 (Double Twist)";
Data[10].price = 780;
Data[10].contents = "더블 트위스트 디자인으로 발을 안정적으로 감싸주며, 뛰어난 트레드로 어떤 지형에도 적합한 스타일리시한 스니커즈입니다. 올빼미 깃털 장식이 특징입니다.";
Data[10].cat = "converse";

Data[11].name = "스피릿 서지 (Spirit Surge)";
Data[11].price = 850;
Data[11].contents = "강인한 영혼을 닮은 스피릿 서지는 소울풀한 디자인과 튼튼한 소재로 만들어진 운동화입니다. 올빼미 날개 모양의 장식이 눈길을 끕니다.";
Data[11].cat = "running";

Data[12].name = "블리스 브리즈 (Bliss Breeze)";
Data[12].price = 720;
Data[12].contents = "신선한 바람을 느낄 수 있는 블리스 브리즈는 가벼운 착용감과 시원한 디자인이 매력적인 슬리퍼입니다. 올빼미 깃털 모양의 패턴이 돋보입니다.";
Data[12].cat = "running";

Data[13].name = "소울 서핑 (Soul Surfing)";
Data[13].price = 700;
Data[13].contents = "파도를 타듯이 자유로운 느낌을 주는 소울 서핑은 튼튼한 소재로 제작되어 물에 젖어도 걱정없는 슬리퍼입니다. 발뒤축의 올빼미 깃털 장식이 매력적입니다.";
Data[13].cat = "converse";

Data[14].name = "실버 스트라이드 (Silver Stride)";
Data[14].price = 790;
Data[14].contents = "은빛으로 빛나는 스트라이드는 우아하고 세련된 스타일을 선사하는 슬리퍼입니다. 발뒤축에 올빼미 깃털 장식이 특징입니다.";
Data[14].cat = "converse";

Data[15].name = "엔드리스 엠버 (Endless Ember)";
Data[15].price = 760;
Data[15].contents = "끝없는 불꽃처럼 타오르는 엔드리스 엠버는 화려한 디자인과 견고한 소재로 만들어진 부츠입니다. 발목 부분의 올빼미 깃털 장식이 럭셔리한 느낌을 줍니다.";
Data[15].cat = "converse";

Data[16].name = "마법의 멜로디 (Magic Melody)";
Data[16].price = 680;
Data[16].contents = "마법의 멜로디는 신비로운 분위기를 자아내는 디자인과 편안한 착용감이 매력적인 슬리퍼입니다. 발가락에 올빼미 깃털 장식이 돋보입니다.";
Data[16].cat = "boots";

Data[17].name = "레트로 루나 (Retro Luna)";
Data[17].price = 770;
Data[17].contents = "반달 모양을 연상시키는 레트로 루나는 고급스러운 가죽 소재와 우아한 디자인이 돋보이는 부츠입니다. 발뒤축의 올빼미 깃털 장식이 매력적입니다.";
Data[17].cat = "boots";

Data[18].name = "크리스털 크래셔 (Crystal Crusher)";
Data[18].price = 820;
Data[18].contents = "크리스털을 유리처럼 깨끗하게 부수는 크래셔는 우아한 디자인과 견고한 소재로 제작된 슬리퍼입니다. 발목 부분의 올빼미 깃털 장식이 럭셔리한 느낌을 줍니다.";
Data[18].cat = "running";

Data[19].name = "화이트 위스퍼 (White Whisper)";
Data[19].price = 740;
Data[19].contents = "하얀 속삭임처럼 가볍고 시원한 화이트 위스퍼는 튼튼한 소재와 섬세한 디자인이 특징인 스니커즈입니다. 발뒤축의 올빼미 깃털 장식이 돋보입니다.";
Data[19].cat = "slipper";