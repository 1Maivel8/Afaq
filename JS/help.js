
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

let text = document.getElementById("text");
let hero = document.getElementById("hero");

one.onclick = function () {
    text.innerHTML = "1- ابعد عن أي خطر.<br>2- نادي ماما أو بابا أو المدرس.<br>3- قول: الشخص محتاج مساعدة.<br>4- لو مش بيرد أو مش بيتنفس طبيعي، لازم طلب الإسعاف فورًا.";
};

two.onclick = function () {
    text.innerHTML = "1- خليك في مكان آمن.<br>2- نادي شخص بالغ.<br>3- وضح له مكان الإصابة.<br>4- ما تلمسش الجرح الخطير بنفسك.";
};

three.onclick = function () {
    text.innerHTML = "1- روح لمكان هادي وآمن لو تقدر.<br>2- ابعد عن الصوت المزعج.<br>3- قول: أنا محتاج أهدى.<br>4- اطلب مساعدة شخص موثوق.";
};

four.onclick = function () {
    text.innerHTML = "1- نادي شخص بالغ فورًا.<br>2- قول: أنا مش قادر أتنفس كويس.<br>3- لو الكلام صعب، أشِر لزر المساعدة.<br>4- لازم طلب الإسعاف فورًا لو التنفس صعب جدًا.";
};

five.onclick = function () {
    text.innerHTML = "1- قف في مكان آمن.<br>2- ما تجريش بعيد.<br>3- اطلب مساعدة شرطي أو موظف مسؤول.<br>4- ما تروحش مع شخص غريب لمكان تاني.";
};

six.onclick = function () {
    text.innerHTML = "1- دور على شخص بالغ موثوق.<br>2- قول: أنا محتاج مساعدة.<br>3- لو الكلام صعب، أشِر للموقف.<br>4- لو في خطر فوري، اطلب مساعدة الطوارئ.";
};

hero.onclick = function () {
    location.href = "heroes.html";
};

