Zone.Js Enables the CD

CD ensures data is in sync between component and view each other
How ?
    ChangeDetector in angular takes care of.
    
    It makes sure that the data is in sync between component and its view
    How ?
        ChangeDetector reads the binding in the component's template
    
    Every component in angular will have a ChangeDetector associated to it.

When CD runs ?
    on a click, submit, or input change or a mouse hover..
    when async operations encountered . e.g setTimeout , setInterval .. 

CD runs from ROOT component to the component in which event has fired. (Top to bottom approach)
__________________________________________________________________________________________________________________


How can the timer gets updated value from component continuously ? 
What is responsible for this to be done  ?
How Angular will get know , about this continuos data update. ?

    ngZone - will handle this.


__________________________________________________________________________________________________________________


With the traditional change detection strategy - The LOCATION of the CHANGE will be UNKNOWN to the ANgular 

But Change detection runs very often even if theres no property value change e.g. a button click 

ChangeDetection Cycle runs from App Component to the all other components in the component tree


e.g: if there is property value changed in a typescript call of a particular component, 

    Angular will run change detection from App component 
    It will check updated value with all the components properties values.
    If found a match -> then that particular class variable get updated and rendered.


