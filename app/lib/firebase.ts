import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDZr1NbJRYm15PnRTu0T69Btz00nUr-8xY',
	authDomain: 'breeze-remix.firebaseapp.com',
	projectId: 'breeze-remix',
	storageBucket: 'breeze-remix.appspot.com',
	messagingSenderId: '638609756948',
	appId: '1:638609756948:web:6af731f0f5cddabeade801',
};

const app = initializeApp(config);
const auth = initializeAuth(app);

export default { app, auth };
