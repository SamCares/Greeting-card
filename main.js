//Welcome alert
alert('Welcome, Sam has a special message for you!');

//input_name prompt
let end = " The truth is 2020 was no doubt a very different year for all of us but I'm glad you and I pulled through the year and here we are today counting down to a new year. If you look closely, there is at least one thing to be grateful for. That our paths ever crossed was not a mistake and I never will take that privilege for granted. You are indeed one of the many blessings God brought my way. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU. CHEERS!!!";
const input_specialName = prompt('Please enter your name', "Firstname Surname");

if (input_specialName.toLowerCase() == "Esther Johnson".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", Diwura Ajike my benefactor!!! See let's not lie, I always find it quite difficult to express how much I appreciate certain people in my life. Diwura, you are one of those special ones who constantly put smile on my face and I'm forever grateful for the gift of you. Thank you for being a part of my life. Thank you for believeing in me. Thank you for always having my back. Thank you for the sincere love and care you show. Thank you for always praying for me. Thank you for all you do. Thank you for shenking me many times too...lol. Thank you really for being there. Thank you Ajike. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU DIWURA AJIKE. CHEERS!!!";
    document.getElementById("sam-img").src = "images/Esther.jpg";

} else if (input_specialName.toLowerCase() == "Samuel Fatodu".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", SamCares Himself!" + end;
    document.getElementById("sam-img").src = "images/IMG-20200816-WA0060.jpg";

} else if (input_specialName.toLowerCase() == "Oyedamola Moreira".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", My Dearest Pastor! Pastor I really do not know how best to thank you for being my Pastor sir. I am eternally grateful to God for the gift of you sir. Thank you for your labour of love over me sir. Thank you sir for your numerous sacrifices sir. Thank you for yielding to the call sir. Thank you for teaching me God's word sir. Thank you sir for believing in me and never giving up on me sir. Thank you for the privilege to serve under your leadership sir. Thank you for teaching me to love the Lord and his people sir. Thank you for being an example for me to follow sir. I can't imagine what my life would be if I had not met you when I did. Thank you for being a part of my 2020 even though it was a really different year for all of us but Glory to God for helping us pull through. Most importantly a part of my life sir. You are indeed one of the many blessings God brought my way. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU PASTOR. CHEERS!!!";
    document.getElementById("sam-img").src = "images/pastor.jpg";

} else if (input_specialName.toLowerCase() == "Samuel Oluwakayode".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", Brother Sam! How do I start to thank you for being super amazing from way back? Bro. Sam I'm eternally grateful to have you in my life. Thank you for those givings that made me want to cry because they came right on time even when I didn't ask you. Thank you for being a good leader. Thank you for always showing up. Thank you for believing in me. You have a good heart and I'm blessed to have you in my circle. Thank you! You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU BRO. SAM. CHEERS!!!";
    document.getElementById("sam-img").src = "images/sampam.jpg";

} else if (input_specialName.toLowerCase() == "Muyiba Fatodu".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", Iya Ibeji mi owon! Iya ni wura iyebiye ti a ko le fo'wo ra. Mummy mi eseun gan ni eku itoju emi ati egbon mi ati awon aburo mi. Inu mi dun fun eko ti e fi ko wa lati kekere titi t'afi dagba. Adura mi fun yin ni wipe eedagba, eedogbo, eejeun omo, eeni foju sukun omo, eeni di eni awati ni ojo ayo gbogbo awa omo yin L'óruko Jesu. Odun to nbo a ba wa layo ati alaafia. Mo nife yin gidigan.";
    document.getElementById("sam-img").src = "images/muyiba.jpg";

} else if (input_specialName.toLowerCase() == "Abigeal Fatodu".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", Big Sister mi! Hmmmm where do I start to thank God for giving me Ewatomi as my one and only elder sister? I'm grateful for the opportunity to pick up mummy's breast after you. Thank you for your love and care. Thank you for being a wonderful big sister. Thank you for always looking out for me and the others. Thank you for having our best interest at heart. Thank you for being supoer amazing. You are indeed a good leader and you'll never be the tail. You have a good heart and I'm glad you are my elder sister. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU BIG SIS. CHEERS!!!";
    document.getElementById("sam-img").src = "images/abigael.jpg";

} else if (input_specialName.toLowerCase() == "Raphael Fatodu".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", Tayelolu aburo mi! The truth is you are a very amazing younger brother and there is no one on earth that will ever play that role more perfectly than you do. I love how you are ready to make things work. I love your drive and your passion. Thank you for believing in me as an elder brother. Thank you for all you do. Thank you for the love and care you show me. You are super amazing Raphael and I am super proud of you! You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU BROTHER. CHEERS!!! ";
    document.getElementById("sam-img").src = "images/raphael.jpg";

} else if (input_specialName.toLowerCase() == "Racheal Fatodu".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", Omokehinde aburo mi! Kenny, Kenny! First off, I am super proud of you Kenny. Yes I mean very proud of you. You are very smart and hardworking. The truth is anytime I see you working on that your machine, I'm always proud you are my sister. You have a good and soft heart. You are kind and very loving. Thank you for showering your love on me always. Thanks for always seeing me as that elder brother. Kenny you are a great lady and I'm glad to have you as my one and only younger sister. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU KENNY. CHEERS!!!";
    document.getElementById("sam-img").src = "images/rachael.jpg";

} else if (input_specialName.toLowerCase() == "Phillip Fatodu".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", The last born of Rotimi Fatodu himself! My boy you are a genius and I am 100 million times and beyond proud of you. Your drive to find solutions to problem makes my want to do more for myself and others. Phillip you are a smart and adorable young man and I'm so blessed to be your elder brother. Thank you for your good heart towards me. Thank you for looking up to me as an elder brother. Thank you for always believing in me. You are my real gee!!! I strongly believe in you too and I know you'll surely reach your goals and beyond. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU LAST BORN. CHEERS!!!";
    document.getElementById("sam-img").src = "images/phillip.jpg";

} else if (input_specialName.toLowerCase() == "Temitope Bolawole".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", Topaz Artistry herself! Creativity made flesh!!! Guyyy I don't even know what to say about you. Tope you are freaking too magnanimous! I'm forever grateful to God for such supernatural relationship as yours. Thank you for the love and care you shower on me always. Thank you for those times you see beyond the facade and reached out. Thanks for being a friend indeed. Thank you for being there. Thank you Tope for believing in me. Thank you a million times. It's a privilege to have you in my circle and I'll cherish this all my life. You are indeed one of the many blessings God brought my way. Thank you for 2020. For the Merry Culture, let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU TEMITOPE. CHEERS!!!";
    document.getElementById("sam-img").src = "images/tope.jpg";

} else if (input_specialName.toLowerCase() == "Tomiwa Sodeinde".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Alezatulahi my sweetheart! You are no doubt one of my most respected friends Ayotomiwa. I'm eternally grateful to God for this supernatural relationship we share. Thank you for those conversations that always one way or the other bring me to my senses about the Father's work. Thank you for those givings. Thank you for beleiveing in me. Thank you for the encouragement. Thank you for those prayers. You have a good heart and I'm glad I have you in my circle Tomiwa. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU FUMBI. CHEERS!!!";
    document.getElementById("sam-img").src = "images/tomiwa.jpg";

} else if (input_specialName.toLowerCase() == "Israel Adetuwo".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase() +
        ", PhysioDesigner omo Prophetess! Ahhh where do I start to thank you my Gee?!!! You are just to amazing for me to put my expressions in words. Guy I can never forget how passionately you prayed for me on my birthday. Thanks man! I'm grateful to God for giving me such supernatural relationship. Adetuwo, thank you for your good heart towards me. Thank you for believing too much in me to start believing in my self more. Thank you for your prayers. Thank you for always having me in mind. Thank you a million times guy. I am literally lost for words. I'm glad and privileged to have you in my circle guy and I'll never take that for granted. You are indeed one of the many blessings God brought my way. Thank you for 2020. For the Merry Culture, let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU ISRAEL. CHEERS!!!";
    document.getElementById("sam-img").src = "images/israel.jpg";

} else if (input_specialName.toLowerCase() == "Adekunle Adewole".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Omo Iya Yemi! Guyyyy how do I start my appreciation? You are just a total package of awesomeness. You always motivate me to know I can do whatever I put my heart to do. Thank you for being there since way back. I'm grateful to God for the gift of you Dekunle. Thank you for your sincere love and care for me. Thank you for always having my back and always being there. I'm glad to have you in my circle and I don't take that for granted. You are indeed one of the many blessings God brought my way. Thank you for 2020. For the Merry Culture, let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU ADEKUNLE. CHEERS!!!";
    document.getElementById("sam-img").src = "images/kunle.jpg";

} else if (input_specialName.toLowerCase() == "Micheal Adeyinka".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Baba Alase Oro! Damn! There is absolutely no doubt that you have a heart of gold Micheal! I always find it hard to get my words together to express how grateful I am to have met you Micheal. Thank you for always ready to listen. Thank you for always having the right words for every moment. Thank you for those discussions that still keep me pushing and not giving up. Thank you for not giving up on me even when you had every reason to. Thank you for always being a motivation. Thank you Olaoluwa for those moments you surprised me with cash and your resources. I'm eternally grateful to have you in my circle and I'll never take that for granted. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU MICHEAL. CHEERS!!!";
    document.getElementById("sam-img").src = "images/micheal.png";

} else if (input_specialName.toLowerCase() == "Mayowa Ajewole".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Mayor baby! Babe I can boldly say it anywhere that you are my personal person because you are too awesome and I'm glad you are part of my circle. Mayowa, I'm gratfeul for this friendship. Thank you for always having me in mind. Thank you for your prayers. Thank you for believing in me. Thank you for always being there. You have a good heart and I cherish you. You are indeed one of the many blessings God brought my way. Thank you for 2020. For the Merry Culture, let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU VICTORIA. CHEERS!!!";
    document.getElementById("sam-img").src = "images/mayowa.jpg";

} else if (input_specialName.toLowerCase() == "Gladys Oseni".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Iya Ijebu my love! You are an amazing lady I must confess and I'm super proud I have you in my circle Ella. Damn!!! You love me and you show it, even me sef I know. Thank you sweetheart. Thank you for your sincere love and care. Thank you for your prayers. Thank you for always encouraging me and believing in me. Thank you for always being there. Thank you for everything my love. You are indeed one of the many blessings God brought my way. Thank you for 2020. For the Merry Culture, let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU ELLA. CHEERS!!!";
    document.getElementById("sam-img").src = "images/gladys.jpg";

} else if (input_specialName.toLowerCase() == "Glory Obaleye".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Omo Moro herself! Babe your are not just beautiful on the outside you are super beautiful on the inside too Damilola. Thank you for being a part of my circle, I'm glad you are and I do not take it for granted. Thank you for always being there Glory. Thank you for you smiles and always making me smile too. You are indeed one of the many blessings God brought my way. Thank you for 2020. For the Merry Culture, let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU GLORY. CHEERS!!!";
    document.getElementById("sam-img").src = "images/glory.jpg";

} else if (input_specialName.toLowerCase() == "Tolulope Oduola".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Longitude padi mi! Guyyyy we've come a long way man and sincerely I am glad I have you in my cicle. Thank you for all the awesome moments we've had. Thank you for believing in me. Thank you for being a friend and a brother. Thank you for always cheering me on. Thank you for all you do. You are indeed one of the many blessings God brought my way. Thank you for 2020. For the Merry Culture, let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU TOLULOPE. CHEERS!!!";
    document.getElementById("sam-img").src = "images/tolu.jpg";

} else if (input_specialName.toLowerCase() == "Tioluwalase Fagbongbe".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Olatoun my baby! Girl you are a sweetheart. Omo you've been amazing from way back and I'm grateful you are in my life Oluwatotobinimonsin. Thank you for your sincere love and care. Thank you for being a shoulder to lean on always. Thank you for believing in me. Thank you for those surprise cash. Thank you for always praying for me. Thank you for all you do 'Toun. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU TIOLUWALASE. CHEERS!!!";
    document.getElementById("sam-img").src = "images/tiolu.jpg";

} else if (input_specialName.toLowerCase() == "Olasehinde Omoriwo".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Boda Vincent! Guyyy how do I say thank you for all you do? For all your encouraging words, thank you. I'm glad you are in my circle man and I'm never taking it for granted. Thank you for pushing me to do better. Thank you for not giving up on me. Thank you for believing in me. Thank you for all the amazing memories my guy. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU OLASEHINDE. CHEERS!!!";
    document.getElementById("sam-img").src = "images/sehinde.jpg";

} else if (input_specialName.toLowerCase() == "Jeremiah Ojo".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Oshioke my guy! Guyyyyy words can't be enough for me to express my sincere aprreciation for such a good heart that you have Ojo. You are super amazing guy. Thank you for believing in me. Thank you for always coming through for me every single time even when you didn't have to. Thank you for always encouraging me guy. Thank you for all you've ever done for me. I'm grateful to God that I have you in my circle. Thank you guy, thank you. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU JERRY. CHEERS!!!";
    document.getElementById("sam-img").src = "images/jerry.jpg";

} else if (input_specialName.toLowerCase() == "Oludamola Oni".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", BlackPen himself! Guy thank you, just thank you. For all you have ever done for this small boy, thank you. Thank you for believing in me. Thank you for always being there. Thank you for being part of my circle, I'm eternally grateful. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU DAMOLA. CHEERS!!!";
    document.getElementById("sam-img").src = "images/damola.jpg";

} else if (input_specialName.toLowerCase() == "Rita Agbaje".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", my lovely Aderita!!! Whenever I sit to think about how blessed I am to have you in my life, I'm always overwhelmed by the love you shower on me without holding back. Yaa thank you so much for all you've ever done in this small boy's life. Thank you for always being there. Thank you for all the wonderful moments with you. Thank you for always making me smile. Thank you for not giving up on me even when you had every reason to. Thank you for being a shoulder to lean on. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU ADERITA. CHEERS!!!";
    document.getElementById("sam-img").src = "images/rita.jpg";

} else if (input_specialName.toLowerCase() == "Bridget Joseph".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Mummy Twins!!! I sincerely can't thank you enough for all you do ma. I'm always overwhelmed by the show of your sincere love and care in the way you give and talk. Thank you so much Iya Ibeji. Thank you for always coming through for me. Thank you for always praying for me. Thank you for not giving up on this small boy even when you had every reason to. Thank you for believing in me ma. I'm eternally grateful I have you in my life and I'll not take it for granted. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. By the way, Happy Birthday in advance. I LOVE YOU IYA IBEJI. CHEERS!!!";
    document.getElementById("sam-img").src = "images/joseph.jpg";

} else if (input_specialName.toLowerCase() == "Toludayo Joseph".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Daddy Twins!!! If there is one thing I love about you, it's your simplicity. You are so calm and sweet. Thank you for all you do sir. Thank you for always supporting Mummy Twins. I'm glad you are part of my life. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU Baba Ibeji. CHEERS!!!";
    document.getElementById("sam-img").src = "images/joseph.jpg";

} else if (input_specialName.toLowerCase() == "Evelyn Olayode".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Swe!!! One this is certain, you have a very good heart and I'm glad I have you in my life. Thank you for all you do for me ma. Thank you for always encouraging me. Thank you for believing in me and not giving up on me. Thank you for all those cash gifts ma. Thank you for your prayers ma. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU MA. CHEERS!!!";
    document.getElementById("sam-img").src = "images/olayode.jpg";

} else if (input_specialName.toLowerCase() == "Olujayogbe Olayode".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Olujah Baba!!! From way back you've been super amazing and I'm forever grateful to have you in my life. Thank you for supporting your wife. Thank you for always encouraging me. Thank you for all you do sir. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU OLUJAH. CHEERS!!!";
    document.getElementById("sam-img").src = "images/olayode.jpg";

} else if (input_specialName.toLowerCase() == "Beatrice Agbaje".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Nnewe!!! Mummy I am so grateful for having you in my life at this time of my life. Thank you for all you have ever done for me. Thank you for all your sincere love you shower on me. Thank you for all your heartfelt prayers. Thank you for believing in me and encouraging me. Thank you so much for taking me as your own son, I'm forever grateful for all you do ma. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU MUMMY. CHEERS!!!";
    document.getElementById("sam-img").src = "images/beatrice.jpg";

} else if (input_specialName.toLowerCase() == "Lukmon Salami".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Emzor Moneh! How do I begin to appreciate you for your sincere love towards me and the whole family. Thank you for staying close and true. Thank you for all you do bros. I'm eternally grateful to have you in my life. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU OLANIYI. CHEERS!!!";
    document.getElementById("sam-img").src = "images/lukmon.jpeg";

} else if (input_specialName.toLowerCase() == "Kehinde Ojo".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Minister Wambala himself! Ahhhh how do I thank you Bro. Kenny for all the numerous magnanimous acts you've shown me? I can't even express it well enough with my words. Bro. Kenny thank you for all you've ever done for me. Thank you for those cash. You are the reason I have this Laptop and Phone to even make this project possible. Ahhh I'm eternally grateful sir. Thank you for believing in me and always being there for me. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU WAMBALA. CHEERS!!!";
    document.getElementById("sam-img").src = "images/kenny.jpg";

} else if (input_specialName.toLowerCase() == "Toluwanimi Okunade".toLowerCase()) {
    document.querySelector(".special_container").style.visibility = "visible";
    document.getElementById("special_name").innerHTML = input_specialName.toUpperCase()
        + ", Tolu Law himself! Guy you are a super amazing gee. You have a good heart and I'm so grateful to have you in my circle my man. Thank you for those unexpected gifts. Thank you for believing in me. Thank you for always showing up. Thank you for all the motivating discussions. Thank you for all my guy. You are indeed one of the many blessings God brought my way. Thank you for 2020. Let's toast to an amazing 2021 and many more beautiful years ahead. I LOVE YOU TOLU. CHEERS!!!";
    document.getElementById("sam-img").src = "images/toluwani.jpeg";

} else {
    const input_regularName = prompt('Kindly re-enter your name');
    document.getElementById("marquee").innerHTML = "Thank you for being a part of my 2020!!!";
    document.querySelector(".regular_container").style.visibility = "visible";
    document.getElementById("regular_name").innerHTML = input_regularName.toUpperCase();
};

//footer date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();