const Markdown = data => {
  return `
<a href="${data.link}" style="float:right"><img src="${data.avatar}" alt="${data.name}" title="${data.name}" width="120" height="120"></a>

# ${data.title.toUpperCase()}

![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'None'}-brightgreen)

_Repo by ${data.name}_

__${data.desc}__

---

__Installation:__
${data.instan}

__Usage:__
${data.uset}

__Contributors:__
${data.contrib}

__Tests:__
${data.testers}

__Questions:__
${data.quests}
`
}

module.exports = Markdown
