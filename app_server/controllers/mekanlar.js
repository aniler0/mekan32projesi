const anaSayfa = function (req, res, next) {
  res.render('mekanlar-liste',
    {
      'baslik': 'Anasayfa',
      'sayfaBaslik': {
        'siteAd': 'Mekan32',
        'aciklama': 'Isparta civarındaki mekanları keşfedin'
      },

      'footer': 'Anıl Er 2020',
      'mekanlar': [
        {
          'ad': 'Starbucks',
          'adres': 'Iyaşpark AVM',
          'puan': 3,
          'imkanlar': ['kahve', 'çay', 'pasta'],
          'mesafe': '9km'
        },
        {
          'ad': 'Gloria Jeans',
          'adres': 'Iyaşpark AVM',
          'puan': 3,
          'imkanlar': ['kahve', 'kek', 'pasta'],
          'mesafe': '9km'

        },
        {
          'ad': 'Köfteci Yusuf',
          'adres': 'Iyaş Bulvar AVM',
          'puan': 4,
          'imkanlar': ['köfte', 'kahvaltı'],
          'mesafe': '11km'
        },
        {
          'ad': 'Alaçatı Muhallebicisi',
          'adres': 'Iyaş AVM',
          'puan': 2,
          'imkanlar': ['kahve', 'çay', 'pasta', 'tatlı'],
          'mesafe': '8km'
        },
        {
          'ad': 'Casia Lounge',
          'adres': 'Modernevler Mahallesi,Hüseyin Avni Paşa Caddesi',
          'puan': 3,
          'imkanlar': ['kahve', 'çay', 'pasta'],
          'mesafe': '7km'
        }

      ]
    }
  );
}

const mekanBilgisi = function (req, res) {
  res.render('mekan-detay',
    {
      'baslik': 'Mekan Bilgisi',
      'sayfaBaslik': 'Starbucks',
      'footer': 'Anıl Er 2020',
      'mekanBilgisi': {
        'ad': 'Starbucks',
        'adres': 'Iyaşpark AVM',
        'puan': 3,
        'imkanlar': ['Kahve', 'Pasta', 'Kek'],
        'koordinatlar': {
          'enlem': '37.78253988714279',
          'boylam': '30.544915909008672'
        },
        'saatler': [
          {
            'gunler': 'Pazartesi-Cuma',
            'acilis': '7:00',
            'kapanis': '23:00',
            'kapali': false
          },
          {
            'gunler': 'Cumartesi',
            'acilis': '9:00',
            'kapanis': '22:00',
            'kapali': false
          },
          {
            'gunler': 'Pazar',
            'kapali': true
          }
        ],
        'yorumlar': [
          {
            'yorumYapan': 'Anıl Er',
            'puan': 3,
            'tarih': '01.12.2020',
            'yorumMetni': 'Kahveleri güzel beğeniyorum.'
          }
        ]
      }

    });
}

const yorumEkle = function (req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}