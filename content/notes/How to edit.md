
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
	- ask Ivan to add you as collaborator 
	- download and install [GitBash](https://git-scm.com/downloads) 
		- why? Because console is cool  
		- and so you can sync your edits 
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
- Pick "Open folder as vault"
- Navigate to the new folder you just made
- Navigate to the cloned repo
- Navigate to content
- Open TTRP-Tracker/content as a Vault 

### 5. Done

![](notes/images/vault.png)

- well not really, the setup is done
- you can edit now, and see the content as an Obsidian Vault
- game relevant files are in quartz/content

# 2. Updating 

- in the repo I added zz_gitsync.sh
```
#!/bin/bash
npx quartz sync
$SHELL
```
- you can just run that or manually run  from the root quartz directory 
```
npx quartz sync
```





