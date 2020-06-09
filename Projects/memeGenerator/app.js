//Selectors
const textField = document.querySelector('.field')
const btn = document.querySelector('.submit-btn')
// const topText = document.querySelector('.top')
// const bottomText = document.querySelector('.bottom') 
const parentDiv = document.querySelector('.picture-div')

//Variables
let isKeyDown = false;

//Events
btn.addEventListener('click', function transferEvent() {
    generateImage(event)
})

const adj = ["abrupt","acidic","adorable","adventurous","aggressive","agitated","alert","aloof","amiable","amused","annoyed","antsy","anxious","appalling","appetizing","apprehensive","arrogant","ashamed","astonishing","attractive","average","batty","beefy","bewildered","biting","bitter","bland","blushing","bored","brave","bright","broad","bulky","burly","charming","cheeky","cheerful","chubby","clean","clear","cloudy","clueless","clumsy","colorful","colossal","combative","comfortable","condemned","condescending","confused","contemplative","convincing","convoluted","cooperative","corny","costly","courageous","crabby","creepy","crooked","cruel","cumbersome","curved","cynical","dangerous","dashing","decayed","deceitful","deep","defeated","defiant","delicious","delightful","depraved","depressed","despicable","determined","dilapidated","diminutive","disgusted","distinct","distraught","distressed","disturbed","dizzy","drab","drained","dull","eager","ecstatic","elated","elegant","emaciated","embarrassed","enchanting","encouraging","energetic","enormous","enthusiastic","envious","exasperated","excited","exhilarated","extensive","exuberant","fancy","fantastic","fierce","filthy","flat","floppy","fluttering","foolish","frantic","fresh","friendly","frightened","frothy","frustrating","funny","fuzzy","gaudy","gentle","ghastly","giddy","gigantic","glamorous","gleaming","glorious","gorgeous","graceful","greasy","grieving","gritty","grotesque","grubby","grumpy","handsome","happy","harebrained","healthy","helpful","helpless","high","hollow","homely","horrific","huge","hungry","hurt","icy","ideal","immense","impressionable","intrigued","irate","irritable","itchy","jealous","jittery","jolly","joyous","filthy","flat","floppy","fluttering","foolish","frantic","fresh","friendly","frightened","frothy","frustrating","funny","fuzzy","gaudy","gentle","ghastly","giddy","gigantic","glamorous","gleaming","glorious","gorgeous","graceful","greasy","grieving","gritty","grotesque","grubby","grumpy","handsome","happy","harebrained","healthy","helpful","helpless","high","hollow","homely","horrific","huge","hungry","hurt","icy","ideal","immense","impressionable","intrigued","irate","irritable","itchy","jealous","jittery","jolly","joyous","juicy","jumpy","kind","lackadaisical","large","lazy","lethal","little","lively","livid","lonely","loose","lovely","lucky","ludicrous","macho","magnificent","mammoth","maniacal","massive","melancholy","melted","miniature","minute","mistaken","misty","moody","mortified","motionless","muddy","mysterious","narrow","nasty","naughty","nervous","nonchalant","nonsensical","nutritious","nutty","obedient","oblivious","obnoxious","odd","old-fashioned","outrageous","panicky","perfect","perplexed","petite","petty","plain","pleasant","poised","pompous","precious","prickly","proud","pungent","puny","quaint","quizzical","ratty","reassured","relieved","repulsive","responsive","ripe","robust","rotten","rotund","rough","round","salty","sarcastic","scant","scary","scattered","scrawny","selfish","shaggy","shaky","shallow","sharp","shiny","short","silky","silly","skinny","slimy","slippery","small","smarmy","smiling","smoggy","smooth","smug","soggy","solid","sore","sour","sparkling","spicy","splendid","spotless","square","stale","steady","steep","List of Adjectives","→Remember that adjectives describe or indicate the degree of nouns or pronouns. Also, they are occasionally used after linking verbs.","responsive","sticky","stormy","stout","straight","strange","strong","stunning","substantial","successful","succulent","superficial","superior","swanky","sweet","tart","tasty","teeny","tender","tense","terrible","testy","thankful","thick","thoughtful","thoughtless","tight","timely","tricky","trite","troubled","twitter pated","uneven","unsightly","upset","uptight","vast","vexed","victorious","virtuous","vivacious","vivid","wacky","weary","whimsical","whopping","wicked","witty","wobbly","wonderful","worried","yummy","zany","zealous","zippy"]
const nun = ["area","book","business","case","child","company","country","day","eye","fact","family","government","group","hand","home","job","life","lot","man","money","month","mother","Mr","night","number","part","people","place","point","problem","program","question","right","room","school","state","story","student","study","system","thing","time","water","way","week","woman","word","work","world","year"]
const vrb = ["accept","add","admire","admit","advise","afford","agree","alert","allow","amuse","announce","annoy","answer","apologise","appear","applaud","appreciate","approve","argue","arrange","arrest","arrive","ask","attach","attack","attempt","attend","attract","avoid","back","bake","balance","ban","bang","bare","bat","bathe","battle","beam","beg","behave","belong","bleach","bless","blind","blink","blot","blush","boast","boil","bolt","bomb","book","bore","borrow","bounce","bow","box","brake","branch","breathe","bruise","brush","bubble","bump","burn","bury","buzz","calculate","call","camp","care","carry","carve","cause","challenge","change","charge","chase","cheat","check","cheer","chew","choke","chop","claim","clap","clean","clear","clip","close","coach","coil","collect","colour","comb","command","communicate","compare","compete","complain","complete","concentrate","concern","confess","confuse","connect","consider","consist","contain","continue","copy","correct","cough","count","cover","crack","crash","crawl","cross","crush","cry","cure","curl","curve","cycle","dam","damage","dance","dare","decay","deceive","decide","decorate","delay","depend","describe","desert","deserve","destroy","detect","develop","disagree","disarm","discover","dislike","divide","double","doubt","drag","drain","drip","drop","drown","drum","dry","dust","earn","educate","embarrass","employ","empty","enjoy","enter","entertain","escape","excuse","exercise","exist","expand","explode","extend","face","fade","fail","fancy","fasten","fax","fear","file","fill","film","fire","fit","fix","float","flood","flow","flower","fold","follow","form","found","frame","frighten","fry","gather","gaze","glow","grate","grease","grip","groan","guarantee","guard","guess","guide","hammer","hand","handle","hang","happen","harass","harm","hate","haunt","head","heal","heap","heat","help","hook","hop","hope","hover","hug","hum","hunt","hurry","identify","ignore","imagine","impress","improve","influence","inform","inject","injure","interest","interfere","interrupt","kneel","knit","knock","knot","label","land","last","laugh","launch","learn","level","license","lick","lie","lighten","like","list","listen","live","load","lock","long","look","love","man","manage","march","mark","marry","match","mate","matter","measure","meddle","melt","memorise","mend","mess","up","milk","mine","miss","mix","moan","moor","mourn","move","muddle","mug","multiply","murder","nail","name","need","nest","nod","note","notice","number","obey","object","observe","obtain","occur","offend","offer","open","order","overflow","owe","own","pack","paddle","paint","park","part","pass","paste","pat","pause","peck","pedal","peel","peep","perform","permit","phone","pick","pinch","pine","place","plan","plant","play","please","plug","point","poke","polish","pop","possess","post","pour","practise","practice","pray","preach","precede","prefer","prepare","present","preserve","press","pretend","prevent","prick","print","produce","program","promise","protect","provide","pull","pump","punch","puncture","punish","push","question","queue","race","radiate","rain","raise","reach","realise","receive","recognise","record","reduce","reflect","refuse","regret","reign","reject","rejoice","relax","release","rely","remain","remember","remind","remove","repair","repeat","replace","reply","report","reproduce","request","rescue","retire","return","rhyme","rinse","risk","rob","rock","roll","rot","rub","ruin","rule","rush","sack","sail","satisfy","save","saw","scare","scatter","scold","scorch","scrape","scratch","scream","screw","scribble","scrub","seal","search","separate","serve","settle","shade","share","shave","shelter","shiver","shock","shop","shrug","sigh","sign","signal","sin","sip","ski","skip","slap","slip","slow","smash","smell","smile","smoke","snatch","sneeze","sniff","snore","snow","soak","soothe","sound","spare","spark","sparkle","spell","spill","spoil","spot","spray","sprout","squash","squeak","squeal","squeeze","stain","stamp","stare","start","stay","steer","step","stir","stitch","stop","store","strap","strengthen","stretch","strip","stroke","stuff","subtract","succeed","suck","suffer","suggest","suit","supply","support","suppose","surprise","surround","suspect","suspend","switch"]
const prn = ["You","I","He","She","They"]
//Functions



