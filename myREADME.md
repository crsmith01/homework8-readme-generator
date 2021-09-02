# README.md Generator

## Description
When creating an open source project on GitHub, it is important to have a high-quality README for the application and should include what the app is for, how to use the app, how to install the app, how to report issues, and how to make contributions to increase the likelihood that other developers will contribute to the success of the project. 

This is a command-line application that dynamically creates a professional README from a user's input via the Inquirer package, so the project creator can devote more time to working on their project. The finished README file includes space to describe what a new app is used for, how to report issues, and how to contribute to the app.

## Table of Contents
1. [Technologies Used](#Technologies-Used)
2. [User Story](#User-Story)
3. [Acceptance Criteria](#Acceptance-Criteria)
4. [Mock Up](#Mock-Up)
5. [Contact](#Contact)
6. [License](#License)


## Technologies Used
```
1. JavaScript
2. Node
3. Inquirer
```

## User Story

```
AS A developer,
I WANT a README generator,
SO THAT I can quickly create a professional README.md for a new project.
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
1. WHEN I am prompted for information about my application repository,
    THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.
2. WHEN I enter my project title,
    THEN this is displayed as the title of the README.
3. WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions,
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
4. WHEN I choose a license for my application from a list of options,
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains under which license the application is covered.
5. WHEN I enter my GitHub username,
    THEN it is added to the section of the README.md entitled Questions, with a link to my GitHub profile.
6. WHEN I enter my email address, 
    THEN this is added to the section of the README.md entitled Questions, with instructions on how to reach me with additional questions about the application.
7. WHEN I click on the links in the Table of Contents,
    THEN I am taken to the corresponding section of the README.md.
```

## Mock Up
The following video showcases the web application's appearance and functionality:
[video demonstration](https://drive.google.com/file/d/1rBX_F5HQJCNdKeE9r9OwHLKUVHUE8if0/view).


## Contact
If you have any questions about the repo, contact me at [crsmith01](https://github.com/crsmith01).


## License
Copyright 2021 Catherine Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.