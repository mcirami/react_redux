import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo} from '../actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed }) => (
	<div className="list-wrapper">
		<NewTodoForm className="list-wrapper" />
		{todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
	</div>
);

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	onRemovePressed: text => dispatch(removeTodo(text))
});

// pass null to first prop if don't need both
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
