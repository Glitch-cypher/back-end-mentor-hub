# Project Week Back-End

## CREATING TABLE PLAN - FEEDBACK - MAX N DAN

1. ID - unique for each feedback text entered
2. Feedback Text - where we will store all our feedback inputs
3. Week - identifies the week that feedback belongs to
4. Date - new date function

Add script into package.json

npm run createTable

## CREATING TABLE PLAN - WORK - MAX N DAN

1. ID - unique for each feedback text entered
2. projectLink - where we will store all our project inputs
3. Week - identifies the week that feedback belongs to

## MODELS - index.js PLAN

FEEDBACK TABLE:

1. getAllFeedback()
2. addFeedback(feedbacktext,week,date) INSERT feedbacktext, week, date INTO table
3. deleteFeedback(id)
4. updateFeedback(id, feedbacktext)

Set state on feedback ID, then have a delete button which call our delete sql statement which will add the id.

LINK TABLE:

1. getAllLinks()
2. addNewLinks(link, week)
3. deleteLink(id)

**BONUS ** add update link

## ROUTES FOLDER - PLAN

## to do list

- set up fetch on front end (C&F)
- delete, edit comment on front end (C&F)
- nodemon (M&D)
