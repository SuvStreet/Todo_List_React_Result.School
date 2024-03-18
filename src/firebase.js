import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyApPIgtgsJCqeeGJ4D7XUvz-BZwa2rdJqE',
	authDomain: 'result-school-todo.firebaseapp.com',
	projectId: 'result-school-todo',
	storageBucket: 'result-school-todo.appspot.com',
	messagingSenderId: '500446479099',
	appId: '1:500446479099:web:7ccb7c377869aba245265e',
	databaseURL:
		'https://result-school-todo-default-rtdb.europe-west1.firebasedatabase.app/',
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
