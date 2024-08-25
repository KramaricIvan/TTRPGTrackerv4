
---
title: "How to edit"
enableToc: true
---
---
> [!SUCCESS] PROS: 
>-  all tools are all OS friendly
>- coder friendly

> [!FAILURE] CONS: 
>-  coder friendly 
>- non-coders RIP (unless you want to learn GitHub web-ui and some markdown)
>
>

> [!warning] Requirements
> - 1. [Github](https://github.com/)
> 		- Account
> 		- Preferable basic [GitBash](https://git-scm.com/downloads) knowledge
> - 2. Markdown editor
> 		- recomended/what I'm using: [Obsidian.md](https://obsidian.md/) 

# 1. First time/setup

### 1.  [Obsidian.md](https://obsidian.md/)

- download [Obsidian.md](https://obsidian.md/)
- if you want to use it for other stuff setup it as you wish
- for the needs of this page... just chill for now

### 2. Git/hub

- Make [Github account](https://github.com/) if you don't have one`
- Once you have GitHub account ready: 
	- ask Ivan on wapp to add you as colaborator 
	- download and install [GitBash](https://git-scm.com/downloads) 
		- why? Because console is cool  
	- or just use GitHub web-ui 
			- I won't write a guide for that unless non-coding ppl want to edit this site
			- rest can do it intuitively, but keep in mind it has 25MB upload limit as opposed to 100MB from console


### 3. Clone repo 

- Make a folder on your PC you want to clone the repo in 
- Open gitbash 
- cd to the folder you just made
```copy
cd C:/Users/User/.../<new folder you made>
```
- clone the repo
```copy
git clone https://github.com/KramaricIvan/TTRPG-Tracker
```


### 4. Link Obsidian

- Open Obsidian
 ![Image](/notes/images/obs.png)
 

- Pick "Open folder as vault"
- Navigate to the new folder you just made
- Navigate to the cloned repo
- Navigate to content
- Open TTRP-Tracker/content as a Vault 

### 5. Done

![](notes/images/vault.png)

- well not really, the setup is done
- you can edit now, and see the content as an Obsidian Vault

### 6. Commiting changes 

- once you are done editing, to post the changes to all other users and to the page you have to push to git
- so just do a standard push
- open Gitbash, cd to the repo on your PC
```copy
cd C:/Users/User/.../<new folder you made>/TTRPG-Tracker
```

- to add all edited files to the package
```copy
git add . 
```

- create package
```copy
git commit -m "Commit message here" 
```

- push to git 
>[!error] make sure you push to HUGO branch, not master

```copy
git push origin hugo
```

- This will promt Ivan for the confirmation and after he mergest the files
- Hugo branch will get pushed
- Which triggers GitAction in which master branch copies files from content in Hugo branch and parses them through html snippets and builds the new site. 





# 2. Updating 

### 1. Pull changes

- before you start editng you should pull the latest version of the repo by just calling
```copy
cd C:/Users/User/.../<Your folder>/TTRPG-Tracker
```

```copy
git pull
```

### 2. Edit 

### 3. Push new changes 

- just do a standard push
- open Gitbash, cd to the repo on your PC
```copy
cd C:/Users/User/.../<new folder you made>
```

- to add all edited files to the package
```copy
git add . 
```

- create package
```copy
git commit -m "Commit message here" 
```

- push to git 
>[!error] make sure you push to HUGO branch, not master

```copy
git push origin hugo
```

- This will promt Ivan for the confirmation and after he mergest the files
- Hugo branch will get pushed
- Which triggers GitAction in which master branch copies files from content in Hugo branch and parses them through html snippets and builds the new site. 

### 4. "Automation"
- Unfortunately the process is manual, there are some extension, but extensions break the quartz
- My only idea is to make a script that make it all 1 click instead of writing commands

So here are my two shell scripts:

AutoPull.sh (pull the latest version of vault from git)

```copy
#!/bin/sh
cd <your path to TTRPG-Tracker>
git pull
echo Press Enter...
read
```

AutoPush.sh (push your changes to git)
```copy
#!/bin/sh
cd <your path to TTRPG-Tracker>
git add .
git commit -m "Autopush"
git push
echo Press Enter...
read
```

- I keep the scripts one folder behind the syncing folder so it doesen't get overwriten with other peoples paths
- "coder" way would be to just have them in repo and use git-ignore, but we'll keep it dirty for now, because it's easier

### 5. There could be a solution 
- of making an app that starts the Obsidian app and then just commits all the changes then pushes them once the app is closed or every X interval of time
- if someone is willing to make it, be my gust




