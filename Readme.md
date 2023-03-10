## Six Cities
# Six Cities is a one-page application (SPA) on REACT.
It's the application for finding short-term rentals in different cities. With an interactive map, convenient sorting and filtering, and viewing reviews, the user can easily and quickly choose the ideal option for a stay.

## Description
The app has several screens: the home page, the log in page, and each offer page.
On the main page, the user sees a list of offers. The user can switch between the 6 available destinations (Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf) and view offers for each destination. User-friendly interface of the application will help the tourist to quickly find a perfect place to spend holidays.
![Main-screenshot](https://github.com/LenaKorsakov/six-cities/blob/master/project/screenshots/main-screenshot.png)

An interesting feature of the application is the interactive map with markers. When you hover your mouse over a offer's card, the marker on the map is highlighted in orange.
![Map-screenshot](https://github.com/LenaKorsakov/six-cities/blob/master/project/screenshots/map-screenshot.png)

In addition, the user has several options for sorting the offers: by ascending/descending price, by popularity, and by default.
![Sort-screenshot](https://github.com/LenaKorsakov/six-cities/blob/master/project/screenshots/sort-screenshot.png)

When going to the page of each appartments, the user finds a detailed description of the apartments, sees their rating and gets acquainted with the host.
![Offer-screenshot](https://github.com/LenaKorsakov/six-cities/blob/master/project/screenshots/offer-screenshot.png)

On the same page there is a list of reviews on the given apartments.
![Reviews-screenshot](https://github.com/LenaKorsakov/six-cities/blob/master/project/screenshots/reviews-screenshot.png)

Under the list of reviews, the user can see a list of nearby offers and a map showing the current offer and theirs. They are very useful when the user is not sure exactly what they want.
![Similar-screenshot](https://github.com/LenaKorsakov/six-cities/blob/master/project/screenshots/similar-screenshot.png)

In order to leave a review, the user must be log in the application. He is redirected to a page where the user must fill out a small registration form. 
![Log in-screenshot](https://github.com/LenaKorsakov/six-cities/blob/master/project/screenshots/log-in-screenshot.png)

After that, the user can easily leave a review, which will immediately appear in the list of reviews for the apartments. Attention, the review must contain from 50 to 300 characters. As long as the review does not meet this criterion, the button to send it remains disabled.
![New-review-screenshot](https://github.com/LenaKorsakov/six-cities/blob/master/project/screenshots/new-review-screenshot.png)


## Stack
- ReactJS,
- Typescript,
- React Router Dom,
- Redux Toolkit,
- Axios,
- Classnames,
- Toastyfy,
- Jest.

Implemented simple athorization, catching errors and simple tests.
## Demo site
<a href="https://six-cities-korsakova.vercel.app/">Go to site</a>

## How to run app:

- Clone repository:
```bash
git clone git@github.com:LenaKorsakov/six-city.git
```

- Install dependencies repository:

```bash
npm install
```

- Run application:

```bash
npm start
```

- Check tests
```bash
npm test
```
