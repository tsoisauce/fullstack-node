import ExampleModel from './model'

const create = () => {
  return ExampleModel.create
}

const read = () => {
  return ExampleModel.read
}

const update = () => {
  return ExampleModel.update
}

const remove = () => {
  return ExampleModel.delete
}

export { create, read, update, remove }