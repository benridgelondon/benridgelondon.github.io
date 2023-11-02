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

$(".serviceDetail").hide();

// Get the input field
//var input = document.getElementById("exampleFormControlTextarea1");

// Execute a function when the user presses a key on the keyboard
document.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit").click();
  }
});



//SERVICE BUTTON CLICK EXPANDED TEXT

//using jQuery syntax below just for experience
//CAN ALSO ADD MULTIPLE INCL CUSTOM ANIMATION IN ONE FUNCTION E.G. see commented slideup / down and opacity below
//

    $(".service1img").on("mouseover", function() {
      //you can add multiple classes by leaving a space between each class, within the quote marks
      $(".service1img").addClass("pressed");
      //haven't used it below, as i wan't to include HTML and jquery .text doesnt accommodate. need to move content to html file anyway as variable?
      $(".serviceDetail").slideToggle();
      //$(".serviceDetail").slideDown().slideDown().animate({opacity: 0.2});
      //$(".service1description").after("<p class=service1Detail>Deep dives into business, technical and data problems. Define your pain points and what outcomes you're aiming for, and we will analyse your business and technology in detail in order to define the detailed route to your goals.</p>");
      setTimeout (function() {
        $(".service1img").removeClass("pressed");
      }, 100);
    }
  )

    $(".service2img").on("mouseover", function() {
      $(".service2img").addClass("pressed");
      //haven't used it below, as i wan't to include HTML and jquery .text doesnt accommodate. need to move content to html file anyway as variable?
      //$(".serviceDetail").fadeToggle();
      $(".serviceDetail").slideToggle();
      //$(".service1description").after("<p class=service1Detail>Deep dives into business, technical and data problems. Define your pain points and what outcomes you're aiming for, and we will analyse your business and technology in detail in order to define the detailed route to your goals.</p>");
      setTimeout (function() {
        $(".service2img").removeClass("pressed");
      }, 100);
      }
    )

  $(".service3img").on("mouseover", function() {
    $(".service3img").addClass("pressed");
    //haven't used it below, as i wan't to include HTML and jquery .text doesnt accommodate. need to move content to html file anyway as variable?
    $(".serviceDetail").slideToggle();
    //$(".service1description").after("<p class=service1Detail>Deep dives into business, technical and data problems. Define your pain points and what outcomes you're aiming for, and we will analyse your business and technology in detail in order to define the detailed route to your goals.</p>");
    setTimeout (function() {
      $(".service3img").removeClass("pressed");
    }, 100);

    }
  )

  $(".service4img").on("mouseover", function() {
    $(".service4img").addClass("pressed");
    //haven't used it below, as i wan't to include HTML and jquery .text doesnt accommodate. need to move content to html file anyway as variable?
    $(".serviceDetail").slideToggle();
    //$(".service1description").after("<p class=service1Detail>Deep dives into business, technical and data problems. Define your pain points and what outcomes you're aiming for, and we will analyse your business and technology in detail in order to define the detailed route to your goals.</p>");
    setTimeout (function() {
      $(".service4img").removeClass("pressed");
    }, 100);

    }
  )



// var agileQuotes = [
//
// "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning - Albert Einstein",
// "It doesn't matter how good you are today; if you're not better next month, you're no longer agile - Mike Cohn",
// "The important thing is not your process.  The important thing is your process for improving your process - Henrik Kniberg",
// "Agile teams produce a continuous stream of value, at a sustainable pace, while adapting to the changing needs of the business - Elisabeth Hendrickson",
// "It does not matter how slowly you go as long as you do not stop - Confucius",
// "Intelligence is the ability to adapt to change - Stephen Hawking",
// "Agility means that you are faster than your competition.  Agile time frames are measured in weeks and months, not years - Michael Hugos",
// "Our greatest weakness lies in giving up.  The most certain way to succeed is always to try just one more time - Thomas A. Edison",
// "The only way to go fast is to go well - Robert C. Martin",
// "The best way to get a project done faster is to start sooner - Jim Highsmith"
// ]

var backlogThoughts = [

"If a magazine or trade publication were to write a review of your product post-release, what would you like them to say about it?",
"Do you really need to make that deciison now, or could it be deferred to the last responsible moment?",
"What questions do the team ask you that you find most difficult to answer? How could you improve your ability to answer these types of questions?",
"Who really wants this product or service that I'm building? Why should they buy/use what I am building rather than the alternatives?",
"Where is the biggest bottleneck in the product development lifecycle? How can I help the team remove it?",
"Great product owners are Decisive, Ruthless, Informed, Versatile, Empowering, Negotiable. How could you be more of each of these?",
"What are you assuming about the product, its users, the plan or the development effort that might not be true?",
"Where does value come from in the product? Is it income generating? Cost saving? Time saving? User acquiring? Innovative? And is everyone clear on this?",
"How could you simplify what you are doing? The product itself / the design / the product backlog / the process you are using?",
"Is your team cross functional and self-managing enough to delivery valuable increments in every sprint?",
"If you were to create a box that your product would be sold in and could only write 3 benefits that it would give the buyer, what would they be?",
"What factors do you consider when prioritising the product backlog? Value / cost / risk / learning / uncertainty / releasability / novelty / dependencies?",
"How long does it take you to go trough the process of plan / do / check / act? How could you reduce this?",
"Try delaying a decision until you have at least 7 different options for what to do. You might be surprised by what the latter options offer you",
"What message have people been trying to tell you about the product that you have so far ignored? What if they were right?",
"What would I least like to find out just before go live? How could I find that out earlier?",
"Do you have the right split between spending time with the development team and with the stakeholders?",
"How much time, space and safety does your team currently have available to be creative and innovative? Is that enough or too much?",
"How could the team's velocity become more meaningful to them, to you and to the stakehholders?",
"Assume you are going to make some mistakes. How could you make those mistakes cheaper, faster and easier to recover from?",
"If you knew you had half or twice as much time left on this project as you previously thought, what would you do differently?",
]


// function buttonAnimation(exper) {
//   //document.querySelector(exper).classList.Add(pressed);
//   alert(exper);
// }

//document.querySelector(".randomIntro").innerHTML = agileQuotes[Math.floor(Math.random() * agileQuotes.length)];

document.querySelector(".backlogThought").innerHTML = backlogThoughts[Math.floor(Math.random() * backlogThoughts.length)];


document.querySelector(".new-quote").addEventListener("click", function() {
document.querySelector(".randomIntro").innerHTML = agileQuotes[Math.floor(Math.random() * agileQuotes.length)];
// //


  //document.querySelector(".randomIntro").innerHTML = agileQuotes[Math.floor(Math.random() * agileQuotes.length)];
}
)

// var randomQuote = agileQuotes[Math.floor(Math.random() * 2)];
// alert(randomQuote);
