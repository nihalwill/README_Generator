
function createFile(data, githubInfo) {
    return `
  # **${data.title}**
  ${data.badge}
  ## Description 
  ${data.description}
  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  ## Installation