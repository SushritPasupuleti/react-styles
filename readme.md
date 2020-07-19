# Create A CyberPunk 2077 inspired button that will look the same across both platforms.

Reference CSS
```css
@import url("https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap");

body { background-color: var(--yellow-color); }

:root {
  --yellow-color: #fcee09; 
  --red-color: #ff003c;
  --black-color: #050a0e;
  --blue-color: #00f0ff;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--black-color);
  outline: none;
  background-color: var(--yellow-color);
  color: var(--black-color);
  cursor: pointer;
  padding: 20px 25px;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
}

.btn::before {
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: -14px;
  left: -13px;
  background-color: var(--yellow-color);
  border-top: 2px solid var(--black-color);
  transform: rotate(45deg);
}

.btn::after {
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  top: -14px;
  right: -13px;
  background-color: var(--yellow-color);
  border-bottom: 2px solid var(--black-color);
  transform: rotate(45deg);
}
```

Libraries Used: styled-components (to add css pseudo classes support to React)