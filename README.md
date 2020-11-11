# Project Week Back-End

## CREATING TABLE PLAN - FEEDBACK

1. ID - unique for each feedback text entered
2. Feedback Text - where we will store all our feedback inputs
3. Week - identifies the week that feedback belongs to
4. Date - new date function

Add script into package.json

npm run createTable

## CREATING TABLE PLAN - WORK

1. ID - unique for each feedback text entered
2. projectLink - where we will store all our project inputs
3. Week - identifies the week that feedback belongs to

## MODELS - index.js PLAN

Crud operators.

1. Getting all info : GET all data from feedback table
2. Add Feedback : INSERT feedbacktext, week, date INTO table
   Set state on feedback ID, then have a delete button which call our delete sql statement which will add the id.
3. Delete feedback : delete entire feedback by ID

** BONUS ** add an update feature

##
