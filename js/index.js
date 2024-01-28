//no_1
function kubHajminiHisobla(yonUzunligi) {
     let hajim = Math.pow(yonUzunligi, 3);
     return hajim;
   }
   let yonUzunligi = 5;
   let hajim = kubHajminiHisobla(yonUzunligi);
   console.log("Kubning hajmi:", hajim);
   
   //no_2
   function belgiTekshirish(str, belgi) {
     return str.includes(belgi);
   }
   let satr = "Bu bir test satridir.";
   let belgi = "test";
   let natija = belgiTekshirish(satr, belgi);
   console.log(natija); // true
   
   //no_3
   function birinchiNNaturalSonlar(N) {
     let sonlar = [];
     for (let i = 1; i <= N; i++) {
       sonlar.push(i);
     }
     return sonlar;
   }
   let N = 5;
   let sonlar = birinchiNNaturalSonlar(N);
   console.log(sonlar); // [1, 2, 3, 4, 5]
   
   //no_4
   function raqamlarYigindisiniHisobla(son) {
     let yigindi = 0;
     let sonMetni = son.toString();
     for (let i = 0; i < sonMetni.length; i++) {
       let raqam = parseInt(sonMetni.charAt(i));
       yigindi += raqam;
     }
     return yigindi;
   }
   let son = 12345;
   let yigindi = raqamlarYigindisiniHisobla(son);
   console.log("Raqamlar yig'indisi:", yigindi); // 15
   
   //no_5
   function kabisaYiliTekshirish(yil) {
     if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
       return true; // Kabisa yili
     } else {
       return false; // Kabisa yili emas
     }
   }
   let yil = 2024;
   let kabisa = kabisaYiliTekshirish(yil);
   console.log(yil + " yili kabisa yili: " + kabisa); // 2024 yili kabisa yili: true 
   
   //no_6
   function tasodifiyRaqamGeneratsiyaQilishi(a, b) {
     let tasodifiyRaqam = Math.floor(Math.random() * (b - a + 1)) + a;
     return tasodifiyRaqam;
   }
   let a = 1;
   let b = 10;
   let tasodifiyRaqam = tasodifiyRaqamGeneratsiyaQilishi(a, b);
   console.log("Tasodifiy raqam:", tasodifiyRaqam);

   //no_7
   function tortburchakMaydoniniHisoblash(kenglik, balandlik) {
    let maydon = kenglik * balandlik;
    return maydon;
  }
  let kenglik = 5;
  let balandlik = 10;
  let maydon = tortburchakMaydoniniHisoblash(kenglik, balandlik);
  console.log("Tortburchak maydoni:", maydon);

  //no_8
  function farengeytdanCelciyga(temperaturaF) {
    let temperaturaC = (temperaturaF - 32) * 5 / 9;
    return temperaturaC;
  }
  let temperaturaF = 75;
  let temperaturaC = farengeytdanCelciyga(temperaturaF);
  console.log("Farengeyt:", temperaturaF, "ga teng", "Celciy:", temperaturaC);

  //no_9
  function uchburchakTengQirraliYonliSkalen(a, b, c) {
    if (a === b && b === c) {
      return "Teng yonli uchburchak"; // Teng yonli uchburchak
    } else if (a !== b && b !== c && a !== c) {
      return "Skalen uchburchak"; // Skalen uchburchak
    } else {
      return "Qirrali teng yonli uchburchak"; // Qirrali teng yonli uchburchak
    }
  }
  let c = 3;
  let d = 4;
  let e= 5;
  let tur = uchburchakTengQirraliYonliSkalen(c, d, e);
  console.log("Uchburchak tur:", tur);

  //no_10
  function minimalSonniTopish(son1, son2) {
    return Math.min(son1, son2);
  }
  let son1 = 5;
  let son2 = 3;
  let minimalQiymat = minimalSonniTopish(son1, son2);
  console.log("Minimal qiymat:", minimalQiymat);

  //no_11
  function aylanaMaydoniniHisoblash(radius) {
    let maydon = Math.PI * Math.pow(radius, 2);
    return maydon;
  }
  let radius = 5;
  let aylana = aylanaMaydoniniHisoblash(radius);
  console.log("Aylana maydoni:", aylana);

  //no_12
  function palindromTekshirish(soz) {
    // Kalit so'zni kichik harflarga aylantiramiz va bo'sh joylarni olib tashlaymiz
    let palindromSoz = soz.toLowerCase().replace(/\s/g, '');
  
    // So'zni teskarisiga o'zgartiramiz
    let teskariSoz = palindromSoz.split('').reverse().join('');
  
    // Palindrom tekshirish
    if (palindromSoz === teskariSoz) {
      return 'Bu soz palindrom.';
    } else {
      return 'Bu soz palindrom emas.';
    }
  }
  
  // Palindrom tekshirish uchun misollar
  console.log(palindromTekshirish('Ot to')); // Bu soz palindrom.
  console.log(palindromTekshirish('Salom')); // Bu soz palindrom emas.
  console.log(palindromTekshirish('Aptap')); // Bu soz palindrom.


  //no_13
  function silindrHajminiHisobla(radius, balandlik) {
    // Silindrning hajmini hisoblash formula: V = π * r^2 * h
    let hajm = Math.PI * Math.pow(radius, 2) * balandlik;
    return hajm.toFixed(2); // 2 xonali kasrni saqlash
  }
  
  // Silindrning hajmini hisoblash uchun misollar
  console.log(silindrHajminiHisobla(3, 5)); // 141.37
  console.log(silindrHajminiHisobla(2.5, 10)); // 196.35
  console.log(silindrHajminiHisobla(4, 7)); // 351.86

  //no_14
  function nuqtaIchidaYotadi(x, y, x1, y1, x2, y2) {
    // Nuqta to'rtburchakning chegaralarini tekshirish
    if (x > x1 && x < x2 && y > y1 && y < y2) {
      return true;
    } else {
      return false;
    }
  }
  
  // Nuqta ichida yotishini tekshirish uchun misollar
  console.log(nuqtaIchidaYotadi(2, 3, 0, 0, 4, 4)); // true
  console.log(nuqtaIchidaYotadi(5, 6, 0, 0, 4, 4)); // false
  console.log(nuqtaIchidaYotadi(3, 2, 0, 0, 4, 4)); // true

  //no_15
  function tasodifiyHarfYaratish() {
    let tasodifiyHarf = String.fromCharCode(65 + Math.floor(Math.random() * 29));
    return tasodifiyHarf;
  }
  
  // Tasodifiy harf yaratish uchun misol
  console.log(tasodifiyHarfYaratish());