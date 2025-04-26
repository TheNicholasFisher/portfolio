function updateButtonState() {
    const phone = document.getElementById('phoneInput').value.trim();
    const button = document.getElementById('smsButton');
    if (phone) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  }

  function sendSMS() {
    const phone = document.getElementById('phoneInput').value.trim();
    if (!phone) {
      alert("dude thats not a phone number");
      return;
    }

    const messages = ["i still love you",
      "i hate you so much it's crazy",
      "can we talk?",
      "8 ball?",
      "you up?",
      "the pope dying reminded me that everything is temporary and that we shouldnt take life for granted. you wanna try this again?",
      "yo all my contacts got reset. who is this?",
      "i think you left your charger at my place",
      "hey, just wanted to see how you were doing. i know we havent talked in a while and ended up on bad tuerms but i couldnt help but contact you. ive been missing you like crazy. no matter how hard i try to forget my love for you, it stays no matter what",
      "you had a hold on me",
      "do i still owe you that $20?",
      "you still owe me $20",
      "find anyone better than me?",
      "happy birthday!",
      "what was your netflix password?",
      "TAKE ME BACK TAKE ME BACK TAKE ME BACK TAKE ME BACK",
      "i miss you... a lot",
      "you listen to the new carti album?",
      "wanna watch Past Lives with me?",
      "are you a fire alarm? cause you are really fucking loud and annoying",
      "wagwan piffting",
      "wanna run some fortnite duos?",
      "are you still super annoying?",
      "i can juggle now",
      "you watch severance? that shit is so good",
      "can i PLEASE borrow $460",
      "wanna hit up taco bell?",
      "who's your twice bias?",
      "will you be the bella to my edward?",
      "guess who!",
      "im in town again. dont wanna hang out, just thought you should know.",
      "i dont think of you ever",
      "had a dream about you last night",
      "i got two tickets to a beabadoobee concert if you wanted to go (with me)",
      "wanna invest in crypto?",
      "wanna join my crypto telegram group?",
      "im addicted to valorant",
      "whats the name of the song that goes dun, dun dun, dun, dundundundun",
      "me rn: TT",
      "did i leave my earbuds at your place?",
      "wanna go to a 76ers game with me? tickets are like two bucks",
      "i watched Past Lives and cried thinking about you",
      "i lost a bet and now i gotta text you :/",
      "you might wanna get tested...",
      "youll NEVER guess who i just saw",
      "why dont you ever text me :(",
      "cant remember how to say your name (just like that beabadoobee song)",
      "was just listening to laufey and thinking about you",
      "this is a cry for help",
      "i know this might be weird but i need a +1 for my cousin reggie's wedding",
      "we were the perfect pair",
      "Wordle 1,426 1/6 🟩🟩🟩🟩🟩",
      "can you endorse me on linkedin?",
      "can i put you down for a job referral?",
      "is your work hiring?",
      "i just saw this tv show where this dude turned himself into a pickle. was the funniest shit i ever seen",
      "do i have w or l rizz?",
      "you listen to the new weeknd album? open hearts was a pretty good track",
      "am i am man or muppet?",
      "my therapist says we should talk more",
      "can i get your therapist's number?",
      "you pmo",
      "and another thing: im not mad. please dont put in the newspaper that i got mad.",
      "is meatball an fruit",
      "you are an evil person. not a good human being",
      "i Dont wanna be here",
      "Windsor Heights Dairy Queen is a good place for u kno what",
      "i now h v an iphone",
      "have you been dreaming more?",
      "i got a great deal on an appartment in bushwick",
      "you see that ishowspeed stream?",
      "am i blocked?",
      "can i block your number?",
      "im planning a lake trip rn. would you be down to come?"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const smsLink = `sms:${phone}?body=${encodeURIComponent(randomMessage)}`;
    window.location.href = smsLink;
  }