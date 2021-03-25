export default function getNewUl(array, inputField, setElements) {
  const temp = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].content.toLowerCase().includes(inputField.toLowerCase()))
      temp.push(array[i]);
  }

  document.title = `Items found: ${temp.length}`;

  temp.length === 0
    ? setElements([{ id: "1", content: "Search failed..." }])
    : setElements([...temp]);
}
