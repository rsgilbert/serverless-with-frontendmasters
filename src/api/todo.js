const todos = [
  {id: 1, name: 'clean up', status: 'open'},
  {id: 2, name: 'cook', status: 'done'}
]

module.exports.handler = (event, ctx, done) => {
  const pathId = event.pathParameters.id
  const todo = todos.find(item => item.id === parseInt(pathId))
  console.dir(ctx.clientContext)
  done(null, {
    statusCode: 200,
    body: JSON.stringify({data: todo})
  })
}
