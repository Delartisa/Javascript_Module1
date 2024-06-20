// OPERADORES LOGICOS

/*
- E/AND (&&) | so e verdadeiro se todas as afirmacoes forem verdadeiras

true && true === true
true && false === false
false && true === false
false && false === false
*/

// exemplo:

3 === 3 && 4 === 4; // true
3 === 3 && 4 !== 4; // false
3 !== 3 && 4 === 4; // false
3 !== 3 && 4 !== 4; // false

//=============================================================================================================================


/*
- OU/OR (||) | so e falso se ambas afirmacoes forem falsas

true || true === true
true || false === true
false || true === true
false || false === false
*/

// exemplo:

3 === 3 || 4 === 4; // true
3 === 3 || 4 !== 4; // true
3 !== 3 || 4 === 4; // true
3 !== 3 || 4 !== 4; // false

//=============================================================================================================================

/*
- NAO/NOT (!) | inverte o resultado (de verdadeiro para falso e vice-versa)

!true = false
!false = true
*/

// exemplo:

9 < 5; // false
!9 < 5; // true

3 === 3; // true
!3 === 3; // false
!3 === !3; // true

