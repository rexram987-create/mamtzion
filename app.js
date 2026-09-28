const inventions = {
  "טלוויזיה": {
    english:"Television", year:"1925–1927",
    summary:"מערכת להעברת תמונות נעות וקול למרחק. התפתחות הטלוויזיה הייתה תהליך רב־שלבי ולא המצאה של אדם יחיד.",
    keyFigure:"ג'ון לוגי ביירד היה מן הדמויות המכריעות בטלוויזיה המכנית והדגים מערכת עובדת בשנות ה־20. בטלוויזיה האלקטרונית, פילו פארנסוורת' היה דמות מרכזית במיוחד.",
    others:"פילו פארנסוורת', ולדימיר זבוריקין, פול ניפקו וחלוצים נוספים.",
    etymology:"Television מורכבת מן היוונית tēle — 'מרחוק', ומן הלטינית visio — 'ראייה'. המשמעות המילולית היא בקירוב 'ראייה למרחוק'.",
    timeline:["1884 — פול ניפקו רושם פטנט על דיסקת סריקה.","1925–1926 — ביירד מדגים טלוויזיה מכנית עובדת.","1927 — פארנסוורת' מדגים העברת תמונה אלקטרונית.","שנות ה־30 ואילך — מערכות אלקטרוניות הופכות לבסיס הטלוויזיה המודרנית."],
    sources:["Encyclopaedia Britannica — Television","Science Museum Group — John Logie Baird","IEEE History Center — Philo Farnsworth"]
  },
  "טלפון": {
    english:"Telephone", year:"1876",
    summary:"מכשיר להעברת קול אנושי למרחק באמצעות אותות חשמליים, ובהמשך אלקטרוניים ודיגיטליים.",
    keyFigure:"אלכסנדר גרהם בל מזוהה עם הפטנט וההדגמה המעשית שהפכו את הטלפון למערכת שימושית ומסחרית.",
    others:"אלישע גריי, אנטוניו מאוצ'י ואחרים תרמו להתפתחות הרעיונות והמכשירים שקדמו לטלפון המעשי.",
    etymology:"Telephone מורכבת מן היוונית tēle — 'מרחוק' ו-phōnē — 'קול'. כלומר: 'קול למרחק'.",
    timeline:["אמצע המאה ה־19 — ניסויים בהעברת קול חשמלי.","1876 — בל מקבל פטנט אמריקאי מרכזי.","1876 — הדגמות מעשיות של שיחת טלפון.","סוף המאה ה־19 — רשתות טלפון מתרחבות במהירות."],
    sources:["Library of Congress — Alexander Graham Bell","Encyclopaedia Britannica — Telephone","Smithsonian Institution — Telephone history"]
  },
  "נורה": {
    english:"Electric light bulb", year:"1870s–1880s",
    summary:"מקור אור חשמלי. הנורה המעשית נוצרה מתוך סדרת ניסויים ושיפורים של ממציאים רבים.",
    keyFigure:"תומאס אדיסון היה דמות מכריעה בהפיכת נורת הלהט למערכת תאורה מעשית, עמידה ומסחרית, יחד עם תשתית החשמל שסביבה.",
    others:"ג'וזף סוואן, האמפרי דייווי, וורן דה לה רו ואחרים קדמו או פיתחו חלקים מרכזיים.",
    etymology:"המונח האנגלי bulb מתייחס לצורה דמוית בצל/פקעת. בעברית 'נורה' נגזרת מן השורש נ־ו־ר/אור בהקשר של הארה.",
    timeline:["1800s המוקדמות — ניסויי קשת חשמלית.","1840s — ניסויי חוטי להט מוקדמים.","1878–1879 — סוואן ואדיסון מציגים נורות להט מעשיות יותר.","שנות ה־1880 — מערכות תאורה חשמליות מסחריות מתרחבות."],
    sources:["U.S. National Park Service — Edison and electric light","Encyclopaedia Britannica — Incandescent lamp","Science Museum Group — Electric lighting"]
  },
  "רדיו": {
    english:"Radio", year:"1890s",
    summary:"טכנולוגיה להעברת מידע באמצעות גלים אלקטרומגנטיים, ללא חיבור חוטי בין המשדר למקלט.",
    keyFigure:"גוליילמו מרקוני היה דמות מכריעה בהפיכת תקשורת הרדיו למערכת אלחוטית מעשית ולטווחים הולכים וגדלים.",
    others:"היינריך הרץ, ניקולה טסלה, אוליבר לודג' ואלכסנדר פופוב היו בין התורמים החשובים להתפתחות.",
    etymology:"Radio הוא קיצור של radiotelegraphy/radiotelephony. השורש radi- קשור ללטינית radius — 'קרן'.",
    timeline:["1880s — הרץ מדגים גלים אלקטרומגנטיים.","1890s — מרקוני מפתח טלגרפיה אלחוטית מעשית.","1901 — מתקבלת תקשורת אלחוטית טרנס־אטלנטית מפורסמת.","המאה ה־20 — הרדיו הופך לאמצעי שידור המוני."],
    sources:["Encyclopaedia Britannica — Radio","Nobel Prize — Guglielmo Marconi","IEEE History Center — Wireless communication"]
  },
  "מטוס": {
    english:"Airplane", year:"1903",
    summary:"כלי טיס כבד מן האוויר המשתמש בכנפיים ובעילוי אווירודינמי לטיסה ממונעת.",
    keyFigure:"האחים וילבור ואורוויל רייט היו הדמויות המכריעות בהשגת טיסה ממונעת, נשלטת ומתמשכת בשנת 1903.",
    others:"אוטו ליליינטל, סמואל לנגלי, אוקטב שאנוט וחוקרים נוספים תרמו להבנת האווירודינמיקה והטיסה.",
    etymology:"Airplane נוצר מצירוף air — 'אוויר' ו-plane — 'מישור/משטח'. המונח airplane התקבע באנגלית האמריקאית.",
    timeline:["1890s — האחים רייט חוקרים דאייה ושליטה.","1900–1902 — ניסויי דאונים.","17 בדצמבר 1903 — טיסה ממונעת נשלטת בקיטי הוק.","1905 — דגמים מתקדמים יותר מאפשרים טיסות ארוכות ושליטה טובה."],
    sources:["Smithsonian National Air and Space Museum — Wright brothers","Library of Congress — Wright brothers","Encyclopaedia Britannica — Airplane"]
  }
};