function generateImage(event) {
    
    const entertedTerm = textField.value
    if (entertedTerm == "") { return }
    parentDiv.innerHTML = ""
    textField.value=""
    const topText = document.createElement("h1")
















    // topText.innerHTML = `${prn[Math.floor(Math.random() * prn.length)]} ${adj[Math.floor(Math.random() * adj.length)]} $`
    topText.innerHTML = `${entertedTerm} you say?`


















    topText.classList.add("top")
    const bottomText = document.createElement("h1")














    bottomText.innerHTML = `${prn[Math.floor(Math.random() * prn.length)]} ${vrb[Math.floor(Math.random() * vrb.length)]} the ${entertedTerm} and ${nun[Math.floor(Math.random() * nun.length)]}`














    bottomText.classList.add("bottom")
    parentDiv.appendChild(topText)
    parentDiv.appendChild(bottomText)
    const urlOfPicture = `https://source.unsplash.com/1600x900/?${entertedTerm} no-repeat center center/cover`
    parentDiv.style.background = "url('https://source.unsplash.com/1600x900/?" + entertedTerm +"') no-repeat center center" + "/cover"
    // parentDiv.style.background = "url('https://source.unsplash.com/1600x900/?building') no-repeat center center/cover"
    

}



// background: url('https://source.unsplash.com/1600x900/?building') no-repeat center center/cover;