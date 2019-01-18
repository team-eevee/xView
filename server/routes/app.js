const express = require("express");
const router = express.Router();
require("dotenv").config();
const session = require("express-session");
const request = require("request");
const qs = require("querystring");
const randomString = require("uuid");
const csrfString = randomString();
const db = require("../db");
var clearbit = require("clearbit")("sk_391fe29c0ebc99c2c703e851ae980df2");

const appController = require("../controllers/app-controller");

//put into middleware later
router.get("/getUser/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  if (userId && userId !== NaN) {
    const queryString =
      'SELECT username,email,avatar from "user" WHERE user_id=$1';
    const queryValue = userId;
    db.oneOrNone(queryString, queryValue).then(data => {
      if (!data) return res.status(400).send("invalid userId");
      res.send(data);
    });
  } else {
    return res.status(400).send("invalid userId");
  }
});

router.get("/getApps", (req, res) => {
  const iq = [
    "Can you tell me a little about yourself?",
    "How did you hear about the position?",
    "What do you know about the company?",
    "Why do you want this job?",
    "Why should we hire you?",
    "What are your greatest professional strengths?",
    "What do you consider to be your weaknesses?",
    "What is your greatest professional achievement?",
    "Tell me about a challenge or conflict you've faced at work, and how you dealt with it.",
    "Where do you see yourself in five years?",
    "What's your dream job?",
    "What other companies are you interviewing with?",
    "Why are you leaving your current job?",
    "Why were you fired?",
    "What are you looking for in a new position?",
    "What type of work environment do you prefer?"
  ];
  const note = [
    "Coloring book listicle banh mi, disrupt flexitarian single-origin coffee cardigan.",
    " Cold-pressed lomo DIY crucifix mlkshk bushwick chartreuse disrupt 8-bit franzen distillery woke fam synth truffaut.",
    "Drinking vinegar typewriter flannel ramps kitsch pickled microdosing man braid narwhal.",
    "Church-key deep v disrupt master cleanse air plant forage tumeric sartorial vape PBR&B before they sold out succulents sustainable.",
    "Taxidermy dreamcatcher literally etsy man braid.",
    "Paleo single-origin coffee tote bag austin meditation 3 wolf moon.",
    "Tilde chillwave umami cliche taxidermy polaroid ramps.",
    "Readymade paleo yr chambray yuccie kombucha iPhone squid cold-pressed lomo skateboard.",
    "Live-edge mustache distillery prism ennui, blue bottle before they sold out pinterest vexillologist tacos.",
    "Pitchfork yuccie church-key copper mug raclette, pour-over squid YOLO +1 XOXO post-ironic fam keytar.",
    "Fingerstache listicle cloud bread cray bespoke prism pok pok blog 3 wolf moon twee tofu seitan.",
    "Typewriter kale chips brunch, pok pok echo park humblebrag woke asymmetrical. ",
    "Cliche kickstarter you probably haven't heard of them pok pok organic stumptown umami food truck vaporware heirloom ugh prism kogi lo-fi meggings.",
    "Photo booth direct trade cliche scenester. Vice flexitarian coloring book prism narwhal."
  ];
  const queryString = "SELECT * FROM company";
  let business = [];
  db.query(queryString).then(business => {
    const apps = {};
    for (let i = 0; i < 20; i += 1) {
      const num = Math.floor(Math.random() * business.length);
      const interviewQ = iq.filter(el => Math.floor(Math.random() * 8) === 3);
      const notes = note.filter(el => Math.floor(Math.random() * 8) === 3);
      const { name, logo, location, description, domain } = business[num];
      apps[i] = {
        companyName: name,
        logo,
        domain,
        location,
        description,
        status: Math.floor(Math.random() * 4),
        interviewQ,
        notes,
        appId: i
      };
    }
    res.send(apps).json();
  });
});

// router.get('/addcompany/:domain',(req,res)=>{
//   clearbit.Company.find({domain:req.params.domain+'.com', stream:true})
//     .then(company => {
//       const{legalName,domain,logo,location,twitter: {bio},}=company;
//       const queryString = 'INSERT INTO company(name,domain,description,location,logo) VALUES($1,$2,$3,$4,$5)'
//       const queryValues = [legalName,domain,bio,location,logo];
//       db.query(queryString,queryValues)
//     })
//     res.redirect('/');

// })

router.post("/createApp", (req, res) => {});

router.delete("/deleteApp", (req, res) => {});

router.patch("/updateApp", (req, res) => {});

module.exports = router;