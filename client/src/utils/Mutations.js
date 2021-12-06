import { gql } from '@apollo/client';

export const ADD_EXERCISE = gql`
  mutation addExercise($exerciseObjId: ID!, $email: String!) {
    addExercise(email: $email, exerciseObjId: $exerciseObjId) {
      _id
    }
  }
`;
export const INIT_USER = gql`
  mutation initNewUser($email: String!) {
    initNewUser(loginEmail: $email) {
      
      loginEmail{
      _id
      loginEmail
      }
    }
  }
`;
export const REMOVE_EXERCISE = gql`
  mutation removeExercise($exerciseObjId: ID!, $email: String!) {
    removeExercise(email: $email, exerciseObjId: $exerciseObjId) {
      _id
    }
  }
`;