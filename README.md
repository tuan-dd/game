# Stay Mate

<h1 align="center">Hi 👋, I'm Huynh Van Anh Tuan</h1>
<h3 align="center">A passionate full Stack developer from VietNam</h3>

- 📫 How to reach me **tuandd.310797@gmail.com**
- 📫 Phone **0708357236**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/anh-tuấn-huỳnh-văn-86a79821b/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="anh-tuấn-huỳnh-văn-86a79821b/" height="30" width="40" ></a>
<a href="https://discord.gg/cat_97#5084" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="cat_97#5084" height="30" width="40" ></a>
<a href="https://github.com/tuan-dd" target="blank"><img align="center" src="https://allvectorlogo.com/img/2021/12/github-logo-vector.png" alt="tuan_dd" height="30" width="40" ></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://expressjs.com" target="_blank" rel="noreferrer" > <img src="https://wiki.tino.org/wp-content/uploads/2021/07/word-image-1150-768x432.png" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://itsir.ir/wp-content/uploads/2022/11/what-is-nextjs.jpg" alt="nextjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redis.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a><a href="https://docs.bullmq.io/" target="_blank" rel="noreferrer"> <img src="https://user-images.githubusercontent.com/95200/143832033-32e868df-f3b0-4251-97fb-c64809a43d36.png" alt="bullmq" width="40" height="40"/> </a>  </p>

## Description

Web book hotel is a convenient online platform developed to help customers find and book their ideal hotels from anywhere in the world. It helps travelers easily search for the best deals on accommodations according to their preferences, such as location, price, amenities, and ratings.

With Web book hotel, customers can access a plethora of hotels across the globe, from luxury five-star resorts to economy lodgings. The site offers various features that make the booking process seamless and effortless, allowing customers to complete bookings within minutes. This user-friendly experience enables customers to browse through photos and detailed descriptions of each hotel's facilities before confirming their reservations seamlessly.

Furthermore, Web book hotel provides hotel owners with an intuitive interface for registering and listing their hotels on the website. They can input valuable information about their lodging properties, such as photos, room details, pricing, contact details, location, and operating hours.

Overall, Web book hotel represents a significant leap forward in travel booking convenience and flexibility for customers worldwide. It's the perfect solution for traveling enthusiasts looking for the best plans, without breaking a bank or compromising on quality.

### Backend two week

## Diagram

<img src="./Diagram-staymate.drawio.svg">

### Authentication

- [x] registering for a new account with name, email, and password, gmail
- [x] signing in with my email and password.
- [ ] getting new password when forget by link send user mail, (advance)

### Users

- [x] User two type : tenant/hotelier

`tenant`

- [x] seeing profile of a specific given a user ID.
- [x] updating profile
- [x] having see history books status : decline, success,stayed,pending(`limit time`)
- [x] cancel book,
- [x] Every one can see list or detail hotel
- [x] creating and paying booking
- [x] reviewing star ,upload image, comment when user stayed hotel ( booking have status : stay)
- [ ] accumulate points to decrease fee (example : 1 point to 1k , 10k to 1 point)

`hotelier`

- [x] all features in tenant
- [x] creating hotel, payment membership
- [x] paying membership
- [x] replying review

### hotel

`tenant`

- [x] seeing a list of hotel
- [x] seeing a hotel hotel
- [x] seeing review and reply
- [x] filtering

`hotelier`

- [x] All features in tenant
- [x] Only owner can Update, edit, delete, membership ([ ] advance: create sale off limited expiration time, limited number of times)

### review

`tenant`

- [x] seeing list of comments, reply on hotel.
- [x] writing review on a post when user stayed hotel
- [x] updating their review.

`hotelier`

- [x] All features in tenant
- [x] Only owner create reply review

### book and payment

- [x] booking hotel select type room ,time
- [x] Having status pending, success, staye, decline, cancel
- [x] canceling (advance : [X] before 24h refund 100% after can not refund )
- [x] `mongoose transaction`: payment atomic
- [x] Charger withdrawal (advance)

### admin

- [x] block user, delete review, block hotel, ([]advance : alert user )
- [ ] see all boxChat

### message (advance)

- [ ] tenant can chat with support ,hotelier ,
- [ ] hotelier support ,hotelier
- [ ] cant select who want chat
- [ ] advance send img

## Endpoint APIs

### Login

`/v1/api/`

Go to **schemas/auth.schema.ts** to see schema
[X]

`POST auth/login` all can login

`PUT auth/changePass` **Login required** update profile

### User

Go to **schemas/user.schema.ts** to see schema

`POST sign-up` register new user

`PUT user/user-update` **Login required** update me

`GET user/me` **Login required** info user

### Hotel

Go to **schemas/hotel.schema.ts** to see schema

[X]

`POST user/create-hotel` **Login required** create to hotelier

`POST hotel/create-room/:id` \*\*\* **Login required** hotelier can room types

`PUT hotel/update-room/:id` \*\*\* **Login required** hotelier can update

`PUT hotel/update-hotel/:id` \*\*\* **Login required** hotelier can update

`GET hotel/` \*\*\* get hotels

`GET hotel/:Id` \*\*\* all detail hotel

### review

Go to **schemas/review.schema.ts** to see schema

[X]

`GET review/:reviewId` \*\*\* get all review in post

`POST/review/:id` \*\*\* **Login required** tenant stayed can review or hotelier reply

`PUT review/:id` \*\*\* **Login required** author can update

### payment

Go to **schemas/booking.schema.ts** to see schema

[X]

`POST payment/create-booking` \*\*\* **Login required** booking hotel

`PUT payment/charge` **Login required** charge money

`PUT payment/withdrawal` **Login required** withdrawal money

`PUT payment/payment-booking` \*\*\* **Login required** payment booking

`PUT payment/cannel-booking` \*\*\* **Login required** cannel booking

`PUT payment/payment-membership` \*\*\* **Login required** payment membership

`GET payment/booking` \*\*\* **Login required** get booking

`GET payment/membership` \*\*\* **Login required** get membership

### message

`advance`

### admin

Go to **schemas/admin.schema.ts** to see schema
[]

`PUT admin/user/:id` \*\*\* **Login required** update user

`PUT admin/hotel/:id` \*\*\* **Login required** update holier

`PUT admin/review/:id` \*\*\* **Login required** update review

`ALERT admin/alert/:userId` \*\*\* **Login required** alert user

`GET admin/` \*\*\* **Login required** get users

`GET admin/id` \*\*\* **Login required** get detail user

### Frontend 1 week

### use next.js

`Create a categorized product list and filter function for the Homepage.`
`Create layouts, content, and components for the User Profile & Account Setting Page - UI without testing.`
`Create layouts, content, and components for Upload Product Page - UI without testing.`
`Create layouts, content, and components for Detail Product Page - UI without testing.`
`Create layouts, content, and components for Cart Page - UI without testing.`
`Create layouts, content, and components for Complete Buying Page - UI without testing.`
`Implement users' interaction for each page with API service and Redux.`
