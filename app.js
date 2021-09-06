//פונקציה תפריט המבורגר מתוך ספריית bluma
document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});

//אקורדיון

$(document).foundation();




// בלחיצה על כפתור, הפונקציה לוקחת את הנתונים משלושת תיבות הטקסט
//ויוצרת משפט מובנה להגדרת יעד אפקטיבי
var sentence = "";
function effectiveGoals() {
    document.getElementById("myEgoal").innerHTML = "";
    var Goal = document.getElementById("Goaltxt").value;
    var Money = document.getElementById("Moneytxt").value;
    var Time = document.getElementById("Timetxt").value;
    //במידה והמשתמש מילא את שלושת תיבות הטקסט המשפט נוצר
    Time = Time.split("-").reverse().join("-");

 
    
    if ((Goal != "") && (Money != "") && (Time != "")) 
    {
        sentence = "היעד שלי הוא לחסוך" + " " + Money + " " +" ₪ כדי שאוכל לממן"+ " " +Goal  + " " + "עד" + " " + Time ;
        document.getElementById("myEgoal").innerHTML = sentence;

    }

    //במידה והלומד לא מילא את שלושת תיבות הטקסט מופיעה הודעת שגיאה
    else { 
        document.getElementById("myEgoal").innerHTML = "יש להזין את כל התשובות";
    }
}


////pop up


function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}




