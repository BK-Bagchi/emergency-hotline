1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Ans. getElementById: finds one element with it's Id. If same Id at multiple place exists, will pick the fist one. If nothing matched with the Id found, returns null.
   getElementsByClassName: finds all the element with the class name. It returns an array like HTML Collection.
   querySelector: It works like CSS selector. If same selector exists multiple times, will select the first one only. If nothing found, returns null.
   querySelectorAll: Also works as CSS selector. Difference is, will select all the matching CSS selectors. Returns an array like NodeList.

2. How do you create and insert a new element into the DOM?
   Ans: Create: const newElement = document.createElement("div");
   Insert: newElement.innerHTML = "<p>Hello Programming Hero Team</p>"

3. What is Event Bubbling and how does it work?
   Ans: Event Bubbling refers to a situation in JS, when an event happens on DOM it tries to bubble up to the parents of parents until the bubbling reaches to the root HTML. Events starts at the target element, then moves upward through ancestors.

4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: Event delegation refers to a situation in JS where instead of attaching event listeners to multiple child elements, we attach a single listener to a parent element and event bubbling will handle the rest.
   Why useful?

- Instead of multiple child elements, it targets one parent element. It increases performance.
- If new child is added later, event will automatically work on it as parent is having listener.
- This feature makes the code even cleaner.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans: preventDefault(): ex: on submit, page reloads. It is the default behavior. preventDefault() prevents default behavior. Although it can't stop event bubbling.
   stopPropagation(): It stops event bubbling although it can't stop default behavior.
