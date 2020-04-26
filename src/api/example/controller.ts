import ExampleModel from './model'

interface User {
  id: number
  firstName: string
  lastName: string
}

const create = (newUser: User) => {
  const newUserId = ExampleModel.length + 1
  newUser.id = newUserId
  ExampleModel.push(newUser)
  return {
    status: 'success',
    message: 'user created',
    response: newUser
  }
}

const read = () => {
  return { users: ExampleModel }
}

// updates or creates
const update = (userId: number, updateData: User) => {
  const updateUserIndex = userId - 1
  updateData.id = userId
  const updatedUser = ExampleModel.splice(updateUserIndex, 1, updateData)

  let responseData
  if (updatedUser.length === 0) {
    responseData = {
      status: 'created',
      message: `User does not exists. Created User ID: ${userId}`,
      response: updateData,
    }
  } else {
    responseData = {
      status: 'updated',
      message: `User ID: ${userId} successfully updated`,
      response: updateData,
    }
  }

  return responseData
}

// index based, need to fix this
const remove = (userId: number) => {
  const userIndex = userId - 1
  const deletedUser = ExampleModel.splice(userIndex, 1);

  let responseData
  if (deletedUser.length === 0) {
    responseData = {
      status: 'fail',
      message: `User does not exists. Unable to delete User ID: ${userId}`,
      response: {}
    }
  } else {
    responseData = {
      status: 'success',
      message: `User ID: ${userId} successfully deleted`,
      response: deletedUser[0]
    }
  }

  return responseData
}

export { create, read, update, remove }