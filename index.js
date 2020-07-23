const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

const api = require('./utils/api1.js')
const Markdown = require('./utils/Markdown.js')

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
}

const init = async _ => {
  let rmObject = {}
  do {
    const { jdUser, jdRepo } = await prompt([
      {
        type: 'input',
        name: 'jdUser',
        message: 'What is your GitHub user name?'
      },
      {
        type: 'input',
        name: 'jdRepo',
        message: 'What is your repository name?'
      }
    ])
    rmObject = await api.getUser(jdUser, jdRepo)
    if (!rmObject) {
      console.error('Repo not found!')
    } else {
      console.log(`${rmObject.fullName} found!`)
    }
  } while (!rmObject)
  
  Object.assign(rmObject, await prompt([
 
    {
      type: 'input',
      name: 'instan',
      message: 'What are the installation instructions?'
    },
    {
      type: 'input',
      name: 'uset',
      message: 'What is the usage description?'
    },

    {
      type: 'input',
      name: 'contrib',
      message: 'Who are the contributors?'
    },
    {
      type: 'input',
      name: 'testers',
      message: 'What are the tests?'
    },
    {
      type: 'input',
      name: 'quests',
      message: 'Any questions?'
    }
  ]))
  writeToFile(rmObject.title, await Markdown(rmObject))
}

init()
