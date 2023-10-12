import React from 'react'
import '../styles/Home.css'
import Farming from '../images/farming.jpg'

function Home() {
  return (
    <div className='home'>
        <div className='home-title'>
            <div className='language'>
                <a href="">TR</a>
                <a href="">EN</a>
            </div>
            <div className='mission'>
                <h1>MİSYONUMUZ</h1>
            </div>
        </div>
        <div className='home-mission'>
          <div className='paragraph'>
            <p>Global ısınmanın etkisini, son günlerde ülkemizin güzide ormanlarını ve yerleşimlerini yok ederken, içimiz kan ağlayarak izliyoruz. Antalya Ticaret Borsası Başkanı Ali Çandır, Antalya’da çıkan orman yangınlarında ilk tespitlere göre, yaklaşık 720 dekarlık sera alanını, 350’ye yakın büyükbaş hayvanı, 3 bine yakın küçükbaş hayvanı ve 16 bin dekarlık tarım alanında bulunan 360 adet arı kovanını yangın sebebiyle kaybettiklerini açıkladı.</p>
            <p>Global ısınma her gün geçtikçe gıda güvenliğimizi ve verimli tarım alanlarımızı tehdit eder hale gelmiştir. Ayrıca tarım nüfusumuz, eğitimsizlik ve global rekabet sonucunda, gün geçtikçe kan kaybetmektedir. Tarım üretimiz düşmekte, su gittikçe daha değerli olmaktadır.</p>
            <p>Tarım alanında alan ve su temini sıkıntısı çekmelerine rağmen, teknoloji kullanarak ciddi katma değerli tarım ihracatçıları haline gelen, Hollanda, İsrail gibi ülkeler; tarım ile teknolojiyi birlikte kullanıyorlar. Bizim ülkemizde de bu konuda bazı çalışmalar yapılmaktadır. </p>
            <p>Kapsamlı bir ARGE projesi ile kendi ürettiği elektriği kullanan ve %98 su tasarrufu sağlayan tesisler ile ülkemizdeki tarıma az elverişli toprağa sahip ve zorlu iklimlerdeki tarım arazilerini çok yüksek verimle kullanmak mümkün olabilecektir. Yaptığımız bilgisayarlı modellemeler, düzenli olarak yılın her günü mahsul alınabilecek ve m2 başına çok yüksek miktarda tarımsal üretim yapılabileceğini göstermektedir.</p>    
          </div>
          <div>
            <img src={Farming} alt="farming" width={550} height={370} />
          </div>
        </div>
        <div className='goal'>
          <p>Hedefimiz:</p>
          <p>Aeroponik üretimde Türkiye’ye liderlik ederek, çok yüksek verimli tarım üretimiyle uluslararası bir gıda tedarikçisi olmaktır.</p>
        </div>

    </div>
  )
}

export default Home