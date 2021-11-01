
# Student Profile Demo

<center><a href="https://student-profiles-indol.vercel.app/" rel="noreferrer" target="_blank">Deployed App</a></center>

## About this App
This is a demo assignment for technical interviews through
<a href="https://github.com/hatchways" rel="noreferrer" target="_blank">Hatchways</a> The design and instructions were provided <a href="https://storage.googleapis.com/staging.hatchways-app.appspot.com/assessments/data/instructions/f-5/Front-end%20Assessment%20-%20Student%20Profiles-E3J5VXIXTNARSOTOK4KS.pdf" rel="noreferrer" target="_blank">here</a>

The app loads a searchable list of Students and their information. The user can add tags to students which are also searchable

## Running it Locally
```bash
git clone git@github.com:GreysonElkins/student-profile-8370.git
cd student-profile-8370
yarn install
npm start
```
The app can be accessed at <a href="http://localhost:3000/" rel="noreferrer" target="_blank">localhost:3000</a>

It can be tested by running `npm test` 

## Highlights
This codebase features a highly reusable <a href="https://github.com/GreysonElkins/student-profile-8370/blob/main/src/components/SearchEngine/index.tsx" rel="noreferrer" target="_blank">SearchEngine</a> which operates through a `class` based <a href="https://github.com/GreysonElkins/student-profile-8370/blob/main/src/types/Student/index.ts#L62-L70" rel="noreferrer" target="_blank">method</a> to identify when queries are matched to Props. The `SearchEngine` then passes filtered results to it's children components. 
## Roadmap
See the project's <a href="https://github.com/GreysonElkins/student-profile-8370/issues" rel="noreferrer" target="_blank">issues</a> for a list of desired improvements