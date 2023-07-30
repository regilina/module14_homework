const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`

const parser = new DOMParser()
const xmlDOM = parser.parseFromString(xmlString, 'text/xml')

const list = []
const students = xmlDOM.getElementsByTagName('student')

for (const student of students) {
  const nameElement = student.getElementsByTagName('name')[0]
  const firstName = nameElement.getElementsByTagName('first')[0].textContent
  const secondName = nameElement.getElementsByTagName('second')[0].textContent
  const lang = nameElement.getAttribute('lang')
  const age = student.getElementsByTagName('age')[0].textContent
  const prof = student.getElementsByTagName('prof')[0].textContent

  list.push({
    name: `${firstName} ${secondName}`,
    age: parseInt(age),
    prof,
    lang
  })
}

const result = { list }
console.log(result)
