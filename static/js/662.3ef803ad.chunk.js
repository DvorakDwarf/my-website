"use strict";(self.webpackChunkdevblog=self.webpackChunkdevblog||[]).push([[662],{662:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(5671),i=n(9466),r=n(136),s=n(516),o=(n(697),n(1293)),h=n.n(o),d=n(2791),l=n(184),c=function(e){(0,r.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){h().highlightAll()}},{key:"render",value:function(){return(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"language-javascript",children:"\napp.get('/paths', (req, res) => {\nfs.readdir(content_dir, (err, files) => {\n    var response_arr = []\n    files.forEach((i) => {\n        var entry = new Object();\n        const meta = require(content_dir + i + \"/meta.json\");\n\n        entry.title = i;\n        entry.date = meta.date;\n\n        response_arr.push(entry);\n    })\n\n    response_arr.sort((a, b) => {\n        return new Date(b.date) - new Date(a.date);\n    })\n\n    res.send(response_arr);\n  });\n});  \n  "})})}}]),n}(d.Component);var m=function(){var e=n(4246),t=new Date(e.date).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"2-digit"});return(0,l.jsx)("div",{className:"wrapper",children:(0,l.jsxs)("article",{children:[(0,l.jsxs)("div",{className:"cover",children:[(0,l.jsx)("h1",{children:"GREAT SUCCESS"}),(0,l.jsx)("time",{children:t}),(0,l.jsx)("img",{className:"thumbnail",src:n(590)}),(0,l.jsx)("hr",{})]}),(0,l.jsxs)("main",{children:[(0,l.jsx)("p",{children:"If you are reading this then I managed to jury rig this thing to host my code:"}),(0,l.jsx)("img",{src:n(327)}),(0,l.jsx)("span",{children:"The door is broken and can't be closed"}),(0,l.jsx)("p",{children:"For the first note here I'll just record some things related to making this website"}),(0,l.jsx)("p",{children:"I regret to inform you that this post was written in Vim."}),(0,l.jsx)("p",{children:"On top of trying to do webdev for the first time in my life I thought I might as well layer more stuff on top of it. I've heard Vim cultists rave about how it's the best thing since sliced bread and the transistor, but the final drop was sitting on a call with a person helping me figure out a code problem and seeing them use Vim keybindings. They looked like a wizard and now I wanna do the same. Also ricing. A big part was ricing. Same as with Linux. Entirely because I wanted a pretty desktop."}),(0,l.jsx)("p",{children:"About the website itself. I had never touched web anything until about 2 months ago. I was going and checking out other people's websites and decided that the time has come for me to get one of my own. If you are interested search \"FBI no-fly list leak\" and go from there. I won't hide the fact that one of the websites in the webring was a major inspiration for the look of the website. If they find this and get upset, hopefully, they'll finally answer my email months later."}),(0,l.jsxs)("p",{children:["I quickly found out I dislike web programming. Everything is different. The HTML/CSS, the javascript monopoly, ",(0,l.jsx)("a",{href:"https://dayssincelastjavascriptframework.com/",children:"the frameworks"}),". It just feels like an entirely different activity from the programming I am used to. It's also a lot more visual for my liking. I generally dislike having to draw or make a UI, each activity shaving off a year of my young life. Despite that, I enjoyed doing HTML. It was surprisingly easy to get over. React, which is what I used for this site, was surprisingly worse. Brother, how hard can it be to let me read a directory :( I had written the world's smallest backend just to read a directory and then return it to React because it refuses to cooperate otherwise"]}),(0,l.jsx)(c,{}),(0,l.jsx)("span",{children:"Sorting by date so that react can pick 2 most recent articles to display on the home page"}),(0,l.jsx)("p",{children:"As a complete noob, for some time I got stuck on how to store the articles. I didn't know whether this is where the backend starts and I get to managing a database or whether I am overthinking. Maybe there is another way of storing it. For example the developer I took zero inspiration from fetches their posts from cohost which is kinda smart."}),(0,l.jsx)("p",{children:"While I was thinking about this my SSD corrupted and ate all my code."}),(0,l.jsx)("img",{src:n(4234)}),(0,l.jsx)("span",{children:"What could have been"}),(0,l.jsxs)("p",{children:["I ended up making a folder that contains folders representing articles once I got around to recreating the website. Each article folder has a ",(0,l.jsx)("code",{children:".jsx"})," for the content of the page, ",(0,l.jsx)("code",{children:".jsx"})," for the preview on the home page, images, used, as well as a ",(0,l.jsx)("code",{children:"meta.json"})," that currently only contains the date I wrote the article but might eventually store more stuff. React reads all that and adjusts the website accordingly as I add more articles which is nice if I don't think about the time I could have saved doing this manually a few times."]}),(0,l.jsx)("p",{children:"Overall I am ok with doing web development but the urge to write more rust and anything more low-level is inescapable and insatiable. Or do AI. AI is cool."})]})]})})}},697:function(){},327:function(e,t,n){e.exports=n.p+"static/media/PC.2e33be0e2295eccbef4d.jpg"},590:function(e,t,n){e.exports=n.p+"static/media/img1.64a6adf0976f133be769.png"},4234:function(e,t,n){e.exports=n.p+"static/media/old_website.9596ea748a4310bb4fb6.png"},4246:function(e){e.exports=JSON.parse('{"date":"2023-07-12T03:39:02+0000","title":"GREAT SUCCESS"}')}}]);
//# sourceMappingURL=662.3ef803ad.chunk.js.map