# Vuex Store
Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

## Initializing states
We are using a different approach for initializing states per namespace. This is done by calling a function that returns an object with the initial data. 
This is also necessarily for cleaning the data after no longer needed, or the user has logout.

## Naming conventions
Getters and Actions should be written in camel case.

### Getter
The Vuex state, except of mutations, should always be accessed by getters, including actions. Getter should:
- Start from 'is' when returns Boolean, or 'get' otherwise
- Answer to question what am I returning?

#### Good example
- For getting user profile image -> getUserProfileImage() 
- For checking if user is authenticated -> isAuthenticated()
We are also looking to use get for data that we already have in the store/app.

#### Bad example
- rulesForGaming()
- athentication()


### Action
Every state change from outside of a module should be invoked as an action. Actions must be asynchronous. Actions are meant to:
- Fetch data from servers or cache
- Mutate state of current module by commiting muations.
- Dispatch actions from the same module
- Dispatch actions from another module
- Names should be unique as possible

#### Good example
- For fetching user profile -> fetchUserProfile() 
- For finding user tournament -> findTournamentForUser()
And use fetch if the data is coming from another place, e.g back-end.

#### Bad example
- userProfile()
- tournament()


### Mutations
Those are different because only mutations are allowed to change the state of the app. We have to differentiate them.
For mutation use upper snake case

#### Good example
ADD_USER_TO_TOURNAMENT()
SET_USER_PROFILE_IMAGE()

#### Bad example
CATEGORY_COLUMNS()
RULES_FOR_GAMING()

#### Types of mutations:
SET_ - Use it for most common operations on state. Set an object, array or any value to the state. 
ADD_ - Is used for dealing with maps and arrays. If you want to add a new property or an object to array us it.
REMOVE_ - An opposite to ADD. Should remove the elements in map or arrays.
