<p align="center">
  <img src="https://i.postimg.cc/cL2m4VV4/collab.jpg" alt="collab logo"/>
</p>

# {co:llab}

{co:llab} is a space where users can create and organise events that focuses on collaborative programming. The web application is what our team created during School of Code's final four week project.

## The problem 

As School of Code bootcamp graduates, we’ve quickly come a long way, from 'Zero to Programmer'. Our journey has been amazing and one of the hardest we’ve ever travelled. One of the main things we’ve realised is that our supportive community is immensely valuable. Coding with others is so much more fun and makes it easier to manage the intensity. The problem for us now is the **_gap_** - we realise bootcampers may feel lost in the interim period between the end of course and settling into our new jobs. We’re used to sharing our coding experience in friendly, supportive teams and would like to continue learning with like-minded peers. We also recognise that there are other people learning to code alone with no support network - such as self-learners - who would welcome the opportunity to code with others. 

## Our solution 

Our solution is an event planning application to enable us to continue meeting, learning and coding collaboratively - as well as sharing our way of working more widely with others. For bootcampers who would prefer to only meet with SoC graduates, we hope that as part of a future feature, the application would also have a more private graduate-only space.

## Screenshots

<p align="center">
  <img src="https://i.ibb.co/BzFLZBQ/Group-33.png" alt="screenshot"/>
 </p>

<p align="center">
  <img src="https://i.ibb.co/wsQdkjN/Group-34.png" alt="screenshot"/>
</p>

## Run Locally

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```


<p align="center">
  <img src="https://i.postimg.cc/sxbt8sCt/Group-9-2.png" alt="collab stock images"/>
</p>


## Tech Stack

**Client:** Next.js, Auth0, React.js, Chakra UI, EmailJs, CSS, HTML

**Server:** Node, Express, PostgreSQL

**Testing:** Jest, Supertest, Cypress

We placed importance on choosing and planning our technology. Why? Because of intentionality! Why we chose a particular tech was really important to us. We did not incorporate anything for the sake of it, but rather, choosing the right tools for our aims. For instance, Next.js  allowed us to perform server-side rendering that helped pages to load faster, thereby improving the user experience. Also important to note was:

- Using a UI library such as Chakra to speed up the component-building process and piecing together the front-end. Not only did we want the challenge of adopting a new techonology that none of us had used before, but to also benefit from Chakra's ability to give us more time to spend on solving the problem and working on logic, and leaving the design, responsiveness and UI in Chakra's hands. We were operating just like a start-up so added time to spend on other areas of the development process was a bonus. 

- Auth0 was hugely important in authenticating users safely, easily and hassle-free. This also helped us to prevent storing any kind of sensitive data about our users in our PostgreSQL tables. 

- Testing an application should never be undermined nor ignored. The strategy was to test critical parts of the application using Jest and Cypress, in addition to Supertest for our API routes. It gave us confidence in making sure that what we built was robust and set out to do what we intended it to do.

- After a solid MVP was built, we performed usability testing with a few of our fellow bootcampers. We were able to pick up valuable feedback by observing the users whilst they navigated their way through the application. EmailJS had become a solution to an issue that was brought up during user testing. We noticed an area that needed addressing was getting confirmation to the user after creating an event. One user was unsure as to whether their event was successfully created and would have appreciated an email to confirm the details. In addition to incorporating confirmation modals, EmailJs allowed us to send out emails to users with a message including the details of the newly submitted event. User testing also made us aware that the navigation bar needed to be fixed to the top of the page so users could see it at all times to make it easier to navigate between pages. To prevent users from trying to join the same event twice, we ensured that after they book to attend an event, the event card is subsequently removed from the user’s list of available events and can be viewed only on their profile page. 

## Features

<p align="center">
  <img src="https://i.ibb.co/WKw4NyL/Group-22.png" alt="screenshot"/>
</p>

* Users can browse around but can only create or join events if they are logged in, and if not, they are directed to the login/sign up page.
* Appropriately placed buttons and call-to-action buttons to make the user experience smooth and easy. This involved inticing users to explore the benefits of joining the community from the portion of the page they see on their screen without scrolling on initial load, to placing 'explore events' buttons on the homepage and profile page to encourage them to view more events. Through usability testing, we examined whether pivotal content on the page(s) was being reached or not and made amendments.
* Two user pages: profile and events. This does well to seperate out the events the user is attending and information on their next event(s), and their own organised events of which they can easily edit and delete.   
* Should users not yet, or currently, have any organised events there are helpful tags shown with topic ideas to encourage as much engagement from them as possible.
* Users can see how many individuals are attending an event on the events listing card, in addition to sharing the event on social media platforms or through email with our share button.
* Easy to use buttons to filter between types of events should the user wish to narrow down their choices to a particular type.
* An 'about us' page that sets out the application's vision, story and ethos. This was hugely important to us to provide context, create trust and to humanise the application. We wanted our users to feel connected to us and our journey, and allow them to feel that the platform is a safe learning place.  

## Lessons learnt

* Using a UI library such as Chakra we initially found difficult. Over time we began to see it as a worthwhile investment with its responsiveness, readable documentation and modern, clean design. 
* As the majority of our tests are centred around type checking, using TypeScript would have been beneficial as opposed to JavaScript. It would have also proved useful when implementing the editing form feature as type issues were a common source of error but the error message wasn’t as explicit. We understand that translating our code to TypeScript would be a wise decision prior to any further development. 

## Team management

We began by having discussions where we shared lessons learnt from our previous group projects. We also shared what our strengths, weaknesses and personal aims were so that we were using this project to learn and grow from. Going into the project, we were using both technology that we were familiar with as well as technology that we hadn’t used before to facilitate as much learning as possible. 

We decided that an agile methodology would be the approach for us as it would allow us to constantly iterate and improve. We conducted user research, and then spent a good amount of time identifying the MVP that we wanted to deliver, then breaking the MVP down into sprints. By always focusing on the end-user, we were able to pinpoint the key values and priorities for our application.

**Tools, practices and methodologies**

- We used project management tool Asana to organise our sprints into tickets.
- We held daily standups at the start of each day to share what we had worked on the day before and what we would be working on during the day. We also shared any blockers we had faced and got help to resolve them. 
- We had check-ins regularly during the day and also held a retro at the end of each day to see whether we had completed our tickets and discussed any issues.
- We took turns facilitating meetings, ensuring that everyone had ownership over project management.
- We made sure to work in pairs as much as we could, taking turns with driving or navigating. Pair programming proved beneficial as it helped us improve our communication, break tickets down into actionable steps, share mutual knowledge and reduce human error. 
- We used Git throughout the process and made sure to work on separate branches, commiting frequently and merging often. 

## Feedback

If you have any feedback, please reach out to any of the team via GitHub. We really value feedback and hope that {co:llab} can continue growing.

## Authors

- [Amrit Atwal](https://www.github.com/amritatwal)
- [Hajara Iyal](https://github.com/Hajara-I)
- [Josh Meah](https://github.com/JoshuaMeah)
- [Kavita Kaur](https://github.com/kavita202)
- [Linda Harris](https://github.com/Lindris)

##### Credit

Vectors by Vecteezy
