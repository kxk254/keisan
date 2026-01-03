pip install django
pip install djangorestframework

django-admin startproject myproject
cd myproject
python manage.py startapp myapp

INSTALLED_APPS = [
    ...
    'rest_framework',
    'myapp',
]


Create a simple API view in views.py:

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HelloWorld(APIView):
    def get(self, request):
        return Response({"message": "Hello, World!"}, status=status.HTTP_200_OK)


from django.urls import path
from .views import HelloWorld

urlpatterns = [
    path('api/hello/', HelloWorld.as_view(), name='hello-world'),
]


2. Set up React (Frontend)

Create a new React app in the myproject folder:

npx create-react-app frontend
cd frontend


Install axios to make HTTP requests from React:

npm install axios


Now, in your React App.js file, you can make an API call to the Django backend:

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;


Make sure your Django server is running on localhost:8000, and React on localhost:3000.

3. Enable CORS in Django

To allow your React app to make requests to your Django API, you'll need to install and configure CORS headers:

pip install django-cors-headers


In your settings.py, add:

INSTALLED_APPS = [
    ...
    'corsheaders',
]

MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # React app
]

4. Running the Project

Start the Django server:

python manage.py runserver


Start the React app:

npm start


If everything is set up correctly, visiting http://localhost:3000 should display the message from your Django API: "Hello, World!"