var readlinesync=require("readline-sync");
var chalk=require("chalk");
var username=readlinesync.question(chalk.bold.green
("What's your name? " ));
console.log("Hi!! "+chalk.italic(username));
var score =0;
var b=false;
var know=readlinesync.question("Are you ready to play this tech Quiz? ");
if(know.toUpperCase()==='YES')
b=true;
function play( quest, ans)
{
var useranswer=readlinesync.question(quest);
if(useranswer.toUpperCase()===ans.toUpperCase())
{
console.log("Yeah:) You're correct")
score++;
}
else
console.log("ohhh"+":("+" You're wrong");

}
if(b)
{
var questionList=
[
  {
  question: chalk.yellow(".jpeg/jpg is extension of which file? "),
  answer:   "image"
},
{
  question: chalk.yellowBright("Inventor of java? "),
  answer:   "james gosling"
},
{
  question: chalk.blueBright("VLAN stands for? "),
  answer:   "virtual lan"
},
{
  question: chalk.cyanBright("Who founded Apple Computer? "),
  answer:   "Steve Jobs"
},
{
  question: chalk.magentaBright("Motherboard is not a peripheral device?  "),
  answer:   "yes"
}
]
for(var i=0;i<questionList.length;i++)
{
  console.log("----------")
  var Question=questionList[i].question;
  var Answer=questionList[i].answer;
  play(Question,Answer);
}

Scores=[
  {
   name:"Ruchika",
   score:4
  },
  {
   name:"Suruchi",
   score:3
  },
  {
   name:"Deepak",
   score:3
  },
  {
   name:"Sakshi",
   score:3
  },
  {
   name:"Akash",
   score:3
  },
]
console.log("------------------------------------------------")
var ahead=readlinesync.question(chalk.red("Do you want to know your score? "));

if(ahead.toUpperCase()=='YES')
{
  if(score>=3)
  {
  console.log("Good!! Your score is "+ score+" out of 5 ");
  var goodscore=readlinesync.question(chalk.bgCyan("As you score "+score+" out of 5"+" Do you want to get your score update? "));
  console.log("------------------");
  if(goodscore.toUpperCase()==='YES')
  {
  console.log(chalk.yellowBright("Please send your score with name to Ruchika:).  "));}
  console.log("------------------");
    var highscorer=readlinesync.question(chalk.bgRedBright("Do you want to see the highest scorer of this quiz? "));
    if(highscorer.toUpperCase()==='YES')
    {
      var personName=Scores[0].name;
      var personScore=Scores[0].score; 
    console.log("Name: "+personName+" Score: "+personScore);
    }
    console.log("------------------");
     var allscorer=readlinesync.question(chalk.bgBlueBright("Do you want to see the all scorer of this quiz? "));
     if(allscorer.toUpperCase()==='YES')
    {
           for(var i=1;i<Scores.length;i++)
           {
             console.log("Name: "+Scores[i].name+"  Score: "+Scores[i].score)
           }  
    }
  }
  else
  { 
  console.log("Your score is "+ score+" out of 5");
  console.log(chalk.bgRedBright("For getting your score update, your score must be greater than or equal to 3"));
  }
}

}
