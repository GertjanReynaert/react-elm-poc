import React from 'react';
import { render } from 'react-dom';
import Application from 'app/Application';

const mountNode = document.getElementById('app');
render(<Application />, mountNode);
