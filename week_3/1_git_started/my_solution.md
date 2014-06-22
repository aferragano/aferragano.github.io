## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
git add, adds the change in the working directory to the staging area(to await commit)


#### branch
When working with other people on the same project, use git branch, which will let you build a new branch or timeline of commits.

#### checkout
 allows you to see and move to a repository or branch that you are not currently inside. 

#### clone
Copies the Git repository. It is separate from the original repository. 

#### commit
takes “snapshot” of changes, and allows a message to be put in so that info of editions can be documented. 

#### fetch
 imports commits from a remote repository into your local repo. 

#### log
find specific commits in your project history by author, date, or history. 

#### merge
 incorporates your current branch to your main branch. 

#### pull
fetches down new data from a remote server. 

#### push
 pushes changes back to the remote repository.

#### reset
unstage files from index and reset pointers to. (to upstage reverts the staging area to what was there before we started modifying things.

#### rm
remove entries from the staging area entirely and also off your disk(the working directory

#### status
status - shows the status of your staging area.

## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

## Release 5: Errors you encountered
1. Error
Anthonys-iMac:DBC anthonyf$ git add -m'Trying git'>>error: unknown switch `m' 

The page build failed with the following error:
The submodule `testgit/BOOP` was not properly initialized with a `.gitmodules` file.


2. Solution	
	I for got a space between the m and comment 
	I had to git submodule init & git submodule update for everything to push properly.

3. Cause (explain the error)
	I forgot to Initialize the file, so git wasnt expecting it.

## Release 6: Reflection

Everytime I complete an exercise... I reflect on how complicated it is to complete something the first time. 
This was VERY difficult because I wasn't positive on that I was understanding everything. I didn't find a 
a great step by step tutorial that was working for me. I now understand the flow a little better and hope
with some practive, this will all become second nature to me. I like how git help is always around, and all 
online resources are there. (I was kind of amazed that Git emailed me with the page build fail!)
additional resources I liked/used were:
https://www.atlassian.com/git/
http://gitref.org/inspect/