const aliases={"טלויזיה":"טלוויזיה","television":"טלוויזיה","telephone":"טלפון","טלפון":"טלפון","נורת חשמל":"נורה","נורת להט":"נורה","light bulb":"נורה","radio":"רדיו","airplane":"מטוס","aeroplane":"מטוס","מטוס":"מטוס"};
const $=id=>document.getElementById(id);
function normalize(q){return (q||"").trim().toLowerCase();}
function findItem(q){
  const n=normalize(q);
  const exact=Object.keys(inventions).find(k=>normalize(k)===n);
  if(exact) return [exact,inventions[exact]];
  const alias=aliases[n];
  if(alias) return [alias,inventions[alias]];
  const partial=Object.keys(inventions).find(k=>normalize(k).includes(n)||n.includes(normalize(k)));
  return partial?[partial,inventions[partial]]:null;
}
function render(name,data){
  $("result").hidden=false;$("title").textContent=name;$("englishName").textContent=data.english;
  $("yearBadge").textContent=data.year;$("summary").textContent=data.summary;$("keyFigure").textContent=data.keyFigure;
  $("others").textContent=data.others;$("etymology").textContent=data.etymology;
  $("timeline").innerHTML=data.timeline.map(x=>`<li>${x}</li>`).join("");
  $("sources").innerHTML=data.sources.map(x=>`<li>${x}</li>`).join("");
  $("result").scrollIntoView({behavior:"smooth",block:"start"});
}
$("searchForm").addEventListener("submit",e=>{
  e.preventDefault(); const hit=findItem($("searchInput").value);
  if(hit) render(...hit); else {
    $("result").hidden=false;$("title").textContent="עדיין אין ערך מוכן";
    $("englishName").textContent="נוסיף חיפוש מקוון בשלב הבא";$("yearBadge").textContent="—";
    $("summary").textContent="בגרסת הבסיס יש מספר המצאות לדוגמה בלבד. המבנה כבר מוכן להרחבה למאגר גדול ולחיפוש אוטומטי.";
    $("keyFigure").textContent="—";$("others").textContent="—";$("etymology").textContent="—";$("timeline").innerHTML="";$("sources").innerHTML="";
  }
});
Object.keys(inventions).forEach(name=>{
  const b=document.createElement("button");b.textContent=name;b.onclick=()=>render(name,inventions[name]);$("exampleButtons").appendChild(b);
});
$("imageInput").addEventListener("change",e=>{
  const f=e.target.files?.[0]; if(!f)return;
  $("imageStatus").textContent=`נבחרה תמונה: ${f.name}. בשלב הבא נחבר זיהוי תמונה אמיתי.`;
});
let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("installBtn").hidden=false;});
$("installBtn").onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("installBtn").hidden=true;};
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
