// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header-bar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




//SERVICE BUTTON CLICK EXPANDED TEXT

    document.querySelector(".service1img").addEventListener("click", function() {
      document.querySelector(".service1description").innerHTML = "<p>Business / Tech / Data Analysis</p><p>Deep dives into business, technical and data problems. Define your pain points and what outcomes you're aiming for, and we will analyse your business and technology in detail in order to define the detailed route to your goals.</p>";
    }
  )

  document.querySelector(".service2img").addEventListener("click", function() {
    document.querySelector(".service2description").innerHTML = "<p>Agile Product Ownership</p><p>We can deliver your product roadmap by breaking it down into an organised and efficient agile development plan, and working with tech teams to build and iterate it into a fully formed product.</p>";
    }
  )

  document.querySelector(".service3img").addEventListener("click", function() {
    document.querySelector(".service3description").innerHTML = "<p>Product Management</p><p>We can work with design teams and users, combined with industry research and business analysis, to craft a product that delivers value, then plan it's launch and assess it's success.</p>";
    }
  )

  document.querySelector(".service4img").addEventListener("click", function() {
    document.querySelector(".service4description").innerHTML = "<p>Project / Delivery Management</p><p>We can build and implement a plan to get the job done - balancing time, cost and quality while managing risks and dependencies.</p>";
    }
  )



var agileQuotes = [

"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning - Albert Einstein",
"It doesn't matter how good you are today; if you're not better next month, you're no longer agile - Mike Cohn",
"The important thing is not your process.  The important thing is your process for improving your process - Henrik Kniberg",
"Agile teams produce a continuous stream of value, at a sustainable pace, while adapting to the changing needs of the business - Elisabeth Hendrickson",
"It does not matter how slowly you go as long as you do not stop - Confucius",
"Intelligence is the ability to adapt to change - Stephen Hawking",
"Agility means that you are faster than your competition.  Agile time frames are measured in weeks and months, not years - Michael Hugos",
"Our greatest weakness lies in giving up.  The most certain way to succeed is always to try just one more time - Thomas A. Edison",
"The only way to go fast is to go well - Robert C. Martin",
"The best way to get a project done faster is to start sooner - Jim Highsmith"
]




document.querySelector(".randomIntro").innerHTML = agileQuotes[Math.floor(Math.random() * agileQuotes.length)];

document.querySelector(".new-quote").addEventListener("click", function() {
  document.querySelector(".randomIntro").innerHTML = agileQuotes[Math.floor(Math.random() * agileQuotes.length)];


  //document.querySelector(".randomIntro").innerHTML = agileQuotes[Math.floor(Math.random() * agileQuotes.length)];
}
)

// var randomQuote = agileQuotes[Math.floor(Math.random() * 2)];
// alert(randomQuote);
