# react-native-arabic-numbers
A simple and easy number converter for English to Arabic.


# Installation

Using yarn :
``` yarn add react-native-arabic-numbers ```

Using npm :
``` npm i react-native-arabic-numbers ```

# Usage

``` import { ArabicNumbers } from 'react-native-arabic-numbers'; ```

Simply call ArabicNumbers with a number parameter that need to convert to Arabic.

``` ArabicNumbers(123.56) ``` 

The result is ١٢٣.خط 

```
<Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 1 : in Arabic " + ArabicNumbers(1)}</Text>
<Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 145.34 : in Arabic " + ArabicNumbers(145.34)}</Text>
<Text style={{ padding: 16, fontSize: 16, fontWeight: 'normal' }}>{"English 1255.00 : in Arabic " + ArabicNumbers(1255.00)}</Text>
```
