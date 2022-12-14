let nextId = 0
export const addtodo = text => ({
  type: 'ADD_TODO',
  id:nextId++,
  text
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETE: 'SHOW_COMPLETE'
}
export const toggleTodo = id =>({
  type: 'TOGGLE_TODO',
  id
})
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})