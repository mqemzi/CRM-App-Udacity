# Welcome Component - README

## Overview

The **Welcome** component is a simple, functional component in React Native designed to display a welcoming message for the "Customer Manager Plus" application.

## Code Explanation

This component imports essential modules from React and React Native, including `View` and `Text` for rendering, as well as custom `styles` for styling.

### Code Structure

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text>{'Welcome to Customer Manager Plus'}</Text>
        </View>
    );
}

export default Welcome;
```

### Imports

- **React**: Used to create the component.
- **View** & **Text**: React Native components for structuring and displaying the message.
- **styles**: Custom styles imported from a local `style` file.

### Component

- **Welcome**: Functional component that renders a `Text` component inside a `View` container. The `Text` component displays "Welcome to Customer Manager Plus."

### Styling

`styles` is assumed to be an external stylesheet, imported from `./style`, which likely contains a style for `container` to control the layout and appearance of the component.

## Usage

1. **Import the Component**:
   ```javascript
   import Welcome from './path/to/Welcome';
   ```

2. **Render in Parent Component**:
   ```javascript
   <Welcome />
   ```

## Requirements

- **React Native** setup and environment.
- **styles** should be defined in `style.js` for `container` styling.
