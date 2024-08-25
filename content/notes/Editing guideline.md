---
title: "Editing guideline"
enableToc: true
---

# 1. Metadata

## 1.1 Titles

- Quartz requres precise title metadata
- so if you are ever making a new page, it has to have a metadata element which you can make by encapsualting text metadata with --- --- 
- first key in metadata must be "title:"
- value in "title:" key must be in double qoutes " "
- value needs to be separated by one space to be read correctly as a value
example:
```
---
title:"example"
---

Would push to git, but site wouldnt build
```

```
---
title: "example"
---

Would push to git and build
```
## 1.2 YAML

- metadata is based on YAML 
- YAML is lowkey a standard in technical documentation today 
- it has a fun recursive name YAML stands for YAML ain't a markup language
- so yeah, if you want to make some tag system or expand the vault a lot, try to stick to YAML syntax

# 2. Images

- Sort images you add to coresponding folders
- If it's something for the campaign pages, then sort it in that campaigns image folder
- if it's something for the notes and guides, then sort it in the notes/images folder
- images (or any other files) must not have same names in obisdian
	- titles in metadata can be same (it's site only)
	- but for obsidian to work and for them to publish correctly all files need unique names

- correct syntax for the images is 
```
![ ](/example/images/example.png)

or for obs.png in note/images

![ ](/notes/images/obs.png)
```


# 3. Syntax

- for thing to stay ordered and not smush into the same line you need to use lists
- List syntax is just a - 

example
```
Item1
Item2
Item3 

will render as 

Item1Item2Item3
```

```
- Item1
- Item2
- Item3 

will render as 

Item1
Item2
Item3
```

# 4. CSS

- you can add custom CSS styling and change existing colours through editing `assets/styles/custom.scss`. If you'd like to target specific parts of the site, you can add ids and classes to the HTML partials in `/layouts/partials`. 