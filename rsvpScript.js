let buttons = document.querySelector("#rsvpButton")

let rsvpCase = [
    '<b>Please click the link to rsvp!</b>',
    '<b>Please click the link to rsvp yourself!</b>',
    '<b>Please click the link to rsvp you and your plus one!</b>',
    '<b>Please click the link to rsvp you and your spouse!</b>',
    '<b>Please click the link to rsvp you and your family!</b>',
];
let guestList = [
    {name: "ryan dunton", rsvp: 4},
    {name: "cici holmquist", rsvp: 1},
    {name: "scott tintes", rsvp: 3},
    {name: "brandi tintes", rsvp: 3},
    {name: "corey vahlbusch", rsvp: 0},
    {name: "jadan tish", rsvp: 3},
    {name: "paige tish", rsvp: 3},
    {name: "josh petersen", rsvp: 2},
    {name: "caleb meger", rsvp: 0},
    {name: "abigail lester", rsvp: 0},
    {name: "bob bitgood", rsvp: 1},
    {name: "don lester", rsvp: 3},
    {name: "marilyn lester", rsvp: 3},
    {name: "brent lester", rsvp: 4},
    {name: "charlotte lester", rsvp: 4},
    {name: "caitlyn lester", rsvp: 2},
    {name: "stephanie butz", rsvp: 2},
    {name: "wil lester", rsvp: 2},
    {name: "jake lester", rsvp: 4},
    {name: "christina cook", rsvp: 4},
    {name: "steve lester", rsvp: 3},
    {name: "tamma lester", rsvp: 3},
    {name: "anna evans", rsvp: 3},
    {name: "dustin evans", rsvp: 3},
    {name: "laura lester", rsvp: 0},
    {name: "elizabeth lester", rsvp: 0},
    {name: "sarah arnold", rsvp: 1},
    {name: "jim abeyta", rsvp: 3},
    {name: "lori abeyta", rsvp: 3},
    {name: "marcia amundson", rsvp: 3},
    {name: "amundson", rsvp: 3},
    {name: "nathan benson", rsvp: 0},
    {name: "steven chafer", rsvp: 3},
    {name: "tammi chafer", rsvp: 3},
    {name: "mike coady", rsvp: 4},
    {name: "terri coady", rsvp: 4},
    {name: "hannah coady", rsvp: 4},
    {name: "jamie coder", rsvp: 4},
    {name: "ralph coder", rsvp: 4},
    {name: "robert coder", rsvp: 4},
    {name: "zoe coder", rsvp: 4},
    {name: "samantha fisher", rsvp: 3},
    {name: "jay fisher", rsvp: 3},
    {name: "jamie fisher", rsvp: 3},
    {name: "ben fisher", rsvp: 3},
    {name: "todd flicek", rsvp: 4},
    {name: "jalene flicek", rsvp: 4},
    {name: "mike hadden", rsvp: 4},
    {name: "gretchen hadden", rsvp: 4},
    {name: "christen helgerson", rsvp: 3},
    {name: "darren helgerson", rsvp: ""},
    {name: "andrea helgerson", rsvp: ""},
    {name: "adam helgerson", rsvp: ""},
    {name: "robby kay", rsvp: ""},
    {name: "lori kay", rsvp: ""},
    {name: "jacob klinkner", rsvp: 2},
    {name: "corey kohnen", rsvp: ""},
    {name: "heather kohnen", rsvp: ""},
    {name: "hannah kohnen", rsvp: ""},
    {name: "josh kohnen", rsvp: ""},
    {name: "jenny kuklok", rsvp: ""},
    {name: "doug kuklok", rsvp: ""},
    {name: "lily kuklok", rsvp: ""},
    {name: "josh lieder", rsvp: ""},
    {name: "sarah lieder", rsvp: ""},
    {name: "abby meyer", rsvp: ""},
    {name: "dee norling", rsvp: ""},
    {name: "lanae olson", rsvp: 2},
    {name: "amber pogreba", rsvp: 2},
    {name: "wayne sanders", rsvp: ""},
    {name: "bonita sanders", rsvp: ""},
    {name: "pete stadem", rsvp: ""},
    {name: "kari stadem", rsvp: ""},
    {name: "peggy thompson", rsvp: ""},
    {name: "ted thompson", rsvp: ""},
    {name: "david twite", rsvp: ""},
    {name: "tracy twite", rsvp: ""},
    {name: "jr vandyken", rsvp: ""},
    {name: "andi vandyken", rsvp: ""},
    {name: "lindsey vo", rsvp: ""},
    {name: "michael vo", rsvp: ""},
    {name: "kathy webb", rsvp: ""},
    {name: "clay webb", rsvp: ""},
    {name: "kymberly west", rsvp: ""},
    {name: "clint west", rsvp: ""},
    {name: "sue williamson", rsvp: ""}, 
    {name: "randy williamson", rsvp: ""},
    {name: "kari winkler", rsvp: ""},
    {name: "gerard winkler", rsvp: ""},
    {name: "evan winkler", rsvp: ""},
    {name: "mike mesmer", rsvp: ""},
    {name: "sarah mesmer", rsvp: ""},
    {name: "marykay lind", rsvp: ""},
    {name: "gary lind", rsvp: ""},
    {name: "kelly johnston", rsvp: ""},
    {name: "charles johnston", rsvp: ""},   
    {name: "chuck keane", rsvp: ""},
    {name: "heather keane", rsvp: ""},
    {name: "catie anthony", rsvp: 2},
    {name: "dale bloemke", rsvp: 4},
    {name: "lisa bloemke", rsvp: 2},
    {name: "donny bloemke", rsvp: 5},
    {name: "sheri bloemke", rsvp: 5},
    {name: "jeff kopseng", rsvp: 3},
    {name: "alan bloemke", rsvp: 3},
    {name: "justin bloemke", rsvp: 2},  
    {name: "brock bloemke", rsvp: 5},
    {name: "jody bloemke", rsvp: ""},
    {name: "bruno drews", rsvp: 4},
    {name: "bob fischer", rsvp: 5},
    {name: "marie fischer", rsvp: 5},
    {name: "ron konz", rsvp: 5},
    {name: "ann konz", rsvp: 5},
    {name: "kay ludewig", rsvp: 5},
    {name: "eugine ludewig", rsvp: 5},
    {name: "ruthanne miller", rsvp: 5},
    {name: "dave miller", rsvp: 5},
    {name: "leah miller", rsvp: 4},
    {name: "brian miller", rsvp: 5},
    {name: "jenny miller", rsvp: 5},
    {name: "nancy nachreiner", rsvp: 3},
    {name: "linda nelson", rsvp: 5},
    {name: "lee nelson", rsvp: 5},
    {name: "melissa roiger", rsvp: 3},
    {name: "brandon roiger", rsvp: 3},
    {name: "alexia roiger", rsvp: 2},
    {name: "ed schottenbauer", rsvp: ""},
    {name: "pearl schottenbauer", rsvp: ""},
    {name: "suzanne wels", rsvp: 3},
    {name: "brian wels", rsvp: 3},
    {name: "racheal crissinger", rsvp: 2},
    {name: "greg curtis", rsvp: 5},
    {name: "trisha curtis", rsvp: 5},
    {name: "chrissy dunton", rsvp: 3},
    {name: "chris dunton", rsvp: 3},
    {name: "chad olthoff", rsvp: 3},
    {name: "levi rainwater", rsvp: 2},
    {name: "shari winkelmann", rsvp: 5},
    {name: "dean winklemann", rsvp: 5},
    {name: "clint imker", rsvp: 5},
    {name: "kaci imker", rsvp: 5},
    {name: "maddy leinen", rsvp: 5},
    {name: "brandon marks", rsvp: 5},
    {name: "sadie marks", rsvp: 5},
    {name: "adam leinen", rsvp: 5},
    {name: "hali winkelmann", rsvp: 2},
    {name: "russ anderson", rsvp: 5},
    {name: "kim anderson", rsvp: 5},
    {name: "", rsvp: ""},
]


buttons.onclick = function test() {
    let fName = (document.getElementById("fullName").value).toLowerCase()
    let nameCheck = guestList.find((person) => person.name === fName)
    console.log(nameCheck)
    if (nameCheck) {
        document.getElementById("rsvpBody").style.display = "block"
        document.getElementById("results").innerHTML = rsvpCase[nameCheck.rsvp]
    } else {
        document.getElementById("results").innerHTML = "Sorry, that name is not on the list."
        document.getElementById("rsvpBody").style.display = "none"
    }
    
}