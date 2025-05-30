<style>
	* {
		width: 100%;
			text-align: start;
	}
	.controls{
		width: auto;
		text-align: end;
	}
	h1 {
		position: absolute;
		top: 0px;
		left: 0px;
		font-size: 24px !important;
		
	}
	h2 {
		font-size: 48px !important;
		font-weight: light;
	}
	
	p, li {
		font-size: 32px;
	}
</style>

## Tripleten Coffeeshop

- Project Overview <!-- element class="fragment" -->
- Delivering via Github <!-- element class="fragment" -->
- Work on the project <!-- element class="fragment" -->

---

## Stage 1

During this stage you'll be working on the **Recipes Section** of the Tripleten Coffeeshop Landing Page

---

![[Screenshot 2025-05-30 at 2.43.00 PM.png]]

---

## Delivering via github

- Clone Repository
- Open on vscode
- Make the required updates
- Push the changes

---

# Clone repository

- Go to your github repositories and find `se_project_coffeeshop`
  ![[Screenshot 2025-05-30 at 3.00.25 PM.png]]

---

- Copy the SSH Link
  ![[Screenshot 2025-05-30 at 3.04.23 PM.png]]

---

- Open your terminal and navigate to your projects folder

```sh
cd ~/Documents/tripleten
```

- Clone the github repository into your computer

```sh
git clone git@github.com/{{GITHUB_USER}}/se_project_coffeeshop
```

- This will create a new folder inside of the `tripleten` folder. You need to cd into is

```sh
cd se_project_coffeeshop
# To Open VSCode
code .
```

---

## Work on the project...

---

## Pushing changes to github

After finishing the changes on the project you need to sync your local changes with github's repository.

```sh
# Moves the changes to the staging area
git add -A

# Creates a new commit on the repository with the changes
git commit -m "Add recipes html & css"

# Push the changes into github
git push -u origin main
```
