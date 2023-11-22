"use strict";(self.webpackChunkdevblog=self.webpackChunkdevblog||[]).push([[759],{3759:function(e,i,n){n.r(i);var t=n(5671),s=n(9466),r=n(136),o=n(516),a=(n(697),n(2791)),l=n(184),h=function(e){(0,r.Z)(n,e);var i=(0,o.Z)(n);function n(){return(0,t.Z)(this,n),i.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){return(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"language-python",children:'\n    # Maintainer: Vasya Pupkin <dvorak.dwarf@gmail.com>\n    pkgname=fauxnix-git\n    pkgver=r64.cff5977\n    pkgrel=1\n    pkgdesc="Non-invasive* Reproducible* Declarative* config management for Nix non-believers"\n    arch=(\'any\')\n    url="https://github.com/DvorakDwarf/fauxnix"\n    license=(\'GPL3\')\n    depends=(python pacman python-ruamel-yaml)\n    makedepends=(git python-setuptools  python-build python-wheel python-installer)\n    provides=(\'fauxnix\')\n    conflicts=(\'fauxnix\')\n    source=("$pkgname::git+https://github.com/DvorakDwarf/fauxnix.git")\n    md5sums=(\'SKIP\')\n\n    pkgver() {\n      cd "$pkgname"\n      printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short=7 HEAD)"\n    }\n\n    build() {\n      cd "$pkgname"\n\n      python -m build --wheel --no-isolation\n    }\n\n    package() {\n      cd "$pkgname"\n\n      install -Dm644 src/fauxnix/fauxnix.yaml "$pkgdir/etc/fauxnix.yaml"\n      install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE\n      install -Dm644 README.md $pkgdir/usr/share/doc/$pkgname/README.md\n      install -Dm755 src/fauxnix.hook $pkgdir/usr/share/libalpm/hooks/fauxnix.hook\n\n      python -m installer --destdir="$pkgdir" dist/*.whl\n    }\n  '})})}}]),n}(a.Component);i.default=function(){var e=n(3011),i=new Date(e.date).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"2-digit"});return(0,l.jsx)("div",{className:"wrapper",children:(0,l.jsxs)("article",{children:[(0,l.jsxs)("div",{className:"cover",children:[(0,l.jsx)("h1",{children:e.title}),(0,l.jsx)("time",{children:i}),(0,l.jsx)("img",{className:"thumbnail",src:n(3084)}),(0,l.jsx)("hr",{})]}),(0,l.jsxs)("main",{children:[(0,l.jsxs)("p",{children:[(0,l.jsx)("h2",{children:"Preface on getting help."})," ",(0,l.jsx)("br",{}),"If you find yourself using any of the following phrases or types of replies:",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:'"Help vampire"'}),(0,l.jsx)("li",{children:'"RTFM"'}),(0,l.jsx)("li",{children:"(link to a wiki article with no further explanation)"}),(0,l.jsx)("li",{children:"(a command meant to solve the issue with no comment on how it works)"}),(0,l.jsx)("li",{children:'"Read the docs"'})]}),"Know that every breath you take is a net negative impact on the planet. You replying with nothing at all would have been a better use of everybody's time. Quietly simmer in your elitist tech bro circle and never reply to another newbie again. The only reason I am not going into any further detail of the way you deserve to be treated is the admission officer possibly reading this article."]}),(0,l.jsx)("h2",{children:"What the PKGBUILD does"}),(0,l.jsxs)("p",{children:["First, you need to understand what the PKGBUILD actually does. The way it works is it opens a directory ",(0,l.jsx)("code",{children:"pkg"})," in the same directory you used the file. Every file your program uses will first be placed there, ",(0,l.jsx)("b",{children:"NOT THE SYSTEM"}),". That is why you must include ",(0,l.jsx)("code",{children:"$pkgdir"})," in your paths. Once the PKGBUILD ends, pacman will look at the folder and copy the files into paths with the same name.",(0,l.jsx)("code",{children:" $pkgdir/usr/bin/yourprogram"})," goes into ",(0,l.jsx)("code",{children:"/usr/bin/yourprogram "}),"on the system. (You might need curly brackets around the pkgdir and pkgname variables)"]}),(0,l.jsx)("h2",{children:"The crucial details"}),(0,l.jsx)(h,{}),(0,l.jsxs)("p",{children:["Variables you must have:",(0,l.jsx)("br",{}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"pkgname: The name. Needs -git ending if taken from the git repo, -bin if installing binaries and not building, start with python- if it's a python library (not app)"}),(0,l.jsx)("li",{children:"pkgver: The version. If using git, set in pkgver() function"}),(0,l.jsx)("li",{children:"pkgrel: If you needed it you'd know. 1 by default. Increment if it's the same version has an update"}),(0,l.jsx)("li",{children:"arch: Architecture your software works on. 'any' for python since it's cross-platform"}),(0,l.jsx)("li",{children:"license: Name of license. 'MIT', 'GPL', and so on"})]}),"Variables you probably need: ",(0,l.jsx)("br",{}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"pkgdesc: 80 characters or less. Do not reference the name of the package"}),(0,l.jsx)("li",{children:"url: Your official site. Likely a github repo"}),(0,l.jsx)("li",{children:"depends: Packages your software uses. Python libraries used included"}),(0,l.jsx)("li",{children:"makedepends: Packages only required to build the package, not for functionality."}),(0,l.jsx)("li",{children:"license: Name of license. 'MIT', 'GPL', and so on"}),(0,l.jsx)("li",{children:"provides/conflicts: The name of packages your package provides the function for. Basically means that if you have a git package, put the name without git to make sure you can't install both if you ever make one in the future"}),(0,l.jsx)("li",{children:"source: The URL from which the files required for your package would be downloaded from. In the case of git, put git+ before the URL normally used to clone the repo"}),(0,l.jsx)("li",{children:"md5sums: Verify integrity with md5. 'SKIP' if using git"})]}),"Functions you likely need: ",(0,l.jsx)("br",{}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["pkgver(): If you are using git, set the version this way. Copy one from",(0,l.jsx)("a",{href:"https://wiki.archlinux.org/title/VCS_package_guidelines#Git",children:" arch wiki"})]}),(0,l.jsxs)("li",{children:["build(): Build package here. ",(0,l.jsx)("code",{children:"python -m build --wheel --no-isolation"})]}),(0,l.jsx)("li",{children:"package(): Shuffle all the files into the correct place here for pacman. Use the install script to set permissions. 644 for reading and 755 for execution. Follow my PKGBUILD above for paths where files are to be placed. Here you also run python -m installer"})]})]}),(0,l.jsx)("h2",{children:"Note on setup.py"}),(0,l.jsxs)("p",{children:["You should avoid using it. For the build step of your python project, you need",(0,l.jsx)("code",{children:"pyproject.toml"})," file to describe how your program ought to be built. It was a replacement for setup.py. It has the same features and more. Use python -m installer to make use of it. I was shown python -m install . which seems to do the same thing but is less popular and allows you to still use setup.py without explicitly calling it. I would still recommend avoiding it."]})]})]})})}},697:function(){},3084:function(e,i,n){e.exports=n.p+"static/media/pkglogo.7fb23a7c1d5e7314af02.jpg"},3011:function(e){e.exports=JSON.parse('{"date":"2023-11-22T03:11:59.857Z","slug":"how-to-pkgbuild","title":"Creating a PKGBUILD for a python app with vcs"}')}}]);
//# sourceMappingURL=759.879a5a68.chunk.js.map