function sorting() {
  const data = [
    { type: "Foo", year: 1995 },
    { type: "Bar", year: 1993 },
    { type: "Foobar", year: 2020 }
  ];

  data.sort((a, b) => a.year - b.year);
  
  const result = []
  data.map((e, idx) => {
    result.push(e)
  });
  
  return result
}

console.log(sorting())

function arrayOfObject () {
  const array = [
    {
      id: 1,
      name: 'Foo',
      image: [
        { url: '/pub/foo.jpg' }
      ]
    },
    {
      id: 2,
      name: 'Bar',
      image: [
        { url: '/pub/bar.jpg' }
      ]
    },
    {
      id: 3,
      name: 'Foo Bar',
      image: [
        { url: '/pub/foobar.jpg' }
      ]
    }
  ]
  let result = []
  array.map((data, idx) => {
    data.image.map((datum, i) => {
      result.push(datum.url)
    })
  })

  return result
}

console.log(arrayOfObject())

// run node index.js