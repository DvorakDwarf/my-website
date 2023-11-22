"use strict";(self.webpackChunkdevblog=self.webpackChunkdevblog||[]).push([[927],{5927:function(e,t,n){n.r(t);n(697),n(2791);var o=n(184);t.default=function(){var e=n(4132),t=new Date(e.date).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"2-digit"});return(0,o.jsx)("div",{className:"wrapper",children:(0,o.jsxs)("article",{children:[(0,o.jsxs)("div",{className:"cover",children:[(0,o.jsx)("h1",{children:e.title}),(0,o.jsx)("time",{children:t}),(0,o.jsx)("img",{className:"thumbnail",src:n(9291)}),(0,o.jsx)("hr",{})]}),(0,o.jsxs)("main",{children:[(0,o.jsxs)("p",{children:["If you are looking for a description of how to use the program, please refer to",(0,o.jsx)("a",{href:"https://github.com/DvorakDwarf/fauxnix",children:" https://github.com/DvorakDwarf/fauxnix"})]}),(0,o.jsx)("p",{children:"I really like the idea of NixOS, just not using it. A central config is the hottest thing invented since sliced bread. Being able to reproduce your entire system from just one file is phenomenal. Being able to go to a previous generation when things go wrong is life-saving and single-handedly reduces the annual number of computers thrown out of windows worldwide by half. However, I don't like how strict it is and how it forces you to do things the Nix way\u2122. Installing things from github or any source other than Nixpkgs can get messy. I don't care about your nerd philosophy of perfect reproducibility and isolated packages, I just want to play the latest osu!lazer version in peace."}),(0,o.jsxs)("p",{children:["Special shoutout goes to the aliens working on the Nix team who think that manually typing in the name of packages in ",(0,o.jsx)("code",{children:"configuration.nix"})," as opposed to one CLI command was a good idea under any circumstance. I am not a sysadmin, I want to quickly add new programs and save them in my config."]}),(0,o.jsx)("p",{children:"The natural solution is for me to write this Nix wannabe program for a couple of weeks and I think it works now. It does basically everything I want Nix to do for me. Writing the program was not a problem, trying to make a package from it absolutely was."}),(0,o.jsx)("img",{src:n(6341)}),(0,o.jsx)("span",{children:"The arch in question"}),(0,o.jsxs)("p",{children:["I use Arch Linux and so naturally I wanted to create a package in the Arch User Repository for other people to use. This involves writing a ",(0,o.jsx)("code",{children:"PKGBUILD "}),"file which describes how the installation works. The idea was also inspired by some random person who made an AUR package for my Infinite-Storage-Glitch. I thought it couldn't be too hard."]}),(0,o.jsx)("h2",{children:"It Was"}),(0,o.jsxs)("p",{children:["Fauxnix is written in Python and I'm gonna be real, I didn't know it could be compiled. That was the first thing I had to figure out. I settled on using ",(0,o.jsx)("code",{children:"setuptools. "}),"I tried getting further along on my ",(0,o.jsx)("code",{children:"PKGBUILD"})," progress but got stuck on trying to understand where to place the files and how to make it run from PATH. The former was answered by some good samaritans in the Arch Linux programming channel on discord. The latter drove me mad. You'd think such a common question would be very well known and have many direct first-page answers. Unfortunately I missed the page in ",(0,o.jsx)("code",{children:"setuptools "}),"docs that explain it and ask online for help."]}),(0,o.jsx)("p",{children:"In the Python discord server, I was given an incorrect answer and then my question was closed. In the Arch Linux server, I was told an answer I explicitly was not interested in, followed by programs that write PKGBUILDS from PyPI packages, unrelated to the question."}),(0,o.jsx)("img",{src:n(3180)}),(0,o.jsx)("span",{children:"I hate getting help online. At least ChatGPT wouldn't give you an answer you explicitly did not ask for"}),(0,o.jsx)("p",{children:"I did eventually find what I was missing and figured it out. The exact details of how to write a PKGBUILD for a python app I'll put in a separate article for those who struggled like me."})]})]})})}},697:function(){},6341:function(e,t,n){e.exports=n.p+"static/media/archlogo.c41b7e9e3034b9032b4c.png"},3180:function(e,t,n){e.exports=n.p+"static/media/dumb.7aa52ef096e1ca3b58f9.png"},9291:function(e,t,n){e.exports=n.p+"static/media/example.1d40d6a6e7cbf89636b0.png"},4132:function(e){e.exports=JSON.parse('{"date":"2023-11-20T20:05:01.708Z","slug":"fauxnix","title":"What if Nix, but not ?"}')}}]);
//# sourceMappingURL=927.78f8eea3.chunk.js.map